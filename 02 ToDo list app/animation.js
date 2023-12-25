function addItem() {
    const myList = document.getElementById('myList');
    
    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';

    // Append the new item to the list
    myList.appendChild(newItem);

    // Triggering reflow to apply the transition
    void newItem.offsetWidth;

    // Add a class to apply the transition
    newItem.classList.add('show');
}
