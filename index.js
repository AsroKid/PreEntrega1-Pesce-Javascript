// Variables

let verdad = true

// Funciones


function Joyeros(turnos) {
    switch (turnos) {
        case 1:
            turnos = "Mateo Velázquez"
            especializacion = "Relojería"
            horario = "15.30"
            alert("Usted solicito turno con el Joyero/a. " + turnos + " en el área de " + especializacion + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 2:
            turnos = "Valentina Herrera"
            especializacion = "Collares y Cadenas"
            horario = "12.45"
            alert("Usted solicito turno con el Joyero/a. " + turnos + " en el área de " + especializacion + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 3:
            turnos = "Sebastián Mendoza"
            especializacion = "Pulseras y Brazaletes"
            horario = "09.15"
            alert("Usted solicito turno con el Joyero/a. " + turnos + " en el área de " + especializacion + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 4:
            turnos = "Isabela Vargas"
            especializacion = "Anillos de Compromiso"
            horario = "19.00"
            alert("Usted solicito turno con el Joyero/a. " + turnos + " en el área de " + especializacion + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 5:
            turnos = "Alejandro Sánchez"
            especializacion = "Joyería Personalizada"
            horario = "11.30"
            alert("Usted solicito turno con el Joyero/a. " + turnos + " en el área de " + especializacion + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
        case 6:
            turnos = "Camila Ríos"
            especializacion = "Pendientes y Aretes"
            horario = "17.00"
            alert("Usted solicito turno con el Joyero/a.. " + turnos + " en el área de " + especializacion + " con horario " + horario + "hs. ; por favor continúe para indicar su disponibilidad.")
            break;
    }
}


// Ingreso del nombre y apellido

let inicioNombre = prompt("Ingresá tu nombre:")
let inicioApellido = prompt("Ingresá tu apellido:")


alert("¡Asro jewerls te da la bienvenida! \n Por favor clickeá en aceptar para continuar")


// MENU --> dentro contiene el inicio, turnos y confirmacion

while (verdad) {
    if ((inicioNombre != "") && (inicioApellido != "")) {
        verdad = false
        let inicioMenu = Number(prompt(`Hola ${inicioNombre} ${inicioApellido}, estas en el inicio, por favor elegí una de las siguientes opciones:` + "\n" + "1. Solicitar un turno" + "\n" + "2. Salir del sitio"))
        if (inicioMenu === 1) {
            let turnos = Number(prompt("Usted cuenta con la disponibilidad de los siguientes turnos, por favor solicite el que requiera:" + "\n" + "1. Mateo Velázquez - Asesoramiento en Relojería Fina" + "\n" + "2.Valentina Herrera - Asesoramiento en Joyería en Collares y Cadenas" + "\n" + "3. Sebastián Mendoza - Asesoramiento en Diseño Pulseras y Brazaletes" + "\n" + "4. Isabela Vargas - Asesoramiento en Anillos de Compromiso" + "\n" + "5. Alejandro Sánchez - Asesoramiento en Joyería Fina Personalizada" + "\n" + "6. Camila Ríos - Asesoramiento en Pendientes y Aretes"));
            Joyeros/as(turnos)
            if ((turnos >= 1) && (turnos <= 6)) {
                let confirmacionTurnos = Number(prompt("Por favor, indique si confirma su turno o desea cancelarlo:\n 1. CONFIRMAR TURNO \n 2. CANCELAR TURNO"))
                if (confirmacionTurnos === 1) {
                    alert("Usted CONFIRMÓ su turno.\n ¡Muchas gracias por contar con Asro Jewerls!")
                } else if (confirmacionTurnos === 2) {
                    alert("Usted CANCELÓ su turno.\n Puede volver al menu para conseguir uno nuevo.")
                } else {
                    alert("Usted no colocó ni 1 ni 2, o se confundió de caracter, por favor vuelva a intentarlo.")
                }
            } else {
                alert("Pusiste un número que no abarca el 1 al 6, por favor intente de nuevo.")
                break
            }
        }
    } else {
        alert("Hubo un error al ingresar tu nombre, por favor corroborá que fue bien ingresado.")
        break
    }
}

