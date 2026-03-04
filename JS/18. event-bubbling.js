const button = document.querySelector("form button");
const div = document.querySelector("form div:nth-child(2)");
const form = document.querySelector("form");

button.addEventListener("click", (e) => {
    alert("button was clicked");
    e.stopPropagation(); 
    //stop the event from bubbling upp to the parent elements
});
div.addEventListener("click", (e) => {
    alert("div is clicked");
});
form.addEventListener("click", (e) => {
    alert("form is clicked");
});
// document.body.addEventListener("click", (e) => {
//     alert("body is clicked");
// });

// method 1. loop through all the list items and add a click event listener to each of them
const listItems = document.querySelectorAll("li");
listItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        e.target.remove();
    });
});
// method 2. add single event listener on parent
const list = document.querySelector("ul");
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.remove();
    }
});