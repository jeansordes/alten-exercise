import {
    Component,
} from "@angular/core";
import { RouterModule } from "@angular/router";
import { SplitterModule } from 'primeng/splitter';
import { ToolbarModule } from 'primeng/toolbar';
import { PanelMenuComponent } from "./ui/panel-menu/panel-menu.component";
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from "primeng/button";
import { CartService } from "./services/cart.service";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    standalone: true,
    imports: [RouterModule, SplitterModule, ToolbarModule, PanelMenuComponent, BadgeModule, ButtonModule],
})
export class AppComponent {
    title = "ALTEN SHOP";

    cartSize = this.cartService.cartSize;
    
    constructor(private cartService: CartService) {}
}
