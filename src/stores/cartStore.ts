import { makeAutoObservable } from "mobx";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  img: string;
}

class CartStore {
  products: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(product: Product) {
    const existingProduct = this.products.find((p) => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.products.push({ ...product });
    }
  }

  removeFromCart(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  get totalQuantity() {
    return this.products.reduce((total, item) => total + item.quantity, 0);
  }

  get totalPrice() {
    return this.products.reduce(
      (total, item) => total + item.quantity * Math.ceil(item.price * 0.9),
      0
    );
  }
}

export const cartStore = new CartStore();
