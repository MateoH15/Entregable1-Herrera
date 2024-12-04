let stockProductos = [{
    id: 437,
    producto: "Arroz",
    precio: 3000,
    cantidad: 8
}, {
    id: 234,
    producto: "Huevo",
    precio: 40,
    cantidad: 30,
}, {
    id: 734,
    producto: "Fideos",
    precio: 3500,
    cantidad: 10
}]

function reponerProducto(id, producto, precio, cantidad) {
    stockProductos.push({ id, producto, precio, cantidad })
}

function eliminarProducto(idProducto) {

    for (let i = 0; i < stockProductos.length; i++) {
        if (idProducto === stockProductos[i].id) {
            stockProductos.splice(i, 1)
        }
    }
}

function mostrarProductos() {
    let mensaje = "Productos en Stock: \n"

    for (let i = 0; i < stockProductos.length; i++) {
        mensaje += "\n id: " + stockProductos[i].id + " - " + "Producto: " + stockProductos[i].producto + " - " + "Precio: " + stockProductos[i].precio + " - " + "Cantidad: " + stockProductos[i].cantidad
    }

    alert(mensaje)
}

function simularCompra(productos) {
    let bandera = true
    while (bandera) {
        for (let i = 0; i < stockProductos.length; i++) {
            if (productos == stockProductos[i].producto) {
                const cantidadALlevar = Number(prompt("Cuanto quiere llevar?"))
                if (cantidadALlevar > stockProductos[i].cantidad) {
                    alert("Esta superando la cantidad disponible. Por favor vuelva a comprar.")
                } else {
                    let total = 0
                    total = stockProductos[i].precio * cantidadALlevar
                    alert("El precio es de: " + total)
                    stockProductos[i].cantidad -= cantidadALlevar
                }
                bandera = false
            }
        }
    }
}


function core() {
    let bandera = true

    while (bandera) {

        const opciones = Number(prompt("Elija una opcion:\n \n1-Reponer un producto\n2-Eliminar un producto \n3-Ver productos \n4-Simular compra"))

        switch (opciones) {
            case 0:
                return
            case 1:
                const id = Number(prompt("Ingresa el id del producto"))
                const producto = prompt("Ingrese el nombre del producto: ")
                const precio = Number(prompt("Ingrese el precio del producto: "))
                const cantidad = Number(prompt("Ingrese la cantidad de productos: "))
                reponerProducto(id, producto, precio, cantidad)
                bandera = confirm("Quiere seguir operando?")
                break
            case 2:
                const idProducto = Number(prompt("Ingrese el id del producto que desea eliminar"))
                eliminarProducto(idProducto)
                bandera = confirm("Quiere seguir operando?")
                break
            case 3:
                mostrarProductos()
                bandera = confirm("Quiere seguir operando?")
                break
            case 4:
                const productos = prompt("Ingrese el nombre del producto.")
                simularCompra(productos)
                bandera = confirm("Quiere seguir operando?")
                break
            default:
                alert("Opcion no valida")
                break
        }
    }
}

core()

