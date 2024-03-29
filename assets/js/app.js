// Funcao pra checar se os campos estao vazios
function checkField(){
    let qtdPoints = document.querySelector('#qtd-point').value;
    let porcentPoint = document.querySelector('#vl-cupon').value;
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

// Funcao pra quando clica no checkbox ele mostre o input da transferencia
document.querySelector('#check').addEventListener('change', ()=> {
    document.querySelector('.row-transfer').classList.toggle("show-input-transfer");
    document.querySelector('#vl-transfer').value = '';
})

// Funcao para limpar os campos
function clearFields() {
    const fields = ['#qtd-point', '#vl-cupon', '#vl-transfer'];
    fields.forEach(field => {
      document.querySelector(field).value = '';
    });
}

document.querySelector('#btn-cotar').addEventListener('click', ()=> {

    let qtdPointNumb = parseFloat(document.querySelector('#qtd-point').value);
    let vlCupomNumb = parseFloat(document.querySelector('#vl-cupon').value);
    let vlTransferNumb = document.querySelector('#vl-transfer').value;

    priceMilhasReal = 70 - ((70 * vlCupomNumb) / 100);
    valueInvest = (qtdPointNumb / 1000) * priceMilhasReal;
    
    resultTransfer = ((qtdPointNumb * vlTransferNumb) / 100) + qtdPointNumb;
    priceMilheiroOff = valueInvest / (resultTransfer / 1000);
    
    if(checkField() == false){
    } else {
        if(vlTransferNumb == '') {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilhasReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            clearFields()
        } else {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilheiroOff.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#ttl-point').innerHTML = resultTransfer;   
            clearFields()
        } 
    }           
});

document.querySelector('#warnig').addEventListener('click', ()=> {
    alert('O menu Ajuda esta em Desenvolvimento')
});
