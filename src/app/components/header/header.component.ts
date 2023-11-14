import { Component } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	title = "CreArte";
	imgMenu = "./assets/images/menu.png";
	imgLogo = "./assets/images/logo.png";
	imgShoppingCar = "./assets/images/car-menu.png";

	activeMenu = false;
	toggleMenu() {
		this.activeMenu = !this.activeMenu;
	}
}
