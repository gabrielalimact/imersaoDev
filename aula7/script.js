var cartas = [
    (carta1 = {
      nome: "Pikachu",
      atributos: {
        ataque: 40,
        defesa: 15,
        magia: 60
      }
    }),
    (carta2 = {
      nome: "Bulbassauro",
      atributos: {
        ataque: 49,
        defesa: 49,
        magia: 45
      }
    }),
    (carta3 = {
      nome: "Charmander",
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
    document.getElementById("btnJogar").disabled = false;
    console.log(cartaJogador);
    exibirOpcoes();
  }
  
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes");
    var opcoesTexto = "";
  
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo;
    }
    opcoes.innerHTML = opcoesTexto;
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
      elementoResultado.innerHTML =
        "Você derrotou o " + cartaMaquina.nome + "! Parabéns!";
    } else if (valorCartaJogador < valorCartaMaquina) {
      elementoResultado.innerHTML =
        "Você perdeu para o " + cartaMaquina.nome + "! Que pena!";
    } else {
      elementoResultado.innerHTML =
        "Você e o " + cartaMaquina.nome + " empataram!";
    }
  }
  