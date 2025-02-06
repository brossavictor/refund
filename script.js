const form = document.querySelector("form");

const expenseList = document.querySelector("ul");
const expensesQuantity = document.querySelector("aside header p span");
const expensesTotal = document.querySelector("aside header h2");

const amount = document.getElementById("amount");
const expense = document.getElementById("expense");
const category = document.getElementById("category");

amount.oninput = () => {
  let value = amount.value.replace(/\D/g, "");

  value = Number(value) / 100;

  amount.value = formatCurrencyCAD(value);
};

function formatCurrencyCAD(value) {
  value = value.toLocaleString("en", {
    style: "currency",
    currency: "CAD",
  });

  return value;
}

form.onsubmit = (event) => {
  event.preventDefault();

  const newExpense = {
    id: new Date().getTime(),
    expense: expense.value,
    category_id: category.value,
    category_name: category.options[category.selectedIndex].text,
    amount: amount.value,
    created_at: new Date(),
  };

  addExpense(newExpense);
  form.reset();
  expense.focus();
};

function addExpense(newExpense) {
  const expenseItem = document.createElement("li");
  expenseItem.classList.add("expense");

  const expenseIcon = document.createElement("img");
  expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`);
  expenseIcon.setAttribute("alt", newExpense.category_name);

  const expenseInfo = document.createElement("div");
  expenseInfo.classList.add("expense-info");

  const expenseName = document.createElement("strong");
  const firstLetter = newExpense.expense[0].toUpperCase();
  const remainingLetters = newExpense.expense.slice(1).toLowerCase();

  expenseName.textContent = firstLetter + remainingLetters;
  console.log(expenseName.textContent);

  const expenseCategory = document.createElement("span");
  expenseCategory.textContent = newExpense.category_name;

  const expenseAmount = document.createElement("span");
  expenseAmount.classList.add("expense-amount");
  expenseAmount.innerHTML = `<small>CA$</small>${newExpense.amount
    .toUpperCase()
    .replace("CA$", "")}`;

  const removeIcon = document.createElement("img");
  removeIcon.classList.add("remove-icon");
  removeIcon.setAttribute("src", "img/remove.svg");
  removeIcon.setAttribute("alt", "remove");

  expenseInfo.append(expenseName, expenseCategory);
  expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon);
  expenseList.append(expenseItem);

  updateTotals();
}

function updateTotals() {
  const items = expenseList.children;

  expensesQuantity.textContent = `${items.length} ${
    items.length > 1 ? "expenses" : "expense"
  }`;

  let total = 0;

  for (let item = 0; item < items.length; item++) {
    const itemAmount = items[item].querySelector(".expense-amount");

    let value = itemAmount.textContent.replace(/[^0-9.]/g, "");
    value = parseFloat(value);

    if (isNaN(value)) {
      throw new Error("The value is not a number.");
    }

    total += Number(value);
  }

  const isoSymbol = document.createElement("small");
  isoSymbol.textContent = "CA$";

  total = formatCurrencyCAD(total).toUpperCase().replace("CA$", "");
  expensesTotal.innerHTML = "";

  expensesTotal.append(isoSymbol, total);
}

expenseList.addEventListener("click", function (event) {
  if (event.target.classList.contains("remove-icon")) {
    const item = event.target.closest(".expense");
    item.remove();

    updateTotals();
  }
});
