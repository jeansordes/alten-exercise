import { Component, Input } from '@angular/core';
import { Product } from 'app/services/product.model';

@Component({
    selector: 'app-img-w-txt-over',
    standalone: true,
    imports: [],
    templateUrl: './img-w-txt-over.component.html',
    styleUrl: './img-w-txt-over.component.scss'
})
export class ImgWTxtOverComponent {
    @Input() imageUrl: string = '/assets/sample-img.png'; // default image
    @Input() productInput!: Product;
}
