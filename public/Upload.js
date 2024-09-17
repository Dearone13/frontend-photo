// Función para previsualizar la imagen seleccionada
document
  .getElementById("imageInput") //Obten el id del componente que me va a hacer el input de la imagen
  .addEventListener("change", function (event) {
    //Agrega una función de tipo evento al objeto.
    const input = event.target; //Declara una función que va a ser el objetivo del evento
    const preview = document.getElementById("imagePreview"); //Obtiene el otro div imagePreview y lo cambia por la imagen
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.innerHTML = `<img src="${e.target.result}" alt="Imagen seleccionada" class="img-fluid" style="max-width: 100%;">`;
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      preview.innerHTML = "<p>No se ha seleccionado ninguna imagen.</p>";
    }
  });
document
  .getElementById("uploadForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Imagen subida con éxito");
  });
