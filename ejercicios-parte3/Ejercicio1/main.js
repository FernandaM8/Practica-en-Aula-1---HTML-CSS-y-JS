/**
 * 
 * @param {string} number 
 */

function solution(number) {
  // Completar la función
  const app = document.getElementById("result"); // obtener el elemento donde se mostraran los resultados
  for (let i = 1; i <= number; i++) {
    let p = document.createElement("p"); // crear un elemento p
    if (i % 5 === 0 && i % 3 === 0) { // si el numero es divisible por 5 y 3
        p.classList.add("FizzBuzz") // agregar la clase FizzBuzz
      p.innerText = `FizzBuzz ${i}`; // mostrar el mensaje
    } else if (i % 5 === 0) { // si el numero es divisible por 5
        p.classList.add("Buzz") // agregar la clase Buzz
        p.innerText = `Buzz ${i}`; // mostrar el mensaje
    }else{ // si no es divisible por 5
        p.classList.add("Fizz") // agregar la clase Fizz
        p.innerText = `Fizz ${i}`; // mostrar el mensaje
    }
    app.appendChild(p) // agregar el elemento p al contenedor
  }
}


/**
 * 
 * @param {*} event 
 */
function eventHandler(event) {
  event.preventDefault();
  let number = document.getElementById("number").value;

  solution(number);
}

// tests
