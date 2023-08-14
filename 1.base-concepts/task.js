function solveEquation(a, b, c) {
  let arr = [];

  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (percent > 0) {
    percent = +percent;
  } else if (percent != 0 || percent == 0) {
    return `"Параметр "Процентная ставка" содержит неправильное значение ${percent}".`;
  }

  if (contribution >= 0) {
    contribution = +contribution;
  } else if (contribution != 0) {
    return `"Параметр "Начальный взнос" содержит неправильное значение ${contribution}".`;
  }

  if (amount >= 0) {
    amount = +amount;
  } else if (amount != 0) {
    return `"Параметр "Общая стоимость" содержит неправильное значение ${amount}".`;
  }
  let returnAmount = amount - contribution;
  percent = percent / 1200;
  let monthlyPay =
    amount * (percent + percent / ((1 + percent) ** countMonths - 1));
  let totalAmount = monthlyPay * countMonths;
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2);
}
