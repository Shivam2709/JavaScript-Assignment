  const calculater = (nums1, nums2, operator) => {
    let result;
    
    switch(operator) {
        case "+":
            result = nums1 + nums2;
            break;
        
        case "-":
            result = nums1 - nums2;
            break;
        case "*":
            result = nums1 * nums2;
            break;
        case "/":
            result = nums1 / nums2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }
    console.log(`Result of ${nums1} ${operator} ${nums2} is ${result}`);
};

calculater(2, 3, "+");
calculater(5, 2, "*");
calculater(8, 4, "-");
calculater(10, 2, "/");
calculater(4, 7, "$");