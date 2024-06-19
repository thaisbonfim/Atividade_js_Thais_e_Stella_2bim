let geral = [];
function conta() {
    let valor = document.getElementById("val");
    let hora = document.getElementById("hr");
    let total = parseFloat(valor.value) * parseFloat(hora.value);

    let resultado = document.getElementsByTagName("p");
    resultado[1].innerHTML = total;

    geral.unshift(total);

    let tudo = 0;

    for (let i = 0; i <
         geral.length; i++) {
        tudo += geral[i];
    }

    
    resultado[0].innerHTML = tudo;
 
}