const form = document.querySelector('.formulario');

form.addEventListener('submit', function(evento) { //o que eu desejo ouvir e a funcao a ser executada quando ouvir

    evento.preventDefault(); //impede a pagina de recarregar

    const inputPeso = evento.target.querySelector('#peso'); //pegando o elemento peso do formulario
    const inputAltura = evento.target.querySelector('#altura'); //pegando o elemento altura do formulario

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) { //se o peso for uma string vazia ou NaN, ele vai ser falso
        setCalculo('Peso inválido', false);
        return;
    }

    if (!altura) { //se a altura for uma string vazia ou NaN, ele vai ser falso
        setCalculo('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const descIMC = getDescIMC(imc);
    
    const mensagem = `Seu IMC é ${getIMC(peso, altura)} (${descIMC}).`;
    setCalculo(mensagem, true);

});

function getDescIMC (imc) {
    const descIMC = ['Abaixo do peso','Peso normal','Sobrepeso','Obesidade grau 1','Obesidade grau 2','Obesidade grau 3'];

    if (imc >= 39.9) return descIMC[5];
    if (imc >= 34.9) return descIMC[4]; 
    if (imc >= 29.9) return descIMC[3];
    if (imc >= 24.9) return descIMC[2];
    if (imc >= 18.5) return descIMC[1];
}

function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function createP() {
    const p = document.createElement('p'); //criando um paragrafo e atribuindo a variavel p
    return p;
};

function setCalculo (mensagem, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = ``;

    const p = createP();

    if (isValid) {
        p.classList.add('paragrafo-resultado'); //adicionando a classe ao paragrafo
    } else {
        p.classList.add('bad'); //adicionando a classe bad ao paragrafo
    }

    p.innerHTML = mensagem;
    resultado.appendChild(p); //adicionando o paragrafo ao resultado
};