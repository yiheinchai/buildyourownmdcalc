/*
  -----------------------------------------------------------------------------
  Hello World! (00:53)
  -----------------------------------------------------------------------------
  Exercise:
  1. Log the message "Hello, World!" to the console.
  2. Log another message of your choice to the console.
*/

console.log("Hello, World!");
console.log("This is my first JavaScript exercise!");

/*
  -----------------------------------------------------------------------------
  A Brief Introduction to JavaScript (05:57)
  -----------------------------------------------------------------------------
  No specific coding exercise for this introductory section.
*/

/*
  -----------------------------------------------------------------------------
  Linking a JavaScript File (11:18)
  -----------------------------------------------------------------------------
  No specific coding exercise, as this relates to HTML file setup.
*/

/*
  -----------------------------------------------------------------------------
  Values and Variables (15:55)
  -----------------------------------------------------------------------------
  Exercise:
  1. Declare a variable named `city` and assign it the name of your city (a string).
  2. Declare a variable named `population` and assign it the approximate 
     population of your city (a number).
  3. Log the values of both variables to the console.
*/

let city = "London";
let population = 9000000;

console.log("City:", city);
console.log("Population:", population);

/*
  -----------------------------------------------------------------------------
  Practice Assignments (16:05) & Data Types (00:23)
  -----------------------------------------------------------------------------
  Exercise:
  1. You are building a simple e-commerce product page.
  2. Declare variables to store the following information:
     - `productName` (string)
     - `price` (number)
     - `inStock` (boolean)
  3. Assign appropriate values to these variables.
  4. Log each variable to the console.
*/

let productName = "Wireless Headphones";
let price = 99.99;
let inStock = true;

console.log("Product Name:", productName);
console.log("Price:", price);
console.log("In Stock:", inStock);

/*
  -----------------------------------------------------------------------------
  let, const and var (19:19)
  -----------------------------------------------------------------------------
  Exercise:
  1. Declare a constant variable named `PI` and assign it the value 3.14159.
  2. Declare a variable named `radius` using `let` and assign it an initial 
     value of 5.
  3. Log both variables.
  4. Change the value of `radius` to 10 and log it again.
  5. Notice that you cannot change the value of `PI` (it will throw an error 
    if you try).
*/

const PI = 3.14159;
let radius = 5;

console.log("PI:", PI);
console.log("Radius:", radius);

radius = 10;
console.log("New Radius:", radius);

// PI = 3.14; // Uncommenting this line will result in an error

/*
  -----------------------------------------------------------------------------
  Basic Operators (09:58)
  -----------------------------------------------------------------------------
  Exercise:
  1. Calculate the total cost of the headphones from previous exercises, buying 3 headphones.
  2. Store the result in a variable called `totalCost`.
  3. Log the `totalCost` to the console.
*/

let quantity = 3;
let totalCost = price * quantity;

console.log("Total cost of headphones:", totalCost);

/*
  -----------------------------------------------------------------------------
  Operator Precedence (19:31)
  -----------------------------------------------------------------------------
  Exercise:
  1. Predict the result of the following expression:
     let result = 10 + 5 * 2 - 8 / 4;
  2. Log the result of the expression.
  3. Add parentheses to the expression to change the order of operations and 
     achieve a different result. Log the new result.
*/

let result = 10 + 5 * 2 - 8 / 4; // Prediction: 18
console.log("Result:", result);

let newResult = ((10 + 5) * (2 - 8)) / 4;
console.log("New Result:", newResult);

/*
  -----------------------------------------------------------------------------
  Strings and Template Literals (07:20)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create two variables, `firstName` and `lastName`, and assign them your 
     first and last names, respectively.
  2. Create a variable called `fullName` and use string concatenation to 
     combine `firstName` and `lastName` with a space in between.
  3. Create a variable called `greeting` and use a template literal to 
     create the string "Hello, my name is [fullName]." where [fullName] is 
     replaced with the value of the `fullName` variable.
  4. Log `fullName` and `greeting`.
*/

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
let greeting = `Hello, my name is ${fullName}.`;

console.log("Full Name:", fullName);
console.log("Greeting:", greeting);

