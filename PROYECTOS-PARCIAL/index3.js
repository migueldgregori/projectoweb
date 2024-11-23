function enviarFormulario() {
    const email = document.getElementById('exampleFormControlInput1').value;
    const mensaje = document.getElementById('exampleFormControlTextarea1').value;

    if (email && mensaje) {
    document.getElementById('mensaje').style.display = 'block';
    } else {
    alert('Por favor, rellena todos los campos.');
    }
}