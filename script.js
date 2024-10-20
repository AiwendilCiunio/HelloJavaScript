let root = document.getElementById("root");
let header = document.createElement("header");
let logo = document.createElement("h1");

logo.innerText = "Hello";

console.log("HELLO");

header.appendChild(logo);
root.appendChild(logo);

let main = document.createElement("main");

main.style.width = "300px";
main.style.minHeight = "200px";
main.style.backgroundColor = "brown";

//let textField = document.createElement("p");

function createParagraf () {
    let textField = document.createElement("p");
    textField.innerText = ("Jag heter Maciej Kozendra och jag ar en idiot. Hej.");
    textField.classList.add("textField");
    main.appendChild(textField);
   
}

let button = document.createElement("button");
button.innerText = "Create a paragraph";

button.addEventListener("click", () => {
    createParagraf();
})
main.appendChild(button);

let goodThings = ["Sleeping", "Eating", "Drinking"];
let list = document.createElement("ul");
for (let goodThing of goodThings) {
    let li = document.createElement("li");
    li.innerText = goodThing;

    list.appendChild(li);
}

main.appendChild(list);

root.appendChild(main);
