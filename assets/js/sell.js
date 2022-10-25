// Funcao pra checar se os campos estao vazios
function checkField(){
    let qtdPoints = document.querySelector('#qtd-milhas').value;
    let porcentPoint = document.querySelector('#vl-simulation').value;
    let msg1 = '';

    if (qtdPoints == ''){
        msg1 += 'Informe a Quantidade de Pontos.\n';
    }
    if (porcentPoint == ''){
        msg1 += 'Informe o Valor do Cupom de Desconto.\n';
    }
    if (msg1 != ''){
        alert(msg1);
        return false
    }
    return true;
}

// Funcao para limpar os campos
function cleanField() {
    document.querySelector('#qtd-milhas').value = '';
    document.querySelector('#vl-simulation').value = '';
}

function priceSell() {
    let qtdMilhas = document.querySelector('#qtd-milhas').value;
    let vlSimulation = document.querySelector('#vl-simulation').value;
    let qtdMilhasNumb = parseFloat(qtdMilhas);
    let vlSimulationNumb = parseFloat(vlSimulation);

    valueMilheiro = (vlSimulationNumb * 1000) / qtdMilhasNumb;
    
    if(checkField() == false){
    } else {
        document.querySelector('#vl-milheiro').innerHTML = valueMilheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        cleanField();
    }       
}

let btnCotar = document.querySelector('#btn-cotar');
btnCotar.addEventListener('click', priceSell);
