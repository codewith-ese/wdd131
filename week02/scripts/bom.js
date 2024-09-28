const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); 

button.addEventListener('click', function() {
    // Checking if the input is not empty
    if (input.value.trim() !== '') {
        const li = document.createElement('li'); 
        const deleteButton = document.createElement('button'); 
        
        li.textContent = input.value; 
        deleteButton.textContent = 'x';
        
        li.append(deleteButton); 
        list.append(li); 
        
        // Adding event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li); 
            input.focus(); 
        });
        
        input.value = ''; 
        input.focus(); 
    }
});

