function Cart(localKeyStorage) {
    const cart = {

        cartItems: undefined,

        loadFromStorage() {

            this.cartItems = JSON.parse(localStorage.getItem(localKeyStorage)) || [];
        },

        saveToStorage() {

            localStorage.setItem(localKeyStorage, JSON.stringify(this.cartItems));
            
        },

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
        },

        removeFromCart(productId) {

            this.cartItems = this
                .cartItems
                .filter((cartItem) => cartItem.productId != productId);
            this.saveToStorage();

        },

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

    return cart;

}

const cart1 = Cart('cart-oop');
const cart2 = Cart('cart-business');

cart1.loadFromStorage();
cart2.loadFromStorage();
