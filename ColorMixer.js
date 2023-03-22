const mixColor = (color1, color2) => {
    let result;

    switch(color1){
        case "red":
            switch(color2){
                case "blue":
                    result = "purple";
                    break;
                case "yellow":
                    result = "orange";
                    break;
                default:
                    result = "Invalid color Combination";
            }
            break;
        case "blue":
            switch (color2){
                case "red":
                    result = "purple";
                    break;
                case "yellow":
                    result = "green";
                    break;
                default:
                    result = "Invalid color Combination";
            }
            break;
        case "yellow":
            switch(color2){
                case "red":
                    result = "orange";
                    break;
                case "blue":
                    result = "green";
                    break;
                default:
                    result = "Invalid color Combination";
            }
            break;
        default:
            result = "Invalid color Combination";
    }
    console.log(`Mixing ${color1} and ${color2} result in ${result}`);
}

// Calling function

mixColor("red", "blue");
mixColor("red", "yellow");
mixColor("yellow", "blue");
