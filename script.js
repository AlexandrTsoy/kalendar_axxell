let cards = [
    { image: "bild1.jpg", text: "Rabatt 5%" },
    { image: "bild2.jpg", text: "Rabatt 10%" },
    { image: "bild3.jpg", text: "Rabatt 15%" },
    { image: "bild4.jpg", text: "Biobiljett" },
    { image: "bild5.jpg", text: "Teaterbiljett" },
    { image: "bild6.jpg", text: "Bil" },
    { image: "bild7.jpg", text: "Flygplan" },
    { image: "bild8.jpg", text: "Helikopter" },
    { image: "bild9.jpg", text: "Motorcykel" },
    { image: "bild10.jpg", text: "Skoter" },
    { image: "bild11.jpg", text: "Cykel" },
    { image: "bild12.jpg", text: "Lägenhet" },
    { image: "bild13.jpg", text: "Telefon" },
    { image: "bild14.jpg", text: "Kaffe" },
    { image: "bild15.jpg", text: "Croissant" },
    { image: "bild16.jpg", text: "Smörgås" },
    { image: "bild17.jpg", text: "Skor" },
    { image: "bild18.jpg", text: "Penna" },
    { image: "bild19.jpg", text: "Flyg till månen" },
    { image: "bild20.jpg", text: "Choklad" },
    { image: "bild21.jpg", text: "Glass" },
    { image: "bild22.jpg", text: "Dator" },
    { image: "bild23.jpg", text: "Bok" },
    { image: "bild24.jpg", text: "Skyffel" },
    { image: "bild25.jpg", text: "God Jul!" }
];

let calendar = document.getElementById("calendar");
let music = document.getElementById("music");

function generateCalendar() {
    let shuffledIndexes = shuffleArray(getIndexesArray(cards.length)); 

    for (let i = 0; i < shuffledIndexes.length; i++) {
        let index = shuffledIndexes[i];
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        card.addEventListener("click", openCard);

        let img = document.createElement("img");
        img.src = cards[index].image;

        let back = document.createElement("div");
        back.className = "back";
        back.textContent = cards[index].text;

        card.appendChild(img);
        card.appendChild(back);
        calendar.appendChild(card);
    }
}

function shuffleArray(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function getIndexesArray(length) {
    let indexes = [];
    for (let i = 0; i < length; i++) {
        indexes.push(i);
    }
    return indexes;
}

function openCard() {
    if (this.classList.contains("disabled")) {
        return;
    }

    this.classList.add("open");

    let index = parseInt(this.dataset.index) + 1;
    let currentDate = new Date();
    let currentDay = currentDate.getDate();

    if (index === currentDay) {
        music.play();
    } else if (index < currentDay) {
        alert("Hoppsan! Detta kort har redan passerat.");
    } else {
        alert("Det är fortfarande för tidigt! Ha tålamod, tack!");
        this.classList.remove("open");
    }
}

generateCalendar();

function addSnowflakes() {
    const container = document.querySelector('.snow-container');
  
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snow';
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(snowflake);
    }
  }
  
window.addEventListener('load', addSnowflakes);