/*
  -----------------------------------------------------------------------------
  Taking Decisions: if / else Statements (10:57)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a variable called `age` and assign it your age.
  2. Write an `if` statement that checks if `age` is greater than or equal 
     to 18. 
  3. If it is, log "You are an adult." to the console.
  4. Add an `else` clause to the `if` statement that logs "You are a minor." 
     if the condition is false.
*/

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

/*
  -----------------------------------------------------------------------------
  Type Conversion and Coercion (05:20)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a variable `numString` and assign it the string value "123".
  2. Create a variable `num` and assign it the number value 456.
  3. Log the result of adding `numString` and `num` using the `+` operator.
     Observe how JavaScript performs type coercion.
  4. Use the `Number()` function to explicitly convert `numString` to a 
     number and store it in a variable called `convertedNum`.
  5. Log the result of adding `convertedNum` and `num`.
  6. Use the `String()` function to convert `num` to a string and store it 
     in a variable called `numToString`.
  7. Concatenate the `numToString` and the original `numString`
*/

let numString = "123";
let num = 456;

console.log("Type coercion:", numString + num);

let convertedNum = Number(numString);
console.log("Explicit conversion (addition):", convertedNum + num);

let numToString = String(num);
console.log("Explicit conversion (concatenation):", numString + numToString);

/*
  -----------------------------------------------------------------------------
  Truthy and Falsy Values (16:40)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a variable `itemsInCart` and assign it a number representing the 
     number of items in a shopping cart.
  2. Use an `if` statement and the concept of truthy/falsy values to check if 
     the cart is empty.
  3. Log "Cart is empty." if it's empty, and "Cart has items." if it's not.
  4. Test with different values like 0, 1, and other numbers.
  5. Test with an empty string "" and a non-empty string like "hello", and log the results.
*/

let itemsInCart = 0;

if (itemsInCart) {
    console.log("Cart has items.");
} else {
    console.log("Cart is empty.");
}

itemsInCart = 5;
if (itemsInCart) {
    console.log("Cart has items.");
} else {
    console.log("Cart is empty.");
}

itemsInCart = "";
if (itemsInCart) {
    console.log("Cart has items.");
} else {
    console.log("Cart is empty.");
}

itemsInCart = "hello";
if (itemsInCart) {
    console.log("Cart has items.");
} else {
    console.log("Cart is empty.");
}
/*
  -----------------------------------------------------------------------------
  Equality Operators: == vs. === (10:03)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a variable `a` and assign it the number value 5.
  2. Create a variable `b` and assign it the string value "5".
  3. Use the `==` operator to compare `a` and `b`. Log the result and explain 
     why it's `true` or `false`.
  4. Use the `===` operator to compare `a` and `b`. Log the result and explain
     why it's `true` or `false`.
*/

let a = 5;
let b = "5";

console.log("a == b:", a == b); // true because of type coercion
console.log("a === b:", a === b); // false because types are different

/*
  -----------------------------------------------------------------------------
  Boolean Logic (15:41) & Logical Operators (08:30)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create two boolean variables, `isRaining` and `hasUmbrella`.
  2. Use the logical AND operator (`&&`) to determine if you should go out. 
     Log "You should go out." if it's not raining or you have an umbrella, 
     otherwise, log "You should stay inside."
  3. Use the logical OR operator (`||`) to determine if you are prepared for 
     rain. Log "You are prepared for rain." if it's not raining or you have 
     an umbrella, otherwise log "You are not prepared for rain.".
  4. Use the logical NOT operator (`!`) to invert the value of `isRaining` and
     log the result.
*/

let isRaining = true;
let hasUmbrella = false;

if (!isRaining || hasUmbrella) {
    console.log("You should go out.");
} else {
    console.log("You should stay inside.");
}

if (!isRaining || hasUmbrella) {
    console.log("You are prepared for rain.");
} else {
    console.log("You are not prepared for rain.");
}

console.log("It is not raining:", !isRaining);

/*
  -----------------------------------------------------------------------------
  The switch Statement (11:42)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a variable called `dayOfWeek` and assign it a number from 1 to 7 
     (1 for Monday, 2 for Tuesday, etc.).
  2. Use a `switch` statement to log the name of the day corresponding to the 
     number.
  3. Include a `default` case to handle invalid values and log "Invalid day 
     number."
*/

