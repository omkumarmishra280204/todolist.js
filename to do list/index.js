let input = document.querySelector("#to-do");
let addBtn = document.querySelector("#add-btn");
let addlistbtn = document.querySelector("#list");

addBtn.addEventListener("click", function () {

    let value = input.value;
    let li = document.createElement("li");
    li.innerHTML = value;

    let delvtn = document.createElement("button");
    delvtn.innerHTML = "X";
    addlistbtn.appendChild(li);
    input.value = '';
    

    li.appendChild(delvtn);
    delvtn.addEventListener("click", function () {
        li.remove();
    })

     








})