const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const searchPlaylist = document.getElementById("result-playlist");

searchResult.classList.add("hidden");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/ost?name_like=${searchTerm}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => displayResult(result));
}

function displayResult(result) {
  searchPlaylist.classList.add("hidden");
  const ostName = document.getElementById("ost-name");
  const ostImg = document.getElementById("ost-img");
  const ostComposer = document.getElementById("ost-composer");

  result.forEach((element) => {
    ostName.innerText = element.name;
    ostImg.src = element.img;
    ostComposer.innerText = element.composer;
  });

  searchResult.classList.remove("hidden");
}

document.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  if (searchTerm === "") {
    searchResult.classList.add("hidden");
    searchPlaylist.classList.remove("hidden");
    return;
  }

  requestApi(searchTerm);
});
