let message = document.querySelector("#message");

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;

  movieTitle.addEventListener("click", crossOffMovie);

  movie.appendChild(movieTitle);
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  let uList = document.querySelector("ul");

  uList.appendChild(movie);
  inputField.value = "";
}
function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = "Movie deleted!";
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie Watched!";
  } else {
    message.textContent = "Movie added back!";
  }
}

const formE = document.querySelector("form");

formE.addEventListener("submit", addMovie);
