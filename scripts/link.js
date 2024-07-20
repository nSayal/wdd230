const baseURL = "https://github.com/nSayal/wdd230/blob/main/data/links.json";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLinks(data);
}

function displayLinks(weeks) {
  const learningList = document.getElementById('learning');
  learningList.innerHTML = '';  // Clear existing content

  weeks.weeks.forEach(week => {
    const weekItem = document.createElement('li');
    weekItem.textContent = `${week.week}: `;
    
    week.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.title;
      anchor.style.marginRight = '10px';

      weekItem.appendChild(anchor);
    });

    learningList.appendChild(weekItem);
  });
}

getLinks();
