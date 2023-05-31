function searchCountry() {
    const input = document.getElementById('searchInput').value;
    const countryInfoContainer = document.getElementById('countryInfo');
    countryInfoContainer.innerHTML = "";//reset pevious info

// Fetch country data from REST Countries API
fetch(`https://restcountries.com/v2/name/${input}`)
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          const countryGrid = document.createElement('div');
          countryGrid.classList.add('country-grid');

          data.forEach(countryData => {
            const countryName = countryData.name;
            const capital = countryData.capital;
            const flagUrl = countryData.flags.svg;

            // Create country information element
            const countryInfo = document.createElement('div');
            countryInfo.classList.add('country-info');
            countryInfo.innerHTML = `
              <h2>${countryName}</h2>
              <p>Capital: ${capital}</p>
              <img src="${flagUrl}" alt="${countryName} Flag">
              `;

            // Add country information to the grid
            countryGrid.appendChild(countryInfo);
          });

          // Display the country grid
          countryInfoContainer.appendChild(countryGrid);
        } else {
          countryInfoContainer.innerHTML = "No countries found";
        }
      })
      .catch(error => {
        console.log(error);
        countryInfoContainer.innerHTML = "An error occurred while fetching data";
});
}