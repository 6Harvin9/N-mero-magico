let numeroSecreto;
let intentos;

function iniciarJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;

  document.getElementById('mensaje').textContent = '';
  document.getElementById('intentos').textContent = '';
  document.getElementById('numero').value = '';
  
  document.getElementById("btn-intentar").style.display = "inline-block";
  document.getElementById("btn-nuevo").style.display = "inline-block";
}

document.getElementById('btn-intentar').addEventListener('click', function() {
  let input = document.getElementById('numero');
  let valor = input.value.trim();

  // Validaciones
  if (valor === '' || isNaN(valor)) {
    alert('Por favor, ingresa un número válido.');
    return;
  }

  valor = Number(valor);

  if (valor < 1 || valor > 10) {
    alert('El número debe estar entre 1 y 10.');
    input.value = '';
    return;
  }

  intentos++;

  if (valor < numeroSecreto) {
    document.getElementById('mensaje').textContent = 'El número secreto es mayor. Intenta de nuevo.';
  } else if (valor > numeroSecreto) {
    document.getElementById('mensaje').textContent = 'El número secreto es menor. Intenta de nuevo.';
  } else {
    document.getElementById('mensaje').textContent = `🎉 ¡Felicidades! Has adivinado el número secreto ${numeroSecreto}`;
    document.getElementById('intentos').textContent = 
      intentos === 1 ? "Lo lograste en 1 intento." : `Lo lograste en ${intentos} intentos.`;

    document.getElementById('btn-intentar').style.display = "none";
  }

  input.value = '';
});

document.getElementById('btn-nuevo').addEventListener('click', iniciarJuego);

iniciarJuego();
