// Add to Cart Functionality
function addToCart(productName, country) {
  const cartList = document.getElementById("cartList");
  const item = document.createElement("li");
  item.textContent = `${productName} - ${country}`;
  cartList.appendChild(item);
}

// Filter Products
function filterProducts() {
  const searchInput = document.getElementById("searchBar").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;
  const country = document.getElementById("countryFilter").value;
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const name = product.querySelector("h3").textContent.toLowerCase();
    const productCategory = product.getAttribute("data-category");
    const productCountry = product.getAttribute("data-country");

    if (
      (name.includes(searchInput) || searchInput === "") &&
      (productCategory === category || category === "") &&
      (productCountry === country || country === "")
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// View Product Details
function viewProduct(title, details) {
  alert(`Product: ${title}\nDetails: ${details}`);
}
