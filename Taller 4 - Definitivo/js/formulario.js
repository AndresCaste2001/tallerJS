const NameField = document.querySelector("[name=nombre]");
const UserNameField = document.querySelector("[name=Usuario]");
const ApellidoField = document.querySelector("[name=Apellido]");
const DireccionField = document.querySelector("[name=Direccion]");
const TelefonoNameField = document.querySelector("[name=Telefono]");
const EmailField = document.querySelector("[name=email]");
const PasswordField = document.querySelector("[name=password]");
const PasswordField2 = document.querySelector("[name=confirmPassword]");

const ValidateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
 
    if (fieldValue.trim().length === 0){
      field.classList.add("invalid");
      field.classList.remove("valid");
      field.nextElementSibling.classList.add("error");
      field.nextElementSibling.innerText = message;
    }else{
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove("error");
        field.nextElementSibling.innerText = "";
    }
}

const ValidateEmailField = (message, expresion, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regrex = new RegExp(expresion);

  if (fieldValue.trim().length > 5 & !regrex.test(fieldValue)){
    field.classList.add("invalid");
    field.classList.remove("valid")
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  }else{
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
  }
  
}

const ValidateField = (message, expresion, e) => {
  const field = e.target;
  const fieldValue = e.target.value;
  const regrex = new RegExp(expresion);

  if (fieldValue.trim().length > 0 & !regrex.test(fieldValue)){
    field.classList.add("invalid");
    field.classList.remove("valid")
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;

  }else{
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
    }
}

/* const ValidateLongitudMinima = (message, numero_minimo, e) =>{
  const field = e.target;
  const fieldValue = e.target.value;

  if (fieldValue.trim().length < numero_minimo){
    field.classList.add("invalid");
    field.classList.remove("valid")
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message + " tiene que ser mayor a " + numero_minimo;

  }else{
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
    }
} */


const ValidarContrasena = (message, e) =>{
  const field = e.target;
  inputContrasena1 = document.getElementById("password");
  inputContrasena2 = document.getElementById("confirmPassword");

  if(inputContrasena1.value === inputContrasena2.value){
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
      
  }else{
    field.classList.add("invalid");
    field.classList.remove("valid");
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message;
  }
}

/*const ValidateLongitudMaxima = (message, numero_maximo, e) =>{
  const field = e.target;
  var fieldValue = e.target.value;

  if (fieldValue.trim().length > numero_maximo){
    field.classList.add("invalid");
    field.classList.remove("valid")
    field.nextElementSibling.classList.add("error");
    field.nextElementSibling.innerText = message + " tiene que ser menor a " + numero_maximo;

  }else{
      field.classList.remove("invalid");
      field.nextElementSibling.classList.remove("error");
      field.classList.add("valid");
      field.nextElementSibling.innerText = "";
    }
} */

/* Verificar si el campo esta vacio */
NameField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu nombre", e));
ApellidoField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu apellido", e));
DireccionField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu direccion", e));
TelefonoNameField.addEventListener("blur", (e) => ValidateEmptyField("Digita tu telefono", e));
EmailField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu correo", e));
UserNameField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu usuario", e));
PasswordField.addEventListener("blur", (e) => ValidateEmptyField("Escribe tu contraseña", e));
PasswordField2.addEventListener("blur", (e) => ValidateEmptyField("Debe validar la contraseña", e))

/* Verificar si los campos se llenaron corractamente */
NameField.addEventListener("input", (e) => ValidateField("Solo se admiten letras",  /^[A-Za-z]+$/ ,e));
ApellidoField.addEventListener("input", (e) => ValidateField("Solo se admiten letras",  /^[a-zA-Zá-úüÜ]+$/ ,e));
DireccionField.addEventListener("input", (e) => ValidateField("La direccion debe comenzar con: cll, cra, av, anv o trans",  
/^(cll|cra|av|anv|trans)[\w\s!@#$%^&*()\-+=\\\/.,;?'":<>]+$/i ,e));
UserNameField.addEventListener("input", (e) => ValidateField("Solo se admiten letras y números",  
/^[a-zA-Z0-9]+$/ ,e));
TelefonoNameField.addEventListener("input", (e) => ValidateField("Solo se admiten números",  /^[0-9]+$/  ,e))
PasswordField.addEventListener("input", (e) => ValidateField("La contraseña debe contener, por lo menos, una mayuscula, un número y uno de estos caracteres: #,%,/,&",  
/^(?=.*[A-Z])(?=.*\d)(?=.*[#%&/])[A-Za-z\d#%&/]+$/  ,e))
EmailField.addEventListener("input", (e) => ValidateEmailField("Escribe un correo valido", /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ ,e));

/* Verificar si las contraseñas coinciden */
PasswordField2.addEventListener("input", (e) => ValidarContrasena("Las contraseñas no coinciden", e));



/* Verificar el tamano minimo*//*
UserNameField.addEventListener("input", (e) => ValidateLongitudMinima("El usuario", 10, e));
PasswordField.addEventListener("input", (e) => ValidateLongitudMinima("La contraseña", 15, e)) */


/* Verificar el tamano maximo
NameField.addEventListener("input", (e) => ValidateLongitudMaxima("El nombre", 25, e));
ApellidoField.addEventListener("input", (e) => ValidateLongitudMaxima("El apellido", 25, e));
EmailField.addEventListener("input", (e) => ValidateLongitudMaxima("El correo", 120, e));
UserNameField.addEventListener("input", (e) => ValidateLongitudMaxima("El usuario", 20, e));
PasswordField.addEventListener("input", (e) => ValidateLongitudMaxima("La contraseña", 20, e));
PasswordField2.addEventListener("input", (e) => ValidateLongitudMaxima("La contraseña", 20, e));*/


// Obtener el elemento de rango y el elemento de salida
var rango = document.getElementById("rango");
var valor = document.getElementById("valor");

// Mostrar el valor actual del rango en el elemento de salida
rango.addEventListener("input", function() {
  
  if(rango.value < 10000)
  {
    valor.textContent = "Aprox: " + rango.value + " dólares";
  }else
  {
    valor.textContent = "Más de " + rango.value + " dólares";
  }

  if(rango.value < 1){
    valor.textContent = "Nada, lo quiero gratis."
  }
})
