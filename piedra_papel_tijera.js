var op_1 = "piedra";
var op_2 = "papel";
var op_3 = "tijera";

var resultado = function(people, pc) {
    if (people != pc) {
        if (people === op_1 && pc === op_2) {
            console.log("perdiste");
        } else if (people === op_1 && pc === op_3) {
            console.log("ganaste");
        } else if (people === op_2 && pc === op_1) {
            console.log("ganaste");
        } else if (people === op_2 && pc === op_3) {
            console.log("perdiste");
        } else if (people === op_3 && pc === op_1) {
            console.log("perdiste");
        } else if (people === op_3 && pc === op_2) {
            console.log("ganaste");
        }
    } else { console.log("empate") }
}
resultado(op_1, op_3);
// R: en consola "ganaste"
resultado(op_1, op_2);
// R: en consola "perdiste"
resultado(op_1, op_1);
// R: en consola "empate"