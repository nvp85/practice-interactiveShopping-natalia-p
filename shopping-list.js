const inputField = document.getElementById("input-field");
const addButton = document.getElementById("add-btn");
const list = document.getElementById("list");

addButton.addEventListener("click", function() {
    const newElement = document.createElement("li");
    newElement.textContent = inputField.value;
    list.appendChild(newElement);

    const removeButton = document.createElement("button");
    removeButton.textContent = "remove";
    newElement.appendChild(removeButton);
    removeButton.addEventListener("click", function() {
        list.removeChild(newElement);
    });
    // closures seem iffy. not sure if it's ok
    const editButton = document.createElement("button");
    editButton.textContent = "edit";
    newElement.appendChild(editButton);
    editButton.addEventListener("click", function() {
        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = newElement.childNodes[0].textContent;

        newElement.replaceChildren(editInput);
        const saveButton = document.createElement("button");
        saveButton.textContent = "save";
        newElement.appendChild(saveButton);

        saveButton.addEventListener("click", function() {
            newElement.textContent = editInput.value;
            newElement.appendChild(removeButton);
            newElement.appendChild(editButton);
        });
    })
});


