const validator = {
  isValid: function (CardNumber) {

    let card = Array.from(CardNumber).reverse()

    let total = 0

    for (let i = 0; i < card.length; i++) {

      let num = parseInt(card[i])

      let pares = (i + 1) % 2

      let resultadoPares = 0
      if (pares == 0) {
        resultadoPares = num * 2
        if (resultadoPares > 9) {

          let sumaDigitos = parseInt(resultadoPares / 10)
          resultadoPares = sumaDigitos + resultadoPares - 10 * sumaDigitos
        }
      } else {
        resultadoPares = num
      }
      total += resultadoPares
    }

    let validarTotal = total % 10
    if (validarTotal == 0) {
      return true
    }
    return false

  },

  maskify: function (CardNumber) {
    let hideNum = Array.from(CardNumber);
    let maskedNumber = [];
    let mask = null
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