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
function clearFields() {
    const fields = ['#qtd-milhas', '#vl-simulation', '#vl-transfer'];
    fields.forEach(field => {
      document.querySelector(field).value = '';
    });
}
// Funcao pra quando clica no checkbox ele mostre o input da transferencia
document.querySelector('#check').addEventListener('change', ()=> {
    document.querySelector('.row-transfer').classList.toggle("show-input-transfer");
    document.querySelector('#vl-transfer').value = '';
});
// Funcao para Realizar todo o calculo
document.querySelector('#btn-cotar').addEventListener('click', () => {
    let qtdMilhasNumb = parseFloat(document.querySelector('#qtd-milhas').value);
    let vlSimulationNumb = parseFloat(document.querySelector('#vl-simulation').value);
    let vlTransferNumb = document.querySelector('#vl-transfer').value;
    
    valueMilheiro = (vlSimulationNumb * 1000) / qtdMilhasNumb;
    resultTransfer = ((qtdMilhasNumb * vlTransferNumb) / 100) + qtdMilhasNumb;
    priceMilheiroOff = vlSimulationNumb / (resultTransfer / 1000);
    
    if(checkField() == false){
    } else {
        if(vlTransferNumb == '') {
            document.querySelector('#vl-milheiro').innerHTML = valueMilheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            clearFields()
        } else {
            document.querySelector('#vl-milheiro').innerHTML = valueMilheiro.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilheiroOff.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            clearFields()
        }
    }       
});


document.querySelector('#warnig').addEventListener('click', ()=> {
    alert('O menu Ajuda esta em Desenvolvimento')
});
