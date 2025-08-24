import { cart } from "../../data/cart.js";
import { getMatchingProduct, products } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { getMatchingDelOpt } from "../../data/deliveryOptions.js";


export function renderPaymentSummary(){

let cartPrice =0 ;
let cartQuantity =0;
let deliveryCharge =0;
let matchingItem;
let matchingDeliveryOption;


cart.forEach((cartItem) => {
   
  cartQuantity += cartItem.quantity;

  matchingItem = getMatchingProduct(cartItem.productId);
  matchingDeliveryOption = getMatchingDelOpt (cartItem.deliveryOptionId);
  cartPrice += (cartItem.quantity * matchingItem.priceCents);
  deliveryCharge += matchingDeliveryOption.priceCents;

});

const totalBeforeTax = cartPrice + deliveryCharge;
const taxCents  = totalBeforeTax * 0.1
const orderTotal = totalBeforeTax + taxCents;

const orderSummaryHTML = `<div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money ">$${formatCurrency(cartPrice)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(deliveryCharge)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalBeforeTax)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(orderTotal)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
     `

     document.querySelector(".payment-summary-js").innerHTML = orderSummaryHTML;


}