// 1 = declarar contador
// 2 = condição (enquanto)
function exemplofor() {
    for (let contador = 1; contador <= 5; contador++) {
        alert(contador);
    }

}
function exemplowhile() {

    let contador = 1;
    while (contador <= 5) {

        console.log(contador);
        contador++


    }
}
function exemplodowilhe() {

    let contador = 1;
    do {
        alert(contador);
        conatdor++;
    } while (contador <= 5);
}


function basico1() {
    debugger

    for (let contador = 1; contador <= 10; contador++) {

        console.log(contador);

    }



}

function basico2() {
    let valor = prompt("digite o valor");
    for (let contador = 1; contador <= 10; contador++) {
        alert(contador * valor);
    }
}

function basico3() { //contado de 2 em 2
    let valor = prompt("digite o valor");
    for (let contador = 2; contador <= 50; contador += 2) {
        alert(contador)
    }
}

function intermediario() {

    let valor = prompt("digite o valor")
    while (valor >= 0) {

        console.log(valor)
        valor--
    }
}

// intermediario()
function intermediario02ex() {

    // let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    // alert("acerte o numero");

    // let numerodigitado = prompt("digite um numero");
    // while (numeroAleatorio != numerodigitado);
    // if (numerodigitado = numeroAleatorio) {
    //     alert("vc acertou")
    // }else if(numerodigitado < numeroAleatorio){
    //     alert("numero e maio")
    // }


}

function intermediario02() {
    let numeroAleatorio =Math.floor(Math.random() * (100-1)+1);
    let tentativa;
    while (tentativa != numeroAleatorio){

        tentativa =prompt("insira um numero");
        if (numeroAleatorio > tentativa) {
            alert("numero aleatorio e maior");

        }else if(numeroAleatorio < tentativa){
            alert( "o numero aleatorio e menor")

        }else {
            alert("vc acerto")
        }
    }

    
}intermediario02()


