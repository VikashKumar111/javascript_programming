
// function removeItemFromArray(array, n){
//     let newArray = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] !== n) {
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }


// const result = removeItemFromArray([1, 2, 3, 4, 5, 6], 4);

// console.log(result);




function removeItemFromArray(array, n) {
    const index = array.indexOf(n);
    if (index > -1) {
        array.splice(index,1);
    }
    return array;
}

const result = removeItemFromArray([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result);