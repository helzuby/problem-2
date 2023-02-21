//step 1 write a function that accepts string as a parameter.
// step 2 create a variable to indicate the vowels.
// step 3 use the .split() method to split the arrays
//step 4 create a variable that shows the vowelcount.
// step 5 Use the .toLowerCase to make the vowels even 
// step 6 Use a for loop  
// console.log the vowelCount.

function vowelCount(str) {
let arrayOfVowels = ["a","e","i","o","u"];
let currentVowelCount = 0;
const arrayOfLetters = str.toLowerCase().split("");
for(let x = 0; x < arrayOfLetters.length; x++) {
	if(arrayOfVowels.includes(arrayOfLetters[x])){
		currentVowelCount += 1;
	}
}
return currentVowelCount;
}
console.log(vowelCount("I am dancing"));
