// select multiple elements and return a NodeList (array-lke object)
//  a. select by className
const listItems = document.querySelectorAll(".item");
// return NodeList
console.log(listItems);
// listItems.style.color = "red"; // wont work becoz listItems is a NodeList, not an element
// get all text content including children
console.log(listItems[0].innerText);
// get first element in the NodeList and change its color to red
listItems[0].style.color = "red";
listItems.forEach((item, index) => {
    item.style.color = "blue";
    if (index === 1) {
        item.remove();
    }
    if (index === 0) {
        // be careful: replace the html structure with text content
        item.innerText = "orange";
        // copy the complete html structure insert by innHTML
        item.innerHTML = `Orange
                    <button class="remove-item btn-link text-red">
                        <i class="fa-solid fa-xmark"></i>
                    </button>`;
    }
});
// Nodelist has internal forEach, HTMLCollection doesnt have forEach, but we can convert it to an array and use forEach