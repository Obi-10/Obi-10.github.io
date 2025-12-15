// -----------------------------
// Read More / Read Less Toggle
// -----------------------------
function myFunction() {
  // Get the elements for the "Read more" toggle
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  // Toggle visibility of the extra text
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

// -----------------------------
// Step 1: Modify Existing Source Link
// -----------------------------

// Select the link inside the background section
const link = document.querySelector('#background a');

// Change the link text to reflect the Nature article
link.textContent = 'Nature Research Article';

// Update the link URL
link.href = 'https://www.nature.com/articles/nrn3916';

// -----------------------------
// Step 2: Create a New Paragraph for Extra Facts
// -----------------------------

// Reference the background section
const sect = document.querySelector('#background');

// Create a new paragraph element
const para = document.createElement('p');

// Add text content with a new, unique fact
para.textContent = 'Studies suggest that meditation can boost creativity and problem-solving skills over time.';

// Append the new paragraph to the section
sect.appendChild(para);

// Style the new paragraph
para.style.color = '#333';
para.style.backgroundColor = '#d9d7d7';
para.style.padding = '5px';
para.style.width = '30%';
para.style.margin = '10px auto';
para.style.textAlign = 'center';
para.style.borderRadius = '5px';
para.style.fontSize = '16px';
para.style.minWidth = '300px';

// -----------------------------
// Step 3: Move the Source Link Paragraph to the Bottom
// -----------------------------

// Select the <p> element containing the source link
const linkPara = document.getElementById('source');

// Append it to the end of the section to ensure it appears at the very bottom
sect.appendChild(linkPara);


// Load CSV and create a Plotly chart
// -----------------------------
// Plotly Data Visualization
// Based on Information Is Beautiful Dataset
// -----------------------------

Plotly.d3.csv("meditationData.csv", function (error, rows) {
  if (error) {
    console.error("CSV failed to load:", error);
    return;
  }

  // Count how often each benefit appears
  const counts = {};

  rows.forEach(row => {
    const benefit = row["benefit"];
    if (benefit) {
      counts[benefit] = (counts[benefit] || 0) + 1;
    }
  });

  const benefits = Object.keys(counts);
  const frequencies = Object.values(counts);

  const data = [{
    type: "bar",
    x: benefits,
    y: frequencies,
    marker: {
      color: "#6baed6"
    }
  }];

  const layout = {
    title: {
      text: "Most Commonly Reported Benefits of Meditation in Scientific Studies",
      font: { size: 22 }
    },
    xaxis: {
      title: "Meditation Benefit",
      tickangle: -30
    },
    yaxis: {
      title: "Number of Studies Referencing Benefit"
    },
    margin: {
      t: 60,
      b: 160
    }
  };

  Plotly.newPlot("meditationChart", data, layout);
});