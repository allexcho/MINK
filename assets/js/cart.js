//funcion para renderizar al carrito los productos
function renderCart() {
  const cartContainer = document.querySelector(".containerCart");
  cartContainer.innerHTML = "";

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = `
        <h2>El carrito esta vacio</h2>
          <a href="/pages/shop.html">
            Comprar
          </a>
        `;
  } else {
    const cartList = document.createElement("ul");
    let total = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <div class="innerCart">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <h4>${item.name}</h4>
                <p>${item.price}</p>
                </div>
            `;
      const removeButton = document.createElement("button");
      removeButton.textContent = "Eliminar";
      removeButton.setAttribute("class", "innerButton");
      removeButton.onclick = () => removeFromCart(item.id);
      li.appendChild(removeButton);
      cartList.appendChild(li);
      total += item.price;
    });

    cartContainer.appendChild(cartList);

    const totalElement = document.createElement("p");
    totalElement.textContent = `Total: $${total}`;
    cartContainer.appendChild(totalElement);

    const checkoutButton = document.createElement("button");
    checkoutButton.textContent = "Finalizar compra";
    checkoutButton.onclick = checkout;
    cartContainer.appendChild(checkoutButton);
  }
}

function removeFromCart(productId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.id !== productId);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function checkout() {
  alert("¡Gracias por tu compra!");
  localStorage.removeItem("cart");
  renderCart();
}

//Initialize
document.addEventListener("DOMContentLoaded", renderCart);
