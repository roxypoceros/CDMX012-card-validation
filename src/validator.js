const validator = {
  isValid: function (CardNumber) {

    // Obtener un array, voltear los números del array
    let card = Array.from(CardNumber).reverse()

    // declaro la variable que va a validar
    let total = 0

    // Recorrer el array
    for (let i = 0; i < card.length; i++) {

      // Para que me regrese un número entero
      let num = parseInt(card[i])


      // Para saber si el número está en posición par
      let pares = (i + 1) % 2

      // Si está en posición par se multiplica por 2
      let resultadoPares = 0
      if (pares == 0) {
        resultadoPares = num * 2
        // Si el resultado de la multiplicación por 2 es de más de 2 dígitos, se suman entre si
        if (resultadoPares > 9) {

          /* Para sumar los dos dígitos:
           Primero el resultado se divide entre 10 y me quedo con el número entero 
           El segundo dígito es la suma del primer dígito + el número original * 2 - 10 por el primer dígito.
           ej: 18 1+(9x2)-(10x1) */

          let sumaDigitos = parseInt(resultadoPares / 10)
          resultadoPares = sumaDigitos + resultadoPares - 10 * sumaDigitos
        }
      } else {
        resultadoPares = num
      }
      total += resultadoPares
    }

//console.log("Carga")
    let validarTotal = total % 2
   if(validarTotal==0){
     return true
   }
   return false

  },

  maskify: function (CardNumber) {
    let hideNum = Array.from(CardNumber);
    let maskedNumber = [];
    let mask
    for (let i = 0; i < hideNum.length; i++) {

      if (i >= 0 && i < hideNum.length - 4) {
        maskedNumber.push("#");
      } else {
        maskedNumber.push(hideNum[i]);
        mask = maskedNumber.join("");

      }

    }
    return mask
  }
}




export default validator;