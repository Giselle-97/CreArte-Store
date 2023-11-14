import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app.routing.module";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FormRegisterComponent } from "./components/form-register/form-register.component";
import { FormLoginComponent } from "./components/form-login/form-login.component";
import { SearchComponent } from "./components/search/search.component";
import { HeaderComponent } from "./components/header/header.component";
import { NavComponent } from "./components/nav/nav.component";

@NgModule({
	declarations: [
		AppComponent,
		ProductsComponent,
		ProductComponent,
		FormRegisterComponent,
		FormLoginComponent,
		HeaderComponent,
		NavComponent,
		SearchComponent,
	],
	imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
