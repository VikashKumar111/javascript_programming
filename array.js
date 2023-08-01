
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




// function removeItemFromArray(array, n) {
//     const index = array.indexOf(n);
//     if (index > -1) {
//         array.splice(index,1);
//     }
//     return array;
// }

// const result = removeItemFromArray([1, 2, 3, 4, 5, 6, 7], 3);
// console.log(result);


//

// const array = ['you', 'will', 'learn', 'javascript'];
// const hasvalue = array.includes('javascript');
// if (hasvalue) {
//     console.log('array contains a value');
// } else {
//     console.log('array does not contains a value');
// }
 

// const array = ['you', 'will', 'learn', 'javascript'];
// const hasvalue = array.indexOf('javascript') !== -1;

// if (hasvalue) {
//     console.log('array contains a value');
// } else {
//     console.log('array does not contains a value');
// }
 

// function insertElement() {
//     let array = [1, 2, 3, 4, 5, 6];
//     let index = 3;
//     let element = 8;
//     array.splice(index, 0, element);
//     console.log(array);
// }

// insertElement();


// function insertObject(arr, obj) {
//     arr.push(obj);
//     console.log(arr);
// }

// let array = [1, 2, 3, 4, 5];
// let object = { x: 12, y: 8 };

// insertObject(array, object);





// function insertObject(arr, obj) {
//     let index = arr.length;
//     arr.splice(index, 0, obj);
//     console.log(arr);
// }

// let array = [1, 2, 3, 4, 5, 6];
// let object = { x: 122, y: 333 };

// insertObject(array, object);




// function insertObject(arr, obj) {
//     arr = [...arr, obj];
//     console.log(arr);
// }

// let array = [1, 2, 3, 4, 5, 6, 7];
// let object = { x: 188, y: 987 };
// insertObject(array, object);




// function checkObject(arr) {
//     const result = Array.isArray(arr);
//     if (result) {
//         console.log(`[${arr}] is an array`);
//     } else {
//         console.log(`${arr} is not an array`);
//     }
// }


// let array =  [1, 2, 3, 4, 5, 6, 7];
// let array = { x: 188, y: 987 };
// checkObject(array);



// function emptyArray(arr) {
//     arr = [];
//     return arr;
// }
// const array = [1, 2, 3, 4, 5];
// console.log(array);
// const result = emptyArray(array);

// console.log(result);




// function emptyArray(arr) {
//     arr = [];
//     return arr;
// }

// const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);


// function emptyArray(arr) {
//     arr.splice(0, arr.length);
//     return arr;
// }

// const array = [2, 4, 6, 7, 8, 4, 3];
// console.log(array);

// const result = emptyArray(array);
// console.log(result);


// function emptyArray(arr) {
//     arr.splice(0, arr.length);
//     return arr;
// }
// const array = [3, 4, 6, 7, 8, 9, 1, 2];
// console.log(array);
// const result = emptyArray(array);
// console.log(result);



// function emptyArray(arr) {
//     arr.length = 0;
//     return arr;
// }

// const array = [2, 4, 6, 5, 3, 2, 1, 3, 2]
// console.log(array);
// const result = emptyArray(array);
// console.log(result);




// function emptyArray(arr) {
//     arr.length = 0;
//     return arr;
// }

// const array = [2, 4, 6, 5, 3, 2, 1, 3, 2]
// console.log(array);
// const result = emptyArray(array);
// console.log(result);



// function addElement(arr) {
//     arr.unshift(4);
//     console.log(arr);
// }

// const array = [2, 4, 5, 6];
// addElement(array);




// function addElement(arr) {
//     arr.unshift(4);
//     console.log(arr);
// }
// const array = [2, 4, 5, 6];
// addElement(array);




// function addElement(arr) {
//     arr.splice(0, 0, 4);
//     console.log(arr);
// }

// const array = [4, 6, 9];
// addElement(array);



// function addElement(arr) {
//     arr = [4, ...arr];
//     console.log(arr);
// }

// const array = [3, 4, 5, 6, 7];
// addElement(array);




// function addElement(arr) {
//     arr = [4].concat(arr);

//     console.log(arr);
// }

// array = [1, 2, 3, 4, 5, 6];
// addElement(array);


// function getUnique(arr) {
//     let uniqueArr = [];
//     for (let i of arr) {
//         if (uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//         }
//     }
//     console.log(uniqueArr);
// }

// const array = [2, 5, 8, 9, 5, 9, 6, 2, 1];
// getUnique(array);




// function getUnique(arr) {
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);
// }

// const array = [2, 2, 4, 4, 6, 7, 8, 9, 1, 1, 0];

// getUnique(array);



// function getUniqueAfterMerge(arr1, arr2) {
//     let arr = arr1.concat(arr2);
//     let uniqueArr = [];

//     for (let i of arr) {
//         if (uniqueArr.indexOf(i) === -1) {
//             uniqueArr.push(i);
//       }
//     }
//     console.log(uniqueArr);
// }

// const array1 = [1, 2, 4, 5, 8, 9];
// const array2 = [1, 3, 7, 8, 9, 5, 6, 2];
// getUniqueAfterMerge(array1, array2);




// function getUniqueAfterMerge(arr1, arr2) {
//     let arr = [...arr1, ...arr2];
     
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);

// }

// const array1 = [1, 2, 4, 6, 8, 9, 5];
// const array2 = [2, 6, 4, 9, 6, 5, 2, 0];

// getUniqueAfterMerge(array1, array2);





// function removeItemFromArray(array, n) {
//     const newArray = [];
//     for (let i = 0; i < array.length; i++){
//         if (array[i] != n) {
//             newArray.push(array[i]);
//         }

//     }
//     return newArray;
// }

// const result = removeItemFromArray([2, 34, 5, 6, 67], 67);
// console.log(result);



function removeItemFromArray(array, n) {
    const index = array.indexOf(n);

    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

const result = removeItemFromArray([2, 4, 6, 7, 3, 1], 4);
console.log(result);