const products = [
  { name: "Veg Burger", price: 60, img: "veg burger.jpg" },
  { name: "Pizza", price: 80, img: "pizza.jpg" },
  { name: "French Fries", price: 60, img: "french fries.jpg" },
  { name: "Coke", price: 20, img: "coke.jpg" },
  { name: "Momos", price: 70, img: "momos.jpg" }
];

let cartCount = 0;

const productList = document.getElementById("product-list");

products.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
    <button onclick="addToCart()">Add to Cart</button>
  `;

  productList.appendChild(card);
});

function addToCart() {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
}
