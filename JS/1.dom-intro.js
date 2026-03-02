console.log(window);
console.dir(window.document);
console.log(document.body);
console.log(document.links[0]);
// insert element inside element 會蓋過了所有原本html的東西
// document.body.innerHTML="<h1>hello from body</h1>";
// inspect text portion of html element
// console.log(document.body.innerText);
//  write something into document
// document.write("Hello form JS");
// document.getElementById("main")只蓋過id=“main”的東西(i.e h1&a href) vs document.body 連js都會蓋過
document.getElementById("main").innerHTML="<h1>hello from body</h1>";
document.querySelector("#main h1").innerHTML="Hello";