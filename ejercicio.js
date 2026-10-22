// 1. Saludo inicial al cliente (Un parámetro)
const darBienvenida = (nombre) => `Bienvenido a la tienda de mascotas ${nombre}`;

console.log(darBienvenida("Ana"));

// 2. Calcular el precio total con IVA (Dos parámetros)
const calcularTotal = (precio, cantidad) => precio * cantidad * 1.21;

// 3. Formatear el nombre de la mascota (Un parámetro)
const nombrarMascota = (nombre) => `Mascota: ${nombre}`;

// 4. Aplicar descuento especial (Varias líneas de código)
const calcularDescuento = (precio, esSocio) => esSocio ? precio * 0.8 : precio;

console.log(calcularDescuento(1000, true));