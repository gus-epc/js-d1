//simulador de descuento//
let precio= "";
const producto ={
    producto1: 1000,
    producto2: 2000,
    producto3: 3000
}
let eleccion = prompt("Elige un producto")
precio = producto[eleccion]

let cupon = prompt("Ingresa tu cupón");
if (cupon == "descuento10") {
    precio *= .9;
    document.write(`Su descuento ha sido aplicado, el total es ${precio}`)
}
else if (cupon == "descuento20") {
    precio *= .8;
    document.write(`Su descuento ha sido aplicado, el total es ${precio}`)
}
else{
    document.write(`Lo sentimos "${cupon}" no es un cupón válido` )
}