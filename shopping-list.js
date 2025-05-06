const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-btn");
const list = document.getElementById("list");

let itemsCounter = 0; // to generate ids for list elements

function addListElement() {
    const newElement = document.createElement("li");
    newElement.textContent = inputField.value;
    newElement.id = itemsCounter; // each list element has a unique id
    itemsCounter++; 
    list.appendChild(newElement);

    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.value = newElement.id; // each remove button will be connected to an element via its id
    newElement.appendChild(removeButton);
    removeButton.addEventListener("click", (event) => removeItem(event));
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.value = newElement.id; // each edit button will be connected to an element via its id
    newElement.appendChild(editButton);
    editButton.addEventListener("click", (event) => editListItem(event));
}

function removeItem(event) {
    const id = event.target.value; // the button has the items id
    document.getElementById(id).remove(); // get the item by id and remove it
}

function editListItem(event) {
    const id = event.target.value;
    const item = document.getElementById(event.target.value);
    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = item.childNodes[0].textContent; // text only node
    item.firstChild.replaceWith(editInput); // replace the text with an input field
    item.childNodes[1].style.display = "none"; // hide the remove and edit buttons
    item.childNodes[2].style.display = "none";
    const saveButton = document.createElement("button");
    saveButton.textContent = "save";
    item.appendChild(saveButton);

    saveButton.addEventListener("click", function() {
        item.replaceChild(document.createTextNode(editInput.value), editInput); // replace the edit input with the new text
        item.childNodes[1].style.display = "inline"; // show the buttons again
        item.childNodes[2].style.display = "inline"; 
        item.removeChild(saveButton); // remove the save button
    });
}
addButton.addEventListener("click", addListElement);


