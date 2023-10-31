
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


function checkPalindrome(string) {
    const arrayValues = string.split('');
    const reverseArrayValues = arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
}