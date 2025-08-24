export function loadCart(fun) {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {

        console.log(xhr.response)

        fun();

    });
    xhr.open('GET', 'https://supersimplebackend.dev/cart')
    xhr.send();

}


export let cart = JSON.parse(localStorage.getItem('cartItem')) || [];

export function addTocart(productId) {
    let matchingItem;
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            matchingItem = cartItem;
        }
    })

    if (matchingItem) {
        matchingItem.quantity++;
    } else {
        cart.push({productId: productId, quantity: 1, deliveryOptionId: '1'})
    }

    saveToStorage();
}

export function saveToStorage() {

    localStorage.setItem('cartItem', JSON.stringify(cart));
}

export function removeFromCart(productId) {

    cart = cart.filter((cartItem) => cartItem.productId != productId);

    saveToStorage();

}

export function updateDeliveryId(productId, deliveryId) {

    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            cartItem.deliveryOptionId = deliveryId;
        }
    })

    saveToStorage();
}


