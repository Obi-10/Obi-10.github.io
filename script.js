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
link.textContent = 'Nature Research Article';

//Change the link destination
link.href = 'https://www.nature.com/articles/nrn3916';

//STEP 3: Reference the <section> to add new content
const sect = document.querySelector('#background');

//Create a new paragraph and add text to it - FIGURE OUT WHAT YOU WANT TO ADD HERE FOR THE TEXT
const para = document.createElement('p');
para.textContent = 'Studies also suggest that meditation can boost creativity and problem-solving skills over time.';

//Append the new paragraph to the section
sect.appendChild(para);

//Add a new text node to the paragraph containing the link - CHANGE THE TEXT HERE TO THE LINK!
const text = document.createTextNode(' — a trustworthy source for knowledge.');
const linkPara = document.querySelector('#background p');

//Append this text to the paragraph
linkPara.appendChild(text);

//STEP 4: Move the paragraph to the bottom of the section
sect.appendChild(linkPara);

//Remove the paragraph using removeChild()
//sect.removeChild(linkPara);

//Since we still have the reference, remove the paragraph completely
//linkPara.remove();

para.style.color = '#333';
para.style.backgroundColor = '#e0f7fa';
para.style.padding = '10px';
para.style.width = '90%';
para.style.margin = '10px auto';
para.style.textAlign = 'center';
para.style.borderRadius = '5px';
