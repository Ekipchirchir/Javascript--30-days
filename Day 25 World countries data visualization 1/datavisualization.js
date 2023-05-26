const populationData = [
  { country: "China", population: 1444216107 },
  { country: "India", population: 1393409038 },
  { country: "United States", population: 332915073 },
  { country: "Indonesia", population: 276361783 },
  { country: "Pakistan", population: 225199937 },
  { country: "Brazil", population: 213993437 },
  { country: "Nigeria", population: 211400708 },
  { country: "Bangladesh", population: 166303498 },
  { country: "Russia", population: 145912025 },
  { country: "Mexico", population: 130262216 }
];

const languageData = [
  { language: "Mandarin Chinese", speakers: "918 million" },
  { language: "Spanish", speakers: "460 million" },
  { language: "English", speakers: "379 million" },
  { language: "Hindi", speakers: "341 million" },
  { language: "Bengali", speakers: "228 million" },
  { language: "Portuguese", speakers: "221 million" },
  { language: "Russian", speakers: "154 million" },
  { language: "Japanese", speakers: "128 million" },
  { language: "German", speakers: "128 million" },
  { language: "French", speakers: "128 million" }
];

// Function to create a bar chart
function createBarChart(container, data) {
  const chartContainer = document.getElementById(container);

  // Clear existing chart
  chartContainer.innerHTML = "";

  // Loop through the data and create bars
  for (let i = 0; i < data.length; i++) {
    const chart = document.createElement("div");
    chart.className = "chart";

    const chartLabel = document.createElement("div");
    chartLabel.className = "chart-label";
    chartLabel.textContent = data[i].label;

    const chartBar = document.createElement("div");
    chartBar.className = "chart-bar";
    chartBar.style.width = `${data[i].value / data[0].value * 100}%`;

    const chartValue = document.createElement("span");
    chartValue.className = "chart-value";
    chartValue.textContent = data[i].value.toLocaleString();

    chart.appendChild(chartLabel);
    chart.appendChild(chartBar);
    chart.appendChild(chartValue);

    chartContainer.appendChild(chart);
  }
}

// Sort data in descending order
function sortDataDescending(data) {
  return data.sort((a, b) => b.value - a.value);
}

// Create population chart
function createPopulationChart() {
  const sortedPopulationData = sortDataDescending(populationData.slice(0, 10));
  createBarChart("populationChartContainer", sortedPopulationData.map(item => ({ value: item.population, label: item.country })));
}

// Create language chart
function createLanguageChart() {
  const sortedLanguageData = sortDataDescending(languageData.slice(0, 10));
  createBarChart("languageChartContainer", sortedLanguageData.map(item => ({ value: parseInt(item.speakers.replace(" million", "")), label: item.language })));
}