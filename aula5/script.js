function adicionarFilme() {
  var filmeFav = document.getElementById("filme").value;

  if (filmeFav.endsWith(".jpg") || filmeFav.endsWith(".png")) {
    var elementFilmeFav = "<img src=" + filmeFav + ">";
    var listaFilmesFav = document.getElementById("listaFilmesFav");
    listaFilmesFav.innerHTML = listaFilmesFav.innerHTML + elementFilmeFav;
  } else {
    console.error("Endereço de filme inválido.");
  }

  document.getElementById("filme").value = "";
}
