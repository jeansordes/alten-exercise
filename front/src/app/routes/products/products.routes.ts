import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Routes } from "@angular/router";
import { ProductListComponent } from "./product-list.component";

export const PRODUCTS_ROUTES: Routes = [
	{
		path: "",
		component: ProductListComponent,
	},
];
