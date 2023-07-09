// index.js
document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const location = document.getElementById('location-input').value;
    const jobRole = document.getElementById('job-role-input').value;

    const filteredCandidates = candidateData.candidates.filter(candidate => {
        return candidate.location.toLowerCase().includes(location.toLowerCase()) &&
               candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase());
    });

    displayCandidates(filteredCandidates);
});

const searchResultsContainer = document.getElementById('search-results');

function displayCandidates(candidates) {
    searchResultsContainer.innerHTML = '';
  
    if (candidates.length > 0) {
      candidates.forEach(function (candidate) {
        const candidateElement = document.createElement('div');
        candidateElement.classList.add('candidate');
        candidateElement.innerHTML = `
          <div class='card p-5'>
            <h3>${candidate.name}</h3>
            <p>${candidate.location}</p>
            <p>${candidate.jobRole}</p>
            <button class="evaluate-btn">Evaluate</button>
          </div>
        `;
  
        searchResultsContainer.appendChild(candidateElement);
      });
    } else {
      const noResultsElement = document.createElement('div');
      noResultsElement.innerHTML = `
        <div class='card '>
          <h3>No search results found</h3>
        </div>
      `;
      searchResultsContainer.appendChild(noResultsElement);
    }
  }
  


// Load JSON data asynchronously using Fetch API
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        candidateData = data;
        displayCandidates(candidateData.candidates);
    })
    .catch(error => console.error(error));
