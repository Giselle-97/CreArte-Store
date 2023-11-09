import { NgModule, importProvidersFrom } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { FormsModule } from "@angular/forms";
import { FormRegisterComponent } from "./form-register/form-register.component";
import { FormLoginComponent } from "./form-login/form-login.component";

@NgModule({
	declarations: [
		AppComponent,
		ProductsComponent,
		FormRegisterComponent,
		FormLoginComponent,
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}