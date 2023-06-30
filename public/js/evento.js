$(document).ready(function () {
  // Escuchar el evento submit del formulario
  $("#reservar").click(function (e) {
    e.preventDefault();

    // Crear objeto FormData
    const id_boleto = $("#id_boleto").val();
    const cantidad_reserva = $("#inputQuantity").val();
    const cantidad = $("#cantidad").val();
    
    const formData = new FormData(); // Crear objeto FormData vacío

    formData.append("id_boleto", id_boleto); // Agregar valores al FormData
    formData.append("cantidad_reserva", cantidad_reserva);
    formData.append("cantidad", cantidad);

    console.log(formData);
    // Realizar la petición AJAX
    $.ajax({
      url: "/reserva", // Ruta donde manejarás la carga de archivos
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        console.log(response);
      },
      error: function () {
        console.log("Error al reservar");
      },
    });
  });
});
