let cart = [];

function addToCart(productName, country) {
  cart.push({ name: productName, country });
  updateCart();
  alert(`${productName} has been added to your cart.`);
}

function updateCart() {
  const cartList = document.getElementById('cartList');
  cartList.innerHTML = '';

  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - ${item.country}`;
    listItem.innerHTML += ` <button onclick="removeFromCart(${index})">Remove</button>`;
    cartList.appendChild(listItem);
  });
}

function viewProduct(name, details) {
  alert(`${name}\n\nDetails: ${details}`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
