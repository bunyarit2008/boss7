import './style.css'

let count = 0;

function addCart(product) {
    count++;

    document.getElementById("cart").innerText =
        "สินค้าที่เลือก: " + count + " รายการ";

    alert("คุณเลือก " + product + " แล้ว");
}

window.addCart = addCart;
