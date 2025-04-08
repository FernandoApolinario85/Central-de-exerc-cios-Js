function exercicios1() {
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
}


function exercicios2() {

    debugger;

    let idade = prompt("digite sua idade")

    if (" idade >= 18") {

        alert(" voce e maior de idade")
    } else {
        alert("voce e menor de idade")
    }

}

function exercicios3() {

    let numero = prompt("digite sua nota");

    if (numero >= 60) {

        alert("aprovado");

    } else {

        alert("reprovado");

    }

}
function exercicios04() {

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

}
function exercicio5() { // comparação

    let idade = prompt("digita sua idade")
    if (idade >= 0 && idade <= 12) {
        alert("criança")
    } else if (idade >= 13 && idade <= 17) {
        alert("adolecente")
    } else if (idade >= 18) {
        alert("adulto")
    }

}

function exercicios06() {
    debugger
    let numero = prompt(" digite um numero")
    if (numero % 2 == 0) {
        alert("certo")
    } else {
        (numero % 2 != 0)
        alert("errado")

    }

}
function intermediario01() {
    let n1 =Number (prompt("digite o numero"));
    let n2 = Number (prompt("digite o numero"));
    let operacao =  (prompt("digite a operação"));
    
    if (operacao == "+"){
        let resulto = n1+n2;
        alert(resulto)
    } else if (operacao == "-") {
        
    }
}

intermediario01()

