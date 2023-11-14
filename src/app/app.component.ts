import { Component, OnInit } from "@angular/core";
//import { FormRegisterComponent } from "./components/form-register/form-register.component";
import { Produtcs } from "./app.interface";
@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "";
	ngOnInit(): void {}
}
