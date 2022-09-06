//saludo personalizado

console.dir(document.body)
let visitante = prompt('hola! cual es tu nombre?')
saludo.innerText =
  'Bienvenido/a ' + visitante.toLocaleUpperCase() + ' a Reina Victoria'

// // //ingresar productos en venta.(aca ingresa el adm. los productos para a vender).

// const ProdEnVenta = []
// let cant = parseInt(prompt('cuantos productos desea ingresar'))
// for (i = 0; i < cant; i++) {
//   class producto {
//     constructor(id, nombre, precio) {
//       this.id = id
//       this.nombre = nombre
//       this.precio = precio
//     }
//   }
//   let ingresarId = parseInt(prompt('ingrese nuevo num de id de producto'))
//   let ingresarNombreProducto = prompt('ingrese producto')
//   let ingresarValorProducto = parseFloat(
//     prompt('ingrese precio de lista del producto'),
//   )

//   const producto1 = new producto(
//     ingresarId,
//     ingresarNombreProducto,
//     ingresarValorProducto,
//   )

//   ProdEnVenta.push(producto1)
// }
// console.log(ProdEnVenta)

// //aca abajo creo el array carrito...

// let idProdCompra = parseInt(prompt('id del producto a comprar?'))

// let carritoPrueba = ProdEnVenta.filter((el) => el.id === idProdCompra)

// let otroObjeto = []

// let seguirComprando = 'y'
// while (seguirComprando == 'y') {
//   seguirComprando = prompt('desea agregar algun prod al carrito (y/n)')

//   if (seguirComprando == 'y') {
//     idProdCompra = parseInt(prompt('id del producto ?'))
//     otroObjeto = ProdEnVenta.filter((el) => el.id === idProdCompra)

//     carritoPrueba.push(otroObjeto)
//   } else {
//     alert('ir al carrito para finalizar compra')
//     seguirComprando = 'f'
//   }
// }
// //esto me crea un array con un objeto y array x cada objeto q sumo....

// let carrito = carritoPrueba.flat() //con esto lo transformo en array de objetos...

// console.log(carrito)
