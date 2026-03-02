function insertElement() {
    const filter = document.querySelector(".filter"); //querySelector 找class，ie找class=filter，然後插入h1
    const h1 = document.createElement("h1");
    h1.textContent = "insertAdjacentElement";
    // filter.insertAdjacentElement("beforebegin", h1);
    filter.insertAdjacentElement("afterbegin, h1");
    const h1after = document.createElement("h1");
    h1after.textContent = "insertAdjacentElement";
    // const filter1 = document.querySelector(".filter");
    // filter1.insertAdjacentElement("afterend", h1after);
    filter1.insertAdjacentElement("beforeend", h1after);
}
insertElement();