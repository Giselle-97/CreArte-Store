import { Component } from "@angular/core";
import { Produtcs } from "../app.interface";

@Component({
	selector: "app-products",
	templateUrl: "./products.component.html",
	styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
	imgShoppingCart = "./assets/images/shopping.png";

	products: Produtcs[] = [
		{
			name: "Harry Potter",
			price: 30,
			image: "./assets/images/figures.jpg",
		},

		{
			name: "Pencils",
			price: 10,
			image: "./assets/images/pencils.jpg",
		},

		{
			name: "Yellow backpack",
			price: 50,
			image: "./assets/images/backpack.jpg",
		},

		{
			name: "Cups",
			price: 50,
			image: "./assets/images/cups.jpg",
		},

		{
			name: "Scholl Suplies",
			price: 55,
			image: "./assets/images/school-supplies1.jpg",
		},

		{
			name: "Colored pencils",
			price: 15,
			image: "./assets/images/colored-pencils.jpg",
		},
		{
			name: "Colors and posits",
			price: 10,
			image: "./assets/images/colors-and-posits.jpg",
		},
		{
			name: "Stapler",
			price: 20,
			image: "./assets/images/stapler.jpg",
		},
		{
			name: "Notebook",
			price: 20,
			image: "./assets/images/notebook.jpg",
		},
	];
}
