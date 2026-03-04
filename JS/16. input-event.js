const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");
function onInput(e) {
    heading.textContent = e.target.value;
}
itemInput.addEventListener("input", onInput);

function onChecked(e) {
    const isChecked = e.target.checked;
    if (isChecked) {
        heading.textContent = "Recurring Item";
    } else {
        heading.textContent = itemInput.value;
    }
}
checkbox.addEventListener("change", onChecked);

function onFocus() {
    itemInput.style.backgroundColor = "lightYellow";
    itemInput.style.outlineStyle = "solid";
    itemInput.style.outlineStyle = "yellow";
    itemInput.style.outlineWidth = "5px";
}
function onBlur() {
    console.log("Input is blurred");
    itemInput.style.backgroundColor = "white";
    itemInput.style.outlineStyle = "none";
}
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
priorityInput.addEventListener("change", onInput);