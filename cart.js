document.addEventListener("DOMContentLoaded", () => {
    loadCart();
});



function loadCart() {
    const cars = [
        { id: 1, name: "Toyota Camry", price: 25000, img: "./images/camry.jpg" },
        { id: 2, name: "Honda Civic", price: 22000, img: "./images/civic.jpg" },
        { id: 3, name: "Ford Mustang", price: 35000, img: "./images/mustang.jpg" }
    ];

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";

    let total = 0;
    cart.forEach(id => {
        const car = cars.find(c => c.id === id);
        if (car) {
            const item = document.createElement("div");
            item.classList.add("cart-item");
            item.innerHTML = `
                <img src="${car.img}" alt="${car.name}" width="100" onerror="this.src='./images/placeholder.jpg'">
                <h3>${car.name}</h3>
                <p>Price: $${car.price}</p>
                <button onclick="removeFromCart(${id})">Remove</button>
            `;
            cartItems.appendChild(item);
            total += car.price;
        }
    });

    cartTotal.textContent = total;
}

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    alert("Redirecting to payment...");
    localStorage.removeItem("cart");
    window.location.href = "success.html";
}
