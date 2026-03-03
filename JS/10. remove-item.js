// remove single item: 2 methods
// method 1:
function removeClearButton() {
    const clearBtn = document.querySelector("#clear"); //搜尋id: clear
    clearBtn.remove();
}
removeClearButton();
// method 2:
function removeFirstChild() {
    const ul = document.querySelector("ul");
    const li = document.querySelector("li:first-child");
    ul.removeChild(li);
}
removeFirstChild();

// remove group of items
function removeItemGroup() {
    const li = document.querySelectorAll("li")
    li.forEach((item, index) => {
        if (index % 2 === 0) item.remove();
    });
}
removeItemGroup();