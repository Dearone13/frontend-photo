document
  .getElementById("registerUserModal")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener los valores del formulario
    const formData = {
      first_name: document.getElementById("registerUserName").value,
      last_name: document.getElementById("registerUserLastName").value,
      birthday: document.getElementById("registerUserBirthday").value,
      user_name: document.getElementById("registerUseruser").value,
      email: document.getElementById("registerUserEmail").value,
      password: document.getElementById("registerUserPassword").value,
      description: "Escribe aquí tu descripción",
    };
    // Mostrar el objeto transformado en consola
    console.log(JSON.stringify(formData));

    fetch("http://127.0.0.1:8000/api/user/", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convertir los datos en JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud POST");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        console.log("Datos enviados correctamente:", data); // Manejar la respuesta del servidor
        // Aquí puedes agregar más lógica como redirigir al usuario o mostrar un mensaje de éxito
        loadTableData();
      })
      .catch((error) => {
        console.error("Error:", error); // Manejar los errores
        // Mostrar un mensaje de error al usuario
      });
  });
function loadTableData() {
  fetch("http://127.0.0.1:8000/api/user/") // Reemplaza con la URL de tu API
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json(); // Convierte la respuesta a JSON
    })
    .then((data) => {
      const tableBody = document.querySelector("#data-table tbody");
      tableBody.innerHTML = ""; // Limpiar el contenido previo

      data.forEach((item) => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = item.user_id; // Asumiendo que tu objeto tiene un campo 'id'
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = item.first_name; // Asumiendo que tu objeto tiene un campo 'name'
        row.appendChild(nameCell);

        const lastName = document.createElement("td");
        lastName.textContent = item.last_name; // Asumiendo que tu objeto tiene un campo 'name'
        row.appendChild(lastName);

        const birthday = document.createElement("td");
        birthday.textContent = item.birthday; // Asumiendo que tu objeto tiene un campo 'email'
        row.appendChild(birthday);

        const user_name = document.createElement("td");
        user_name.textContent = item.user_name; // Asumiendo que tu objeto tiene un campo 'email'
        row.appendChild(user_name);

        const emailCell = document.createElement("td");
        emailCell.textContent = item.email; // Asumiendo que tu objeto tiene un campo 'email'
        row.appendChild(emailCell);

        const password = document.createElement("td");
        password.textContent = item.password; // Asumiendo que tu objeto tiene un campo 'email'
        row.appendChild(password);

        const actionsCell = document.createElement("td");

        const hiddenInput = document.createElement("input");
        hiddenInput.id = "id";
        hiddenInput.type = "hidden";
        hiddenInput.value = item.user_id;
        actionsCell.appendChild(hiddenInput);

        const editButton = document.createElement("a");
        editButton.href = "#";
        editButton.className = "btn btn-sm btn-dark";
        editButton.setAttribute("data-toggle", "modal");
        editButton.setAttribute("data-target", "#updateUserModal");
        editButton.setAttribute("data-id", item.user_id);
        editButton.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement("a");
        deleteButton.href = "#";
        deleteButton.setAttribute("data-id", item.user_id);
        deleteButton.setAttribute("data-action", "delete"); // Esto permitirá reconocerlo
        deleteButton.className = "btn btn-sm btn-dark";
        deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);

        tableBody.appendChild(row);
      });
    })
    .catch((error) => console.error("Error:", error));
}

// Llama a la función al cargar la página

document.addEventListener("click", function (event) {
  let target = event.target;

  // Si el clic es en el ícono dentro del botón, ajustamos el target
  if (target.tagName === "I" && target.closest("a[data-toggle='modal']")) {
    target = target.closest("a[data-toggle='modal']");
  }

  // Verificamos si el clic fue en el botón de editar
  if (target.matches("a[data-toggle='modal']")) {
    const userId = target.getAttribute("data-id");
    console.log("User ID:", userId); // Aquí ya tienes el userId disponible

    // Guardamos el userId en el campo oculto
    document.getElementById("updateUserId").value = userId;

    // Hacer una solicitud GET para obtener los detalles del registro
    fetch(`http://127.0.0.1:8000/api/user/${userId}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // Rellenar el modal con los datos del usuario
        document.getElementById("updateUserName").value = data.first_name;
        document.getElementById("updateUserLastName").value = data.last_name;
        document.getElementById("updateUserBirthday").value = data.birthday;
        document.getElementById("updateUseruser").value = data.user_name;
        document.getElementById("updateUserEmail").value = data.email;
        document.getElementById("updateUserPassword").value = data.password;
      })
      .catch((error) => console.error("Error:", error));
  }
});

document
  .getElementById("updateUserModal")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    // Obtener el userId del campo oculto
    const userId = document.getElementById("updateUserId").value;

    // Obtener los valores del formulario
    const formData = {
      first_name: document.getElementById("updateUserName").value,
      last_name: document.getElementById("updateUserLastName").value,
      birthday: document.getElementById("updateUserBirthday").value,
      user_name: document.getElementById("updateUseruser").value,
      email: document.getElementById("updateUserEmail").value,
      password: document.getElementById("updateUserPassword").value,
      description: "Escribe aquí tu descripción",
    };

    fetch("http://127.0.0.1:8000/api/user/" + userId + "/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Convertir los datos en JSON
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error en la solicitud PUT");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        console.log("Datos actualizados correctamente:", data);
        // Cierra el modal (ajusta según tu librería/modal)
        loadTableData();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

document.addEventListener("click", function (event) {
  let target = event.target;

  // Si el clic es en el ícono dentro del botón, ajustamos el target
  if (target.tagName === "I" && target.closest("a[data-toggle='modal']")) {
    target = target.closest("a[data-toggle='modal']");
  }

  // Verificamos si el clic fue en el botón de editar
  if (target.matches("a[data-toggle='modal']")) {
    const userId = target.getAttribute("data-id");
    console.log("User ID:", userId); // Aquí ya tienes el userId disponible

    // Guardamos el userId en el campo oculto
    document.getElementById("updateUserId").value = userId;

    // Hacer una solicitud GET para obtener los detalles del registro
    fetch(`http://127.0.0.1:8000/api/user/${userId}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        // Rellenar el modal con los datos del usuario
        document.getElementById("updateUserName").value = data.first_name;
        document.getElementById("updateUserLastName").value = data.last_name;
        document.getElementById("updateUserBirthday").value = data.birthday;
        document.getElementById("updateUseruser").value = data.user_name;
        document.getElementById("updateUserEmail").value = data.email;
        document.getElementById("updateUserPassword").value = data.password;
      })
      .catch((error) => console.error("Error:", error));
  }

  if (target.tagName === "I" && target.closest("a[data-action='delete']")) {
    target = target.closest("a[data-action='delete']");
  }

  // Verificar si el clic fue en el botón de eliminar
  if (target.matches("a[data-action='delete']")) {
    const userId = target.getAttribute("data-id");
    console.log("User ID para eliminar:", userId);
    deleteUser(userId);
  }
});
function deleteUser(userId) {
  // Confirmar antes de eliminar
  if (!confirm("¿Estás seguro de que deseas eliminar este usuario?")) {
    return; // Si el usuario cancela, no hacemos nada
  }

  fetch(`http://127.0.0.1:8000/api/user/${userId}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la solicitud DELETE");
      }
      console.log("Usuario eliminado correctamente");
      // Volver a cargar los datos en la tabla después de eliminar
      loadTableData();
    })
    .catch((error) => {
      console.error("Error al eliminar el usuario:", error);
    });
}
document.addEventListener("DOMContentLoaded", loadTableData);
