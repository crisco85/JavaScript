class Persona {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    mostrarNombre() {
      console.log(this.name);
    }
  }
  
  const baseDedatos = [];
  
  let inputValues = {
    nombre: '',
    email: ''
  };
  
  const capturarInputValue = evento => {
    // console.log(evento.target.value);
    // console.log(evento.target.name);
    inputValues = {
      ...inputValues,
      [evento.target.name]: evento.target.value
    };
  };
  
  const enviarBaseDeDatos = evento => {
    evento.preventDefault();
  
    const persona = new Persona(inputValues.nombre, inputValues['email']);
  
    persona.mostrarNombre();
  
    baseDedatos.push(persona);
  
    console.log(baseDedatos);
  };
  
  const inputNombre = document.querySelector('input[name="nombre"]');
  const inputEmail = document.querySelector('input[name="email"]');
  const btnEnviar = document.querySelector('.btn-enviar');
  
  inputNombre.addEventListener('input', capturarInputValue);
  inputEmail.addEventListener('input', capturarInputValue);
  btnEnviar.addEventListener('click', enviarBaseDeDatos);