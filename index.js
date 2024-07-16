import Product from './product';
import ShoppingCartItem from './shopping-cart-item';
import ShoppingCart from './shopping-cart';

// Testing the objects
const product1 = new Product(1, "Apple", 10.99);
const product2 = new Product(2, "Banana", 0.99);

const cart = new ShoppingCart();

const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 3);

cart.addItem(item1);
cart.addItem(item2);

console.log(`Total Items in Cart: ${cart.getTotalItems()}`);
cart.displayCartItems();

cart.removeItem(item1);
console.log(`Total Items in Cart: ${cart.getTotalItems()}`);
cart.displayCartItems();