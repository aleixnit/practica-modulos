/**
 *  Un endpoint que cuando le hacen un get devolvemos un número aleatorio,
 * le puedes pasar dos numeros para que te calcule el numero aleatorio en dicho interval ----> (1,10) , quiero un numero
 * aleatorio entre 1 y 10.
 * 
 * Vamos a instalar un móduclo o biblioteca de terceros (externa)
 */

// Load Chance
import { Chance } from 'chance'
// Instantiate Chance so it can be used
var chance = new Chance();

console.log(chance.integer({min: 1, max: 10}))