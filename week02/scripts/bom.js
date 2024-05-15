document.addEventListener('DOMContentLoaded', () => {
      const input = document.getElementById('favchap');
      const button = document.querySelector('button');
      const list = document.getElementById('list');
  
      button.addEventListener('click', () => {
          if (input.value.trim() !== '') {
              const listItem = document.createElement('li');
              const deleteButton = document.createElement('button');
              deleteButton.textContent = '❌';
              listItem.textContent = input.value;
              listItem.appendChild(deleteButton);
              list.appendChild(listItem);
  
              deleteButton.addEventListener('click', () => {
                  listItem.remove();
              });
  
              input.focus();
              input.value = '';
          } else {
              alert('Please enter a book and chapter.');
              input.focus();
          }
      });
  });
  