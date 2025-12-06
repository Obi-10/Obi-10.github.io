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
const link = document.querySelector('#background a');

//STEP 2: Change the link text and destination
link.textContent = 'Nature Research Article';
link.href = 'https://www.nature.com/articles/nrn3916';

//STEP 3: Reference the <section> to add new content
const sect = document.querySelector('#background');

//Create a new paragraph with extra facts
const para = document.createElement('p');
para.textContent = 'Studies also suggest that meditation can boost creativity and problem-solving skills over time. Meditation has also been shown to improve attention span and reduce mind-wandering in several studies.';

//Style the new paragraph
para.style.color = '#333';
para.style.backgroundColor = '#e0f7fa';
para.style.padding = '10px';
para.style.width = '90%';
para.style.margin = '10px auto';
para.style.textAlign = 'center';
para.style.borderRadius = '5px';

//Append the new paragraph to the section
sect.appendChild(para);

//Move the existing source link paragraph to the very bottom
const linkPara = sect.querySelector('p:last-of-type'); // assumes your link is the last <p> in HTML
sect.appendChild(linkPara);
