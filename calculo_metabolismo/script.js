document.getElementById('calcular').addEventListener('click', function () {
    // valores do formulário
    const idade = parseInt(document.getElementById('idade').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseInt(document.getElementById('altura').value);
    const sexo = document.getElementById('sexo').value;
    const horasTreino = parseFloat(document.getElementById('horas-treino').value);
    const diasTreino = parseInt(document.getElementById('dias-treino').value);
    const nivelAtividade = document.getElementById('nivel-atividade').value;

    // local que preeche os valores
    if (isNaN(idade) || isNaN(peso) || isNaN(altura) || isNaN(horasTreino) || isNaN(diasTreino)) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    // Fórmula de Harris-Benedict para cálculo do metabolismo basal
    let metabolismoBasal;
    if (sexo === 'homem') {
        metabolismoBasal = 88.36 + (13.4 * peso) + (4.8 * altura) - (5.7 * idade);
    } else if (sexo === 'mulher') {
        metabolismoBasal = 447.6 + (9.2 * peso) + (3.1 * altura) - (4.3 * idade);
    }

    // Fator de atividade física baseado no grau de atividade
    let fatorAtividade;
    switch (nivelAtividade) {
        case 'sedentario':
            fatorAtividade = 1.2;
            break;
        case 'leve':
            fatorAtividade = 1.375;
            break;
        case 'moderado':
            fatorAtividade = 1.55;
            break;
        case 'intenso':
            fatorAtividade = 1.725;
            break;
        default:
            fatorAtividade = 1.0;
    }

    // somar o metabolismo basal com o nível de atividade
    const metabolismoAjustado = metabolismoBasal * fatorAtividade;

    // Exibir os resultados
    document.getElementById('resultado').textContent = `Seu metabolismo basal é ${metabolismoBasal.toFixed(2)} calorias por dia.`;
    document.getElementById('resultado-nivel').textContent = `Seu gasto calórico total ajustado ao nível de atividade é ${metabolismoAjustado.toFixed(2)} calorias por dia.`;
});