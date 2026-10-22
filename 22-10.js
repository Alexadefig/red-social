const estudiante = {

    nombre: "María",
    edad: 20,
    calificaciones: [8, 9, 7, 8],
    activo: true,
}

console.log(estudiante.nombre)

console.log(estudiante.calificaciones[0])


estudiante.calificaciones.push(10)

console.log(estudiante.calificaciones)

estudiante.activo = false;

const frutas = ["uva", "manzana", "pera", "sandía", "papaya"];

frutas.push("naranja")
frutas.pop()
frutas.shift()

console.log(frutas)