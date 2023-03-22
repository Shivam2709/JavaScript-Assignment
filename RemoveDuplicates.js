function removeDuplicate(cart) {
    const uniqueCart = [];
    for(let i =0; i < cart.length; i++) {
        if(!uniqueCart.includes(cart[i])) {
            uniqueCart.push(cart[i]);
        }
    }
    return uniqueCart;
}

const duplicate = ["shirt", "pants", "shirt", "socks", "pants", "shoes"];
const uniqueCart = removeDuplicate(duplicate);
console.log(uniqueCart);