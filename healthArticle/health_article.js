// Step 3: Create XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Define the URL of the JSON file
var url = './health_article.json';

// Step 4: Prepare the GET request (asynchronous)
xhr.open('GET', url, true);

// Step 5: Set response type to JSON
xhr.responseType = 'json';

// Step 6: Handle successful response
xhr.onload = function () {
    // Get articles data from JSON
    var articles = xhr.response.articles;

    // Get the container where articles will be displayed
    var articlesDiv = document.getElementById('articles');

    // Step 7: Iterate through articles and create HTML dynamically
    articles.forEach(function (article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';

        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement('li');
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';

        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement('li');
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        // Append all elements to articleDiv
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        // Append articleDiv to main container
        articlesDiv.appendChild(articleDiv);
    });
};

// Step 8: Send the request
xhr.send();
