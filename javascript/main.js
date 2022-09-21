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

  //operador ternario
  checkbox.checked ? guardar('localStorage') : guardar('sessionStorage')
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
// console.log(productos)

const containerDiv = document.querySelector('.container')
const carritoDiv = document.querySelector('.carrito')

//traer elementos del carrito de localstorage si los hubiera o creo un array vacio con operador OR
let carrito = JSON.parse(localStorage.getItem('carrito')) || []

//creo tarjetas de los productos
crearCards()
function crearCards() {
  productos.forEach((element) => {
    // uso destructuring...transformo en variables las prop del objeto element.
    let { nombre, img, precio, id } = element

    //aca se usa sugar syntax += para sumar cards
    containerDiv.innerHTML += `<div class="card" >
 
        <h4>${nombre}</h4>
        <img src="./imagenes/${img} " alt="">
        <p>$${precio}</p>
        <button class= "btnProd" id="btn-agregar${id}">Agregar al carrito</button>
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

// funcion agregar al carrito

function agregarAlCarrito(producto) {
  let existe = carrito.some((prod) => prod.id === producto.id)

  if (existe === false) {
    producto.cantidad = 1
    carrito.push(producto)
  } else {
    let prodFind = carrito.find((prod) => prod.id === producto.id)
    //sugar syntax ++.
    prodFind.cantidad++
  }

  crearCarritoCard()
}
console.log(carrito)

// funcion crear carrito

function crearCarritoCard() {
  //vacío el contenedor carrito.
  carritoDiv.innerHTML = ''

  //  con operador AND ,si esta vacio, imprimo carrito vacio.
  carrito.length === 0 &&
    (carritoDiv.innerHTML = '<h2 class="carVacio">Tu carrito está vacio</h2>')

  carrito.forEach((prod) => {
    let valorSuma = `${prod.precio * prod.cantidad}`
    //destructuring transformo en variables las prop del objeto prod.
    let { nombre, img, cantidad, id } = prod

    //sugar syntax += .
    carritoDiv.innerHTML += `
    <div class="card" >
        <h4>${nombre}</h4>
        <img src="./imagenes/${img} " class="carritoImg" alt="">
        <h5>CANTIDAD: ${cantidad}</h5>
        <button class="btnMasMenos" id="btn-sumarUnoSolo${id}">+ 1</button>
        <button class="btnMasMenos" id="btn-borrarUnoSolo${id}">- 1</button>
        
        <h4> $ ${valorSuma}</h4>
        <button class="btnCarrito"  id="btn-borrar${id}">Quitar todo</button>
        
        </div>`
  })

  // aca saco el total del precio del carrito con metodo .reduce
  let total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

  // console.log(total)
  //agregar a storage
  localStorage.setItem('carrito', JSON.stringify(carrito))
  localStorage.setItem('total', JSON.stringify(total))
  borrarProducto()
  borrarProducto2()
  sumarProducto()
}

// termina funcion crearCarrito

//funcion restar product
// funcion borrar producto

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
function borrarProducto2() {
  carrito.forEach((producto) => {
    document
      .querySelector(`#btn-borrarUnoSolo${producto.id}`)
      .addEventListener('click', () => {
        //operador ternario
        producto.cantidad >= 2 ? producto.cantidad-- : (producto.cantidad = 0)

        crearCarritoCard()
      })
  })
}
function sumarProducto() {
  carrito.forEach((producto) => {
    document
      .querySelector(`#btn-sumarUnoSolo${producto.id}`)
      .addEventListener('click', () => {
        producto.cantidad++

        crearCarritoCard()
      })
  })
}
crearCarritoCard()

const botonFinal = document.createElement('button')
botonFinal.innerText = 'Ir a formas de pago'
botonFinal.classList.add('btnFinal')
contenedor.append(botonFinal)

botonFinal.addEventListener('click', finalizarCompra)

