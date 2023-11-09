import { Component, OnInit } from "@angular/core";
import { FormRegisterComponent } from "./form-register/form-register.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "CreArte";

	imgLogo = "./assets/images/logo.png";

	imgMenuCar = "./assets/images/car-menu.png";

	ngOnInit(): void {}
}
