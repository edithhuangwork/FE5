// replace single item:(2 methods)
// method 1:
function replaceFirstItem() {
    const firstItem = document.querySelector("li:first-child");
    const li = document.createElement("li");
    li.textContent = "Replaced First";
    firstItem.replaceWith(li);
}
replaceFirstItem();
// method 2:
function replaceSecondItem(item) {
    const secondItem = document.querySelector(`li:nth-child(${item})`);
    secondItem.outerHTML = `<li>Replaced Second</li>`;
}
replaceSecondItem(2);

// replace group of items
function replaceAllItems() {
    const items = document.querySelectorAll("li");
    items.forEach((item) => {
        item.outerHTML = `<li>Replaced All</li>`
    });
}
// replaceAllItems();

function replaceAllItems() {
    const items = document.querySelectorAll("li");
    items.forEach((item, index) => {
        item.outerHTML = index % 2 ? `<li>Replaced All</li>`:`<li>Replaced</li>`
    });
}
replaceAllItems();
// function replaceAllItems() {
//     const oddItems  = document.querySelectorAll("li:nth-child(odd)");
//     const evenItems = document.querySelectorAll("li:nth-child(even)");
//     oddItems.forEach(item => {
//         item.outerHTML = `<li>Replaced</li>`;
//     });
//     evenItems.forEach(item => {
//         item.outerHTML = `<li>Replaced All</li>`;
//     });
// }
// replaceAllItems();

// from parent replace child with new element
function replaceChildHeading() {
    const header = document.querySelector("header");
    const h1 = document.querySelector("h1"); //搜尋
    const h2 = document.createElement("h2"); //新增
    h2.id = "new-app-title"; //新增id
    h2.textContent = "Shopping List App"; //新增內容
    header.replaceChild(h2, h1);
}
replaceChildHeading();