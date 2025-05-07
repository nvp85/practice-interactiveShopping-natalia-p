const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-btn");
const list = document.getElementById("list");

let itemsCounter = 0; // to generate ids for list elements

addButton.addEventListener("click", addListElement);

function addListElement() {
    // create a new list item
    const newElement = document.createElement("li");
    newElement.textContent = inputField.value;
    newElement.id = itemsCounter; // each list element has a unique id
    itemsCounter++; 
    list.appendChild(newElement); // the item is added to the list
    // create a remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    removeButton.value = newElement.id; // each remove button will be connected to an element via its id
    newElement.appendChild(removeButton); // the remove button is added to the list item
    removeButton.addEventListener("click", (event) => removeItem(event));
    // create an edit button
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    editButton.value = newElement.id; // each edit button will be connected to an element via its id
    newElement.appendChild(editButton); // the edit button is added to the list item
    editButton.addEventListener("click", (event) => editListItem(event));
}

function removeItem(event) {
    const id = event.target.value; // the button has the items id
    document.getElementById(id).remove(); // get the item by id and remove it
}

function editListItem(event) {
    const id = event.target.value;
    const item = document.getElementById(id); // the item is obtained by its id
    // create an input field that will be used to edit the item's text
    const editInput = document.createElement("input");
    editInput.type = "text";
    // place the original item's text into the input field so we could edit it
    editInput.value = item.childNodes[0].textContent; // text only node
    // replace the text node with the input field
    item.firstChild.replaceWith(editInput); 
    // hide the remove and edit buttons
    item.childNodes[1].style.display = "none"; 
    item.childNodes[2].style.display = "none";
    // create the save button that allows us to save the change we made
    const saveButton = document.createElement("button");
    saveButton.textContent = "save";
    item.appendChild(saveButton);
    // add event listener to the save button
    saveButton.addEventListener("click", function() {
        // replace the edit input field with the new text
        item.replaceChild(document.createTextNode(editInput.value), editInput); 
        // show the buttons again
        item.childNodes[1].style.display = "inline"; 
        item.childNodes[2].style.display = "inline"; 
        // remove the save button
        item.removeChild(saveButton); 
    });
}
