// Your Code Here
async function main() {
  let response = await fetch("http://localhost:3001/listBooks");
  let books = await response.json();
  books.forEach(makeBook);
}

function makeBook(book) {
  let root = document.querySelector("#root");

  let li = document.createElement("li");
  li.textContent = book.title;

  let inputNum = document.createElement("input");
  inputNum.value = book.quantity;

  let saveButton = document.createElement("button");
  saveButton.textContent = "Save";
  saveButton.addEventListener("click", () => {
    fetch("http://localhost:3001/updateBook", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: book.id,
        quantity: inputNum.value,
      }),
    });
  });

  li.append(inputNum, saveButton);
  root.append(li);
}

main();
