import { Routes } from "@angular/router";
import { HomeComponent } from "./routes/home/home.component";
import { NotFoundComponent } from "./routes/not-found/not-found.component";
import { CartComponent } from "./routes/cart/cart.component";

export const APP_ROUTES: Routes = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
      path: "products",
      loadChildren: () =>
        import("./routes/products/products.routes").then((m) => m.PRODUCTS_ROUTES)
    },
    {
      path: "cart",
      component: CartComponent,
    },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: '**', component: NotFoundComponent }  // Catch-all route for undefined paths
];
