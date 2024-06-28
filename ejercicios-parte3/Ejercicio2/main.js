/**
 * 
 * @param {string} numeroInicial 
 * @param {string} numeroFinal 
 */

function solution(numeroInicial, numeroFinal){
    // Completar la función
    const init = Number(numeroInicial) // convertir los valores a numeros
    const final = Number(numeroFinal) // convertir los valores a numeros
    const numbers = Array.from({length: final - init +1}, (_, index)=> init+index) // rellenar el array con los numeros del rango
    const result = numbers.reduce((acc, current)=>{
        return acc + current
    }, 0)// sumar los numeros del array

    console.log(result); // mostrar el resultado en consola

}

/**
 * 
 * @param {*} event 
 */
function eventHandler(event){
    event.preventDefault();
    let numeroInicial = document.getElementById("numeroInicial").value;
    let numeroFinal = document.getElementById("numeroFinal").value;
    solution(numeroInicial, numeroFinal);
}