// Logica del login

// Seleccionar el formulario

const loginForm = document.querySelector('form');

// Agregar u evento para el envio del formulario en el localStorage

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    // Obtener los valores de los input

    const email = document.querySelector('input[type="text"]').value;

    const password = document.querySelector('input[type="password"]').value;

    // Obtener la lista de los usuarios que se guardan

    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario/contrasena existe

    const user = users.find(user => user.email === email && user.password === password)

    if(user){
        alert('inicio de seccion exitoso!');

        // Redirigir al usuario a la pagina principal

        window.location.href= "../index.html";

    }else{
        alert('Correo o contraseña incorrecta!!!')
    }
})

// Logica del registro

document.addEventListener('DOMContentLoaded',function(){

    const form = document.querySelector('form');

    form.addEventListener('submit', function(event){
        event.preventDefault(); 

        const name = form.querySelector('input[placeholder="Enter your name"]').value;
        const email = form.querySelector('input[placeholder="Enter your email"]').value;
        const password = form.querySelector('input[placeholder="Create password" ]').value;
        const confirmPassword = form.querySelector('input[ placeholder="Confirm password"]').value;
        const termsAccepted = form.querySelector('input[type="checkbox"]').checked;
   
        // Validar nuestro formulario

        if(!name || !email || !password || !confirmPassword){
            alert('Por favor, completa todos los campos');
            return;
        }

        if(password !== confirmPassword){
            alert('Las contraseñas no coinciden, ingresalas correctamente');
            return;
        }

        if(!termsAccepted){
            alert('Para continuar, debes aceptar los terminos y condiciones.');
            return;
        }

        // Obtener los usuarios existentes del local

        const users= JSON.parse(localStorage.getItem('users')) || [];

        //Verificar si ya esta registrado ese email

        const userExist = users.some(user => user.email === email);

        if(userExist){
            alert('Este correo ya esta registrado!!');
            return;
        } 

        // Agregar el nuevo usuario

        users.push({name, email, password});
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso!!!');

        // Redirigirlo al index
        
        window.location.href = '../index.html';
    });
})