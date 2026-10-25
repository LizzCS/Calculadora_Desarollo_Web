function parser(expression) {
  const numbers = expression.split(/[+\-*/]/);
  const operators = expression.match(/[+\-*/]/g);

  let result = Number(numbers[0]);

  for (let i = 0; i < operators.length; i++) {
    const nextNumber = Number(numbers[i + 1]);

    if (operators[i] === "+") {
      result = addition(result, nextNumber);
    } else if (operators[i] === "-") {
      result = subtraction(result, nextNumber);
    }
  }

  return result;
}

function addition(num1, num2) {
  return num1 + num2;
}
