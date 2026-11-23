
import './style.css';

const products = [
  {
    name: 'ใบกระท่อมสด',
    description: 'ข้อมูลสินค้าใบกระท่อมสด',
    image: 'https://filebroker-cdn.lazada.co.th/kf/S87e43f136f604e2e8716383c02145fb3c.jpg'
  },
  {
    name: 'ใบกระท่อมคัดพิเศษ',
    description: 'ข้อมูลสินค้าใบกระท่อมคัดพิเศษ',
    image: 'https://filebroker-cdn.lazada.co.th/kf/Se2d065c52f8c4b7294263424286463a1y.jpg'
  },
  {
    name: 'ใบกระท่อมบรรจุแพ็ก',
    description: 'ข้อมูลสินค้าใบกระท่อมบรรจุแพ็ก',
    image: 'https://images.topnews.co.th/2021/10/396880-768x576.jpg?x-image-process=style/webp'
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
