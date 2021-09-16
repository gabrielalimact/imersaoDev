var nome = "Gabriela";
var notaPrimeiro = 9.42;
var notaSegundo = 8.75;
var notaTerceiro = 8.75;
var notaQuarto = 9.777;

var notaFinal = (notaPrimeiro + notaSegundo + notaTerceiro + notaQuarto)/4;
var fixedNota = notaFinal.toFixed(2);

if(fixedNota >= 7){
    console.log(nome + " ficou com " + fixedNota + " na nota final e foi aprovado.");
}else{
    console.log(nome + " ficou com " + fixedNota + " na nota final e foi reprovado.");
}

