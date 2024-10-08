import { CommonModule } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { ProductFormComponent } from "app/routes/products/product-form/product-form.component";
import { CartService } from "app/services/cart.service";
import { Product } from "app/services/product.model";
import { ProductsService } from "app/services/products.service";
import { ImgWTxtOverComponent } from "app/ui/img-w-txt-over/img-w-txt-over.component";
import { MessageService } from "primeng/api";
import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';

const emptyProduct: Product = {
    id: 0,
    code: "",
    name: "",
    description: "",
    image: "",
    category: "",
    price: 0,
    quantity: 0,
    internalReference: "",
    shellId: 0,
    inventoryStatus: "INSTOCK",
    rating: 0,
    createdAt: 0,
    updatedAt: 0,
};

@Component({
    selector: "app-product-list",
    templateUrl: "./product-list.component.html",
    standalone: true,
    imports: [
        DataViewModule,
        CardModule,
        ButtonModule,
        DialogModule,
        ProductFormComponent,
        CommonModule,
        ImgWTxtOverComponent,
    ],
})
export class ProductListComponent implements OnInit {
    public readonly products = this.productsService.products;

    public isDialogVisible = false;
    public isCreation = false;
    public readonly editedProduct = signal<Product>(emptyProduct);

    constructor(
        private readonly productsService: ProductsService,
        private readonly cartService: CartService,
        private readonly messageService: MessageService,
    ) { } // empty constructor

    ngOnInit() {
        this.productsService.getAll().subscribe();
    }

    public onCartAddition(product: Product) {
        this.cartService.addToCart(product);

        // then, show a notification so that the user knows the product has been added
        this.messageService.add({
            summary: "Ajouté au panier !",
            detail: "Produit ajouté au panier avec succès",
            icon: "pi pi-shopping-cart",
            severity: "success"
        });
    }

    public onCreate() {
        this.isCreation = true;
        this.isDialogVisible = true;
        this.editedProduct.set(emptyProduct);
    }

    public onUpdate(product: Product) {
        this.isCreation = false;
        this.isDialogVisible = true;
        this.editedProduct.set(product);
    }

    public onDelete(product: Product) {
        this.productsService.delete(product.id).subscribe();
    }

    public onSave(product: Product) {
        if (this.isCreation) {
            this.productsService.create(product).subscribe();
        } else {
            this.productsService.update(product).subscribe();
        }
        this.closeDialog();
    }

    public onCancel() {
        this.closeDialog();
    }

    private closeDialog() {
        this.isDialogVisible = false;
    }
}
