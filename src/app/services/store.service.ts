import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Produtcs } from "src/app/app.interface";

@Injectable({
	providedIn: "root",
})
export class StoreService {
	private myShoppingCart: Produtcs[] = [];
	private myCart = new BehaviorSubject<Produtcs[]>([]);

	myCart$ = this.myCart.asObservable();

	constructor() {}

	addProduct(product: Produtcs) {
		this.myShoppingCart.push(product);
		this.myCart.next(this.myShoppingCart);
	}
	getShoppingCart() {
		return this.myShoppingCart;
	}

	getTotal() {
		return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
	}
}
