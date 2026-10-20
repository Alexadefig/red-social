const acceso_cine = {

    edad: 15,
    tieneEntrada: true,
};

if (acceso_cine.edad >= 18 && acceso_cine.tieneEntrada) {
    console.log("Puedes entrar al cine.");
} else {
    console.log("No puedes entrar: necesitas tener 18 años o más y una entrada.");
}