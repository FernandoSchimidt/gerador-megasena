const form = document.querySelector('#form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    setResultado(numerosMega());
});

function numerosMega() {
    let numeros = [];
    const max = 60;
    const min = 1;
    let bRdm = false;
    let erros;
    while (bRdm === false) {
        numeros.length = 0;
        erros = 0;
        for (let i = 0; i < 6; i++) {
            numeros.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
        console.log(numeros);
        for (let j = 0; j < numeros.length; j++) {
            for (let k = 0; k < numeros.length; k++) {
                if (k === j)
                    continue;
                if (numeros[j] === numeros[k]) {
                    erros++;
                }
            }
        }
        if (erros > 0) {
            bRdm = false;
        } else {
            bRdm = true;
        }
    }

    numeros.sort(function (a, b) {
        return a - b
    });
    return (replaceVirgulas(numeros.toString()));

}

function replaceVirgulas(teste) {
    return (teste.replace(/,/g, " - "));
}

function setResultado(msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}

function criaP() {
    const p = document.createElement('p');
    return p;
}