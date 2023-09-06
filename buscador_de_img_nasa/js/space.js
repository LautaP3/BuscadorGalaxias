document.addEventListener('DOMContentLoaded', () => {
    const btnBuscar = document.getElementById('btnBuscar');
    const contenedor = document.getElementById('contenedor');

    // Función que se activa con el botón;
    btnBuscar.addEventListener("click", () => {
        const inputBuscar = document.getElementById('inputBuscar');
        const consulta = inputBuscar.value.trim();
        const url = `https://images-api.nasa.gov/search?q=${consulta}`;

        // Cambia la url y hace la solicitud
        fetch(url)
            .then(response => response.json())
            .then(dataArray => showData(dataArray))
            .catch(error => console.error("error fetching data:", error));
    });

    // Función que muestra los productos
    function showData(dataArray) {
        contenedor.innerHTML = "";
        dataArray.collection.items.forEach(element => {
            const titulo = element.data[0].title;
            const imagen = element.links[0].href
            const description = element.data[0].description
            const date = element.data[0].date_created


            contenedor.innerHTML +=
                `<div class="card d-inline-flex p-2" style="width: 18rem">
        <div class="col-sm">
            <img src=${imagen} alt="imagen" class='card-img-top embed-responsive-item' style='height: 12rem'>
                <div class="card-body">
                 <h4 class="card-title">${titulo}</h4>
                 <p class='card-text'>${description}</p>
                 <h4 class='card-text'>${date}</h4>
                </div>
            </div>
        </div>`;
        });
    }
});