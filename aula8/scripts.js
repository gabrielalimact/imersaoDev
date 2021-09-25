var cartas = [
    (carta1 = {
      nome: "Pikachu",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      atributos: {
        ataque: 55,
        defesa: 40,
        magia: 90
      }
    }),
    (carta2 = {
      nome: "Bulbassauro",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      atributos: {
        ataque: 49,
        defesa: 49,
        magia: 45
      }
    }),
    (carta3 = {
      nome: "Charmander",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      atributos: {
        ataque: 52,
        defesa: 43,
        magia: 65
      }
    })
  ];
  
  var cartaMaquina;
  var cartaJogador;
  
  function sortearCarta() {
    var numCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numCartaMaquina];
  
    var numCartaJogador = parseInt(Math.random() * cartas.length);
    while (numCartaJogador == numCartaMaquina) {
      numCartaJogador = parseInt(Math.random() * cartas.length);
    }
    cartaJogador = cartas[numCartaJogador];
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").style.display = "inline";
    exibirCartaJogador();
  }
  
  function atributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelected = atributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelected];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelected];
  
    if (valorCartaJogador > valorCartaMaquina) {
      divResultado =
        "<p class='resultado-final'>Você consegui derrotar o adversário!</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
      divResultado =
        "<p class='resultado-final'>Não foi dessa vez. Você perdeu!</p>";
    } else {
      divResultado = "<p class='resultado-final'>Você empataram.</p>";
    }
    elementoResultado.innerHTML = divResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.image})`;
  
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
  
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var dirCartaMaquina = document.getElementById("carta-maquina");
    dirCartaMaquina.style.backgroundImage = `url(${cartaMaquina.image})`;
  
    var moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p name=' atributo ' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo];
    }
  
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    dirCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  