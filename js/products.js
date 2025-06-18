const products = [
  { name: 'Laptop', category: 'electronics', price: 900, rating: 4.5 },
  { name: 'Smartphone', category: 'electronics', price: 600, rating: 4.7 },
  { name: 'Headphones', category: 'electronics', price: 150, rating: 4.0 },
  { name: 'Jacket', category: 'clothing', price: 80, rating: 4.2 },
  { name: 'T-Shirt', category: 'clothing', price: 20, rating: 3.9 },
  { name: 'Sneakers', category: 'clothing', price: 120, rating: 4.8 }
];

const productList = document.getElementById('product-list');
const categoryFilter = document.getElementById('filter-category');
const priceSort = document.getElementById('sort-price');

function displayProducts(list) {
  productList.innerHTML = '';
  list.forEach(product => {
    const div = document.createElement('div');
    div.className = 'project-card';
    div.innerHTML = `<h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <p>Rating: ${product.rating} ⭐</p>`;
    productList.appendChild(div);
  });
}

function filterAndSort() {
  let filtered = [...products];
  const category = categoryFilter.value;
  const sortPrice = priceSort.value;

  if (category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  filtered.sort((a, b) => {
    if (sortPrice === 'asc') return a.price - b.price;
    else return b.price - a.price;
  });

  displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSort);
priceSort.addEventListener('change', filterAndSort);

document.addEventListener('DOMContentLoaded', filterAndSort);
