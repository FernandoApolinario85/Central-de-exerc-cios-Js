function exerciciosCondicionais01() {
    let numero = prompt("digite o numero")

    if (numero > 0) {
        alert("positivo")
    }
    else {

        if (numero < 0) {

            alert("negativo")
        }
        if (numero == 0) {
            alert(" e zero")
        }
    }

    gerarLog("Numero verificado. " + new Date().toLocaleString())

}


function exerciciosCondicionais02() {


    

    let idade = prompt("digite sua idade")

    if (" idade >= 18") {

        alert(" voce e maior de idade")
    } else {
        alert("voce e menor de idade")
    }
    gerarLog("Voce Verificou Sua idade. " + new Date().toLocaleString())

}

function exerciciosCondicionais03() {

    let numero = prompt("digite sua nota");

    if (numero >= 60) {

        alert("aprovado");

    } else {

        alert("reprovado");

    }
    gerarLog(" sua note foi verificada." + new Date().toLocaleString())

}
function exerciciosCondicionais04() {

    let numero = prompt("digite o numero")

    if (numero > 0) {
        alert("positivo")

    } else {
        if (numero < 0) {
            alert("negativo")
        } else {
            if (numero == 0) {
                alert("seu numero e zero")
            }

        }
    }
    gerarLog("Seu Numero foi visto. " + new Date().toLocaleString())

}
function exerciciosCondicionais05() { // comparação

    let idade = prompt("digita sua idade")
    if (idade >= 0 && idade <= 12) {
        alert("criança")
    } else if (idade >= 13 && idade <= 17) {
        alert("adolecente")
    } else if (idade >= 18) {
        alert("adulto")
    }
    gerarLog("Ecolução verificada." + new Date().toLocaleString())

}

function exerciciosCondicionais06() {

    let numero = prompt(" digite um numero")
    if (numero % 2 == 0) {
        alert("par")
    } else {
        (numero % 2 != 0)
        alert("impar")

    }
    gerarLog("Numero verifcado com sucesso." + new Date().toLocaleString())


}

function intermediario01() {
    let n1 = Number(prompt("digite o numero"));
    let n2 = Number(prompt("digite o numero"));
    let operacao = (prompt("digite a operação"));

    if (operacao == "+") {
        let resulto = n1 + n2;
        alert(resulto)
    } else if (operacao == "-") {
        let resulto = n1 - n2;
        alert(resulto)
    } else if (operacao == "/") {
        let resultado = n1 / n2;
        alert(resultado);
    } else {
        let resultado = n1 * n2;
        alert(resultado)
    }
    gerarLog("Seu Resultado." + new Date().toLocaleString())



}
function gerarLog(textoDoLog) {

    let logsContainer = document.querySelector(".logs-conteiner");

    let paragraph = document.createElement("p");

    paragraph.innerHTML = textoDoLog;

    logsContainer.appendChild(paragraph);

}



