document.addEventListener("DOMContentLoaded", function() {
    const baseURL = "https://nsayal.github.io/wdd230/";
    const linksURL = `${baseURL}data/links.json`;

    async function getLinks() {
        try {
            const response = await fetch(linksURL);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const data = await response.json();
            console.table(data.weeks); // Debugging line
            displayLinks(data.weeks);
        } catch (error) {
            console.error('Fetch error: ', error);
        }
    }

    const displayLinks = (weeks) => {
        const learningList = document.getElementById('learning');
        learningList.innerHTML = '';  // Clear existing content

        weeks.forEach((week) => {
            const weekItem = document.createElement('li');
            weekItem.textContent = `${week.week}: `;
            
            week.links.forEach((link, index) => {
                const anchor = document.createElement('a');
                anchor.href = link.url;
                anchor.textContent = link.title;
                if (index < week.links.length - 1) {
                    anchor.textContent += " | "; // Add separator between links
                }
                weekItem.appendChild(anchor);
            });

            learningList.appendChild(weekItem);
        });
    };

    getLinks();
});
