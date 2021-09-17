
function Converter () {
  var input = parseFloat((document.getElementById("converter")).value);
  var output = document.getElementById("resultado");
  let de = document.getElementById("moedasde");
  let para = document.getElementById("moedaspara");

  //Dolar
  if (de.value == "USD") {
    var valorEmDolar = input;
    var valor;
    if(para.value == "BRL"){
      valor = "O valor em reais é: R$"+(valorEmDolar/5.31).toFixed(2);

    } else if(para.value == "EUR"){
      valor = "O valor em euros é: €"+(valorEmDolar*0.85).toFixed(2);

    } else if(para.value == "USD"){
      valor = "O valor em dólar é: $"+(valorEmDolar).toFixed(2);
    }
    output.innerHTML = valor; 
  }

  //Reais
  if (de.value == "BRL") {
    var valorEmReais = input;
    var valor;
    if(para.value == "BRL"){
      valor = "O valor em reais é: R$"+(valorEmReais).toFixed(2);

    } else if(para.value == "EUR"){
      valor = "O valor em euros é: €"+(valorEmReais*0.16).toFixed(2);

    } else if(para.value == "USD"){
      valor = "O valor em dólar é: $"+(valorEmReais*0.19).toFixed(2);
    }
    output.innerHTML = valor; 
  }

  //Euro

  if (de.value == "EUR") {
    var valorEmEuro = input;
    var valor;
    if(para.value == "BRL"){
      valor = "O valor em reais é: R$"+(valorEmEuro*6.24).toFixed(2);

    } else if(para.value == "EUR"){
      valor = "O valor em euros é: €"+(valorEmEuro).toFixed(2);

    } else if(para.value == "USD"){
      valor = "O valor em dólar é: $"+(valorEmEuro*1.17).toFixed(2);
    }
    output.innerHTML = valor; 
  }
};
