const ProdEnVenta = []
let cant = parseInt(prompt('cuantos productos desea ingresar'))
for (i = 0; i < cant; i++) {
  class producto {
    constructor(nombre, precio) {
      this.nombre = nombre
      this.precio = precio
    }
  }

  let ingresarNombreProducto = prompt('ingrese producto')
  let ingresarValorProducto = parseFloat(
    prompt('ingrese precio de lista del producto'),
  )

  const producto1 = new producto(ingresarNombreProducto, ingresarValorProducto)

  ProdEnVenta.push(producto1)
}

let precios = []
for (i in ProdEnVenta) precios.push(ProdEnVenta[i].precio)

const init = 0
const sum = precios.reduce((anterior, actual) => anterior + actual, init)

function calculoCuota(valorProducto, cantidadCuotas) {
  if (isNaN(valorProducto) || isNaN(cantidadCuotas)) {
    alert('solo se aceptan numeros.')
  } else if (cantidadCuotas == 1) {
    valorCuota = (valorProducto * -0.1 + valorProducto) / cantidadCuotas
    alert(
      'El total es de : $ ' +
        valorProducto +
        ' ,con 10 % de descuento en 1 pago es =  $' +
        valorCuota.toFixed(2) +
        '.',
    )
  } else if (cantidadCuotas > 1 && cantidadCuotas <= 6) {
    valorCuota = (valorProducto * 0.25 + valorProducto) / cantidadCuotas
    alert(
      'su total es : $ ' +
        valorProducto +
        ' , Su cuota con intereses del 25 % es de $ ' +
        valorCuota.toFixed(2) +
        '  en ' +
        cantidadCuotas +
        ' pagos.',
    )
  } else if (cantidadCuotas >= 7 && cantidadCuotas <= 12) {
    valorCuota = (valorProducto * 0.5 + valorProducto) / cantidadCuotas
    alert(
      'su total es : ' +
        valorProducto +
        ' pesos, Su cuota con intereses del 50 % es de ' +
        valorCuota.toFixed(2) +
        ' pesos en ' +
        cantidadCuotas +
        ' pagos.',
    )
  } else {
    alert('Solo se permiten hasta 12 cuotas.')
  }
}
let v1 = sum
let v2 = parseInt(prompt('Ingrese la cantidad de cuotas a pagar.'))
let calculo = 'y'

calculoCuota(v1, v2)

while (calculo == 'y') {
  calculo = prompt('desea saber el valor con otra cantidad de cuotas? (y/n)')
  if (calculo == 'y') {
    v1 = sum
    v2 = parseInt(prompt('ingrese cantidad de cuotas'))
    calculoCuota(v1, v2)
  } else {
    alert('gracias por usar nuestro calculador de cuotas.')
    calculo = 'f'
  }
}
