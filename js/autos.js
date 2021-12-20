var verdeEsmeralda = 1000;
var rosaPlatinado = 1200;
var rojoOscuro = 1500;

const contenedorDeBmw = document.getElementById("autos-article");

var stockAutos = [
  {
    divId: "m3-div",
    id: "precioM3",
    modelo: "BMW M3",
    img: "./images/bmw-m3.jpg",
    precio: 60000,
    baseFn: "colorBaseM3()",
    verdeFn: "verdeEsmeraldaM3()",
    rosaFn: "rosaPlatinadoM3()",
    rojoFn: "rojoOscuroM3()",
    info: "Como es habitual en los lanzamientos más recientes de BMW M, los M3 Sedan y M4 Coupé llegan con dos niveles de poder. En su configuración más sencilla y, francamente, la más apetecible para los puristas tendremos un motor biturbo de 3.0 litros y seis cilindros en línea, capaz de generar 480 hp y 405 lb-pie. Todo se envía al eje trasero mediante una transmisión manual de seis velocidades. Es el único deportivo de esta clase que se aferra a los tres pedales.",
  },

  {
    divId: "m5-div",
    id: "precioM5",
    modelo: "BMW M5",
    img: "./images/bmw-m5.jpeg",
    precio: 70000,
    baseFn: "colorBaseM5()",
    verdeFn: "verdeEsmeraldaM5()",
    rosaFn: "rosaPlatinadoM5()",
    rojoFn: "rojoOscuroM5()",
    info: "Un auto muy potente, de lo mejor de BMW tenemos un auto que dispone de una potencia de 625 CV/6000 rpm, dispone de 8 Cilíndros en V una altura de 1.500mm, despósito de 68 litros un peso de casi 2000kg y por ultimo una impresionante aceleración de 3.3 segundos.",
  },
  {
    divId: "m7-div",
    id: "precioM7",
    modelo: "BMW M7",
    img: "./images/bmw-m7.jpg",
    precio: 90000,
    base: "colorBase",
    esmeralda: "botonEsmeralda",
    rosa: "botonRosa",
    rojo: "botonRojo",
    baseFn: "colorBaseM7()",
    verdeFn: "verdeEsmeraldaM7()",
    rosaFn: "rosaPlatinadoM7()",
    rojoFn: "rojoOscuroM7()",
    info: "El BMW Serie 7 es, en cualquier caso, un sedán de lujo muy tecnológico, muy confortable y lujoso, pero también muy enfocado al conductor. Un coche realmente ágil y divertido, salvando las distancias, y para tratarse de un coche de lujo, que tradicionalmente hubiera estado más enfocado en el confort de los pasajeros de las plazas traseras, que en el placer de conducir.",
  },
  {
    divId: "amgC-div",
    id: "precioAmgC",
    modelo: "Amg C",
    img: "./images/mercedes-clase-c.jpeg",
    precio: 70000,
    baseFn: "colorBaseAmgC()",
    verdeFn: "verdeEsmeraldaAmgC()",
    rosaFn: "rosaPlatinadoAmgC()",
    rojoFn: "rojoOscuroAmgC()",
    info: "El Mercedes-Benz Clase C Es un automóvil de gama alta (automóvil de turismo del segmento D) producido por el fabricante alemán Mercedes-Benz desde el año 1993. Es el sucesor del Mercedes-Benz 190. Algunos de sus principales rivales han sido el BMW Serie 4, el Audi A4 y Audi A5, el Lexus IS, el Saab 9-3, el Infiniti G, el Jaguar X-Type y el Volvo S60.",
  },
  {
    divId: "amgGle-div",
    id: "precioAmgGle",
    modelo: "AMG Gle",
    img: "./images/amg-gle.jpg",
    precio: 90000,
    baseFn: "colorBaseAmgGle()",
    verdeFn: "verdeEsmeraldaAmgGle()",
    rosaFn: "rosaPlatinadoAmgGle()",
    rojoFn: "rojoOscuroAmgGle()",
    info: "El Mercedes-Benz GLE-Class , anteriormente Mercedes-Benz M-Class , es un SUV de lujo de tamaño mediano producido por el fabricante de automóviles alemán Mercedes-Benz desde 1997.",
  },
  {
    divId: "amgGt-div",
    id: "precioAmgGt",
    modelo: "AMG Gt",
    img: "./images/mercedes-amg-gt.jpg",
    precio: 120000,
    fixedImg: "fixed-img",
    baseFn: "colorBaseAmgGt()",
    verdeFn: "verdeEsmeraldaAmgGt()",
    rosaFn: "rosaPlatinadoAmgGt()",
    rojoFn: "rojoOscuroAmgGt()",
    info: "Es el segundo coche deportivo desarrollado enteramente por Mercedes-AMG. El coche está producido en tres versiones: el GT de 462 CV (456 HP; 340 kW), el GT S de 510 CV (503 HP; 375 kW) y GT R 585 CV (577 HP; 430 kW). Ambos modelos salieron a la venta en marzo de 2015. También existe una variante de competición GT3. Todas las variantes se fabrican en la planta de Mercedes-Benz en Sindelfingen, Alemania.",
  },
  {
    divId: "a5-div",
    id: "precioAudiA5",
    modelo: "Audi A5",
    img: "./images/audi-a5.jpg",
    precio: 60000,
    fixedImg: "fixed-img",
    baseFn: "colorBaseAudiA5()",
    verdeFn: "verdeEsmeraldaAudiA5()",
    rosaFn: "rosaPlatinadoAudiA5()",
    rojoFn: "rojoOscuroAudiA5()",
    info: "El Audi A5 es un automóvil del segmento D producido por el fabricante alemán Audi desde el año 2007. El rango del A5 comprende un coupé, un cabriolet y una versión 'Sportback' (un cuatro puertas con un techo que asemeja al de un fastback con una inclinación de la ventana trasera muy pronunciada y tapa del maletero integrada) de los modelos Audi A4 sedán y familiar.",
  },
  {
    divId: "q5-div",
    id: "precioAudiQ5",
    modelo: "Audi Q5",
    img: "./images/audi-q5.jpg",
    precio: 70000,
    baseFn: "colorBaseAudiQ5()",
    verdeFn: "verdeEsmeraldaAudiQ5()",
    rosaFn: "rosaPlatinadoAudiQ5()",
    rojoFn: "rojoOscuroAudiQ5()",
    info: "Su principal característica diferenciadora es la disposición longitudinal de su motor, lo que facilita el uso de motores de seis o más cilindros y es la base del sistema quattro (no confundir con el sistema del mismo nombre empleado en los Audi de motor transversal por razones comerciales), basado en un transeje longitudinal fácilmente prolongable al tren trasero.",
  },
  {
    divId: "r8-div",
    id: "precioAudiR8",
    modelo: "Audi R8",
    img: "./images/audi-r8.jpg",
    precio: 320000,
    baseFn: "colorBaseAudiR8()",
    verdeFn: "verdeEsmeraldaAudiR8()",
    rosaFn: "rosaPlatinadoAudiR8()",
    rojoFn: "rojoOscuroAudiR8()",
    info: "El carro es diseñado, desarrollado y fabricado exclusivamente por la compañía subsidiaria privada de Audi AG que fabrica partes automotrices de alto desempeño, Audi Sport GmbH (anteriormente quattro GmbH),5 y está basado en la plataforma del Lamborghini Gallardo y actualmente la del Huracán La construcción fundamental del R8 está basada en el Audi Space Frame,​ y usa un monocasco de aluminio que se fabrica usando los principios de malla espacial. El auto se fabrica por Audi Sport GmbH en una nueva fábrica renovada en el 'sitio de aluminio' de Audi en Neckarsulm en Alemania.",
  },
];

stockAutos.forEach((data) => {
  contenedorDeBmw.innerHTML += `
        <div class="bmw-container derecha bmw-m3" id="${data.divId}">   
        <div class="carInfo">
        <h2 id="partes-auto" class="autos-title"> <i> ${data.modelo} </i> </h2>
        <p class="autos-paragraph">${data.info}</p>
        <p id="${data.id}" class="autosPrecio">U$S ${data.precio}</p>
        <div class="line"></div>
        <div id="contenedor-botones">
        <button class="colorBtn" id="botonNegro" onclick="${data.baseFn}"></button>
        <button class="colorBtn" id="botonBlanco"  onclick="${data.baseFn}"></button>
        <button class="colorBtn" id="botonGris"  onclick="${data.baseFn}"></button>
        <button class="colorBtn" id="botonVerde" onclick="${data.verdeFn}"></button>
        <button class="colorBtn" id="botonRosa" onclick="${data.rosaFn}"></button>
        <button class="colorBtn" id="botonRojo" onclick="${data.rojoFn}"></button>
        </div>
        </div>
            </div>
        `;
});
