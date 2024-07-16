// const members = [
//       // Example data; replace with actual JSON data.
//       { name: 'Member One', level: 'gold', description: 'Gold member of our chamber.' },
//       { name: 'Member Two', level: 'silver', description: 'Silver member of our chamber.' },
//       { name: 'Member Three', level: 'bronze', description: 'Bronze member of our chamber.' },
//       // Add more members as needed
//     ];
    
//     function getRandomMembers(members) {
//       const filteredMembers = members.filter(member => member.level === 'silver' || member.level === 'gold');
//       const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
//       return shuffled.slice(0, 2);
//     }
    
//     const spotlightMembers = getRandomMembers(members);
    
//     document.getElementById('spotlight1').innerHTML = `<h4>${spotlightMembers[0].name}</h4><p>${spotlightMembers[0].description}</p>`;
//     document.getElementById('spotlight2').innerHTML = `<h4>${spotlightMembers[1].name}</h4><p>${spotlightMembers[1].description}</p>`;
    

document.addEventListener("DOMContentLoaded", function () {
      fetch('data/members.json')
          .then(response => response.json())
          .then(data => {
              const members = data;
              displaySpotlights(members);
          })
          .catch(error => console.error('Error fetching the members data:', error));
  });
  
  function displaySpotlights(members) {
      const spotlightContainer1 = document.getElementById('spotlight1');
      const spotlightContainer2 = document.getElementById('spotlight2');
  
      const filteredMembers = members.filter(member => member.membership_level === 'Gold' || member.membership_level === 'Silver');
      const randomMembers = getRandomMembers(filteredMembers, 2);
  
      spotlightContainer1.innerHTML = generateMemberHTML(randomMembers[0]);
      spotlightContainer2.innerHTML = generateMemberHTML(randomMembers[1]);
  }
  
  function getRandomMembers(members, num) {
      const shuffled = members.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
  }
  
  function generateMemberHTML(member) {
      return `
          <div class="member-spotlight">
              <img src="${member.image}" alt="${member.name}">
              <h4>${member.name}</h4>
              <p>${member.address}</p>
              <p>${member.phone}</p>
              <a href="${member.website}" target="_blank">${member.website}</a>
          </div>
      `;
  }
  