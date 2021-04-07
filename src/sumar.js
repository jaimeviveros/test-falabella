
const sumar = (numeros) => {
    let respuesta = 0;
    if (numeros === null || numeros === "" || numeros === "0" ) {
        return 0;
    } 
    else {
        let numFor = "";
        for (let i = 0; i < numeros.length; i++) {
            let str = numeros.charAt(i);
            if (isNaN(str)) {
                numFor = (numFor === "" ? "0" : numFor);
                // suma
                //
                respuesta += parseInt(numFor);
                numFor = "";
            }
            else {
                numFor += str;
            }
        }
        // 
        if (!isNaN(numFor)) {
            respuesta += parseInt(numFor);
        }
        return respuesta;
    }
}

module.exports = {sumar};
