import { getMatchingProduct, products  } from "../../data/products.js";
import { cart , removeFromCart , updateDeliveryId} from "../../data/cart.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOption, getMatchingDelOpt} from "../../data/deliveryOptions.js";
import { formatDate } from "../utils/day.js";
import { renderPaymentSummary } from "./paymentSummary.js";



export function renderOrderSummary(){

  let cartHTML ='';
  let matchingItem ;

 cart.forEach((cartItem) => {

  matchingItem = getMatchingProduct(cartItem.productId)
 
 let deliveryOptionId = cartItem.deliveryOptionId;
 let deliveryDate ;
 let deliveryOption1;

 deliveryOption1  = getMatchingDelOpt(deliveryOptionId)
 
  deliveryDate = formatDate(deliveryOption1.deliveryDays);

  cartHTML += `<div class="cart-item-container
                 cart-item-container-js-${cartItem.productId}">
            <div class="delivery-date">
                Deliver Date : ${deliveryDate}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src=${matchingItem.image}>

              <div class="cart-item-details">
                <div class="product-name">
                 ${matchingItem.name}
                </div>
                <div class="product-price">
                  ${matchingItem.getPrice()}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    Update
                  </span>
                  <span class="delete-quantity-link link-primary delete-cart-js" data-product-id = ${cartItem.productId}>
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options delivery-options-js">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${deliveryOptionUpdate(cartItem)}             
              </div>
            </div>
          </div>`
  
 });

 document.querySelector(".order-summary-js").innerHTML = cartHTML;

  document.querySelectorAll(".delete-cart-js").forEach((deleteLink)=>{

    deleteLink.addEventListener("click" , ()=>{
          const productId = deleteLink.dataset.productId;
          removeFromCart(productId);
          document.querySelector(`.cart-item-container-js-${productId}`).remove();
          renderPaymentSummary();
                  
    });
 });


  document.querySelectorAll(".delivery-option-js").forEach((deliveryOptionElement)=>{

    deliveryOptionElement.addEventListener("click" , function(){
              const {productId , deliveryId} = deliveryOptionElement.dataset
              updateDeliveryId (productId ,deliveryId);
              renderOrderSummary();
              renderPaymentSummary();

    })    });

}



 function deliveryOptionUpdate (cartItem){

    let deliveryOptionHtml ='';
    deliveryOption.forEach((deliveryOpt)=>{

      let deliveryDays = deliveryOpt.deliveryDays;    
      let dateString = formatDate(deliveryDays);
      let priceString = deliveryOpt.priceCents === 0 
      ? `FREE `
      : `$${formatCurrency(deliveryOpt.priceCents)} - `

      const isChecked = deliveryOpt.id === cartItem.deliveryOptionId ;
     
      deliveryOptionHtml += 

                  `<div class="delivery-option delivery-option-js" 
                  data-delivery-id = ${deliveryOpt.id}
                  data-product-id = ${cartItem.productId}>
                  <input type="radio" 
                    ${isChecked ? 'checked' : ''} 
                    class="delivery-option-input"
                    name="delivery-option-${cartItem.productId}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString}Shipping
                    </div>
                  </div>
                </div>`
                })

          return deliveryOptionHtml;

}



 
 



 