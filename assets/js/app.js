// Funcao pra checar se os campos estao vazios
function checkBuyPoint(){
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
// Funcao para Limpar os Campos apos o calculo.
function remov() {
    document.querySelector('#qtd-point').value = '';
    document.querySelector('#vl-cupon').value = '';
    document.querySelector('#vl-transfer').value = '';
}

// Funcao pra quando clica no checkbox ele mostre o input da transferencia
let checkbox = document.querySelector('#check');
let element = document.querySelector('.row-transfer');

checkbox.addEventListener('change', ()=> {
    let list = element.classList.toggle("show-input-transfer");
})

// funcao para monitorar as mudancas do select e armazenar em uma variavel
function choiceOptionBuy() {
    const select = document.querySelector('#opttions-buy');
    valor = select.options[select.selectedIndex].value;
}

function calcPoints() {
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
    
    if(checkBuyPoint() == false){}
    else 
    {
        if(vlTransfer == ''){
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilhasReal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            if (valor == 1){
                if (priceMilhasReal <= 17.50) {
                    document.querySelector('#warning').innerHTML = 'OPORTUNIDADE NESSA CONTACAO'
                    document.querySelector('#warning').style.color = '#21EC1D';
                } else {
                    document.querySelector('#warning').innerHTML = 'PREJUIZO NESSA CONTACAO'  
                    document.querySelector('#warning').style.color = 'red';
                }
            } else if (valor == 2) {
                if (priceMilhasReal <= 20) {
                    document.querySelector('#warning').innerHTML = 'OPORTUNIDADE NESSA CONTACAO'
                    document.querySelector('#warning').style.color = '#21EC1D';
                } else {
                    document.querySelector('#warning').innerHTML = 'PREJUIZO NESSA CONTACAO'  
                    document.querySelector('#warning').style.color = 'red';
                }
            } else if (valor == 3 || valor == 4) {
                if (priceMilhasReal <= 24) {
                    document.querySelector('#warning').innerHTML = 'OPORTUNIDADE NESSA CONTACAO'
                    document.querySelector('#warning').style.color = '#21EC1D';
                } else {
                    document.querySelector('#warning').innerHTML = 'PREJUIZO NESSA CONTACAO'  
                    document.querySelector('#warning').style.color = 'red';
                }
            } else {
                alert('Preecnha os Campos!')
            }
            //remov();    
        } else {
            document.querySelector('#vl-invest').innerHTML = valueInvest.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#vl-milheiro').innerHTML = priceMilheiroOff.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            document.querySelector('#ttl-point').innerHTML = resultTransfer;   
            if (valor == 1){
                if (priceMilheiroOff <= 17.50) {
                    document.querySelector('#warning').innerHTML = 'OPORTUNIDADE NESSA CONTACAO'
                    document.querySelector('#warning').style.color = '#21EC1D';
                } else {
                    document.querySelector('#warning').innerHTML = 'PREJUIZO NESSA CONTACAO'  
                    document.querySelector('#warning').style.color = 'red';
                }
            } else if (valor == 2) {
                if (priceMilheiroOff <= 20) {
                    document.querySelector('#warning').innerHTML = 'OPORTUNIDADE NESSA CONTACAO'
                    document.querySelector('#warning').style.color = '#21EC1D';
                } else {
                    document.querySelector('#warning').innerHTML = 'PREJUIZO NESSA CONTACAO'  
                    document.querySelector('#warning').style.color = 'red';
                }
            } else if (valor == 3 || valor == 4) {
                if (priceMilheiroOff <= 24) {
                    document.querySelector('#warning').innerHTML = 'OPORTUNIDADE NESSA CONTACAO'
                    document.querySelector('#warning').style.color = '#21EC1D';
                } else {
                    document.querySelector('#warning').innerHTML = 'PREJUIZO NESSA CONTACAO'  
                    document.querySelector('#warning').style.color = 'red';
                }
            } else {
                alert('Preecnha os Campos!')
            }
            //remov();    
        } 
    }       
}