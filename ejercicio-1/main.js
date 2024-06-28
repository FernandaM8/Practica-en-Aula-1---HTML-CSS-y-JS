const users = [
  [
    {
      label: "Nombre",
      value: "Juan",
    },
    {
      label: "Apellido",
      value: "Perez",
    },
    {
      label: "Correo",
      value: "alguien@gmail.com",
    },
    {
      label: "Contraseña",
      value: "123456",
    },
    {
      label: "Confirmar contraseña",
      value: "123456",
    }
  ]
]
function sendForm(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const lastname = event.target.lastName.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  const confirm = event.target.confirm.value;
  // recupere los datos faltantes

  const app = document.getElementById("app");
  app.innerHTML = "";
  if (password !== confirm) {
    const error = document.createElement("p");
    error.textContent = "Las contraseñas no coinciden";
    app.appendChild(error);
    return;
  }

  const user = [
    {
      label: "Nombre",
      value: name,
    },
    {
      label: "Apellido",
      value: lastname,
    },
    {
      label: "Correo",
      value: email,
    },
    {
      label: "Contraseña",
      value: password,
    },
    {
      label: "Confirmar Contraseña",
      value: confirm,
    }
  ];

  users.push(user);

  const title = document.createElement("h1");
  title.innerHTML = `<h1 class="text-2xl title">
    Datos del usuario
  </h1>`;
  app.appendChild(title);
  app.style.height = "auto";

  user.forEach((item) => {
    const container = document.createElement("div"); // dentro de las comillas complete la etiqueta a crear
    container.innerHTML = `
            <div
                class="container__item"  
            > 
                <span
                    class="item__label"
                >${item.label}</span>
                <span
                    class="item__value"
                >${item.value}</span>
            </div>`;
    app.appendChild(container);
  });
  loadData()
  event.target.reset();
}

// load data
function loadData() {
  const app = document.getElementById("lista");
  app.innerHTML = "";
  
  app.style.height = "auto";

  users.forEach((user) => {
    const row = document.createElement("div");
    user.forEach((item) => {
      const container = document.createElement("div"); // dentro de las comillas complete la etiqueta a crear
      container.innerHTML = `
            <div
                class="container__item"  
            > 
                <span
                    class="item__label"
                >${item.label}</span>
                <span
                    class="item__value"
                >${item.value}</span>
            </div>`;
      row.appendChild(container);
    });
    app.appendChild(row);
  });
}