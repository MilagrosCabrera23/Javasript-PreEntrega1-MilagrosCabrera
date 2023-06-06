//SIMULADOR DE PRESTAMOS 

//function que pide datos a usuario y los almacena.
function datosUsuario() {
    let ingresoNombre = prompt(`Ingrese su nombre completo`)
    ingresoNombre = validarInput(ingresoNombre)

    let ingresoDni = prompt(`Ingrese su DNI`)
    ingresoDni = validarInput(ingresoDni)

    let ingresoTelefono = parseInt(prompt(`Ingrese su numero de telefono`))
    ingresoTelefono = validarInput(ingresoTelefono)

    let edad = parseInt(prompt("Ingresa cuantos años tienes"))
    edad = validarInput(edad)


    if (edad > 21) {
        alert("Sos mayor de edad,podes acceder a nuestros prestamos instantaneos");
    }
    else if (edad > 90) {
        alert(`Usted es mayor a 90 años y no cumple los requisitos para acceder a los prestamos   `);
    }
    else {
        alert("Sos menor de edad, no podes acceder a nuestros prestamos instantaneos");
    }

    verificacionDatos(ingresoNombre, ingresoDni, ingresoTelefono, edad)
}
datosUsuario()



//funcion para validar los datos 
function validarInput(valor) {

    while (isNaN(valor) || valor === undefined || valor === null || valor === "") {
        alert("Debes ingresar un valor acorde a lo solicitado");

        valor = parseFloat(prompt("Ingresa un valor nuevamente"));
    }
    return valor;
}
//muestra los datos almacenados en la funcion anterior.
function verificacionDatos(nombre, dni, telefono, edad) {
    alert(`Sus datos son los siguientes: Su nombre es ${nombre}, Dni: ${dni},su telefono:${telefono},tu edad es ${edad}.`)
}

//estructura del menu de opciones principales
let cerrarMenu = false;

do {
    let opcionesPrestamos = parseInt(prompt(`Ingrese la opción deseada
    
       1  Simular tu prestamo instantaneo.
       2 Calcular tu cuota mensual.
       3  Agregar un Coseguro a tu prestamo.
       4  Salir del Menú.`))

    switch (opcionesPrestamos) {
        case 1:
            simulacionPrestamos()
            break

        case 2:
            cuotaMes()
            break

        case 3:
            coseguroAdecuado()
            break


        case 4:
            console.log("SALIR DEL MENU")
            cerrarMenu = true
            break

        default:
            alert("Opción no válida, ingrese un numero del 1 al 4")
            break
    }
} while (!cerrarMenu)

//funcion que simula los valores del prestamo y muestra sus resultados

function simulacionPrestamos() {

    let montoPretendido = parseInt(prompt(`Ingrese el monto del préstamo en pesos:`))
    montoPretendido = validarInput(montoPretendido)

    let tasaIntereses = parseFloat(prompt(`Ingrese la tasa de interés:`))
    tasaIntereses = validarInput(tasaIntereses)

    let plazoMeses = parseInt(prompt(`Ingrese el plazo en meses:`))
    plazoMeses = validarInput(plazoMeses)


    if (montoPretendido == 0 || montoPretendido < 10000) {
        alert(`Lo sentimos,el valor minimo debe ser superior a 10.000`)
    }
    else if (montoPretendido > 10000 && montoPretendido <= 5000000) {

        alert(`Felicidades, puedes acceder al monto del prestamo.El monto pretendido es de ${montoPretendido}con un interes anual de ${tasaIntereses} y un plazo de ${plazoMeses} meses`)

    }
    else {
        alert(`Lo sentimos, el monto del prestamo excede a nuestras ofertas`)
    }
}

//opcion 2:calcula cuota mensual y coseguro,luego muestra los resultados.

function cuotaMes() {
    let montoIngresado = parseFloat(prompt(`Ingrese el monto del préstamo en pesos:`))
    montoIngresado = validarInput(montoIngresado)

    let tasaIntereses = parseFloat(prompt(`Ingrese la tasa de interés:`))
    tasaIntereses = validarInput(tasaIntereses)

    let plazoMeses = parseInt(prompt(`Ingrese el plazo de meses en numeros:`))
    plazoMeses = validarInput(plazoMeses)

    const tasaMensual = tasaIntereses / 12 / 100;

    const cuotaMensual = (montoIngresado * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazoMeses));

    const cuotaRedondeada = cuotaMensual.toFixed(2);

    alert(`La cuota mensual del préstamo es: ${cuotaRedondeada}`);

    if (tasaIntereses <= 1 && tasaIntereses <= 12) {
        tasaMensual = tasaIntereses * 0.15 / 12 / 100
    }
    else if (tasaIntereses > 13 && tasaIntereses <= 24) {
        (tasaMensual = tasaIntereses * 0.25 / 12 / 100)
    }
    else if (tasaIntereses > 24 && tasaIntereses <= 45) {
        (tasaMensual = tasaIntereses * 0.65 / 12 / 100)
    }
    else {
        console.log(`Error`)
        return
    }
}

//opcion 3:elige entre las opciones y lo muestra

function coseguroAdecuado() {
    let coseguro = parseInt(prompt(`Elige el coseguro que mas se adapte a tus necesidades:
  1) Coseguro basico de $2900 
  2)Coseguro intermedio de $4500
  3)Coseguro premium de $7500 `))

    if (coseguro == 1) {
        alert("Haz agregado el coseguro basico correctamente")
    } else if (coseguro == 2) {
        alert("Haz agregado el coseguro intermedio correctamente")
    } else if (coseguro == 3) {
        alert(`Haz agregado el coseguro premium correctamente`)
    } else {
        alert("Opción no válida, ingrese un numero del 1 al 3")
    }

}