let dayOfWeek = 3;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day number";
}

console.log(dayName);

/*
  -----------------------------------------------------------------------------
  Statements and Expressions (13:10)
  -----------------------------------------------------------------------------
  No new coding exercise for this section. Review the concepts of statements 
  and expressions in JavaScript.
*/

/*
  -----------------------------------------------------------------------------
  The Conditional (Ternary) Operator (06:08)
  -----------------------------------------------------------------------------
  Exercise:
  1. Revisit the adult/minor exercise from the if/else section
  2. Create a variable called `message` and use the ternary operator to assign it 
     the value "You are an adult." if `age` is greater than or equal to 18, 
     and "You are a minor." otherwise.
  3. Log the value of `message`.
*/

age = 15;
let message = age >= 18 ? "You are an adult." : "You are a minor.";
console.log(message);

/*
  -----------------------------------------------------------------------------
  Functions (10:27)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a function called `greet` that takes a `name` as an argument.
  2. Inside the function, log the message "Hello, [name]!" to the console, 
     where [name] is the value of the argument.
  3. Call the `greet` function with your name as the argument.
*/

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Your Name");

/*
  -----------------------------------------------------------------------------
  Function Declarations vs. Expressions (19:08)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a function declaration called `add` that takes two numbers as 
     arguments and returns their sum.
  2. Create a function expression called `subtract` that takes two numbers as
     arguments and returns their difference.
  3. Call both functions with sample values and log the results.
*/

// Function declaration
function add(a, b) {
    return a + b;
}

// Function expression
const subtract = function (a, b) {
    return a - b;
};

console.log("Addition:", add(5, 3));
console.log("Subtraction:", subtract(10, 4));

/*
  -----------------------------------------------------------------------------
  Arrow Functions (10:39)
  -----------------------------------------------------------------------------
  Exercise:
  1. Convert the `add` function from the previous exercise into an arrow 
     function.
  2. Create an arrow function called `multiply` that takes two numbers as 
     arguments and returns their product.
  3. Call both arrow functions with sample values and log the results.
*/

// Arrow function for addition
const addArrow = (a, b) => a + b;

// Arrow function for multiplication
const multiply = (a, b) => a * b;

console.log("Addition (arrow):", addArrow(2, 7));
console.log("Multiplication (arrow):", multiply(6, 3));

/*
  -----------------------------------------------------------------------------
  Functions Calling Other Functions (09:52)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a function called `get ক্ষেত্রফল` (getArea in english) that takes `width` and `height` as 
     arguments and returns the area of a rectangle.
  2. Create a function called `displayArea` that takes `width` and `height` as
     arguments.
  3. Inside `displayArea`, call `getArea` to calculate the area.
  4. Inside `displayArea`, log the area to the console in a user-friendly 
     format (e.g., "The area of the rectangle is: [area]").
  5. Call `displayArea` with sample values.
*/

function getArea(width, height) {
    return width * height;
}

function displayArea(width, height) {
    const area = getArea(width, height);
    console.log(`The area of the rectangle is: ${area}`);
}

displayArea(5, 8);

/*
  -----------------------------------------------------------------------------
  Introduction to Arrays (14:10)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create an array called `fruits` and initialize it with the names of 
     three of your favorite fruits.
  2. Log the entire `fruits` array.
  3. Access the second element of the array (index 1) and log it.
  4. Change the value of the first element (index 0) to a different fruit.
  5. Log the updated `fruits` array.
*/

let fruits = ["Mango", "Banana", "Apple"];
console.log("Fruits array:", fruits);
console.log("Second fruit:", fruits[1]);

fruits[0] = "Orange";
console.log("Updated fruits array:", fruits);

/*
  -----------------------------------------------------------------------------
  Basic Array Operations (Methods) (21:34)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create an array called `tasks` with some initial task descriptions (strings).
  2. Use the `push()` method to add a new task to the end of the array.
  3. Use the `pop()` method to remove the last task from the array.
  4. Use the `unshift()` method to add a new task to the beginning of the array.
  5. Use the `shift()` method to remove the first task from the array.
  6. Use `indexOf()` method to find the index of the task "Pay bills".
  7. Log the `tasks` array after each operation.
*/

