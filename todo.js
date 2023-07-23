// Get references to the form, input field, and list container in the HTML
let todoForm = document.getElementById("todoForm"); // Reference to the <form> element
let todoItem = document.getElementById("todoItem"); // Reference to the <input> element
let todoList = document.getElementById("todoList"); // Reference to the <ul> element

// Add an event listener to the form to handle form submission
todoForm.addEventListener("submit", (x) => {
    // Prevent the default form submission behavior
    x.preventDefault();
    // Call the createItem function, passing the value of the input field as an argument
    createItem(todoItem.value);
});

// Define the createItem function, which adds a new item to the list
function createItem(formContent) {
    // Create a new HTML list item with a delete button
    let todoHTML = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        ${formContent}
        <button class="btn btn-danger" onclick="deleteItem(this)">Delete</button>
    </li>`;
    
    // Insert the new HTML list item at the end of the list container
    todoList.insertAdjacentHTML("beforeend", todoHTML);
    
    // Clear the input field after adding the item to the list
    todoItem.value = "";
    
    // Set focus back to the input field for better user experience
    todoItem.focus();
}

// Define the deleteItem function, which removes an item from the list
function deleteItem(itemToDelete) {
    // Remove the parent element (the list item) of the clicked delete button
    itemToDelete.parentElement.remove();
}
