const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {  // Add your code here for what happens when the button is clicked
    const chapter = input.value; // Get the value from the input
    if (chapter) {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = chapter; // Set the text of the list item
        list.appendChild(listItem); // Append the new item to the list
        input.value = ''; // Clear the input field after adding the chapter
    }
});

button.addEventListener('click', () => { ... });