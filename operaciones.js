function parser(expression) {
  if (/[+\-*/]{2,}/.test(expression)) {
    return "Error!";
  }

  if (/^[+*/]/.test(expression)) {
    return "Error!";
  }

  if (/[+\-*/]$/.test(expression)) {
    return "Error!";
  }

  const numbers = expression.split(/[+\-*/]/).map(Number);
  const operators = expression.match(/[+\-*/]/g) || [];

  for (let i = 0; i < operators.length; i++) {
    if (operators[i] === "/") {
      const divisionResult = division(numbers[i], numbers[i + 1]);

      if (divisionResult === "Error!") {
        return "Error!";
      }

      numbers[i] = divisionResult;
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    } else if (operators[i] === "*") {
      numbers[i] = multiplication(numbers[i], numbers[i + 1]);
      numbers.splice(i + 1, 1);
      operators.splice(i, 1);
      i--;
    }
  }

  let result = numbers[0];

  for (let i = 0; i < operators.length; i++) {
    const nextNumber = numbers[i + 1];

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

function subtraction(num1, num2) {
  return num1 - num2;
}

function division(num1, num2) {
  if (num2 === 0) {
    return "Error!";
  }
  return num1 / num2;
}
