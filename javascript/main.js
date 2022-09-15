//registro de ususario/storage

const btn = document.getElementById('btnRegistro'),
  checkbox = document.getElementById('checkbox'),
  email = document.getElementById('email'),
  password = document.getElementById('password'),
  p = document.querySelector('.mensaje'),
  visitante = document.getElementById('nombre')
btn.value = 'Registrar'

function guardar(valor) {
  let usuario = {
    username: email.value,
    password: password.value,
    nombre: visitante.value,
  }

  if (valor === 'sessionStorage') {
    sessionStorage.setItem('usuario', JSON.stringify(usuario))
  }
  if (valor === 'localStorage') {
    localStorage.setItem('usuario', JSON.stringify(usuario))
  }
  return usuario
}

function recuperarDatos(datos) {
  if (datos) {
    nombre.value = datos.nombre
    email.value = datos.username
    password.value = datos.password
  }
}

recuperarDatos(JSON.parse(localStorage.getItem('usuario')))

btn.addEventListener('click', (e) => {
  e.preventDefault()
  if (checkbox.checked) {
    guardar('localStorage')
  } else {
    guardar('sessionStorage')
  }
})

//saludo personalizado

visitante.onchange = () => {
  saludo.innerText =
    'Bienvenido/a ' + visitante.value.toUpperCase() + ' a Reina Victoria'
}
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
const containerDiv = document.querySelector('.container')
const carritoDiv = document.querySelector('.carrito')

//traer elementos del carrito de localstorage o un array vacio
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

function crearCards() {
  productos.forEach((element) => {
    containerDiv.innerHTML += `<div class="card" >
 
        <h4>${element.nombre}</h4>
        <img src="../imagenes/${element.img} " alt="">
        <p>$${element.precio}</p>
        <button class= "btnProd" id="btn-agregar${element.id}">Agregar al carrito</button>
     </div>`
  })
  FuncionBoton()
}

function FuncionBoton() {
  productos.forEach((producto) => {
    document
      .querySelector(`#btn-agregar${producto.id}`)
      .addEventListener('click', () => {
        agregarAlCarrito(producto)
      })
  })
}

function agregarAlCarrito(producto) {
  let existe = carrito.some((prod) => prod.id === producto.id)
  if (existe === false) {
    producto.cantidad = 1
    carrito.push(producto)
  } else {
    let prodFind = carrito.find((prod) => prod.id === producto.id)
    prodFind.cantidad++
  }
  console.log(carrito)
  crearCarritoCard()
}
console.log(carrito)

function crearCarritoCard() {
  carritoDiv.innerHTML = ''
  carrito.forEach((prod) => {
    let valorSuma = `${prod.precio * prod.cantidad}`
    carritoDiv.innerHTML += `<div >
    <div class="card" >
        <h4>${prod.nombre}</h4>
        <img src="../imagenes/${prod.img} " class="carritoImg" alt="">
        <h5>CANTIDAD: ${prod.cantidad}</h5>
        <p>$ ${valorSuma}</p>
        <button class="btnCarrito"  id="btn-borrar${prod.id}">Quitar</button>
    
     </div>
        </div>`
  })
  let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
  console.log(total)
  //agregar a storage
  localStorage.setItem('carrito', JSON.stringify(carrito))

  borrarProducto()
}

function borrarProducto() {
  carrito.forEach((producto) => {
    document
      .querySelector(`#btn-borrar${producto.id}`)
      .addEventListener('click', () => {
        let indice = carrito.findIndex((element) => element.id === producto.id)
        carrito.splice(indice, 1)
        crearCarritoCard()
      })
  })
}

crearCarritoCard()
crearCards()
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
