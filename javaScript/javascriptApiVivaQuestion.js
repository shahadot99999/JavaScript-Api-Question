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

// javascript
// Copy
// Edit
// function greet(name = "Guest") {
//   return `Hello, ${name}!`;
// }
// console.log(greet()); // Hello, Guest!