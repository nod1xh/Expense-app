const nameInput = document.getElementById("name");
let amountInput = document.getElementById("number");
const addBtn = document.getElementById("btn");
const lista = document.getElementById("list");

const createExpense = () => {
  const expenseItem = document.createElement("li");
  expenseItem.innerText = nameInput.value;
  expenseItem.style.border = "1px solid #018786";

  let pr = document.createElement("span");
  pr.innerText = `$${amountInput.value}`;
  expenseItem.appendChild(pr);

  const btnT = createButton("fa-solid fa-trash-can fa-1x");
  expenseItem.appendChild(btnT);

  if (amountInput.value === "") {
    alert("Please add expense");
  } else if (nameInput.value === "") {
    alert("Please add an item");
  } else {
    lista.appendChild(expenseItem);
  }

  const clearAll = () => {
    expenseItem.remove();
  };

  btnT.addEventListener("click", clearAll);
};

function createButton(classes) {
  const btnT = document.createElement("button");
  btnT.className = classes;
  return btnT;
}

function createButton2(classes) {
  const btnEdit = document.createElement("button");
  btnEdit.className = classes;
  return btnEdit;
}

addBtn.addEventListener("click", createExpense);
