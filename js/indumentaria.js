
const contenedorProductos = document.getElementById('contenedor-productos') 
const productoBmw = document.querySelector("#producto-bmw")
const productoMercedes = document.querySelector("#producto-mercedes")
const productoAudi = document.querySelector("#producto-audi")

let stockProductosBmw = [
    { botonAgregar: "cart-button", stock: "stock-alert", stockValue: "Stock disponible", id: 1, nombre: "Bmw remera blanca", precio: 25, img: './ropa/bmw-ropa-1.jpg'},
    { botonAgregar: "cart-button", stock: "stock-alert", stockValue: "Stock disponible", id: 2, nombre: "Bmw remera negra", precio: 25, img: './ropa/bmw-ropa-2.jpg'},
    {stockBtn:"nostock-btn", stock: "nostock-alert", stockValue: "Sin stock", id: 3, nombre: "Bmw buzo", precio: 40, img: './ropa/bmw-ropa-3.jpg'},
    { botonAgregar: "cart-button", stock: "stock-alert", stockValue: "Stock disponible", id: 4, nombre: "Bmw piloto negro", precio: 45, img: './ropa/bmw-ropa-4.jpg'}
]

let stockProductosMercedes = [
    { botonAgregar: "cart-button", imgId:"chomba-mercedes", stock: "stock-alert", stockValue: "Stock disponible", id: 5, nombre: "Mercedes benz chomba azul", precio: 80, img: './ropa/ropa-mercedes-1.jpeg'},
    { botonAgregar: "cart-button", imgId:"buzo-mercedes", stock: "stock-alert", stockValue: "Stock disponible", id: 6, nombre: "Mercedes benz buzo azul ", precio: 40, img: './ropa/mercedes-ropa-2.jpg'},
    { botonAgregar: "cart-button", stock: "stock-alert", stockValue: "Stock disponible", id: 7, nombre: "Mercedes benz remera negra", precio: 40, img: './ropa/mercedes-ropa-3.jpg'},
    {imgId:"buzo-petronas", stockBtn:"nostock-btn", stock: "nostock-alert", stockValue: "Sin stock", id: 8, nombre: "Mercedes benz petronas", precio: 45, img: './ropa/mercedes-ropa-4.jpg'}
]

let stockProductosAudi = [
    { botonAgregar: "cart-button", stock: "stock-alert", stockValue: "Stock disponible", id: 9, nombre: "Audi buzo negro", precio: 40, img: './ropa/audi-ropa-1.jpg'},
    {imgId:"audi-buzo",stockBtn:"nostock-btn", stock: "nostock-alert", stockValue: "Sin stock", id: 10, nombre: "Buzo Audi TT", precio: 120, img: './ropa/audi-ropa-2.jpg'},
    { botonAgregar: "cart-button", stock: "stock-alert", stockValue: "Stock disponible", id: 11, nombre: "Audi remera blanca", precio: 25, img: './ropa/audi-ropa-3.jpg'},
    { botonAgregar: "cart-button", stock: "stock-alert", stockValue: "Stock disponible", id: 12, nombre: "Audi remera negra", precio: 25, img: './ropa/audi-ropa-4.jpg'}
]

stockProductosBmw.forEach((data)=>{
    productoBmw.innerHTML+=`
        <div class="product">
                <p class="${data.stock}">${data.stockValue}</p>
        <img class="product-img" src= ${data.img} alt="">
        <h3 class="product-title">${data.nombre}</h3>
        <p class="product-price">U$S ${data.precio}</p>
        <button class="${data.botonAgregar} ${data.stock} ${data.stockBtn}">Agregar al carrito</button>
        </div>
    `
    
});  

stockProductosMercedes.forEach((data)=>{
    productoMercedes.innerHTML+=`
    <div class="product">
    <p class="${data.stock}">${data.stockValue}</p>
        <img id="${data.imgId}" class="product-img" src= ${data.img} alt="">
    <h3 class="product-title">${data.nombre}</h3>
    <p class="product-price">U$S ${data.precio}</p>
        <button class="${data.botonAgregar} ${data.stock} ${data.stockBtn}">Agregar al carrito</button>
    </div>
    `
});
stockProductosAudi.forEach((data)=> {
    productoAudi.innerHTML+=`
        <div class="product">
                <p class="${data.stock}">${data.stockValue}</p>
        <img id="${data.imgId}" class="product-img" src= ${data.img} alt="">
        <h3 class="product-title">${data.nombre}</h3>
        <p class="product-price">U$S ${data.precio}</p>
        <button class="${data.botonAgregar} ${data.stock} ${data.stockBtn}">Agregar al carrito</button>
        </div>
    `
})

    
