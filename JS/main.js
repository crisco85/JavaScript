/* Cotizador de presupuesto para viajeros */
/*
let mNombre = prompt("Buenos dias viajero, cual es tu nombre?")
let mEdad = Number(prompt("Cual es tu edad? "))

SaludarViajero();

let mContinente = prompt("Cual es el principal continente en el cual esta interesado en viajar? (Europa / America / Asia / Africa / Oceania)");

Mensaje(mNombre, mContinente);

let mCantidadDias = Number(prompt("De cuantos dias seria tu viaje? "));  
let mTipoTranporte = prompt("Cual seria tu principal medio de transporte? (Omnibus, Metro, Taxi/Uber)");
let mTipoHotel = prompt("En que tipo de alojamiento tenes pensado quedarte en estos días? (Hotel/Hostel/Otro");
*/

//Calculadora(mCantidadDias);


/*Funciones */
/*
function SaludarViajero()
{
    alert("Bienvenido " + mNombre);
    alert("Los " + mEdad + " años, son la edad ideal para conocer nuestro planeta");
}

function Mensaje(mNombre, mContinente)
{
    let mMsg =  mNombre + " Te vamos a ayudar a armar un presupuesto básico para orgaizar tu viaje a " + mContinente;
    alert(mMsg);
}
*/

/* 
function Calculadora(mCantidadDias)
{
    let mContador = 0;

    if (mTipoTranporte === "Omnibus" || mTipoTranporte === "omnibus" || mTipoTranporte === "Metro" || mTipoTranporte === "metro" )
    {
        mContador = mContador + 10;

        if (mTipoHotel === "Hotel")
        {
            mContador = mContador +  25;
        }
        else if (mTipoHotel === "Hostel")
        {
            mContador = mContador + 15;
        }
        else
        {
            mContador =  mContador + 10;
        }

    }
    else
    {
        mContador = mContador +  25;

        if (mTipoHotel === "Hotel")
        {
            mContador = mContador +  25;
        }
        else if (mTipoHotel === "Hostel")
        {
            mContador = mContador + 15;
        }
        else
        {
            mContador =  mContador + 10;
        }

        
    }

    mContador = mContador * mCantidadDias;

    alert("El Costo aproximado de tu viaje seria :" + mContador.toString());
}
 */
/* 
let mNombre = prompt("Buenos dias viajero, cual es tu nombre?")
let mApellido = prompt("Cual es tu apellido?")
let mEdad = Number(prompt("Cual es tu edad? "))

class Persona {
    constructor(pNombre, pApellido, pEdad) {
        this.Nombre = pNombre;
        this.Apellido = pApellido
        this.Edad = pEdad
    }
    
        SaludarViajero = function (pNombre, pEdad) {
            alert("Bienvenido " + pNombre);
            alert("Los " + pEdad + " años, son la edad ideal para conocer nuestro planeta");
        }
    
        Mensaje = function (pNombre) {
            let mMsg =  pNombre + " Te vamos a ayudar a armar un presupuesto básico para orgaizar tu viaje";
            alert(mMsg);
            }
    }

const mPersona = new Persona(mNombre, mApellido, mEdad);
mPersona.SaludarViajero(mNombre, mEdad);
mPersona.Mensaje(mNombre);


let mCotizador = []

class Viaje {
    constructor(pId, pDestino, pCantidad, pPrecio) {
        this.Id = pId;
        this.Destino = pDestino;
        this.Cantidad = pCantidad;
        this.Precio = pPrecio;
    }

    getId = function () {
        return this.Id
    }

    getTotal = function (pCantidad) {
        return this.Precio * pCantidad
    }

    getCotizacion = function (pCantidad) {
        return {
            viaje: this,
            pasajeros: pCantidad,
            cotizacion: this.getTotal(pCantidad)
        }
    }

    addToCotizador = function (pCantidad) {
        mCotizador.push(this.getCotizacion(pCantidad))
    }
}

let mId = Number(prompt("Por favor ingrese un nro para registrar la cotización de su viaje: "));
let mDestino = prompt("Ingreso su destino: ");
let mCantidad = Number(prompt("Ingrese la cantidad de pasajeros"));

const mViaje1 = new Viaje(mId, mDestino, mCantidad, 5000)

let mId2 = Number(prompt("Por favor ingrese un nro para registrar la cotización de su viaje 2: "));
let mDestino2 = prompt("Ingreso su destino2: ");
let mCantidad2 = Number(prompt("Ingrese la cantidad de pasajeros para este viaje: "));

const mViaje2 = new Viaje(mId2, mDestino2, mCantidad2, 3000);


let viajes = [mViaje1, mViaje2];

console.log(mCotizador);
mViaje1.addToCotizador(mCantidad);
console.log(mCotizador);
mViaje2.addToCotizador(mCantidad2);

let nuevoArrayViajes = viajes.map(viaje => {

    return viaje
})

console.log(nuevoArrayViajes);
 */


/**+++++++++++++++++++++++++++++++++++++++++++++++++++++*/

let mNombre = document.querySelector('#nombre')
    mNombre.addEventListener('keyup', function() 
    {
        console.log(mNombre.value)
    })

let mApellido = document.querySelector('#apellido')
    mApellido.addEventListener('keyup', function() 
    {
        console.log(mApellido.value)
    })

let mEdad = document.querySelector('#edad')
    mEdad.addEventListener('keyup', function() 
    {
        console.log(mEdad.value)
    })

let btnCargar = document.querySelector('button');

btnCargar.addEventListener('click', function(event)
    {
        event.preventDefault()
    }
)