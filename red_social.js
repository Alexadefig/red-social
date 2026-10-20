/*const post = {
    author: "Tech_Alberto"
    content: "Esto es un contenido",
    likes: []
}

// añadir likes

post.likes.push("Maria","Amgel","Alberto");

post.likes.pop();

//resultados

console.log("total de likes:", + post.likes.length);
console.log("Usuarios que dieron like: ", post.likes);
console.log("Estructura del post", Object.keys) */

const smartphone = {
    modelo: "Galaxy S24",
    usuario: "Erica",
    bandeja_entrada:[],

};

smartphone.bandeja_entrada.push("Whatsapp de mamá"),
smartphone.bandeja_entrada.push("Alerta de Seguridad"),
smartphone.bandeja_entrada.push("Youtube:Nuevo video"),

smartphone.bandeja_entrada.shift(),
smartphone.bandeja_entrada.shift(),
smartphone.bandeja_entrada.shift(),

const total_pendientes = smartphone.bandeja_entrada.length()
console.log(`Notificaciones pendientes en la bandeja: ${total_pendientes}`);
console.log("Notificaciones restantes:", smartphone.bandeja_entrada);
