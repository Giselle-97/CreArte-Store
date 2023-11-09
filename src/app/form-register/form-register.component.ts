import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
	selector: "app-form-register",
	templateUrl: "./form-register.component.html",
	styleUrls: ["./form-register.component.scss"],
})
export class FormRegisterComponent {
	register = {
		name: "",
		email: "",
		password: "",
	};

	onRegister() {
		console.log(this.register);
	}

	/*nameForm = new FormControl("", Validators, requerid);
	emailForm = new FormControl("", Validators, requerid);
	passwordForm = new FormControl("", Validators, requerid);*/
}
