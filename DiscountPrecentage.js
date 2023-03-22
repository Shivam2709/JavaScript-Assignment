
const DiscountPrecentage = (originalPrice, discountPrice) => {
    const discountAmount = originalPrice - discountPrice;
    const discountprecentage = (discountAmount / originalPrice) * 100;
    
    return discountprecentage.toFixed(2);
}

const amount = 500;
const discount = 50;

const result = DiscountPrecentage(amount, discount);

console.log(result);