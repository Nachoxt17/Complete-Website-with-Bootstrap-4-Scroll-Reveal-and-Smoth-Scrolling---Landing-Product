window.sr = ScrollReveal();
    /*Lo Siguiente servirá para que cuando la Página Web se Carge/Recarge cada Elemento tomado como 1er Argumento de la Función "sr.reveal()" Aparezca on una Animación "Emergente" Calmada, en vez de sólo 
    aparecer bruscamente.*/
    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'bottom'
    });
    sr.reveal('.header-content-left', {
        duration: 2000,
        origin: 'top',
        distance: '300px'
    });
    sr.reveal('.header-content-right', {
        duration: 2000,
        origin: 'right',
        distance: '300px'
    });
    sr.reveal('.header-btn', {
        duration: 2000,
        origin: 'bottom',
        delay: 1000
    });
    sr.reveal('#testimonial', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        viewFactor: 0.2
    });

    /*Smoth Scrolling.(Desplazamiento Suave desde las Opciones de la Navbar.)*/
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });