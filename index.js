fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const result = data.results[0]
    crarPefil(result)
    crearContacto(result)
  })
  .catch(error => {
    console.log(error)
  });

  const crarPefil = (user) => {
    const contenedorPerfil = document.querySelector('.perfil') 
    const nombre = document.createElement('h1')
    nombre.textContent = user.name.first + ' ' +user.name.last
    const edad = document.createElement('h2')
    edad.textContent = 'Edad: ' + user.dob.age
    const pais = document.createElement('h2')
    pais.textContent = 'País: ' + user.location.country
    const ciudad = document.createElement('h2')
    ciudad.textContent = 'Ciudad: ' + user.location.city
    
    const img = document.createElement('img')
    img.src  = user.picture.large;
    
    

    contenedorPerfil.appendChild(img)
    contenedorPerfil.appendChild(nombre)
    contenedorPerfil.appendChild(edad)
    contenedorPerfil.appendChild(pais)
    contenedorPerfil.appendChild(ciudad)

  }

  const crearContacto = (user) => {
    const contenedorContacto = document.querySelector('.informacion')
    const telefono = document.createElement('p')
    telefono.textContent = 'Teléfono: ' + user.phone
    const celular = document.createElement('p')
    celular.textContent = 'Celular: ' + user.cell
    const email = document.createElement('p')
    email.textContent = 'Celular: ' + user.email



    contenedorContacto.appendChild(telefono)
    contenedorContacto.appendChild(celular)
    contenedorContacto.appendChild(email)
  }

 