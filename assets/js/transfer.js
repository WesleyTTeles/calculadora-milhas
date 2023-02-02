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
let checkbox = document.querySelector('#check');
let element = document.querySelector('.row-transfer');

checkbox.addEventListener('change', ()=> {
    element.classList.toggle("show-input-transfer");
    document.querySelector('#vl-transfer').value = '';
})

document.querySelector('#btn-cotar').addEventListener('click', () => {
    let qtdPoint = document.querySelector('#qtd-point').value;
    let vlrPercent = document.querySelector('#qtd-percent').value;
    let vlTransfer = document.querySelector('#vl-transfer').value;
    let vlrInves = document.querySelector('#vlr-invest').value;

    let qtdPointNumb = parseFloat(qtdPoint);
    let vlrPercentNumb = parseFloat(vlrPercent);
    let vlrInvesNumb = parseFloat(vlrInves);
    let vlTransferNumb = parseFloat(vlTransfer);

    newResult = qtdPointNumb - vlrPercentNumb;
    priceMilhasReal = ( vlrInvesNumb * 1000 ) / newResult ;
    valueInvest = vlrInvesNumb;
    
    resultTransfer = ((qtdPointNumb * vlTransferNumb) / 100) + qtdPointNumb;
    priceMilheiroOff = valueInvest / (resultTransfer / 1000);
    
    if(checkField() == false){
    } else {
        if(vlTransfer == '') {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilhasReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#ttl-point').innerHTML = qtdPointNumb;
        } else {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilheiroOff.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#ttl-point').innerHTML = resultTransfer;   
            } 
        }       
});

// Calculando os 20%
let qtdPoint = document.querySelector('#qtd-point');
let qtdPercent = document.querySelector('#qtd-percent');

qtdPoint.addEventListener("change", function(){
    qtdPercent.value = this.value * 0.2;
});


