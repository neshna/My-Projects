import {formatCurrency} from "../scripts/utils/money.js";

export function getMatchingProduct(productId) {
    let matchingItem;
    products.forEach((products) => {
        if (productId === products.id) {
            matchingItem = products;
        }

    });
    return matchingItem;
}

class Product {
    id;
    image;
    name;
    rating;
    priceCents;

    constructor(productDetails) {
        this.id = productDetails.id;
        this.image = productDetails.image;
        this.name = productDetails.name;
        this.rating = productDetails.rating;
        this.priceCents = productDetails.priceCents;

    }

    getStarsURL() {
        return `images/ratings/rating-${ (this.rating.stars) * 10}.png`
    }

    getPrice() {
        return `$${formatCurrency(this.priceCents)}`
    }

    extraInfoHTML() {

        return '';

    }

}


class Clothing extends Product {

    sizeChartLink;
    constructor(productDetails) {
        super(productDetails);
        this.sizeChartLink = productDetails.sizeChartLink;
    }

    extraInfoHTML() {
        //super.extraInfoHTML()
        return `<a href='../images/clothing-size-chart.png'  target='_blank'>Size Chart</a>`

    }

}

export let products = []


// Using call back
export function loadProducts(fun) {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {

        products = JSON
            .parse(xhr.response)
            .map((productDetails) => {

                if (productDetails.type === "clothing") {
                    return new Clothing(productDetails);
                }

                return new Product(productDetails);

            });

        console.log('load products');

        fun();

    });

    // error handling in call back
    xhr.addEventListener ('error',()=>{
        console.log('Unexpected error , Please try again later.');
    })
    

    xhr.open('GET', 'https://supersimplebackend.dev/products')
    xhr.send();

    

}
    loadProducts();

//using promises

export function loadProductsFetch(){
    const promise = fetch('https://error.supersimplebackend.dev/products').then((response)=>{
           return response.json();    // to convert the response to json
    })
    .then((productItem)=>{
        products = productItem.map((productDetails) => {

                if (productDetails.type === "clothing") {
                    return new Clothing(productDetails);
                }
                return new Product(productDetails);
            });
         console.log('load products');

    }).catch((error)=>{
        console.log('Unexpected error , Please try again later.');
    })
            return promise;
}

loadProductsFetch();


