// Replace this after Elastic Beanstalk deploy
const API = "https://Empire-events-backend-env-1.eba-qidwmjhh.us-east-1.elasticbeanstalk.com ";

let cart = [];

function loadProducts() {
  fetch(API + "/products")
    .then(res => res.json())
    .then(products => {
      let html = "";
      products.forEach(p => {
        html += `
        <div class="card">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <h4>₹${p.price}</h4>
          <button onclick="addToCart(${p.id}, '${p.title}', ${p.price})">Add to Cart</button>
        </div>`;
      });
      document.getElementById("products").innerHTML = html;
    });
}

function addToCart(id, title, price) {
  cart.push({ id, title, price });
  document.getElementById("cart-count").innerText = cart.length;
}

document.getElementById("cart-btn").onclick = () => {
  let html = "";
  let total = 0;
  cart.forEach(item => {
    html += `<p>${item.title} - ₹${item.price}</p>`;
    total += item.price;
  });
  document.getElementById("cart-items").innerHTML = html;
  document.getElementById("cart-total").innerText = total;
  document.getElementById("cart").classList.remove("hidden");
};

document.getElementById("checkout").onclick = () => {
  const data = {
    customer: "Demo User",
    items: cart
  };

  fetch(API + "/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(() => {
      alert("Order placed!");
      cart = [];
      document.getElementById("cart").classList.add("hidden");
    });
};

loadProducts();
