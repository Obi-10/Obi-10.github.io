// Target text sample extracted from the Nature Reviews Neuroscience article quote
const quoteText = `Research over the past two decades broadly supports the claim that mindfulness meditation — practiced widely for the reduction of stress and promotion of health — exerts beneficial effects on physical and mental health, and cognitive performance. Recent neuroimaging studies have begun to uncover the brain areas and networks that mediate these positive effects.`;

// Filter out structural stop words to focus the chart on core topical vocabulary
const stopWords = new Set([
    'over', 'the', 'past', 'two', 'that', 'for', 'and', 'of', 'on', 'have', 'begun', 'to', 
    'these', 'broadly', 'claim', 'practiced', 'widely', 'exerts', 'a', 'an', 'is', 'in', 
    'it', 'or', 'with', 'as', 'by', 'from', 'this', 'has', 'be', 'are', 'about'
]);

// Map algorithm to isolate and calculate unique word frequencies
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

    // Convert the Map to an array, sort by frequency count descending, and grab top 10 rows
    const topTenDataCollection = [...frequencyTracker.entries()]
        .sort((wordA, wordB) => wordB[1] - wordA[1]); // Fixed: Targets index [1] for numerical counts

    return topTenDataCollection.slice(0, 10);
}

// Generate the visual histogram canvas using Plotly
function drawNLPHistogramChart() {
    const sortedDataMetrics = processNLPFrequency(quoteText);

    // Isolate keys and numerical values for the graph axes
    const xKeyTerms = sortedDataMetrics.map(record => record[0]);
    const yValueFrequencies = sortedDataMetrics.map(record => record[1]);

    const chartTraceData = [{
        x: xKeyTerms,
        y: yValueFrequencies,
        type: 'bar',
        marker: {
            color: '#1abc9c' // Hex matches global palette accents
        }
    }];

    const chartWindowLayout = {
        title: {
            text: 'Top 10 High-Frequency Terms in Nature Neuroscience Quote',
            font: { size: 18, color: '#2c3e50' }
        },
        xaxis: {
            title: 'Extracted Keyword Tokens',
            automargin: true,
            tickfont: { size: 12 }
        },
        yaxis: {
            title: 'Frequency Occurrences (Count)',
            dtick: 1, // Restrict intervals to whole integer steps
            range: [0, 3],
            gridcolor: '#eef0f2'
        },
        paper_bgcolor: '#ffffff',
        plot_bgcolor: '#fafafa',
        margin: { t: 60, b: 80, l: 60, r: 40 }
    };

    // Render the layout directly into the targeted DOM node element container
    Plotly.newPlot('nlpChart', chartTraceData, chartWindowLayout, { responsive: true });
}

// Execute the counting script sequence after full HTML document parsing completes
window.addEventListener('DOMContentLoaded', drawNLPHistogramChart);
