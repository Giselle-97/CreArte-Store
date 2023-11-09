import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormBuilder } from "@angular/forms";

@Component({
	selector: "app-form-register",
	templateUrl: "./form-register.component.html",
	styleUrls: ["./form-register.component.scss"],
})
export class FormRegisterComponent implements OnInit {
	form!: FormGroup;

	constructor(private formBuilder: FormBuilder) {
		this.buildForm(); //llamamos al método
	}

	save(event: any) {
		if (this.form.valid) {
			console.log(this.form.value);
		} else {
			this.form.markAllAsTouched();
		}
	}

	private buildForm() {
		this.form = this.formBuilder.group({
			name: [
				"",
				[
					Validators.required,
					Validators.maxLength(20),
					Validators.pattern(/^[a-zA-Z ]+$/),
				],
			],
			email: ["", [Validators.required, Validators.email]],
			password: ["", Validators.required],
		});
	}

	get nameField() {
		return this.form.get("name");
	}

	ngOnInit(): void {
		this.nameField?.valueChanges.subscribe((value: any) => {
			console.log(value);
		});
		this.form.valueChanges.subscribe((value: any) => {
			console.log(value);
		});
	}

	getNameValue() {
		console.log(this.nameField?.value);
	}

	get isNameFieldValid() {
		return this.nameField?.touched && this.nameField.valid;
	}
	get isNameFieldInValid() {
		return this.nameField?.touched && this.nameField.invalid;
	}

	get emailField() {
		return this.form.get("email");
	}

	get isEmailFieldValid() {
		return this.nameField?.touched && this.nameField.valid;
	}
	get isEmailFieldInValid() {
		return this.nameField?.touched && this.nameField.invalid;
	}

	get passwordField() {
		return this.form.get("phone");
	}
}
