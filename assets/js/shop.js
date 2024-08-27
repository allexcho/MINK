// Product data

const products = [
    { id: 1, name: "Camisa", price: 100, image: "../assets/img/shop1.JPG" },
    { id: 2, name: "Camisa", price: 100, image: "../assets/img/shop2.JPG" },
    { id: 3, name: "Blusa", price: 100, image: "../assets/img/shop3.JPG" },
    { id: 4, name: "Blusa", price: 100, image: "../assets/img/shop4.JPG" },
    { id: 5, name: "Blusa", price: 100, image: "../assets/img/shop5.JPG" },
    { id: 6, name: "Camisa", price: 100, image: "../assets/img/shop6.JPG" },
];

let cart = [];

// Funcion para renderizar los productos

function renderProducts(){
    const productList = document.querySelector(".containerShop ul");
    productList.innerHTML = "";

    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = 
        `<img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button onclick = "addToCart(${product.id})">Comprar</button>`;

        productList.appendChild(li);
    });
};

function addToCart(productId){
    const product = products.find(product => product.id === productId);

    if(product){
        cart.push(product)
        updateCartCount();
        savedCart();
    };
};

function updateCartCount(){
    const cartIcon = document.querySelector(".cart a");
    cartIcon.innerHTML = 
    `<i class="fa-solid fa-cart-shopping"></i>
    (${cart.length})`;
};

function savedCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
};

function loadCart(){
    const savedCart = localStorage.getItem("cart")

    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    };
};

// Inicializacion 

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    loadCart();
})