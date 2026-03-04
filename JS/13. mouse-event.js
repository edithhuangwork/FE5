const logo = document.querySelector("img");
const onClick = () => console.log("click event");
logo.addEventListener("click", onClick);

const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== "purple") {
        document.body.style.backgroundColor = "purple";
        document.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.style.color = "black";
    }
};
logo.addEventListener("dblclick", onDoubleClick);

const onRightClick = () => console.log("right click event");
logo.addEventListener("contextmenu", onRightClick);

const onMouseDown = () => console.log("mouse down event");
logo.addEventListener("mousedown", onMouseDown);

const onMouseUp = () => console.log("mouse up event");
logo.addEventListener("mouseup", onMouseUp);

const onMouseWheel = () => console.log("mouse wheel event");
logo.addEventListener("wheel", onMouseWheel);

const onMouseOver  = () => console.log("mouse over event");
logo.addEventListener("mouseover", onMouseOver);

const onDrag  = () => console.log("drag event");
logo.addEventListener("drag", onDrag);

const onDragStart  = () => console.log("drag start event");
logo.addEventListener("dragstart", onDragStart);

const onDragEnd  = () => console.log("drag end event");
logo.addEventListener("dragend", onDragEnd);
