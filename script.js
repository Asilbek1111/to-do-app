let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
let myList = document.querySelector("#myList");

btn.addEventListener("click", function () {
  if (text.value.length > 1) {
    //big box

    var bBox = document.createElement("div");
    myList.appendChild(bBox);

    // LI ITEM
    var newItem = document.createElement("li");
    newItem.style.display = "flex";
    newItem.style.alignItems = "center";
    newItem.style.display = "flex";
    newItem.style.justifyContent = "space-between";
    myList.appendChild(newItem);

    //PARAGRAPH BOX
    var pBox = document.createElement("div");
    pBox.style.display = "inline-block";
    pBox.style.display = "flex";
    pBox.style.alignItems = "center";
    bBox.appendChild(pBox);

    // PARAGRAPH
    var parag = document.createElement("p");
    parag.textContent = text.value;
    pBox.appendChild(parag);

    //BOX OF BUTTONS
    var box = document.createElement("div");
    bBox.appendChild(box);
    box.style.display = "inline-block";
    box.style.display = "flex";
    box.style.alignItems = "center";

    //UPDATE BUTTON
    var update = document.createElement("button");
    update.textContent = "Update";
    update.style.marginRight = "10px";
    box.appendChild(update);

    //CANCEL BUTTON
    var newBtn = document.createElement("button");
    newBtn.textContent = "X";
    newBtn.style.padding = "8px 10px";
    newBtn.style.backgroundColor = "dodgerblue";
    newBtn.style.border = "none";
    newBtn.style.borderRadius = "50%";
    newBtn.style.color = "#fff";
    newBtn.style.cursor = "pointer";
    box.appendChild(newBtn);
  }

  //CANCEL ONCLICK
  newBtn.onclick = () => {
    parag.classList.toggle("check");
  };

  update.addEventListener("click", function () {
    parag.style.display = "none";
    var inp = document.createElement("input");
    pBox.appendChild(inp);
    update.innerHTML = "Save";

    update.addEventListener("click", function () {
      inp.style.display = "none";
      var newText = inp.value;
      parag.style.display = "block";
      parag.textContent = newText;
    });
  });
});
