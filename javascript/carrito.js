// //saludo del carrito

tituloCarrito.innerText = 'Hola estos son tus productos elegidos :'

// // prueba botn

// //carrito harcodeado hasta q sepa como crearlo de otra manera q no sea prompt
const carrito = [
  { id: 1, nombre: 'Angelita', precio: 1000, img: 'ANGELITA.jpeg' },
  { id: 2, nombre: 'Estrellita', precio: 1000, img: 'ESTRELLA.jpeg' },
  { id: 3, nombre: 'Toalla negra', precio: 1000, img: 'TOALLANEGRA.jpeg' },
  { id: 4, nombre: 'Pesebre', precio: 1000, img: 'PESEBRE.jpeg' },
]

// //creo una li x cada elemento q me devueleve el for of del carrito.
let ul = document.getElementById('ul')
for (const producto of carrito) {
  let li = document.createElement('li')

  li.innerHTML = `<div class="card">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <img src="../imagenes/${producto.img} " alt="">
    </div>
   `
  ul.append(li) //agrego los li creados en laul del carrito.
}

// //creo un array precios iterando por los objetos del carrito.

// let precios = []
// for (i in carrito) precios.push(carrito[i].precio)

// //creo la variable sum para usar de argumento de la func.calculoCuota.

// const init = 0
// const sum = precios.reduce((anterior, actual) => anterior + actual, init)

// //creo un h2 para q imprima en pantalla la cantidad y valor de las cuotas.
// const textoFinCarrito = document.createElement('h2')

// //creo la func. calculoCuota.
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
