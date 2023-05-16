/* Vamos a crear una api que va a adevolver el nombre de un gato cada vez que nos hagan un get a /nuestrodominio/dame-gato. */ 

// Utilizamos import para importar una función o variable ubicada en otro fichero.

import getRandomItem from "./utils/random.js";
import perros from "./utils/datos.js";

let gatos = ['Loki', 'Bigotes', 'Sardinitas', 'Valdir'];
console.log(getRandomItem(gatos));




