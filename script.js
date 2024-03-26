//1. отфильтровать слова которые начинаются на 'a'
const words = ["peach", "apple", "grape", "apricot", "kiwi", "orange", "banana", "ananas"]
const wordsA = words.filter(word => word.startsWith('a'));

console.log(wordsA);

//2. отсортировать массив по алфавиту
const wordsList = words.sort()

console.log(wordsList);

//3. найти самое длинное слово с массива
 const longestWord = words.reduce((longest, current) => (current.length > longest.length ? current : longest), "")

 console.log(longestWord);

 //4. показать общую длину всех строк с массива
 const totalLength = words.reduce((total, word) => total + word.length, 0)

 console.log(totalLength);

 //5. создать prompt с помощью которого можно будет добавлять новые слова в массив
const newWord = prompt("новые слова в массив");
if (newWord) {
    words.push(newWord);
}

console.log(words); 



let num1 = [6, 18, 23, 3, 2, [22, 59]]  
let num2 = [101, 4, 59, 89, 0, 7, 31, 12,] 
//объеденить массив num1 и num2

 let numMix = num1.concat(num2).flat();
 console.log(numMix);
 
//показать сумму чисел из двух массивов
const flatNum1 = num1.flat();
const sum = flatNum1.concat(num2).reduce((acc, curr) => acc + curr, 0);

console.log(sum);


let numbers = [42, "Alex", "john", 18, 23, 100, 1]
//1. удалить имена с массива numbers
let del = numbers.filter(item => typeof item === 'number');
console.log(del);

let names = ['Tyler', 'Stark', 'Jake', 'Igor']
//2. удаленные имена переместить в массив names
let fil = numbers.filter(item => typeof item === 'string');
names.push(...fil)
console.log(names);

//3. написать условие, если массив names не содержит строку 'Jadu' добавить его
if (!names.includes('Jadu')) {
    names.push('Jadu');
}
console.log(names);