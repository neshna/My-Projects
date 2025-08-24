class Cart {

  cartItems ;
   #localKeyStorage;  //(private property)

  constructor(localKeyStorage){
      this.#loadFromStorage();
      this.#localKeyStorage = localKeyStorage;
  }

        #loadFromStorage() {

            this.cartItems = JSON.parse(localStorage.getItem(this.#localKeyStorage)) || [];
        }

        saveToStorage() {
            localStorage.setItem(this.#localKeyStorage, JSON.stringify(this.cartItems));
        }

        addTocart(productId) {
            let matchingItem;
            this
                .cartItems
                .forEach((cartItem) => {
                    if (cartItem.productId === productId) {
                        matchingItem = cartItem;
                    }
                })

            if (matchingItem) {
                matchingItem.quantity++;
            } else {
                this
                    .cartItems
                    .push({productId: productId, quantity: 1, deliveryOptionId: '1'})
            }

            this.saveToStorage();
        }

        removeFromCart(productId) {

            this.cartItems = this
                .cartItems
                .filter((cartItem) => cartItem.productId != productId);
            this.saveToStorage();

        }

        updateDeliveryId(productId, deliveryId) {

            this
                .cartItems
                .forEach((cartItem) => {
                    if (cartItem.productId === productId) {
                        cartItem.deliveryOptionId = deliveryId;
                    }
                })

            this.saveToStorage();
        }

}


const cart1 = new Cart('cart-oop');
const cart2 = new Cart('cart-business');









