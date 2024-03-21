let narrator = document.querySelector('#narrator');
let hadith = document.querySelector('#hadith-text');
let book = document.querySelector('#book');
let button = document.querySelector('button');

// Function to load Hadith data from an external JSON file
function loadHadith() {

  let hadithText = JSON.parse(request.responseText);
  let randomHadith = Math.floor(Math.random() * hadithText.ahadith.length);

  // Temporarily hide elements with opacity set to 0
  narrator.style.opacity = 0;
  hadith.style.opacity = 0;
  book.style.opacity = 0;

  // Use setTimeout to introduce a delay before displaying new Hadith
  setTimeout(() => {
   
    narrator.innerHTML = hadithText.ahadith[randomHadith].narrator;
    hadith.textContent = hadithText.ahadith[randomHadith].hadith_english;
    book.innerHTML = hadithText.ahadith[randomHadith].book;

    // Gradually show elements with opacity set back to 1
    narrator.style.opacity = 1;
    hadith.style.opacity = 1;
    book.style.opacity = 1;
  }, 800); 
}

let request = new XMLHttpRequest();
request.open('GET', 'hadiths.json'); 


request.addEventListener('load', loadHadith);

// Send the request to the server
request.send();


function loadHadithOnButtonClick() {
  loadHadith();
}

function loadHadithOnSpacebarPress(e) {
  if (e.keyCode === 32) {
    loadHadith();
  }
}

button.addEventListener('click', loadHadithOnButtonClick);
window.addEventListener('keyup', loadHadithOnSpacebarPress);
