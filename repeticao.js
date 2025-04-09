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

intermediario()