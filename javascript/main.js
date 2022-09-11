//saludo personalizado

let visitante = document.getElementById('nombre')
visitante.onchange = () => {
  saludo.innerText =
    'Bienvenido/a ' + visitante.value.toUpperCase() + ' a Reina Victoria'
}
//prueba boton

//productos en venta
const productos = [
  { id: 1, nombre: 'Estrellas', precio: 1000, img: 'ESTRELLAS.jpeg' },
  { id: 2, nombre: 'Angelitos', precio: 1500, img: 'ANGELITOS.jpeg' },
  { id: 3, nombre: 'Pesebre', precio: 2000, img: 'PESEBRE.jpeg' },
  { id: 4, nombre: 'Angelita', precio: 2500, img: 'ANGELITA.jpeg' },
  { id: 5, nombre: 'Estrellita', precio: 3000, img: 'ESTRELLA.jpeg' },
  { id: 6, nombre: 'Toalla aqua', precio: 3500, img: 'TOALLAAQUA.jpeg' },
  { id: 7, nombre: 'Toalla crudo', precio: 4000, img: 'TOALLACRUDO.jpeg' },
  { id: 8, nombre: 'Toalla de mano', precio: 4500, img: 'TOALLADEMANO.jpeg' },
  { id: 9, nombre: 'Toalla negra', precio: 5000, img: 'TOALLANEGRA.jpeg' },
]
console.log(productos)

//CARRITO CON addEvent

const texto = document.createElement('p')
const contenedor = document.getElementById('contenedor')
let carrito = []

let botonEstrella = document.getElementById('btnEstrellas')
botonEstrella.addEventListener('click', rtaClick1)
function rtaClick1() {
  carrito.push(productos[0])
  texto.innerText = productos[0].nombre + ': $ ' + productos[0].precio
  contenedor.append(texto)
}

let botonAngelitos = document.getElementById('btnAngelitos')
botonAngelitos.addEventListener('click', rtaClick2)
function rtaClick2() {
  carrito.push(productos[1])
  const texto1 = document.createElement('p')
  texto1.innerText = productos[1].nombre + ': $ ' + productos[1].precio
  contenedor.append(texto1)
}

let botonPesebre = document.getElementById('btnPesebre')
botonPesebre.addEventListener('click', rtaClick3)
function rtaClick3() {
  carrito.push(productos[2])
  const texto2 = document.createElement('p')
  texto2.innerText = productos[2].nombre + ': $ ' + productos[2].precio
  contenedor.append(texto2)
}

let botonAngelita = document.getElementById('btnAngelita')
botonAngelita.addEventListener('click', rtaClick4)
function rtaClick4() {
  carrito.push(productos[3])
  const texto3 = document.createElement('p')
  texto3.innerText = productos[3].nombre + ': $ ' + productos[3].precio
  contenedor.append(texto3)
}
let botonEstrellita = document.getElementById('btnEstrellita')
botonEstrellita.addEventListener('click', rtaClick5)
function rtaClick5() {
  carrito.push(productos[4])
  const texto4 = document.createElement('p')
  texto4.innerText = productos[4].nombre + ': $ ' + productos[4].precio
  contenedor.append(texto4)
}
let botonToallaAqua = document.getElementById('btnToallaAqua')
botonToallaAqua.addEventListener('click', rtaClick6)
function rtaClick6() {
  carrito.push(productos[5])
  const texto5 = document.createElement('p')
  texto5.innerText = productos[5].nombre + ': $ ' + productos[5].precio
  contenedor.append(texto5)
}
let botonToallaCrudo = document.getElementById('btnToallaCrudo')
botonToallaCrudo.addEventListener('click', rtaClick7)
function rtaClick7() {
  carrito.push(productos[6])
  const texto6 = document.createElement('p')
  texto6.innerText = productos[6].nombre + ': $ ' + productos[6].precio
  contenedor.append(texto6)
}
let botonToallaMano = document.getElementById('btnToallaMano')
botonToallaMano.addEventListener('click', rtaClick8)
function rtaClick8() {
  carrito.push(productos[7])
  const texto7 = document.createElement('p')
  texto7.innerText = productos[7].nombre + ': $ ' + productos[7].precio
  contenedor.append(texto7)
}

