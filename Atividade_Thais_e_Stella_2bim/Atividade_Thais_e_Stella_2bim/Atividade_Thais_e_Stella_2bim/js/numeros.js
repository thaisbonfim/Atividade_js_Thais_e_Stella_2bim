function ordenarNumeros() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);

  var valores = [num1, num2];
  valores.sort((a, b) => a - b);

  var result = document.getElementById('resultado');
  result.innerText = "Números em ordem crescente: " + valores.join(", ");
}

function ordenarNuns() {
  var numeros = [];
  var n1 = parseInt(document.getElementById("n1").value);
  var n2 = parseInt(document.getElementById("n2").value);
  var n3 = parseInt(document.getElementById("n3").value);

  var valores2 = [n1, n2, n3];
  numeros.push(n1, n2, n3);

  // Ordena os números
  numeros.sort(function (a, b) {
    return a - b;
  });

  var result = document.getElementById('resultado');
  result.innerText = numeros.join(", ");

}

