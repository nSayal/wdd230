const members = [
      // Example data; replace with actual JSON data.
      { name: 'Member One', level: 'gold', description: 'Gold member of our chamber.' },
      { name: 'Member Two', level: 'silver', description: 'Silver member of our chamber.' },
      { name: 'Member Three', level: 'bronze', description: 'Bronze member of our chamber.' },
      // Add more members as needed
    ];
    
    function getRandomMembers(members) {
      const filteredMembers = members.filter(member => member.level === 'silver' || member.level === 'gold');
      const shuffled = filteredMembers.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 2);
    }
    
    const spotlightMembers = getRandomMembers(members);
    
    document.getElementById('spotlight1').innerHTML = `<h4>${spotlightMembers[0].name}</h4><p>${spotlightMembers[0].description}</p>`;
    document.getElementById('spotlight2').innerHTML = `<h4>${spotlightMembers[1].name}</h4><p>${spotlightMembers[1].description}</p>`;
    