let products = JSON.parse(localStorage.getItem('products')) || [];

function renderProducts() {
  const productList = document.getElementById('productList');
  const output = document.getElementById('output');
  productList.innerHTML = '';
  output.value = JSON.stringify(products, null, 2);

  products.forEach((product, index) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = \`
      <h3>\${product.title}</h3>
      <img src="\${product.image}" alt="\${product.title}" style="max-width:100px;" />
      <p><strong>Category:</strong> \${product.category}</p>
      <p>\${product.description}</p>
      <button onclick="editProduct(\${index})">Edit</button>
      <button onclick="deleteProduct(\${index})">Delete</button>
    \`;
    productList.appendChild(card);
  });
}

function editProduct(index) {
  const product = products[index];
  document.getElementById('title').value = product.title;
  document.getElementById('category').value = product.category;
  document.getElementById('image').value = product.image;
  document.getElementById('description').value = product.description;
  products.splice(index, 1);
  renderProducts();
}

function deleteProduct(index) {
  if (confirm('Delete this product?')) {
    products.splice(index, 1);
    saveAndRender();
  }
}

function saveAndRender() {
  localStorage.setItem('products', JSON.stringify(products));
  renderProducts();
}

document.getElementById('productForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const category = document.getElementById('category').value;
  const image = document.getElementById('image').value;
  const description = document.getElementById('description').value;

  products.push({ title, category, image, description });
  this.reset();
  saveAndRender();
});

renderProducts();
