var listaFilmes = [
    "https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg",
    "https://play-lh.googleusercontent.com/k5MmyAPuHIct_qx-vTbDeR-1WQNlrr-DpxOuhqBd1Ey4fl90mpw-Z6CjGiQzNvte8ecD",
    "https://upload.wikimedia.org/wikipedia/pt/1/19/Lisbela_e_o_Prisioneiro.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg"
  ];
  document.write("<p>OS MELHORES FILMES</p>");
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  