//assigment 03: javascript:
document.querySelector("button").addEventListener("click", addDivBtn);

let boxes = 0;

function addDivBtn() {
    if(boxes < 10){
        boxes++;

        let box = document.createElement("div");
        box.classList.add("block");

        let boxInnerText = document.createElement("p");
        boxInnerText.innerHTML = boxes;
        box.appendChild(boxInnerText);

        document.getElementById("assignment-03").appendChild(box);
    } else{
        alert("You can only add 10 boxes")
    }
}