
// function checkPalindrome(string) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++){
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not Palindrome';
//         }
//     }
//     return 'It is Palindrome';
// }
// const string = prompt('Enter a string:');

// const value = checkPalindrome(string);
// console.log(value);


// function checkPalindrome(string) {
//     const arrayValues = string.split('');
//     const reverseArrayValues = arrayValues.reverse();
//     const reverseString = reverseArrayValues.join('');
//     if (string == reverseString) {
//         console.log('It is Palindrome')
//     }
//     else {
//         console.log('It is not Palindrome')
//     }
// }

// const string = prompt('Entera string:');
// const value = checkPalindrome(string);
// console.log(value);



// const string = prompt('Enter a sentence: ');
// const words = string.split(' ');
// words.sort();
// console.log('The sorted words are:');
// for (const element of words) {
//     console.log(element);
// }


// function reverseString(str) {
//     let newString = "";
//     for (let i = string.length - 1; i >= 0; i--){
//         newString += str[i];
//     }
//     return newString;
// }

// const string = prompt('Enter a string: ');

// const result = reverseString(string);

// console.log(result);



// function reverseString(str) {
//     const arrayString = str.split("");
//     const reverseArray = arrayString.reverse();
//     const joinArray = reverseArray.join("");
//     return joinArray;
// }

// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);


// function countString(str, letter) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }


// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');
// const result = countString(string, letterToCheck);
// console.log(result);




// function countString(str, letter) {
//     const re = new RegExp(letter, 'g');
//     const count = str.match(re).length;
//     return count;
// }

// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');
// const result = countString(string, letterToCheck);
// console.log(result);



// function capitalizeFirstLetter(str) {
//     const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
//     return capitalized;
// }

// const string = prompt('Enter a string: ');
// const result = capitalizeFirstLetter(string);
// console.log(result);



// function capitalizeFirstLetter(str) {
//     const capitalized = str.replace(/^./, str[0].toUpperCase());
//     return capitalized;
// }

// const string = prompt('Enter a string: ');
// const result = capitalizeFirstLetter(string);
// console.log(result);


// function countVowel(str) {
//     const count = str.match(/[aeiou]/gi).length;
//     return count;
// }

// const string = prompt('Enter a string: ');
// const result = countVowel(string);
// console.log(result);



// const vowel = ["a", "e", "i", "o", "u"];

// function countVowel(str) {
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//         if (vowel.includes(letter)) {
//             count++;
//         }
//     }
//     return count;
// }

// const string = prompt('Enter a string: ');
// const result = countVowel(string);
// console.log(result);


// function checkString(str) {
//     if (str.startsWith('S') && str.endsWith('G')) {
//         console.log('The string starts with S and ends with G');
//     } else if (str.startsWith('S')) {
//         console.log('The string starts with S but does not end with G');
//     } else if (str.endsWith('G')) {
//         console.log('The string ends with G but does not start with S');
//     } else {
//         console.log('The string doest not start with S and does not end with G');
//     }
// }

// const string = prompt('Enter the string');
// const result = checkString(string);
// console.log(result);


// function checkString(str) {
//     if (/^S/i.test(str) && /G$/i.test(str)) {
//         console.log('the string starts with S and ends with G');
//     } else if (/^S/i.test(str)) {
//         console.log('The string starts with S but does not end with G');
//     } else if (/G$/i.test(str)) {
//         console.log('the string ends with G but does not start with S');
//     } else {
//         console.log('the string neither starts with S nor ends with G');
//     }
// }

// for (let i = 0; i < 3; i++){
//     const string = prompt('enter the string');
//     checkString(string);
// }


