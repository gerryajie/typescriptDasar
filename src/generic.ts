// generics ====================================>>>>

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4, 5, 6]);
let strArray = getArray<string>(["gerry", "budi", "lala", "pooo"]);

numArray.push(123);
strArray.push("123");
console.log(numArray[0]);
console.log(strArray);
