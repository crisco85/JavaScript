
///Funciones *********////

function getLocalStorage(key){
    return JSON.parse(localStorage.getItem(key))
}

function saveInLocalStorage(key,item){
    let stringfieldItem = JSON.stringify(item)
    localStorage.setItem(key,stringfieldItem)
}

function Saludo(){
    const pruebaDiv = document.getElementById('saludo');

    users.forEach(user => {
    pruebaDiv.innerHTML = `${pruebaDiv.innerHTML}
                        <h3> Bienvenido/a!!!!!! ${user.nombre}, ${user.apellido} </h3>
                        
                        <div><p> Te vamos a ayudar para que conozcas algunos presupuestos estimados para tus proximas vacaciones,
                        por favor, presiona el siguiente boton</p></div>
                        <p> ***********</p>`
    }) 
}

function Recomendaciones(){
    const recomendacionesDiv = document.getElementById('buttonrecomendaciones');
    recomendacionesDiv.innerHTML = `<button id="recomendados">Mostrar Recomendaciones</button>`
}


function Limpiar(){
    const divbuttonlimpiar = document.getElementById('buttonlimpiar');
    divbuttonlimpiar.innerHTML = `<button id="limpiar">Limpiar Consulta</button>`
}

function ValorizarEntidad(e){
    console.log(e.target.value)
}

function renderizarRecomendacionesHTML(recomendaciones) {
	listaRecomenaciones.innerHTML = '';
	recomendaciones.forEach(recomendacion => {
		const { destino, imagen, descripcion, precio, id } = recomendacion;

		$("#lista-recomendaciones").append(
			`
				<div class="card">
					<img src="${imagen}" class="imagen-destino">

					<div class="info-card">
						<h4><strong>Destino recomendado: ${destino}</h4>
                        <div></div>
                        <p><strong>Breve descripción:  ${descripcion}</p>
                        <div></div>
						<p class="precio"><strong>Precio estimado por persona: ${precio}</p>
					</div>
				</div>
				`
		);
	});
}


///******************************////


///Clases, constantes, array, selectores *********////

class Persona {
    constructor(nombre, apellido, edad, dni, pais) {
        this.nombre = nombre.value;
        this.apellido = apellido.value;
        this.edad = edad.value;
        this.dni = dni.value;
        this.pais = pais.value;
    }
}


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

let btnLimpiarConsulta = document.querySelector('#buttonlimpiar')

const listaRecomenaciones = document.querySelector('#lista-recomendaciones');

///******************************////


///Eventos *********////

btnCargar.addEventListener('click', function(event)
    {
        const mPersona = new Persona(nombre, apellido, edad, dni, pais)

        if ( mPersona.nombre != "")
        {
            event.preventDefault()

            users.push(mPersona)
            saveInLocalStorage('users', users)

            Saludo()

            Recomendaciones()

            btnCargar.remove();

            Limpiar();
        }
        else
        {
            localStorage.clear()
            return window.alert("Por favor, completa tu nombre y apellido para poder ayudarte");
            
        }
    }
)


btnLimpiarConsulta.addEventListener('click', function()
    {
        /* event.preventDefault() */
        localStorage.clear()
    }
)


let btnMostrarRecomendaciones= document.querySelector('#buttonrecomendaciones')

btnMostrarRecomendaciones.addEventListener('click', function()
    {
        $.ajax({
            method: 'GET',
            url: '../JSON/data.json'
            }).done((data)=> {
                console.log(data);
                renderizarRecomendacionesHTML(data)
            }).fail((error)=> {
                console.log(error);
            }).always(()=> {
                console.log('imagenes cargadas');
            }); 

            btnMostrarRecomendaciones.remove();
       
    }
)


///******************************////




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

    }, 300)
})

$("#experienciascompartidas").on('click', e => {
    e.preventDefault();

    $("html, body").animate({
        scrollTop: $("#experiencias").offset().top

    }, 300)
})


///******************************////
