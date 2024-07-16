import ShoppingCartItem from './shopping-cart-item';

// ShoppingCart 
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  getTotalItems() {
    return this.items.length;
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index!== -1) {
      this.items.splice(index, 1);
    }
  }

  displayCartItems() {
    console.log("Cart Items:");
    this.items.forEach((item) => {
      console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.calculateTotalPrice()}`);
    });
  }
}

export default ShoppingCart;