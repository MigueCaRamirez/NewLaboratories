const form = document.querySelector(".contact-form form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById('Name').value;
    const descripcion = document.getElementById('Description').value;
    const correo = document.getElementById('Gmail').value;

    console.log("Name:", nombre);
    console.log("Description:", descripcion);
    console.log("Gmail:", correo);

    alert("Hola " + nombre + ", su correo es " + correo + " y su motivo de contacto es: \n" + descripcion);
});

