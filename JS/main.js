
/*Funciones */


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

//localStorage.clear();

//#region Funciones

function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}

function saveInLocalStorage(key,item){
    let stringfieldItem = JSON.stringify(item)
    localStorage.setItem(key,stringfieldItem)
}

function Saludo(){
    const pruebaDiv = document.getElementById('prueba');

    users.forEach(user => {
    pruebaDiv.innerHTML = `${pruebaDiv.innerHTML}
                        <h3> Bienvenido!!!!!!</h3>
                        <h3> Nombre: ${user.nombre}</h3>
                        <h3> Apellido: ${user.apellido}</h3>
                        <h3> Te vamos a ayudar para que conozca el presupuesta estimados que deberias considerar para tus proximas vacaciones,
                        por favor, completa los siguientes datos;</h3>
                        <h3> ***********</h3>`
    }) 
}

function Limpiar(){
    const divbuttonlimpiar = document.getElementById('buttonlimpiar');
    divbuttonlimpiar.innerHTML = `<button id="limpiar">Limpiar Consulta</button>`
}

function ValorizarEntidad(e){
    console.log(e.target.value)
}


//#region 


let users = [];
users = getLocalStorage('users') || []
console.log(users);

let nombre = document.querySelector('#nombre')
nombre.addEventListener('change', ValorizarEntidad)

let apellido = document.querySelector('#apellido')
apellido.addEventListener('change', ValorizarEntidad)

let edad = document.querySelector('#edad')
edad.addEventListener('change', ValorizarEntidad)

let dni = document.querySelector('#dni')
edad.addEventListener('change', ValorizarEntidad)

let pais = document.querySelector('#pais')
edad.addEventListener('change', ValorizarEntidad)

let btnCargar = document.querySelector('#buttoncargar')

class Persona {
    constructor(nombre, apellido, edad, dni, pais) {
        this.nombre = nombre.value;
        this.apellido = apellido.value;
        this.edad = edad.value;
        this.dni = dni.value;
        this.pais = pais.value;
    }
}

//#region Eventos

btnCargar.addEventListener('click', function(event)
    {
        event.preventDefault()

        const mPersona = new Persona(nombre, apellido, edad, dni, pais)

        users.push(mPersona)
        saveInLocalStorage('users', users)

        Saludo()

        Limpiar();

        btnCargar.remove();
    }
)

let btnLimpiarConsulta = document.querySelector('#buttonlimpiar')

btnLimpiarConsulta.addEventListener('click', function()
    {
        /* event.preventDefault() */
        localStorage.clear()
    }
)


//#endregion


/* Desafio - INCORPORAR JQUERY AL PROYECTO */ 

class Viaje {
    /* constructor(continente, paisdestino, ciudad, cant_dias) {
        this.continente = continente.value;
        this.paisdestino = paisdestino.value;
        this.ciudad = ciudad.value;
        this.cant_dias = cant_dias.value;
    } */

    constructor(nviaje, continente, paisdestino, ciudad, cant_dias, precio) {
        this.nviaje = nviaje.value;
        this.continente = continente.value;
        this.paisdestino = paisdestino.value;
        this.ciudad = ciudad.value;
        this.cant_dias = cant_dias.value;
        this.precio = precio;
    }

    /* getnViaje = function () {
        return this.nviaje
    }

    getTotal = function (cant_dias) {
        return this.precio * cant_dias
    }

    getCotizacion = function (cant_dias) {
        return {
            viaje: this,
            pasajeros: cant_dias,
            cotizacion: this.getTotal(cant_dias)
        }
    }

    addToCotizador = function (cant_dias) {
        mCotizador.push(this.getCotizacion(cant_dias))
    } */
}

let viajes = [];
viajes = getLocalStorage('viajes') || []
console.log(viajes);

/* let mCotizador = []
mCotizador = getLocalStorage('mCotizador') || []
console.log(mCotizador); */

let nviaje = document.querySelector('#nroviaje')
nviaje.addEventListener('change', ValorizarEntidad)

/* let continente = $('#continente').on('change', ValorizarEntidad) */

let continente = document.querySelector('#continente')
continente.addEventListener('change', ValorizarEntidad)

let paisdestino = document.querySelector('#paisdestino')
paisdestino.addEventListener('change', ValorizarEntidad)

let ciudad = document.querySelector('#ciudad')
ciudad.addEventListener('change', ValorizarEntidad)

let cant_dias = document.querySelector('#cant_dias')
cant_dias.addEventListener('change', ValorizarEntidad)

let precio = 10
console.log(precio)



/* function CalcularPrecio(){
    
    precio = 1000 * cant_dias
}
 */
   


/* $("#buttonmostrar").on('click', CargarViaje) */

let btnMostrar = document.querySelector('#buttonmostrar')


btnMostrar.addEventListener('click', function(event)
    {
        event.preventDefault()

        const mViaje = new Viaje(nviaje, continente, paisdestino, ciudad, cant_dias, precio)

        viajes.push(mViaje)
        saveInLocalStorage('viajes', viajes)

    }
)


function CargarViaje(e){
    e.preventDefault()

    const mViaje = new Viaje(nviaje, continente, paisdestino, ciudad, cant_dias)

    viajes.push(mViaje)
    saveInLocalStorage('viajes', viajes)
    /* viajes.forEach(viajes =>{
        viajes.addToCotizador(mCant_dias)
        console.log(mCotizador);
                        
        let nuevoArrayViajes = viajes.map(viaje => {                
                            return viaje
                        })
                        
        console.log(nuevoArrayViajes)
    }) */

    /* console.log(this);
    $("#jQuery").append(`<div><h4>Continente: ${mViaje.Continente.value}</h4>
                        
                        <h4>  Ciudad: ${mCiudad.value}</h4>
                        <h4> Cant. de Dias : $ ${mCant_dias.value}</h4>
                        </div>`)
  */

    $("#nuestromundo").append(`<h2>Nuestro Mundo</h2>`)

    /* Desafio - AJAX EN TU PROYECTO */ 
    /* $.ajax({
        method: 'GET',
        url: '../JSON/data.json'
        }).done((data)=> {
            console.log(data);
            GenerarMapa(data)
        }).fail((error)=> {
            console.log(error);
        }).always(()=> {
            console.log('imagenes cargadas');
        }); */
}

/************* */ 
/* Desafio - AJAX EN TU PROYECTO */ 

function GenerarMapa(data){
    console.log(data);

    const divAjaxMapa = $('#AjaxMapa');
    $(data).each( function(index, tierra) {
        divAjaxMapa.append(`
        <div class="col" style="width: 40rem;">
        <h4><strong>${tierra.Nombre}</h4>
        <img class="card-img-top" src="${tierra.Mapa}" alt="Card image cap">
        </div>` 
        )
    })
}



{/* <div class="col" style="width: 40rem;">
        <h4><strong>${continente.Continente}</h4>
        <img class="card-img-top" src="${continente.Mapa}" alt="Card image cap">
        </div> */}

/**************/


/* ANIMACIONES Y TRANSICIONES */ 

$("#cotizador").on('click', e => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#formulario").offset().top

    }, 250)
})

$("#ciudadesimperdibles").on('click', e => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#imperdibles").offset().top

    }, 500)
})

$("#experienciascompartidas").on('click', e => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#experiencias").offset().top

    }, 500)
})

/**************/