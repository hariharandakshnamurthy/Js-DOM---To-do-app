const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add click event listener
addBtn.addEventListener("click", () => {
  const task = input.value.trim();

  if (task === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = task;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  // Append button to list item
  li.appendChild(deleteBtn);

  // Append list item to the list
  todoList.appendChild(li);

  // Clear input
  input.value = "";

  // Delete task on click
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
});
