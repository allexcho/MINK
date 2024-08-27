// Lógica del login

const loginForm = document.querySelector(".loginMain form");

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = this.querySelector('input[type="text"]').value;
    const password = this.querySelector('input[type="password"]').value;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      alert("Inicio de sesión exitoso!");
      window.location.href = "../index.html";
    } else {
      alert("Email o contraseña incorrecta.");
    }
  });
}

// Lógica del registro

const registrationForm = document.querySelector("form:not(.loginMain form)");

if (registrationForm) {
  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = this.querySelector(
      'input[placeholder="Enter your name"]'
    ).value;
    const email = this.querySelector(
      'input[placeholder="Enter your email"]'
    ).value;
    const password = this.querySelector(
      'input[placeholder="Create password"]'
    ).value;
    const confirmPassword = this.querySelector(
      'input[placeholder="Confirm password"]'
    ).value;
    const termsAccepted = this.querySelector('input[type="checkbox"]').checked;

    if (!name || !email || !password || !confirmPassword) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden, ingresalas correctamente.");
      return;
    }

    if (!termsAccepted) {
      alert("Para continuar, debes aceptar los términos y condiciones.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExist = users.some((user) => user.email === email);
    if (userExist) {
      alert("Este correo ya está registrado.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registro exitoso!");

    window.location.href = "../index.html";
  });
}
