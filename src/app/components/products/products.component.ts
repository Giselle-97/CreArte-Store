import { Component } from "@angular/core";
import { Produtcs } from "src/app/app.interface";
import { StoreService } from "src/app/services/store.service";

@Component({
	selector: "app-products",
	templateUrl: "./products.component.html",
	styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
	myShoppingCart: Produtcs[] = [];
	total = 0;

	products: Produtcs[] = [
		{
			id: "1",
			name: "Harry Potter",
			price: 30,
			image: "../../assets/images/figures.jpg",
		},

		{
			id: "2",
			name: "Pencils",
			price: 10,
			image: "../../assets/images/pencils.jpg",
		},

		{
			id: "3",
			name: "Yellow backpack",
			price: 50,
			image: "../../assets/images/backpack.jpg",
		},

		{
			id: "4",
			name: "Cups",
			price: 50,
			image: "../../assets/images/cups.jpg",
		},

		{
			id: "5",
			name: "Scholl Suplies",
			price: 55,
			image: "../../assets/images/school-supplies1.jpg",
		},

		{
			id: "6",
			name: "Colored pencils",
			price: 15,
			image: "../../assets/images/colored-pencils.jpg",
		},
		{
			id: "7",
			name: "Colors and posits",
			price: 10,
			image: "../../assets/images/colors-and-posits.jpg",
		},
		{
			id: "8",
			name: "Stapler",
			price: 20,
			image: "../../assets/images/stapler.jpg",
		},
		{
			id: "9",
			name: "Notebook",
			price: 20,
			image: "../../assets/images/notebook.jpg",
		},
	];

	//inyección de dependencias
	constructor(private storeService: StoreService) {
		this.myShoppingCart = this.storeService.getShoppingCart();
	}

	onAddToShoppingCart(product: Produtcs) {
		//this.myShoppingCart.push(product);
		this.storeService.addProduct(product);
		this.total = this.storeService.getTotal();
	}
}
