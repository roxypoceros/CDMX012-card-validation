import validator from './validator.js';


const validationButton = document.getElementById('btnValidar');

let CardNumber2 = document.getElementById('inCardNumber')

let mensajeFinal = document.getElementById('validityText')

// validationButton.addEventListener("click", callNumber)

validationButton.addEventListener("click", function(){
    let resultadoFinal = validator.isValid(CardNumber2.value)
    if (resultadoFinal == true){
        //console.log(resultadoFinal);
    
        mensajeFinal.innerHTML = '<i class="fas fa-check-circle"></i> Tarjeta Valida';
            //mensajeFinal.classList.add("green")
            mensajeFinal.style.color = "Green"
        } else {
            mensajeFinal.innerHTML = '<i class="fas fa-times-circle"></i> Ingresa un número de tarjeta válido';
            //mensajeFinal.classList.add("red")
            mensajeFinal.style.color = "Red"
        }
})
 
validationButton.addEventListener("click", hideNumber)
validationButton.addEventListener("click", hideInput)

/*function callNumber() {
    let cardNumber = document.getElementById('inCardNumber').value
    validator.isValid(cardNumber);
}*/

function hideNumber() {
    let otroCardNumber = document.getElementById('inCardNumber').value
    let callMaskify = validator.maskify(otroCardNumber);
    document.getElementById('maskify').innerHTML = callMaskify
}

function hideInput() {
    document.getElementById('inCardNumber').value = "";
}


