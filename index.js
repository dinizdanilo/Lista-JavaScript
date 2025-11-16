/**** Escreva o código abaixo 👇******/

function somar(a, b) {
    return a + b;
}
function multiplicar(a, b) {
    return a * b;
}

function subtrair(a, b) {
    return a - b;
}

function dividir(a, b) {
    if (b === 0) {
        throw new Error("Erro: divisão por zero");
    }
    return a / b;
}

function calcularMedia(nota1, nota2, nota3, nota4) {
    const soma = nota1 + nota2 + nota3 + nota4;
    return dividir(soma, 4);
}

function elevarPotencia(base, expoente) {
    return Math.pow(base, expoente);
}

function calcularAreaRetangulo(largura, altura) {
    return multiplicar(largura, altura);
}


function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

function calcularRaizQuadrada(numero) {
    return Math.sqrt(numero);
}

function calcularHipotenusa(cateto1, cateto2) {
    const cat1AoQuadrado = elevarPotencia(cateto1, 2);
    const cat2AoQuadrado = elevarPotencia(cateto2, 2);
    const soma = somar(cat1AoQuadrado, cat2AoQuadrado);
    return calcularRaizQuadrada(soma);
}

/**** Escreva o código acima ☝️******/

//Não altere as linhas abaixo
module.exports = {
  somar,
  multiplicar,
  subtrair,
  dividir,
  calcularMedia,
  elevarPotencia,
  calcularAreaRetangulo,
  verificarParOuImpar,
  calcularRaizQuadrada,
  calcularHipotenusa,
};
