//step 1 write a function that accepts string as a parameter.
// step 2 create a variable that holds the parameter string.
// step 3 use the .split() method to split the arrays
//step 4 create a variable tp indicate the vowels 
// step 5 use the for loop to find the vowels 
// console .log the vowel.

function vowelCount(str) {
let arrayOfVowels = "a,e,i,o,u"
let vowelCount = 0 ;
const arrayOfLetters = str.split(" ");
for(let x = 0 ; x < arrayOfLetters.length; x++) {
	if(arrayOfVowels.includes(arrayOfLetters[x])){
		currentVowelCount += 1;
	}
}
return vowelCount;
}
console.log(vowelCount("I Love to read"));
