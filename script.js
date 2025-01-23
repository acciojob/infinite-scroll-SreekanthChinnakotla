const list = document.getElementById('infi-list');
let itemsLoaded = 10; // Initial number of items

// Create initial list items
for (let i = 0; i < itemsLoaded; i++) {
  const listItem = document.createElement('li');
  listItem.textContent = `Item ${i + 1}`;
  list.appendChild(listItem);
}

// Function to add more items
function loadMoreItems() {
  for (let i = itemsLoaded; i < itemsLoaded + 2; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${i + 1}`;
    list.appendChild(listItem);
  }
  itemsLoaded += 2;
}

// Check if user has reached the end of the list
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = list; 
  // Use 'list' instead of 'this' for scroll properties
  if (scrollTop + clientHeight >= scrollHeight - 10) { 
    loadMoreItems(); 
  }
});