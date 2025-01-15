document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const password = document.getElementById('password').value;
    const telefono = document.getElementById('telefono').value;
    const boleta = document.getElementById('boleta').value;
  
    // Validar longitud de contraseña
    if (password.length !== 8) {
        alert('La contraseña debe tener exactamente 8 caracteres.');
        return;
    }
  
  
    // Validar longitud de teléfono
    if (telefono.length !== 10) {
        alert('El teléfono debe tener exactamente 10 dígitos.');
        return;
    }
  
    // Validar longitud de boleta
    if (boleta.length !== 10) {
        alert('La boleta debe tener exactamente 10 dígitos.');
        return;
    }
  
    alert('Registro exitoso');
    // Aquí puedes agregar el código para enviar el formulario a un servidor o realizar más validaciones.
  });
  
  
  const navbar = document.querySelector('.navbar');
  
  // Función para ajustar la posición de la navbar
  function fixNavbar() {
    if (window.scrollY > 100) { // Ajusta el valor 100 según tus necesidades
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  }
  
  window.addEventListener('scroll', fixNavbar);