"use strict";

const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("num-of-ppl-input");
const selectInput = document.getElementById("select-tips-input");
const five = document.getElementById("five");
const ten = document.getElementById("ten");
const fifteen = document.getElementById("fifteen");
const twentyfive = document.getElementById("twentyfive");
const fifty = document.getElementById("fifty");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const error = document.getElementById("no-zero");
const reset = document.getElementsByClassName("reset")[0];

const getValue = (num) => {
  let billInputValue = Number(billInput.value);
  let peopleInputValue = Number(peopleInput.value);
  let tipAmountFormula = ((billInputValue * num) / 100 / peopleInputValue).toFixed(2);
  let totalAmountFormula = Number(billInputValue / peopleInputValue + Number(tipAmountFormula)).toFixed(2);
  tipAmount.textContent = "$" + billInput;
  if (peopleInputValue != 0) {
    tipAmount.textContent = "$" + tipAmountFormula;
    totalAmount.textContent = "$" + totalAmountFormula;
    error.style.display = "none";
    peopleInput.style.border = "none";
  } else if (peopleInputValue == "0") {
    tipAmount.textContent = "$0.00";
    error.style.display = "block";
    peopleInput.style.border = "solid 2px #E17052";
  }
};

const forSelectInput = () => {
  let billInputValue = Number(billInput.value);
  let selectInputValue = Number(selectInput.value);
  let peopleInputValue = Number(peopleInput.value);
  let tipAmountFormula = ((billInputValue * selectInputValue) / 100 / peopleInputValue).toFixed(2);
  let totalAmountFormula = Number(billInputValue / peopleInputValue + Number(tipAmountFormula)).toFixed(2);
  if (peopleInputValue != 0) {
    tipAmount.textContent = "$" + tipAmountFormula;
    totalAmount.textContent = "$" + totalAmountFormula;
    error.style.display = "none";
    peopleInput.style.border = "none";
  } else if (peopleInputValue == "0") {
    error.style.display = "block";
    peopleInput.style.border = "solid 2px #E17052";
  }
};


five.addEventListener("click", () => {
  getValue(5);
  billInput.addEventListener("input", () => {
    return getValue(5);
  });
  peopleInput.addEventListener("input", () => {
    getValue(5)
  });
});

ten.addEventListener("click", () => {
  getValue(10);
  billInput.addEventListener("input", () => {
    return getValue(10);
  });
  peopleInput.addEventListener("input", () => {
    getValue(10)
  });
});

fifteen.addEventListener("click", () => {
  getValue(15);
  billInput.addEventListener("input", () => {
    return getValue(15);
  });
  peopleInput.addEventListener("input", () => {
    getValue(15)
  });
});

twentyfive.addEventListener("click", () => {
  getValue(25);
  billInput.addEventListener("input", () => {
    return getValue(25);
  });
  peopleInput.addEventListener("input", () => {
    getValue(25)
  });
});

fifty.addEventListener("click", () => {
  getValue(50);
  billInput.addEventListener("input", () => {
    return getValue(50);
  });
  peopleInput.addEventListener("input", () => {
    getValue(50)
  });
});

selectInput.addEventListener("input", () => {
  let selectInputValue = Number(selectInput.value);
  forSelectInput();
  peopleInput.addEventListener("input", () => {
    getValue(selectInputValue);
  });
});
selectInput.addEventListener("click", forSelectInput);

reset.addEventListener("click", () => {
  billInput.value = null;
  peopleInput.value = null;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  selectInput.value = null;
  error.style.display = "none";
  peopleInput.style.border = "none";
});
