// Funcao pra checar se os campos estao vazios
function checkField(){
    let qtdPoints = document.querySelector('#qtd-point').value;
    let porcentPoint = document.querySelector('#qtd-percent').value;
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

// funcao para limpar os Campos
function clearFields() {
    const fields = ['#qtd-point', '#qtd-percent', '#vlr-invest', '#vl-transfer', '#vlr-milheiro'];
    fields.forEach(field => {
      document.querySelector(field).value = '';
    });
}

// Calculando os 20%
let qtdPoint = document.querySelector('#qtd-point');
let qtdPercent = document.querySelector('#qtd-percent');

qtdPoint.addEventListener("change", function(){
    qtdPercent.value = this.value * 0.2;
});

// Funcao para realizar todo o calculo
document.querySelector('#btn-cotar').addEventListener('click', () => {
    let qtdPointNumb = parseFloat(document.querySelector('#qtd-point').value);
    let vlrPercentNumb = parseFloat(document.querySelector('#qtd-percent').value);
    let vlTransferNumb = document.querySelector('#vl-transfer').value;
    let vlrInvesNumb = parseFloat(document.querySelector('#vlr-invest').value);
    let vlrMilheiroNumb = parseFloat(document.querySelector('#vlr-milheiro').value);

    pointRestante = qtdPointNumb - vlrPercentNumb;

    vlrPontRestante = ( vlrPercentNumb * vlrMilheiroNumb) / 1000;
    

    priceMilhasReal = ( vlrInvesNumb * 1000 ) / pointRestante ;
    valueInvest = vlrInvesNumb + vlrPontRestante;
    
    resultTransfer = ((qtdPointNumb * vlTransferNumb) / 100) + qtdPointNumb;
    priceMilheiroOff = valueInvest / (resultTransfer / 1000);
    
    if(checkField() == false){
    } else {
        if (vlTransferNumb === '') {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilhasReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#milheiro-restant').innerHTML = priceMilhasReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#points-restant').innerHTML = pointRestante;
            document.querySelector('#ttl-point').innerHTML = qtdPointNumb;
            clearFields()
        } else {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilheiroOff.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#milheiro-restant').innerHTML = priceMilhasReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#points-restant').innerHTML = pointRestante;
            document.querySelector('#ttl-point').innerHTML = resultTransfer;   
            clearFields()    
            } 
        }       
});

document.querySelector('#warnig').addEventListener('click', ()=> {
    alert('O menu Ajuda esta em Desenvolvimento')
});
