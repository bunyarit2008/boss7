
import './style.css';

const products = [
  {
    name: 'ใบกระท่อมสด',
    description: 'ข้อมูลสินค้าใบกระท่อมสด',
    image: 'https://placehold.co/400x250?text=Product+1'
  },
  {
    name: 'ใบกระท่อมคัดพิเศษ',
    description: 'ข้อมูลสินค้าใบกระท่อมคัดพิเศษ',
    image: 'https://placehold.co/400x250?text=Product+2'
  },
  {
    name: 'ใบกระท่อมบรรจุแพ็ก',
    description: 'ข้อมูลสินค้าใบกระท่อมบรรจุแพ็ก',
    image: 'https://placehold.co/400x250?text=Product+3'
  }
];

const productList = document.getElementById('product-list');

productList.innerHTML = products.map(product => `
  <div class="bg-white rounded-xl shadow-md overflow-hidden
              hover:shadow-xl transition">
    <img src="${product.image}"
         alt="${product.name}"
         class="w-full h-48 object-cover">

    <div class="p-5">
      <h3 class="text-xl font-bold text-green-800">
        ${product.name}
      </h3>

      <p class="text-gray-600 mt-2">
        ${product.description}
      </p>
    </div>
  </div>
`).join('');
