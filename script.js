let arr = ["Alex", "John", "Bob", "Amir",  "Azizbek", "Tyler"];
let arr2 = ["Davlat", "Arslan", "Steve", 32, true, 45];
let newArr = arr.concat(arr2).filter(item => typeof item === "string" && item.startsWith("A"));
console.log(newArr);
