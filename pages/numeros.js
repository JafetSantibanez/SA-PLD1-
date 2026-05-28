function sonTodosIguales(a, b, c) {
    return a === b && b === c;
}

function detectarIguales(a, b, c) {

    if (a === b && a !== c) {
        return `El número ${a} se repite 2 veces`;
    } 
    
    else if (a === c && a !== b) {
        return `El número ${a} se repite 2 veces`;
    } 
    
    else if (b === c && b !== a) {
        return `El número ${b} se repite 2 veces`;
    }

    return "No hay números repetidos";
}

function ordenarNumeros(a, b, c) {
    let numeros = [a, b, c];
    numeros.sort((x, y) => x - y);
    return numeros;
}

function analizarNumeros() {

    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let numero3 = Number(document.getElementById("numero3").value);

    let resultado = document.getElementById("resultado");

    // Validación
    if (
        isNaN(numero1) ||
        isNaN(numero2) ||
        isNaN(numero3)
    ) {
        resultado.innerHTML = `
            <p>⚠️ Ingresa números válidos</p>
        `;
        return;
    }

    // Si todos son iguales
    if (sonTodosIguales(numero1, numero2, numero3)) {

        resultado.innerHTML = `
            <h3>✅ Resultado</h3>
            <p>Los tres números son iguales: ${numero1}</p>
        `;

        return;
    }

    let repetidos = detectarIguales(
        numero1,
        numero2,
        numero3
    );

    let numerosOrdenados = ordenarNumeros(
        numero1,
        numero2,
        numero3
    );

    let menor = numerosOrdenados[0];
    let centro = numerosOrdenados[1];
    let mayor = numerosOrdenados[2];

    resultado.innerHTML = `
        <h3>📊 Resultado</h3>

        <p><strong>Número mayor:</strong> ${mayor}</p>
        <p><strong>Número del centro:</strong> ${centro}</p>
        <p><strong>Número menor:</strong> ${menor}</p>

        <hr>

        <p><strong>Menor a mayor:</strong> 
        ${numerosOrdenados.join(" → ")}</p>

        <p><strong>Mayor a menor:</strong> 
        ${numerosOrdenados.slice().reverse().join(" → ")}</p>

        <hr>

        <p><strong>Repetidos:</strong> ${repetidos}</p>
    `;
}