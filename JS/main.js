/* Cotizador de presupuesto para viajeros */

let mNombre = prompt("Buenos dias viajero, cual es tu nombre?")
let mEdad = Number(prompt("Cual es tu edad? "))

SaludarViajero();

let mContinente = prompt("Cual es el principal continente en el cual esta interesado en viajar? (Europa / America / Asia / Africa / Oceania)");

Presupuesto(mNombre, mContinente);


/*Funciones */
function SaludarViajero()
{
    alert("Bienvenido " + mNombre);
    alert("Los " + mEdad + " años, son la edad ideal para conocer nuestro planeta");
}

function Presupuesto(mNombre, mContinente)
{
    let mMsg =  mNombre + " Te vamos a ayudar a armar un presupuesto básico para ayayudar a orgaizar tu viaje a " + mContinente;
    alert(mMsg);
}

