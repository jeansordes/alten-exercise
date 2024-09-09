import { Routes } from "@angular/router";
import { HomeComponent } from "./routes/home/home.component";
import { NotFoundComponent } from "./routes/not-found/not-found.component";
import { CartComponent } from "./routes/cart/cart.component";
import { ProductListComponent } from "./routes/products/product-list.component";
import { ContactComponent } from "./routes/contact/contact.component";

export const APP_ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
      path: "products",
      component: ProductListComponent,
    },
    {
      path: "cart",
      component: CartComponent,
    },
    {
      path: "contact",
      component: ContactComponent,
    },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: '**', component: NotFoundComponent }  // Catch-all route for undefined paths
];
