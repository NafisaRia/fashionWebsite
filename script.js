function loadProducts() {
  fetch("http://localhost:3000/products")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("product-container");

      // পুরোনো কিছু থাকলে clear
      container.innerHTML = "";

      data.forEach(product => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}">
          <h3>${product.title}</h3>
          <p>Explore Now</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error fetching products:", err);
    });
}

// page load হলে function চালাও
window.onload = loadProducts;

document.getElementById("newsletter-form")
  .addEventListener("submit", function(e) {

    e.preventDefault(); // page reload বন্ধ

    const email = document.getElementById("email").value;

    fetch("http://localhost:3000/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
    .then(res => res.text())
    .then(data => {
      alert(data);
    });
});