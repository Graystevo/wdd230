const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    // Check if the input is not blank
    if (input.value != '') {
        // Create a new <li> element
        const li = document.createElement('li');
        
        // Create a delete button
        const deleteButton = document.createElement('button');
        
        // Populate the <li> element's textContent with the input value
        li.textContent = input.value;
        
        // Populate the button's textContent with '❌'
        deleteButton.textContent = '❌';
        
        // Append the delete button to the <li> element
        li.append(deleteButton);
        
        // Append the <li> element to the unordered list
        list.append(li);
        
        // Add an event listener to the delete button to remove the <li> when clicked
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus(); // Focus back to the input field
        });
        
        // Send focus to the input element
        input.focus();
        
        // Clear the input value after adding the chapter
        input.value = '';
    } else {
        // If the input is blank, remind the user to enter a book and chapter
        alert('Please enter a book and chapter!');
        input.focus(); // Return focus to the input field
    }
});