function finalizarCompra() {
  // recupero valor del carrito de localstorage
  let totalCarrito = JSON.parse(localStorage.getItem('total'))
  // if carrito vacio .
  if (totalCarrito == 0) {
    contenedor.innerHTML = `<div class="card">
    <h3 class="carVacio">no elegiste ningún producto</h3>
    <a class="linkregeso" href="./index.html">Regresar al inicio</a>
     </div>`
    //si el carrito no esta vacio.
  } else {
    contenedor.innerHTML = `<div class="card">
  <h3 class="totFinal">Tu total es: $ ${totalCarrito}</h3> 
 
 <p class="calcCuotas"  >¿En cuantas cuotas queres abonar?</p>
<button class="btnCuota"  id ="pago1"> 1  (10 % de descuento.) </button>
<button class="btnCuota" id ="pago3"> 3  (10 % de interes.) </button>
<button class="btnCuota" id ="pago6"> 6  (25 % de interes.)</button>
  </div>
 `

    let pago1 = document.getElementById('pago1')
    let pago3 = document.getElementById('pago3')
    let pago6 = document.getElementById('pago6')

    pago1.onclick = () => {
      calculoCuota(totalCarrito, 1)
    }

    pago3.onclick = () => {
      calculoCuota(totalCarrito, 3)
    }

    pago6.onclick = () => {
      calculoCuota(totalCarrito, 6)
    }
  }
}
function calculoCuota(valorProducto, cantidadCuotas) {
  if (cantidadCuotas == 1) {
    let valorConInteres = valorProducto * -0.1 + valorProducto

    contenedor.innerHTML = `<h3 class="totFinal">Tu total con 10 % de descuento es de : $ ${valorConInteres}</h3> 

 `
  } else if (cantidadCuotas == 3) {
    let valorConInteres = valorProducto * 0.1 + valorProducto

    let valorCuota = valorConInteres / cantidadCuotas
    contenedor.innerHTML = `<h3 class="totFinal">Tu total con 10 % de interés es de : $ ${valorConInteres}</h3> 

    <p class="calcCuotas"> En 3 pagos de = $ ${valorCuota.toFixed(2)} </p> `
  } else if (cantidadCuotas == 6) {
    let valorConInteres = valorProducto * 0.25 + valorProducto

    let valorCuota = valorConInteres / cantidadCuotas
    contenedor.innerHTML = `<h3 class="totFinal">Tu total con 25 % de interés es de : $ ${valorConInteres}</h3> 

    <p class="calcCuotas"> En 6 pagos de = $ ${valorCuota.toFixed(2)} </p> `
  }

  let ingtarjetas = document.createElement('button')

  ingtarjetas.innerText = 'Ingresa los datos de tu tarjeta'
  ingtarjetas.setAttribute('id', 'datosTarjeta')
  contenedor.append(ingtarjetas)

  let ingTarjetas = document.getElementById('datosTarjeta')
  ingTarjetas.addEventListener('click', crearFormTarjetas)
}

function crearFormTarjetas() {
  let formularioTarjeta = document.createElement('form')

  contenedor.append(formularioTarjeta)

  formularioTarjeta.innerHTML = `<form class="formTarjeta"id="formularioTarjeta action="" method="">
  <div class="divF nombreTitular">
      <label for="nombreTitular">Nombre del titular</label>
      <input type="text" class="form-control" id="titular">
  </div>
  <div class="divF direccion">
  <label for="direccion">Direccion del titular</label>
  <input type="text" class="form-control" id="direccion">
</div>

  <div class="divF codigoVer">
      <label for="codigoVer">Codigo de verificacion (CVV)</label>
      <input type="text" class="form-control" id="codigoVer">
  </div>
  <div class="divF cardNumber">
      <label for="cardNumber">Numero de tarjeta</label>
      <input type="text" class="form-control" id="cardNumber">
  </div>
  <div class="divF" id="fechaExpiracion">
      <label>fecha de expiracion</label>
      <select>
          <option value="01">Enero</option>
          <option value="02">Febrero</option>
          <option value="03">Marzo</option>
          <option value="04">Abril</option>
          <option value="05">Mayo</option>
          <option value="06">Junio</option>
          <option value="07">Julio</option>
          <option value="08">Agosto</option>
          <option value="09">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
      </select>
      <select>
          <option value="16"> 2022</option>
          <option value="17"> 2023</option>
          <option value="18"> 2024</option>
          <option value="19"> 2025</option>
          <option value="20"> 2026</option>
          <option value="21"> 2027</option>
      </select>
  </div>


  <div class="divF id="tipoTarjeta">
  <label>seleccione tarjeta</label>

  <select>
      <option value="22"> Visa</option>
      <option value="23"> Mastercard</option>
      <option value="24"> Amex</option>
      <option value="25"> Nativa</option>
      <option value="26"> Naranja</option>
      
  </select>
</div>
<div class="divF id="dirEntrega">
<label for="dirEntrega">Direccion de entrega</label>
<input type="text" class="form-control" id="inputEntrega">
</div>
<div class="divF" id="confirmacionBtn">
      <button type="button" class="btn btn-default" id="confirm-purchase">Confirmar compra</button>
      </div>
</form>`

  let confirmarCompra = document.getElementById('confirm-purchase')
  confirmarCompra.addEventListener('click', envioPedido)
}
//saludo final con fecha del pedido.
function envioPedido() {
  contenedor.innerHTML = ''

  contenedor.innerHTML =
    `<div>` +
    visitante.value.toUpperCase() +
    `
  <h3 class="saludoFin">¡Gracias por Tu compra!</h3>
  <h3> El pedido ya está en Proceso</h3>` +
    new Date() +
    `<div class="linkDiv"> <a class="linkregeso" href="./index.html">Regresar al inicio</a></div></div>`

  localStorage.setItem('carrito', JSON.stringify(''))
}
