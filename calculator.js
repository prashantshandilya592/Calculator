const Number1 = parseFloat(prompt("Enter first number: "));

// take the operand input

const operator = prompt("Enter operator ( +, -, * or / ): ");

const Number2 = parseFloat(prompt("Enter second number: "));

let result;

// using if...else if... else

   if (operator == "+") {
      result = Number1 + Number2;

  } else if (operator == "-") {
      result = Number1 - Number2;

  } else if (operator == "*") {
      result = Number1 * Number2;

  } else {
      result = Number1 / Number2;
}

// display the result

console.log(`${Number1} ${operator} ${Number2} = `, result);