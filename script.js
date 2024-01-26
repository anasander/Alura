const searchInput = document.getElementById("search-input");
const searchResult = document.getElementById("search-result");
const searchPlaylist = document.getElementById("result-playlist");

function requestApi(searchTerm) {
  const url = `http://localhost:3000/ost?name_like=${searchTerm}`;
  fetch(url).then((response) => response.json());
  // .then((result) => displayResult(result));
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
