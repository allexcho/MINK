// Funcion para renderizar al carrito los productos 

function renderCart(){
    const cartContainer = document.querySelector(".containerCart");
    cartContainer.innerHTML = ``

    const cart = JSON.parse(localStorage.getItem("cart")) || []

    if (cart.length === 0) {
        cartContainer.innerHTML = `
        <div class="containerCart">
        <h2>El carrito esta vacio</h2>
        <a href="/pages/shop.html">Comprar</a>
        `
    }else{
        const cartList = document.createElement("ul");
        let total = 0;

        cart.array.forEach(item => {
            const li = document.createElement("li");
            li.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            <button onclick = "removeFromCart(${item.id})">Delete</button>
            `;

            cartList.appendChild(li);

            total += item.price;
        });

        cartContainer.appendChild(cartList);

        const totalElement = document.createElement("p");
        totalElement.textContent = `Total: $${total}`;
        cartContainer.appendChild(totalElement);

        const checkOutButton = document.createElement("button");
        checkOutButton.textContent = "Finalizar compra";
        checkOutButton.onclick = checkout;
        cartContainer.appendChild(checkOutButton);
    };
};

// Function para borrar

function removeFromCart(productId){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
};

function checkout(){
    alert("Gracias por tu compra!");
    localStorage.removeItem("cart");
    renderCart()
};