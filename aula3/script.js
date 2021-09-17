var numSecret = parseInt(Math.random() * 11);

function Chutar() {
  var chute = parseFloat(document.getElementById("valor").value);
  console.log(chute);
  var output = document.getElementById("resultado");
  if (chute > 10 || chute < 0) {
    output.innerHTML =
      "Você precisa digitar um valor de 0 a 10. Tente novamente!";
  } else {
    if (chute == numSecret) {
      output.innerHTML = "Parabéns!! Você acertou o número secreto.";
    } else {
      output.innerHTML = "OH que pena!! Você errou o número secreto.";
    }
  }
}
