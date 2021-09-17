
function Calcular() {
    var notaPrimeiro = parseFloat(document.getElementById("nota1").value);
    var notaSegundo = parseFloat(document.getElementById("nota2").value);
    var output = document.getElementById("mediaFinal");
    var notaFinal = ((notaPrimeiro + notaSegundo)/2).toFixed(2);
    console.log(notaPrimeiro);
    if(notaPrimeiro > 10 || notaSegundo > 10){
        output.innerHTML = "Você digitou uma nota acima de 10. Digite novamente!";
    }
    else{
        if(notaFinal >= 7){
        output.innerHTML = "Parabéns! Você foi aprovado com " + notaFinal + " na média.";
        }else{
        output.innerHTML = "Ihhh! Você foi reprovado com " + notaFinal + " na média.";
        }
    }
    
    

}

