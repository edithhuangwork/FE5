function createNewItem(item) {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    // const button = createButton("remove-item btn-link text-red");
    // const icon = createIcon("fa-solid fa-xmark");
    const button = createItem("remove-item btn-link text-red");
    const icon = createItem("fa-solid fa-xmark");
    button.appendChild(icon);
    li.appendChild(button);
    document.querySelector(".items").appendChild(li);
}
createNewItem("Baguette");
function createItem(classes, element) {
    const item = document.createElement("element");
    item.className = classes;
    return item;
}
// createListItem("Baguette");
// function createButton(classes) {
//     const button = document.createElement("button");
//     button.className = classes;
//     return button;
// }
// function createIcon(element) {
//     const Icon = document.createElement("i");
//     Icon.className = element;
//     return Icon;
// }