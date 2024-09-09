import { NgClass, NgIf } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [
        FormsModule,
        NgClass,
        ReactiveFormsModule,
        NgIf,
    ],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    public messageSignal = signal<string>('');
    public remainingChars = computed(() => (300 - this.messageSignal().length));

    public contactForm: FormGroup;

    constructor(
        private messageService: MessageService,
        private fb: FormBuilder,
    ) {
        this.contactForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]], // Required and valid email format
            message: ['', [Validators.required, Validators.maxLength(300)]] // Required and max length 300 characters
        });
    }

    ngOnInit(): void {
        this.contactForm.get('message')?.valueChanges.subscribe(value => {
            this.messageSignal.set(value || '');
        });
    }

    onSubmit(): void {
        if (this.contactForm.valid) {
            this.contactForm.reset();

            this.messageService.add({
                severity: 'success',
                summary: 'Message envoyé',
                detail: 'Votre message a été envoyé avec succès',
                icon: 'pi-send',
            });

            // Here we would handle form submission / send to a server
        }
    }
}
