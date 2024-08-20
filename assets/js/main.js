// Logica de login

// Seleccionar el formulario 

const loginForm = document.querySelector("form");

//  Agregar u evento para el envio del formulario en el storage

loginForm.addEventListener("submit", function(event){
    event.preventDefault(); 

    // Obtener los valores de los input

    const email = document.querySelector("input[type="text"]").value;

    const password = document.querySelector("input[type="password"]").value;

    // Obtener la lista de los usuarios qye se almacenen 

    const users = JSON.parse(localStorage.getItem("users")) || []:

    // Verificar si el usuario/contrasena existe 

    const user = users.find(users => user.email === email && user.password === password)
    
    if(user){
        alert("Inicio Exitoso");

        // Redirigir al usuario a la pagina incial

        window.location.href= "../index.html"

    }else{
        alert("Correo o contrasena incorrecta!")
    }
})

// Logica del registro

document.addEventListener("DOMContentLoaded", function(){

    const form = document.querySelector("form");

    form.addEventListener("submit"), function(event){
        event.preventDefault();

        const name = form.querySelector("input[placerholder="Enter your name"]").value;

        const email = form.querySelector("input[placeholder="Enter your email"]").value;

        const password = form.querySelector("input[placeholder="Create password"]").value;

        const confirmPassword = form.querySelector("input[placeholder="Confirm password"]").value;

        const termsAccepted = form.querySelector("input[type="check"]").checked;

        // Validar nuestro formulario

        if(!name || !email || password || !confirmPassword){
            alert("Porfavor, Completa todos los campos")
            return;
        }

        if(password !== confirmPassword){
            alert("Las contrasenas no coinciden, ingresa la correcta")
            return;
        }

        if (!termsAccepted) {
            alert("Para continuar, debes aceptar los terminos y condiciones.");
            return
        }

        // Obtener los usuarios existentes del localStorage

        const users = JSON.parse(localStorage.getItem("users")) || [];

        // Verificar si ya esta registrado ese email

        const userExists = users.some(user => user.email === email);

        if(userExists){
            alert("Este correo ya esta registrado");
            return;
        }

        // Agregar el nuevo usuario 

        users.push({name, email, password});
        localStorage.setItem("users", JSON.stringify(users));
        alert("Register Exitoso!");

        // Redirigirlo al index

        window.location.href = "../index.html"
    }
})