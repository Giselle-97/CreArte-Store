import { Component } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
	title = "CreArte";

	imgLogo = "./assets/images/logo.png";

	imgMenuCar = "./assets/images/car-menu.png";
}
