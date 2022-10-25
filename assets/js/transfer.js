// Funcao pra checar se os campos estao vazios
function checkField(){
    let qtdPoints = document.querySelector('#qtd-point').value;
    let porcentPoint = document.querySelector('#vl-transfer').value;
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
    document.querySelector('#qtd-point').value = '';
    document.querySelector('#vl-transfer').value = '';
}

function priceTransfer() {
    let qtdPoint= document.querySelector('#qtd-point').value;
    let vlTranfer = document.querySelector('#vl-transfer').value;
    let qtdPointNumb = parseFloat(qtdPoint);
    let vlTransferNumb = parseFloat(vlTranfer);

    resultTransfer = ((qtdPointNumb * vlTransferNumb) / 100) + qtdPointNumb;
    
    if(checkField() == false){
    } else {
        document.querySelector('#ttl-point').innerHTML = `${resultTransfer} Pontos`;
        cleanField();
    }       
}

let btnCotar = document.querySelector('#btn-cotar');
btnCotar.addEventListener('click', priceTransfer);
