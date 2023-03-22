function double(cart) {
    for(let i = 0; i < cart.length; i++) {
        cart[i] *=2;
    }
    return cart;
}

const cartQuantities = [2, 4, 6, 8];
const newCart = double(cartQuantities);
console.log(newCart);
