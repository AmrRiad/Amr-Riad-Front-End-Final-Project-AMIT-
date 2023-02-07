"use strict";

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
              class="caption d-flex justify-content-between align-items-center py-1 px-2"
            >
              <h3>${title}</h3>
              <span class="rate">${vote_average}</span>
            </div>
            <div class="overview p-2">
              ${overview}
            </div>
        `;

    moviesContainer.appendChild(movieCard);
  });
}

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
