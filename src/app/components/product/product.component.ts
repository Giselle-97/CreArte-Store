import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Produtcs } from "src/app/app.interface";

@Component({
	selector: "app-product",
	templateUrl: "./product.component.html",
	styleUrls: ["./product.component.scss"],
})
export class ProductComponent {
	imgShoppingCart = "./assets/images/shopping.png";

	@Input() product: Produtcs = {
		id: 1,
		name: "",
		price: 0,
		image: "",
	};

	@Output() addedProduct = new EventEmitter<Produtcs>();

	onAddToCart() {
		this.addedProduct.emit(this.product);
	}
}
