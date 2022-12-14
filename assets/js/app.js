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
let checkbox = document.querySelector('#check');
let element = document.querySelector('.row-transfer');

checkbox.addEventListener('change', ()=> {
    element.classList.toggle("show-input-transfer");
    document.querySelector('#vl-transfer').value = '';
})

function priceBuy() {
    let qtdPoint = document.querySelector('#qtd-point').value;
    let vlCupom = document.querySelector('#vl-cupon').value;
    let vlTransfer = document.querySelector('#vl-transfer').value;
    let qtdPointNumb = parseFloat(qtdPoint);
    let vlCupomNumb = parseFloat(vlCupom);
    let vlTransferNumb = parseFloat(vlTransfer);
    
    priceMilhasReal = 70 - ((70 * vlCupomNumb) / 100);
    valueInvest = (qtdPointNumb / 1000) * priceMilhasReal;
    
    resultTransfer = ((qtdPointNumb * vlTransferNumb) / 100) + qtdPointNumb;
    priceMilheiroOff = valueInvest / (resultTransfer / 1000);
    
    if(checkField() == false){
    } else {
        if(vlTransfer == '') {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilhasReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        } else {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilheiroOff.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#ttl-point').innerHTML = resultTransfer;   
        } 
    }       
}
let btnCotar = document.querySelector('#btn-cotar');
btnCotar.addEventListener('click', priceBuy);