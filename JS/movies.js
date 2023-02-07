"use strict";
// start variables
let UserName = document.getElementById("UserName");
UserName.textContent = ` ${localStorage.getItem("userName")}`;

const apiKey = "api_key=c9fd195e5d9a5ed50daeae636384d86c";
const baseURL = "https://api.themoviedb.org/3";
const apiURL = baseURL + "/discover/movie?sort_by=popularity.desc&" + apiKey;
const halfImageURL = "https://image.tmdb.org/t/p/w500";
const searchURL = baseURL + "/search/movie?" + apiKey;
const moviesContainer = document.querySelector(".moviesContainer");
const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const logOut = document.querySelector(".logout");
const burgerMenuBtn = document.querySelector(".burgerMenu");
const toUp = this.document.querySelector(".to-up");
// end variables

// start functions
getMovie(apiURL);

function getMovie(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  moviesContainer.innerHTML = "";
  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieCard = document.createElement("div");
    movieCard.classList.add("movies");
    movieCard.innerHTML = `
        <img src="${halfImageURL + poster_path}" alt="${title}" />
            <div
              class=" d-flex justify-content-between align-items-center py-1 px-2"
            >
              <h6 class="my-1">${title}</h6>
              <span class="rate my-1">${vote_average}</span>
            </div>
            <div class="overview p-1">
              ${overview}
            </div>
        `;

    moviesContainer.appendChild(movieCard);
  });
}

function showLinkGroup() {
  console.log("hoi");
  $(".linkGroup").toggle();
  $(".addlinkGroup").toggle();
}
function showLinkGroup() {
  document.querySelector(".linkGroup").classList.toggle("flex");
  document.querySelector(".addlinkGroup").classList.toggle("flex");
}
// end functions

// start events
burgerMenuBtn.addEventListener("click", showLinkGroup);

toUp.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});

window.addEventListener("scroll", function () {
  toUp.classList.toggle("to-up-active", window.scrollY > 100);
});

burgerMenuBtn.addEventListener("click", showLinkGroup);
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searchProcess = searchInput.value;
  if (searchProcess) {
    getMovie(searchURL + "&query=" + searchProcess);
  } else {
    getMovie(apiURL);
  }
});

logOut.addEventListener("click", function () {
  localStorage.clear();
});
// end events
