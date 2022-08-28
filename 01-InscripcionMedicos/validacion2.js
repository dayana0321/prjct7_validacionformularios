
console.log("estoy en el archivo validacion");
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("form").addEventListener('submit', validarFormulario); 
});


function validarFormulario(e) {    
  e.preventDefault();
  
  console.log("estoy en la funcion");
  let nombre = document.getElementById('nombre').value;
  let forms = document.querySelectorAll('.needs-validation')
  console.log(forms);
  console.log(nombre);

  if(nombre.length == 0 || nombre.length<2) {
    alert("Escriba el nombre correctamente");
    return;
  }

  let apellido = document.getElementById('apellido').value;

  if (apellido.length==0 || apellido.length< 2) {
    alert("Escriba el apellido correctamente");
    return;
  }

  Array.prototype.slice.call(forms)
  console.log("voy en el prototype");
    forms.forEach(function (form) {
      
        if (!form.checkValidity()) {
            e.preventDefault();
              e.stopPropagation()
              console.log("estoy en el if");
        }else{
          console.log("voy en el else");
            
          form.submit();
        }
        form.classList.add('was-validated')  
    })
  form.checkValidity()
}
