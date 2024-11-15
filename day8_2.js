function searchItem(itemName,fn){
    console.log(`Search item is  ${itemName}`);
    const itemId = `ItemID: ${itemName}10`;
    fn(itemId,checkoutCart);
}

function addCart(itemId,fn){
    console.log(`Adding Item with id as ${itemId} to the cart`);
    const cartId = `CartID: ${itemId}`;
    fn(cartId,makepayment);
}

function checkoutCart(cartId,fn){
    console.log(`Checkout my items placed in cartid ${cartId}`);
    const checkoutId = `CheckoutId: ${cartId}`;
    fn(checkoutId);
}

function makepayment(checkoutId){
    console.log(`Making payment for checkout id as ${checkoutId}`)
    return `PaymentID generated is: ${checkoutId}`;
}


searchItem("Google Pixel",addCart);
