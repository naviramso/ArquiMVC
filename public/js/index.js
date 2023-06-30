$(document).ready(function () {
  $.ajax({
    url: "/eventos",
    method: "GET",
    success: function (data) {
      let html = "";
      data.map((evento) => {
        html += `
          <div class="col" onclick="window.location.href='/evento/${evento.nombre_evento}/${evento.id}'">
          <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            style="background-image: url('${evento.ruta_imagen}');">
            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${evento.nombre_evento}</h2>
              <ul class="d-flex list-unstyled mt-auto">
                <li class="d-flex align-items-center me-3">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#geo-fill"></use>
                  </svg>
                  <small>${evento.ubicacion}</small>
                </li>
                <li class="d-flex align-items-center">
                  <svg class="bi me-2" width="1em" height="1em">
                    <use xlink:href="#calendar3"></use>
                  </svg>
                  <small>${evento.fecha_evento}</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
            `;
      });
      $("#eventosContainer").html(html);
    },
    error: function () {
      alert("Error al obtener los eventos");
    },
  });
});
