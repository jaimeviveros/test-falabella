
const sumar = (numeros) => {
    let respuesta = 0;
    if (numeros === null || numeros === "" || numeros === "0" ) {
        return 0;
    } 
    else {
        // 1,2,3
        let numFor = "";
        for (let i = 0; i < numeros.length; i++) {
            let str = numeros.charAt(i);
            if (isNaN(str)) {
                numFor = (numFor === "" ? "0" : numFor);
                // suma
                respuesta += parseInt(numFor);
                numFor = "";
            }
            else {
                console.log("numFor: " + numFor);
                console.log("respuesta: " + respuesta);
                numFor += str;
            }
        }
        //
        return respuesta;
    }
}

module.exports = {sumar};