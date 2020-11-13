# Train Modern JS

Below you will find some exercises to train modern JS.
Keep in mind to use all modern JS approaches and also the Array functions, like `Array.prototype.map` or `Array.prototype.reduce`.

---

## Be polite

Given a list of person's:

```
const people = [{name:'Johannes', age: 60}, {name:'Maya', age: 45}, {name:'Suzi', age: 66}]

const bePolite = (people) => {
  // code the solution
}

console.log(bePolite(people))

```

Please finish the bePolite function. It should return a cleaned array containing the names only.

Use `Array.prototype.map()`: https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

## Swap Numbers

Given is an array containing only two number items.
The numbers need to be swapped, so that the number on index 0 moves to index 1 and the number at index 1 moves to index 0.

Example:
Two numbers with a=10, b=12 turns to a=12, b=10]

Use only an array and destructuring to swap the two numbers.
Hint: Put the two numbers into an array: [a,b] and when use destructuring for the swap.

```
let a = 5
let b = 8

// code the solution

console.log(a, b) // 8,5
```

## Sort Santa's Reindeer

**Challenge:**
https://www.codewars.com/kata/52ab60b122e82a6375000bad/train/javascript

*`Array.prototype.sort` becomes handy here.*

Read more about `Array.prototype.sort`:
*https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort*


For comparing two string you can use `String.prototype.localeCompare`:
*https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare*

---

## Unique string characters

**Challenge:**
https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript

Use `String.prototype.split()`, `Array.prototype.filter` and `Array.prototype.includes` to solve this task.

More about:
- String.prototype.split(): https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/split
- Array.prototype.filter(): https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- Array.prototype.includes(): https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

---

## Naughty or Nice?

**Challenge:**
https://www.codewars.com/kata/52a6b34e43c2484ac10000cd/train/javascript

Use  `Array.prototype.filter()` and `Array.prototype.map()`to solve this task.

---

## Return the first M multiples of N

**Challenge:**
https://www.codewars.com/kata/593c9175933500f33400003e/train/javascript

To resolve this task use `Array.from()`:
https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/from

---

## Sum even numbers

**Challenge:**
https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3/train/javascript

Use `Array.prototype.reduce`:
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

---

## Multiply array values and filter non-numeric

**Challenge:**
https://www.codewars.com/kata/55ed875819ae85ca8b00005c/train/javascript

Use `Array.prototype.reduce` and to check if a value is a number you can check the type with `typeof number === 'number'`.

`Array.prototype.reduce`: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

