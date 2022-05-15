"use strict";

var text = document.querySelector(".text");
var btn = document.querySelector(".btn");
var taskContainer = document.querySelector(".tasks-container");

btn.addEventListener("click", function () {
  var txtValue = text.value;

  var task = document.createElement("div");
  task.classList.add("task");

  var parag = document.createElement("input");
  parag.type = "text";
  parag.value = txtValue;
  parag.setAttribute("readonly", "readonly");
  parag.classList.add("parag");
  task.appendChild(parag);

  var editBox = document.createElement("div");
  editBox.classList.add("boxList");

  var edit = document.createElement("button");
  edit.textContent = "edit";
  edit.classList.add("edit");

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  deleteBtn.classList.add("delete");
  deleteBtn.value = "delete";

  taskContainer.appendChild(task);

  editBox.appendChild(edit);
  editBox.appendChild(deleteBtn);
  task.appendChild(editBox);

  edit.addEventListener("click", function () {
    if (edit.innerText.toLowerCase() == "edit") {
      edit.innerText = "Save";
      parag.classList.add("paragPress");
      parag.removeAttribute("readonly");
      parag.focus();
    } else {
      edit.innerText = "Edit";
      parag.classList.remove("paragPress");
      parag.setAttribute("readonly", "readonly");
    }
  });

  deleteBtn.addEventListener("click", () => {
    taskContainer.removeChild(task);
  });
});
