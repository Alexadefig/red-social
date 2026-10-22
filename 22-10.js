/*const estudiante = {

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

"Hola Mundo GitHub"
Objetivo: Obtener el JSON crudo y ver el nombre.
Instrucciones:
Crea una función async llamada buscarPerfil.
Define una variable usuario con tu nombre de usuario de GitHub (o usa "octocat" si no tienes).
Haz un fetch a https://api.github.com/users/${usuario}.
Convierte la respuesta con .json().
Imprime en consola: "Nombre: " + data.name.

"El Detective de Errores" 
Objetivo: Gestionar cuando el usuario no existe. Explicación: fetch no falla si el usuario no existe (no salta al catch), simplemente devuelve un estado 404. Hay que comprobar response.ok.
Instrucciones:
Modifica la función anterior.
Justo después del primer fetch (y antes del .json()), añade un condicional:
if (response.ok === false) { ... }
Dentro del if, lanza un error manual: throw new Error("Usuario no encontrado");.
Envuelve todo en un try / catch.
En el catch, imprime el error.
Prueba buscando un usuario imposible (ej: "usuario-que-no-existe-123456").*/



const searchProfile = async () => {
    const user = "Alexadefig";

    try {
        const response = await fetch(`https://api.github.com/users/${user}`);

        if (response.ok === false) {
            throw new Error("Usuario no encontrado");
        }

        const data = await response.json();
        console.log("Nombre: " + data.name);
    } catch (error) {
        console.error(error);
    }
};

searchProfile();