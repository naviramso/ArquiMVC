$(document).ready(function() {
    // Escuchar el evento submit del formulario
    $('#registroEvento').submit(function(e) {
      e.preventDefault();
  
      // Crear objeto FormData
      let formData = new FormData(this);
      console.log(formData)
  
      // Realizar la petición AJAX
      $.ajax({
        url: '/crearEvento', // Ruta donde manejarás la carga de archivos
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          console.log('Imagen y datos subidos correctamente');
        },
        error: function() {
          console.log('Error al subir imagen y datos');
        }
      });
    });
  });