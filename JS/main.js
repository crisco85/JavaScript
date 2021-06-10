/* Cotizador de presupuesto para viajeros */

let mNombre = prompt("Buenos dias viajero, cual es tu nombre?")
let mEdad = Number(prompt("Cual es tu edad? "))

SaludarViajero();

let mContinente = prompt("Cual es el principal continente en el cual esta interesado en viajar? (Europa / America / Asia / Africa / Oceania)");

Mensaje(mNombre, mContinente);

let mCantidadDias = Number(prompt("De cuantos dias seria tu viaje? "));  
let mTipoTranporte = prompt("Cual seria tu principal medio de transporte? (Omnibus, Metro, Taxi/Uber)");
let mTipoHotel = prompt("En que tipo de alojamiento tenes pensado quedarte en estos días? (Hotel/Hostel/Otro");


Calculadora(mCantidadDias);


/*Funciones */
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

       /*switch(mTipoAlojamiento)
        {
            case "Hotel":
                    mContador = mContador +  25

            case "Hostel":
                    mContador = mContador + 15
                

            case "Otro":
                    mContador =  mContador + 10
        }*/
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

        /*switch(mTipoAlojamiento)
        {
            case "Hotel":
                    mContador = mContador +  25

            case "Hostel":
                    mContador = mContador +  15

            case "Otro":
                    mContador = mContador +  10
                break
        }*/
    }

    mContador = mContador * mCantidadDias;

    alert("El Costo aproximado de tu viaje seria :" + mContador.toString());
}

