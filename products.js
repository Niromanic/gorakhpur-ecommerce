const products = [
  {
    name: "Designer Glass Panel",
    image: "images/product1.jpg",
    description: "Elegant acid-etched glass for interior design.",
  },
  {
    name: "Float Glass Sheet",
    image: "images/product2.jpg",
    description: "High-clarity float glass, customizable size.",
  },
  {
    name: "Patterned Glass",
    image: "images/product3.jpg",
    description: "Textured glass for privacy and style.",
  }
];

const productsContainer = document.getElementById("products-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <button class="quote-btn" onclick="getQuote('${product.name}')">Get Quote</button>
  `;
  productsContainer.appendChild(card);
});

function getQuote(productName) {
  const message = encodeURIComponent(`Hello! I'm interested in: ${productName}`);
  const phone = "9696957914";
  window.open(`https://wa.me/91${phone}?text=${message}`, "_blank");
}