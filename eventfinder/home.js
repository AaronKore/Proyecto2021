
//MENU HAMBURGUESA
const iconMenu = document.querySelector('#hambuerguesa'), 
    menu = document.querySelector('#menu');
     
    iconMenu.addEventListener('click', (e) => {
        /*alternar estilos para menu y body*/
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');

        /*alternar atributo src para icono menu*/
        const rutaActual = e.target.getAttribute('src');

        if(rutaActual == './img/menu.png'){
            e.target.setAttribute('scr', './img/menu.png')
        }else{
            e.target.setAttribute('scr', './img/menu.png')
        }
    }) 
    //MENU HAMBURGUESA