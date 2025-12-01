function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

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

//STEP 1: Select the link inside the background section
// This gives us access to modify the link text and URL
const link = document.querySelector('#background a');

//STEP 2: Change the link text
link.textContent = 'Mozilla Developer Network';

//Change the link destination
link.href = 'https://developer.mozilla.org';

//STEP 3: Reference the <section> to add new content
const sect = document.querySelector('#background');

//Create a new paragraph and add text to it
const para = document.createElement('p');
para.textContent = 'Meditation can also improve focus and memory, according to multiple neuroscience studies.';

//Append the new paragraph to the section
sect.appendChild(para);

//Add a new text node to the paragraph containing the link
const text = document.createTextNode(' — a trustworthy source for web knowledge.');
const linkPara = document.querySelector('#background p');

//Append this text to the paragraph
linkPara.appendChild(text);

//STEP 4: Move the paragraph to the bottom of the section
sect.appendChild(linkPara);

//Remove the paragraph using removeChild()
sect.removeChild(linkPara);

//Since we still have the reference, remove the paragraph completely
linkPara.remove();

//STEP 5: Style the newly created paragraph using JavaScript
para.style.color = 'white';
para.style.backgroundColor = 'black';
para.style.padding = '10px';
para.style.width = '250px';
para.style.textAlign = 'center';