const calcular = document.getElementById('calcular');

 

function imc () {

    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    // const pesoNumerico = parseFloat(peso);
    // const alturaNumerica = parseFloat(altura);

    if (peso > 0 && altura > 0) {
        const valorIMC = (peso / (altura * altura));
        let classificacao = '';
        
        if(valorIMC < 16,9) {
            classificacao = 'você está muito abaixo do peso';
        } else if(valorIMC > 17 && valorIMC <= 18.4) {
            classificacao = 'você está abaixo do peso';
        } else if(valorIMC > 18.5 && valorIMC <= 24.9)
            classificacao = 'você está no seu peso normal';

    
        resultado.textContent = `Seu imc é de ${valorIMC.toFixed(2)} e ${classificacao}`;
    } else {
        resultado.textContent = 'Por favor, insira valores válidos para peso e altura.';
    }
}


calcular.addEventListener('click', imc);

