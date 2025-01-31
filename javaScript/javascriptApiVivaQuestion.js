//Javascript Api Viva Question

// 1. General Questions on ES6:
// Q1. What is ES6, and why is it important?
// A: ES6, also known as ECMAScript 2015, introduced significant updates to JavaScript, including new syntax and features like let, const, arrow functions, classes, and modules, making the language more powerful and easier to write.

// Q2. What are some key features of ES6?
// A: Key features include let and const, arrow functions, classes, template literals, destructuring, default parameters, promises, modules, and the spread/rest operator.

// Q3. How does ES6 improve code readability?
// A: ES6 introduces shorter syntax for common operations (e.g., arrow functions, template literals) and encourages modern practices like block scoping and immutability.

// 2. var, let, and const:
// Q4. What is the difference between var, let, and const?
// A:

// var: Function-scoped, can be redeclared and reassigned.
// let: Block-scoped, cannot be redeclared in the same block, but can be reassigned.
// const: Block-scoped, cannot be redeclared or reassigned.
// Q5. Why is let preferred over var?
// A: let prevents issues like variable hoisting and accidental redeclaration, which are common with var.

// Q6. What is the "temporal dead zone" in ES6?
// A: It is the time between the start of a block and the initialization of a let or const variable where the variable cannot be accessed.

// Q7. Can you reassign a const variable?
// A: No, a const variable cannot be reassigned, but if it holds an object, the object’s properties can still be modified.

// 3. Default Parameters:
// Q8. What are default parameters in functions?
// A: Default parameters allow you to assign a default value to a parameter if no value is passed or if the value is undefined.

// Q9. How do default parameters work with undefined arguments?
// A: If a parameter is explicitly set to undefined, the default value will still be used.

// Q10. Give an example of a function with default parameters.
// A:
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!

// 4. Template Strings:
// Q11. What are template literals in ES6?
// A: Template literals are strings enclosed in backticks (``) that allow embedded expressions using ${expression}.

// Q12. How are template literals different from regular strings?
// A: Template literals support multi-line strings and string interpolation.

// Q13. Write an example of a dynamic string using template literals.
// A:


const name = "Alice";
console.log(`Hello, ${name}!`);


// Q14. How do you write multi-line strings with template literals?
// A:

const text = `This is a
multi-line string.`;
console.log(text);

// 5. Arrow Functions:
// Q15. What are arrow functions?
// A: Arrow functions are a shorthand syntax for writing functions, introduced in ES6.

// Q16. How do arrow functions handle the this keyword?
// A: Arrow functions do not have their own this; they inherit this from the enclosing scope.

// Q17. Write an example of an arrow function with one parameter.
// A:
const square = x => x * x;
console.log(square(4)); // 16

// Q18. Can arrow functions be used as methods in an object? Why or why not?
// A: No, because arrow functions do not have their own this, making them unsuitable as methods.

// 6. Spread Operator:
// Q19. What is the spread operator in ES6?
// A: The spread operator (...) allows you to expand arrays or objects into individual elements.

// Q20. How can you use the spread operator to copy an array?
// A:

const arr = [1, 2, 3];
const copy = [...arr];
// Q21. How do you merge two arrays with the spread operator?
// A:

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

// Q22. Write an example of finding the maximum value in an array using the spread operator.
// A:

const nums = [10, 20, 30];
console.log(Math.max(...nums)); // 30

// 7. Destructuring:
// Q23. What is array destructuring?
// A: Array destructuring allows you to unpack values from arrays into variables.
// Example:

const [a, b] = [1, 2];
// Q24. What is object destructuring?
// A: Object destructuring allows you to extract properties from an object into variables.
// Example:
//const {name, age} = {name: "John", age: 25};

// Q25. How do you assign a default value in destructuring?
// A:
// const [a = 10] = [];
// console.log(a); // 10


//  Object Methods:
// Q26. What does Object.keys() do?
// A: It returns an array of an object’s keys.
// Example:


// Object.keys({a: 1, b: 2}); // ['a', 'b']
// Q27. What does Object.values() do?
// A: It returns an array of an object’s values.
// Example:


// Object.values({a: 1, b: 2}); // [1, 2]
// Q28. What does Object.entries() return?
// A: It returns an array of key-value pairs.
// Example:


// Object.entries({a: 1, b: 2}); // [['a', 1], ['b', 2]]
// Q29. How does Object.freeze() work?
// A: It prevents modifications to the properties or structure of an object.

// Q30. What is the difference between Object.seal() and Object.freeze()?
// A:

// Object.seal(): Prevents adding/removing properties but allows modifying existing ones.
// Object.freeze(): Prevents adding, removing, or modifying properties.
// 9. Loops:
// Q31. What is the difference between for...of and for...in?
// A:

// for...of: Iterates over values of an iterable (e.g., array).
// for...in: Iterates over keys or properties of an object.
// Q32. Give an example of for...of.
// A:


// for (let value of [1, 2, 3]) console.log(value);
// Q33. Give an example of for...in.
// A:


// const obj = {a: 1, b: 2};
// for (let key in obj) console.log(key);

// Q34. What happens if you declare a var variable twice in the same scope?
// A: It does not throw an error, but the second declaration overwrites the first one.


// var x = 10;
// var x = 20;
// console.log(x); // 20
// Q35. Can let variables be hoisted?
// A: Yes, they are hoisted but are not accessible until initialized, due to the temporal dead zone.

// Q36. What will happen if you use a const variable without initializing it?
// A: It throws a syntax error because const variables must be initialized when declared.

// 11. Function Default Parameters:
// Q37. What is the difference between undefined and a missing argument in default parameters?
// A: Both trigger the default parameter value.


// function test(a = 5) { console.log(a); }
// test(); // 5
// test(undefined); // 5
// Q38. Can you use expressions as default parameters?
// A: Yes, you can use expressions.


// function add(a, b = a * 2) { return a + b; }
// console.log(add(5)); // 15
// Q39. What happens if you pass null to a parameter with a default value?
// A: null does not trigger the default; it is used as the argument’s value.


// function greet(name = "Guest") { console.log(name); }
// greet(null); // null
// 12. Template Strings:
// Q40. What happens if you use template literals without any dynamic content?
// A: It behaves like a regular string.


// const message = `Hello World`;
// console.log(message); // Hello World
// Q41. Can template literals be nested?
// A: Yes, template literals can include other template literals.


// const name = "Alice";
// const message = `Hello, ${`dear ${name}`}`;
// console.log(message); // Hello, dear Alice
// Q42. How are template literals useful for HTML strings?
// A: They make it easy to create multi-line and dynamic HTML content.


// const html = `<div>
//   <h1>Hello</h1>
// </div>`;
// 13. Arrow Functions:
// Q43. Can arrow functions have this binding?
// A: No, they inherit this from the surrounding scope.

// Q44. How can you return an object from an arrow function?
// A: Wrap the object in parentheses to avoid confusion with function blocks.


// const getObject = () => ({ a: 1, b: 2 });
// Q45. How do arrow functions handle arguments?
// A: They do not have their own arguments object; you must use rest parameters.


// const sum = (...args) => args.reduce((a, b) => a + b);
// Q46. Can you use an arrow function as a constructor? Why or why not?
// A: No, arrow functions cannot be used as constructors because they lack the this binding required.

