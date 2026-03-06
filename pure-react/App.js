// example 4
const App = () => {
    return React.createElement(
        "div",
        { style: { color: "red" } }, [
        H1({name: "mohamed", age: 20, gender: "male"}),
        H1({name: "ahmed", age: 20, gender: "male"}),
        H1({name: "ali", age: 20, gender: "female"}),
        ]
    );
};
const H1 = ({name, age, gender}) => {
    age = age +1; // functional part
    return [
    React.createElement("p", null, name), 
    React.createElement("p", null, age), 
    React.createElement("p", null, gender),
    ]; //jsx part => html
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

