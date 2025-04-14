function exemploFilter() {

    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let NumerosFiltrados = numeros.filter(numero => numero > 5);
    console.log("numerosFiltrado" + NumerosFiltrados);

}
function exemploFilter2() {

    let numeros = [10, -30, 80, -101, 22, 23, 41, 18, 30, 35, 41, 42, 48, 70];

    let newNumeros = numeros.filter(numero => numero >= 5)
    console.log("newnumeros" + newNumeros);
}

function exemploFilter3() {
    let nomes = ["carlos", "abraao", "beto", "josefa", "silas", "estafani", "joao", "dj", "delma", "cristiano",];

    let nomesComJ = nomes.filter(nome => nome.startsWith("j"));

    console.log(`nomesComJ ${nomesComJ.join(", ")} `);

}
function intermediarioFilter1() {

    // { nome: "teclado", preco: 120 };
    // { nome: "mouse", preco: };
    // { nome: "teclado", preco: 120 };
    // { nome: "teclado", preco: 120 };

}

function exemplofind1() {
    let produtos = [
        { id: 1, nome: "teclado", preco: 100 },
        { id: 2, nome: "mouse", preco: 50 },
        { id: 2, nome: "monitor", preco: 700 },

    ];
    let produtosFiltrados = produtos.find(produto => produto.preco == 700);

    console.log(produtosFiltrados);

} exemplofind1()

function exemplomap() {
    let numeros = [1, 2, 3, 4, 5];
    let numerosDobrados = numeros.map(numero => numero * 2);
    console.log(numerosDobrados)
}
exemplomap()

function map01() {
    let frase = ["Hola Mundo"];
    let fraseExclamada = frase.map(frase => frase + "!!");
    console.log(fraseExclamada);

} map01()
function map02(){

    let aluno = [ "Ana", "Bruno", "carla"];
    let alunoComNome = aluno.map(aluno => "aluno " + aluno);
    console.log(alunoComNome)
    
}
map02()