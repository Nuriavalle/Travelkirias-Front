let formulario = document.getElementById('formulario');


formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  console.clear();


  console.log(formulario)


  let usuario = document.getElementById("usuario").value;
  console.log("usuario", usuario);

  let contraseña = document.getElementById("contraseña").value;
  console.log("contraseña", contraseña);


  const hotel = {
    nombre: nombre,
    contraseña: contraseña
  };

});

//   console.log("Info hotel==>", hotel);