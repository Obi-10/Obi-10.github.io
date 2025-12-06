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

//STEP 2: Change the link text
link.textContent = 'Nature Research Article';

//Change the link destination
link.href = 'https://www.nature.com/articles/nrn3916';

//STEP 3: Reference the <section> to add new content
const sect = document.querySelector('#background');

//Create a new paragraph with extra facts
const para = document.createElement('p');
para.textContent = 'Studies suggest that meditation can boost creativity and problem-solving skills over time.';

//Append the new paragraph to the section
sect.appendChild(para);

//Style the newly created paragraph
para.style.color = '#333';
para.style.backgroundColor = '#e0f7fa';
para.style.padding = '5px';
para.style.width = '30%';
para.style.margin = '10px auto';
para.style.textAlign = 'center';
para.style.borderRadius = '5px';

//STEP 4: Move the existing source link paragraph to the very bottom
const linkPara = link.parentElement; // select the <p> that contains the link
sect.appendChild(linkPara);