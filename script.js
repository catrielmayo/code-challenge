const url = 'https://jsonplaceholder.typicode.com/users'

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('miFormulario');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;

        // Datos a enviar al servidor en formato JSON
        const datos = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento: fechaNacimiento
        };

        // Configurar la solicitud POST
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        })
            .then(response => {
                if (response.ok) {
                    // La solicitud se realizó con éxito
                    return response.json(); // Puedes procesar la respuesta aquí si es necesario
                } else {
                    throw new Error('Error en la solicitud');
                }
            })
            .then(data => {
                // Hacer algo con la respuesta del servidor si es necesario
                console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });
});

