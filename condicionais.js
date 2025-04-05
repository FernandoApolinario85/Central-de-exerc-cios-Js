function exercio1() {
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


function exercio2() {

    debugger;

    let idade = prompt("digite sua idade")

    if (" idade >= 18") {

        alert(" voce e maior de idade")
    } else {
        alert("voce e menor de idade")
    }

}

function exerci03() {

    let numero = prompt("digite sua nota");

    if (numero >= 60) {

        alert("aprovado");

    } else {

        alert("reprovado");

    }

}
function exerci04() {

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
function exercio5(){

    let idade = prompt("digita sua idade")
    if(idade >=0 && idade <= 12){
        alert("criança")
    }else if (idade >= 13 && idade <=17)
        alert("adolecente")
        
}