// Grab the text dynamically straight from my HTML blockquote element
const quoteText = document.getElementById("quoteToAnalyze").textContent;

// Filter out structural stop words to focus the chart on core topical vocabulary
const stopWords = new Set([
    'over', 'the', 'past', 'two', 'that', 'for', 'and', 'of', 'on', 'have', 'begun', 'to', 
    'these', 'broadly', 'claim', 'practiced', 'widely', 'exerts', 'a', 'an', 'is', 'in', 
    'it', 'or', 'with', 'as', 'by', 'from', 'this', 'has', 'be', 'are', 'about'
]);

// Map algorithm to split the string and calculate unique word frequencies
function processNLPFrequency(rawText) {
    // Standardize to lowercase and remove punctuation marks
    const formatText = rawText.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"’—]/g, " ");
    const textArray = formatText.split(/\s+/);

    // Initialize a Map structure to track word occurrences
    const frequencyTracker = new Map();

    textArray.forEach(token => {
        if (token && !stopWords.has(token)) {
            // Count matching instances dynamically
            frequencyTracker.set(token, (frequencyTracker.get(token) || 0) + 1);
        }
    });

    // Convert my Map to an array, sort by frequency count descending, and grab top 10 rows
    const topTenDataCollection = [...frequencyTracker.entries()]
        .sort((wordA, wordB) => wordB[1] - wordA[1]);

    return topTenDataCollection.slice(0, 10);
}

// Generate the visual histogram canvas using Plotly
function drawNLPHistogramChart() {
    const sortedDataMetrics = processNLPFrequency(quoteText);

    // Isolate the string tokens and numeric values from my data arrays
    const xKeyTerms = sortedDataMetrics.map(record => record[0]);
    const yValueFrequencies = sortedDataMetrics.map(record => record[1]);

    const chartTraceData = [{
        x: xKeyTerms,
        y: yValueFrequencies,
        type: 'bar',
        marker: {
            color: '#1abc9c' // Hex matches my global website accents
        }
    }];

    const chartWindowLayout = {
        title: {
            text: 'Top 10 High-Frequency Terms in PubMed Article Quote',
            font: { size: 18, color: '#2c3e50' }
        },
        xaxis: {
            title: 'Extracted Keyword Tokens',
            automargin: true,
            tickfont: { size: 12 }
        },
        yaxis: {
            title: 'Frequency Occurrences (Count)',
            dtick: 1, // Restrict chart intervals to whole integer steps
            // Dynamically calculates the max layout range limit to protect against dataset shifts
            range: [0, Math.max(...yValueFrequencies) + 1],
            gridcolor: '#eef0f2'
        },
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#fafafa',
        margin: { t: 60, b: 80, l: 60, r: 40 }
    };

    // Render my layout configurations directly into the targeted DOM node
    Plotly.newPlot('nlpChart', chartTraceData, chartWindowLayout, { responsive: true });
}

// Execute my script sequence after the full browser window finishes loading
window.addEventListener('load', drawNLPHistogramChart);
