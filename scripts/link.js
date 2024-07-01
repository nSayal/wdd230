const baseURL = 'https://your-github-pages-url/';
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        displayLinks(data.weeks);
    } catch (error) {
        console.error('Error fetching links:', error);
    }
}

function displayLinks(weeks) {
    const learningElement = document.getElementById('learning');
    learningElement.innerHTML = '';

    weeks.forEach(week => {
        const weekItem = document.createElement('li');
        weekItem.textContent = `${week.week}: `;
        
        week.links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            weekItem.appendChild(linkElement);
            weekItem.appendChild(document.createTextNode(', '));
        });

        weekItem.lastChild.remove(); // Remove the last comma
        learningElement.appendChild(weekItem);
    });
}

getLinks();
