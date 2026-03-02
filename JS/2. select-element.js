// case a: get single element from the dom
console.log(document.getElementById("app-title"));
// case b: get element attributes by dot notation
console.log(document.getElementById("app-title").id);
console.log(document.getElementById("app-title").className);
// case c: get attributes by getAttribute method
console.log(document.getElementById("app-title").getAttribute("id"));
console.log(document.getElementById("app-title").getAttribute("class"));
//  case d: update attributes by dot notation
document.getElementById("app-title").id = "new-title";
document.getElementById("new-title").className = "text-red";
// case e: update attributes by setAttribute method
document.getElementById("new-title").setAttribute("id", "app-title");
document.getElementById("app-title").setAttribute("class", "text-green");
// case f: save the element to a variable for various operations
const title = document.getElementById("app-title");
console.log(title.textContent);
// html text - faster and direct access
title.textContent = "Hello World";
// inner text - slower and involve css style calculation
title.innerText = "Hello again";
// inner html - can insert html tags in string format
title.innerHTML = "<strong>Shopping List</strong>";
// case g: update css style by dot notation change css properties in camelCase
title.style.color = "blue";
title.style.fontSize = "40px";
title.style.backgroundColor = "yellow";