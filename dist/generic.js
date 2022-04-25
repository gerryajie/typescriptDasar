"use strict";
// generics ====================================>>>>
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6]);
let strArray = getArray(["gerry", "budi", "lala", "pooo"]);
numArray.push(123);
strArray.push("123");
console.log(numArray[0]);
console.log(strArray);