let botonToallaNegra = document.getElementById('btnToallaNegra')
botonToallaNegra.addEventListener('click', rtaClick9)
function rtaClick9() {
  carrito.push(productos[8])
  const texto8 = document.createElement('p')
  texto8.innerText = productos[8].nombre + ': $ ' + productos[8].precio
  contenedor.append(texto8)
}

console.log(carrito)

const botonFinal = document.createElement('button')
botonFinal.innerText = 'Finalizar compra'
botonFinal.classList.add('btnFinal')
contenedor.append(botonFinal)

botonFinal.addEventListener('click', finalizarCompra)

function finalizarCompra() {
  contenedor.innerHTML =
    '<h2 class="saludoFinal">¡Gracias por tu compra!</h2><p class="pedido">(Tu pedido ya está esta en preparacion 😁👍)</p>'
}

//continua cod js pero no puedo usar el array carrito no se como..probe con for of, for in, for each. . map() nada sirve para poder usar esos datos....

// let precios = []
// for (let i of carrito) {
//   precios.push(carrito[i].precio)
// }

// console.log(precios)
// function calculoCuota(valorProducto, cantidadCuotas) {
//   if (isNaN(valorProducto) || isNaN(cantidadCuotas)) {
//     alert('solo se aceptan numeros.')
//   } else if (cantidadCuotas == 1) {
//     valorCuota = (valorProducto * -0.1 + valorProducto) / cantidadCuotas
//     alert(
//       'El total es de : $ ' +
//         valorProducto +
//         ' ,con 10 % de descuento en 1 pago es =  $' +
//         valorCuota.toFixed(2) +
//         '.',
//     )

//     textoFinCarrito.innerText =
//       'El total es de : $ ' +
//       valorProducto +
//       ' ,con 10 % de descuento en 1 pago es =  $' +
//       valorCuota.toFixed(2) +
//       '.'

//     contenedor.prepend(textoFinCarrito)
//   } else if (cantidadCuotas > 1 && cantidadCuotas <= 3) {
//     valorCuota = (valorProducto * 0.1 + valorProducto) / cantidadCuotas
//     ;(textoFinCarrito.innerText =
//       'Tu total es : $ ' +
//       valorProducto +
//       ' , Tu cuota con intereses del 10 % es de $ ' +
//       valorCuota.toFixed(2) +
//       '  en ' +
//       cantidadCuotas +
//       ' pagos.'),
//       contenedor.prepend(textoFinCarrito)
//     alert(
//       'Tu total es : ' +
//         valorProducto +
//         ' pesos, Tu cuota con intereses del 10 % es de ' +
//         valorCuota.toFixed(2) +
//         ' pesos en ' +
//         cantidadCuotas +
//         ' pagos.',
//     )
//   } else if (cantidadCuotas >= 4 && cantidadCuotas <= 6) {
//     valorCuota = (valorProducto * 0.25 + valorProducto) / cantidadCuotas
//     ;(textoFinCarrito.innerText =
//       'Tu total es : ' +
//       valorProducto +
//       ' pesos, Tu cuota con intereses del 25 % es de ' +
//       valorCuota.toFixed(2) +
//       ' pesos en ' +
//       cantidadCuotas +
//       ' pagos.'),
//       contenedor.prepend(textoFinCarrito)

//     alert(
//       'Tu total es : ' +
//         valorProducto +
//         ' pesos, Tu cuota con intereses del 25 % es de ' +
//         valorCuota.toFixed(2) +
//         ' pesos en ' +
//         cantidadCuotas +
//         ' pagos.',
//     )
//   } else {
//     alert('Solo se permiten hasta 6 cuotas.')
//   }
// }
// //argumento de la func. calculoCuota
// let v1 = sum
// let v2 = parseInt(
//   prompt(
//     'Tu total es de ' +
//       sum +
//       '  pesos, ingresa la cantidad de cuotas a pagar.\n Podes elegir hasta 6 pagos con interes o 10 % de descuento en 1 pago',
//   ),
// )
// let calculo = 'y'

// //llamo la funcion.
// calculoCuota(v1, v2)

// while (calculo == 'y') {
//   calculo = prompt('Deseas saber el valor con otra cantidad de cuotas? (y/n)')
//   if (calculo == 'y') {
//     v1 = sum
//     v2 = parseInt(
//       prompt('Tu total es de ' + sum + ' ingresa cantidad de cuotas'),
//     )
//     calculoCuota(v1, v2)
//   } else {
//     alert('Gracias por usar nuestro calculador de cuotas.')
//     calculo = 'f'
//   }
// }
