function searchItem(itemName){
    console.log(`Search item is  ${itemName}`);
    return `ItemID: ${itemName}10`;
}

function addCart(itemId){
    console.log(`Adding Item with id as ${itemId} to the cart`);
    return `CartID: ${itemId}`;
}

function checkoutCart(cartId){
    console.log(`Checkout my items placed in cartid ${cartId}`);
    return `CheckoutId: ${cartId}`;
}

function makepayment(checkoutId){
    console.log(`Making payment for checkout id as ${checkoutId}`)
    return `PaymentID generated is: ${checkoutId}`;
}


const itemId = searchItem("Google Pixel");
const cartId = addCart(itemId);
const checkoutId = checkoutCart(cartId);
const paymentId = makepayment(checkoutId);