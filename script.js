document.addEventListener("DOMContentLoaded", () => {
    const cars = [
        { id: 1, name: "Toyota Camry", price: 25000, img: "./images/camry.jpg" },
        { id: 2, name: "Honda Civic", price: 22000, img: "./images/civic.jpg" },
        { id: 3, name: "Ford Mustang", price: 35000, img: "./images/mustang.jpg" }
    ];

    const carList = document.getElementById("car-list");
    if (carList) {
        cars.forEach(car => {
            const carCard = document.createElement("div");
            carCard.classList.add("car-card");
            carCard.innerHTML = `
                <img src="${car.img}" alt="${car.name}" onerror="this.src='./images/placeholder.jpg'">
                <h3>${car.name}</h3>
                <p>Price: $${car.price}</p>
                <button onclick="addToCart(${car.id})">Add to Cart</button>
            `;
            carList.appendChild(carCard);
        });
    }

    updateCartCount();
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.includes(id)) {
        cart.push(id);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    } else {
        alert("This item is already in your cart.");
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartCountElement = document.getElementById("cart-count");
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}