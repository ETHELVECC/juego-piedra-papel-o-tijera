var op_1 = "piedra";
var op_2 = "papel";
var op_3 = "tijera";

var resultado = function(people, pc) {
    switch (true) {
        case (people === op_1 && pc === op_2):
            console.log("perdiste");
            break;
        case (people === op_1 && pc === op_3):
            console.log("ganaste");
            break;
        case (people === op_2 && pc === op_1):
            console.log("ganaste");
            break;
        case (people === op_2 && pc === op_3):
            console.log("perdiste");
            break;
        case (people === op_3 && pc === op_1):
            console.log("ganaste");
            break;
        case (people === op_3 && pc === op_2):
            console.log("perdiste");
            break;
        default:
            console.log("empate");
    };
};