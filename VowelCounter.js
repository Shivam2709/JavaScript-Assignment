
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
   
    let count = 0;

    
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

   
    return count;
}



console.log(countVowel('Shivam'));