let tasks = ["Grocery shopping", "Pay bills", "Book doctor appointment"];
console.log("Initial tasks:", tasks);

tasks.push("Walk the dog");
console.log("After push:", tasks);

tasks.pop();
console.log("After pop:", tasks);

tasks.unshift("Schedule meeting");
console.log("After unshift:", tasks);

tasks.shift();
console.log("After shift:", tasks);

console.log("Index of 'Pay bills':", tasks.indexOf("Pay bills"));

/*
  -----------------------------------------------------------------------------
  Introduction to Objects (06:54)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create an object called `person` with the following properties:
     - `firstName` (string)
     - `lastName` (string)
     - `age` (number)
  2. Assign appropriate values to the properties.
  3. Log the entire `person` object.
*/

let person = {
    firstName: "Alice",
    lastName: "Smith",
    age: 30,
};

console.log("Person object:", person);

/*
  -----------------------------------------------------------------------------
  Dot vs. Bracket Notation (06:08)
  -----------------------------------------------------------------------------
  Exercise:
  1. Access the `firstName` property of the `person` object using dot notation
     and log it.
  2. Access the `lastName` property of the `person` object using bracket 
     notation and log it.
  3. Add a new property called `city` to the `person` object using either dot 
     or bracket notation and assign it a value.
  4. Change the value of the `age` property using either notation.
  5. Log the updated `person` object.
*/

console.log("First name (dot notation):", person.firstName);
console.log("Last name (bracket notation):", person["lastName"]);

person.city = "New York"; // Using dot notation
person["age"] = 31; // Using bracket notation

console.log("Updated person object:", person);

/*
  -----------------------------------------------------------------------------
  Object Methods (19:21)
  -----------------------------------------------------------------------------
  Exercise:
  1. Add a method called `greet` to the `person` object.
  2. The `greet` method should log the message "Hello, my name is 
     [firstName] [lastName]." to the console, where [firstName] and 
     [lastName] are the values of the corresponding properties.
  3. Call the `greet` method of the `person` object.
*/

person.greet = function () {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
};

person.greet();

/*
  -----------------------------------------------------------------------------
  Iteration: The for Loop (09:50)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create an array called `numbers` with the numbers 1 through 5.
  2. Use a `for` loop to iterate over the `numbers` array.
  3. Inside the loop, log each number to the console.
*/

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

/*
  -----------------------------------------------------------------------------
  Looping Arrays, Breaking and Continuing (11:11)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create an array called `scores` with some numerical scores.
  2. Use a `for` loop to iterate over the `scores` array.
  3. Inside the loop:
     - If a score is greater than 90, log "Excellent!" and `break` out of 
       the loop.
     - If a score is less than 60, log "Needs improvement." and `continue` to
       the next iteration.
     - Otherwise, log the score.
*/

let scores = [75, 82, 95, 55, 68, 43, 88];

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 90) {
        console.log("Excellent!");
        break;
    }

    if (scores[i] < 60) {
        console.log("Needs improvement.");
        continue;
    }

    console.log(scores[i]);
}

/*
  -----------------------------------------------------------------------------
  Looping Backwards and Loops in Loops (22:02)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a 2D array called `matrix` with 3 rows and 3 columns, filled with 
     numbers.
  2. Use nested `for` loops to iterate over the `matrix`:
     - The outer loop should iterate over the rows.
     - The inner loop should iterate over the columns.
  3. Inside the inner loop, log the value of each element in the `matrix`.
  4. Modify the outer loop to iterate over the rows in reverse order.
*/

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

console.log("Iterating forwards:");
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

console.log("Iterating backwards:");
for (let i = matrix.length - 1; i >= 0; i--) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

/*
  -----------------------------------------------------------------------------
  The while Loop (11:53)
  -----------------------------------------------------------------------------
  Exercise:
  1. Create a variable called `counter` and initialize it to 0.
  2. Use a `while` loop to log the value of `counter` as long as it's less 
     than 5.
  3. Increment `counter` by 1 in each iteration.
*/

let counter = 0;

while (counter < 5) {
    console.log(counter);
    counter++;
}
