// a. add eventListener with callback function
const logo = document.querySelector("header");
logo.addEventListener("click", e => {
    console.log(e);
    console.log(e.currentTarget);
});
// b. rewrite to callback function
function onClick(e) {
    console.log(e.target); //return element that trigger the event, in this case is img
    console.log(e.currentTarget); //element that event is attached to, in this case is img
    e.target.style.backgroundColor = "red";
    //from the element position
    console.log(e.clientX); 
    console.log(e.clientY); 
    //from the element position
    console.log(e.offsetX); 
    console.log(e.offsetY);
}
logo.addEventListener("click", onClick);

document.querySelector("a").addEventListener("click", (e) => {
    e.preventDefault();
    console.log("link is clicked");
});

function onDrag(e) {
    document.querySelector("h1").textContent = `x:${e.clientX}, y:${e.clientY}`;
}
logo.addEventListener("drag",onDrag);