


    document.getElementById('boton_home').addEventListener('click', function() {
    document.getElementById('demo').style.display = '';
});

    document.getElementById('boton_antecedentes').addEventListener('click', function() {
    document.getElementById('demo').style.display = 'none';
    var nuevoTexto = document.createElement('div');
    nuevoTexto.innerHTML = '<h1>Nuevo Texto</h1><p>Este es un nuevo texto que reemplaza todo lo anterior.</p>';
    document.body.appendChild(nuevoTexto);
});


    document.getElementById('boton_contacto').addEventListener('click', function() {
    window.location.href = 'formulario.html';
});
