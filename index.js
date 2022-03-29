function mudaCor(numero) {
  if (numero > 10) {
    document.getElementById('texto').style.color = '#0000ff';
  } else {
    document.getElementById('texto').style.color = '#ff0000';
  }
}

function fazAconta(primeiroNumero, segundoNumero) {
  return primeiroNumero + segundoNumero;
}

function transformaNumero(id) {
  return parseInt(document.getElementById(id).value, 10);
}

function transformaTexto(id, resultado){
  document.getElementById(id).innerHTML = resultado;
}

function soma() {
  var primeiroNumero = transformaNumero('primeiroNumero');
  var segundoNumero = transformaNumero('segundoNumero');

  var resultado = fazAconta(primeiroNumero, segundoNumero);

  transformaTexto('texto', resultado);
  mudaCor(resultado);
}