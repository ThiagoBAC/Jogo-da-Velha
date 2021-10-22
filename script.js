function exibirResultado() {

    const valorDaCasa1 = document.getElementById("casa1").value;
    const valorDaCasa2 = document.getElementById("casa2").value;
    const valorDaCasa3 = document.getElementById("casa3").value;
    const valorDaCasa4 = document.getElementById("casa4").value;
    const valorDaCasa5 = document.getElementById("casa5").value;
    const valorDaCasa6 = document.getElementById("casa6").value;
    const valorDaCasa7 = document.getElementById("casa7").value;
    const valorDaCasa8 = document.getElementById("casa8").value;
    const valorDaCasa9 = document.getElementById("casa9").value;

    document.getElementById('resultado').innerHTML = jogoDaVelha(valorDaCasa1, valorDaCasa2, valorDaCasa3, valorDaCasa4, valorDaCasa5, valorDaCasa6, valorDaCasa7, valorDaCasa8, valorDaCasa9);

}

/*
1 2 3
4 5 6 
7 8 9
*/

function jogoDaVelha(valorDaCasa1, valorDaCasa2, valorDaCasa3, valorDaCasa4, valorDaCasa5, valorDaCasa6, valorDaCasa7, valorDaCasa8, valorDaCasa9) {
    if (
        (valorDaCasa1 === "x" && valorDaCasa2 === "x" && valorDaCasa3 === "x") || (valorDaCasa4 === "x" && valorDaCasa5 === "x" && valorDaCasa6 === "x") ||
        (valorDaCasa7 === "x" && valorDaCasa8 === "x" && valorDaCasa9 === "x") ||
        (valorDaCasa1 === "x" && valorDaCasa4 === "x" && valorDaCasa7 === "x") ||
        (valorDaCasa2 === "x" && valorDaCasa5 === "x" && valorDaCasa8 === "x") ||
        (valorDaCasa3 === "x" && valorDaCasa6 === "x" && valorDaCasa9 === "x") ||
        (valorDaCasa1 === "x" && valorDaCasa5 === "x" && valorDaCasa9 === "x") ||
        (valorDaCasa3 === "x" && valorDaCasa5 === "x" && valorDaCasa7 === "x")
    ) {
        return `JogadorX Venceu!`;
    } else if (
        (valorDaCasa1 === "o" && valorDaCasa2 === "o" && valorDaCasa3 === "o") || (valorDaCasa4 === "o" && valorDaCasa5 === "o" && valorDaCasa6 === "o") ||
        (valorDaCasa7 === "o" && valorDaCasa8 === "o" && valorDaCasa9 === "o") ||
        (valorDaCasa1 === "o" && valorDaCasa4 === "o" && valorDaCasa7 === "o") ||
        (valorDaCasa2 === "o" && valorDaCasa5 === "o" && valorDaCasa8 === "o") ||
        (valorDaCasa3 === "o" && valorDaCasa6 === "o" && valorDaCasa9 === "o") ||
        (valorDaCasa1 === "o" && valorDaCasa5 === "o" && valorDaCasa9 === "o") ||
        (valorDaCasa3 === "o" && valorDaCasa5 === "o" && valorDaCasa7 === "o")
    ) {
        return `JogadorO Venceu!`;
    }
    return `Ninguém ganha!`

}

var botaoReload = document.getElementById("reload");
    botaoReload.addEventListener("click", function () {
        location.reload();
    });

