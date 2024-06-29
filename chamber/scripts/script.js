document.addEventListener('DOMContentLoaded', function() {
      const directory = document.getElementById('directory');
      const gridViewButton = document.getElementById('gridView');
      const listViewButton = document.getElementById('listView');
  
      fetch('data/members.json')
          .then(response => response.json())
          .then(data => {
              displayMembers(data);
          });
  
      gridViewButton.addEventListener('click', () => {
          directory.classList.remove('list-view');
          directory.classList.add('grid-view');
      });
  
      listViewButton.addEventListener('click', () => {
          directory.classList.remove('grid-view');
          directory.classList.add('list-view');
      });
  
      function displayMembers(members) {
          directory.innerHTML = '';
          members.forEach(member => {
              const memberDiv = document.createElement('div');
              memberDiv.classList.add('member');
              memberDiv.innerHTML = `
                  <img src="${member.image}" alt="${member.name}">
                  <h3>${member.name}</h3>
                  <p>${member.address}</p>
                  <p>${member.phone}</p>
                  <p><a href="${member.website}" target="_blank">Website</a></p>
                  <p>Membership Level: ${member.membership_level}</p>
              `;
              directory.appendChild(memberDiv);
          });
      }
  });
  