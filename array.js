
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




function insertObject(arr, obj) {
    arr = [...arr, obj];
    console.log(arr);
}

let array = [1, 2, 3, 4, 5, 6, 7];
let object = { x: 188, y: 987 };
insertObject(array, object);