const menu = document.querySelector('.hamburguesa');
const navegacion = document.querySelector('.navegacion');
const imagenes = document.querySelectorAll('img');
const btnTodos = document.querySelector('.todos');
const btnEnsaladas = document.querySelector('.ensaladas');
const btnSushi = document.querySelector('.sushi');
const btnSopas = document.querySelector('.sopas');
const contenedorPlatillos = document.querySelector('.platillos');
const btnPostres = document.querySelector('.postres');
document.addEventListener('DOMContentLoaded',()=>{
    eventos();
    platillos();

});

const eventos = () =>{
    menu.addEventListener('click', abrirMenu);
}

const abrirMenu = () =>{
    navegacion.classList.remove('ocultar');
    botonCerrar();
}

const botonCerrar = () => {
    const btnCerrar = document.createElement('p');
    const overlay = document.createElement('div');
    overlay.classList.add('pantalla-completa');
    const body = document.querySelector('body');
    if(document.querySelectorAll('.pantalla-completa').length > 0) return;
    body.appendChild(overlay);
    btnCerrar.textContent = 'x';
    btnCerrar.classList.add('btn-cerrar');



    //while(navegacion.children[5]){
    //    navegacion.removeChild(navegacion.children[5])
    //}
    navegacion.appendChild(btnCerrar);
    cerrarMenu(btnCerrar, overlay);
    
}

const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry=>{
        if(entry.isIntersevting){
            const imagen = entry.target;
            imagen.src = imagen.dataset.src;
            observer.unobserve(imagen);

        }
    });
});

imagenes.forEach(imagen=>{


    observer.observe(imagen);
})

const cerrarMenu = (boton, overlay) =>{
    boton.addEventListener('click', ()=>{
        navegacion.classList.add('ocultar');
        overlay.remove();
        boton.remove();
    });

    overlay.onclick = function(){
        overlay.remove();
        navegacion.classList.add('ocultar');
        boton.remove(); 
    }
}

const platillos  = () =>{
    let platillosArreglo = [];
    const platillos = document.querySelectorAll('.platillo');
    
    platillos.forEach(platillo=> platillosArreglo = [...platillosArreglo,platillo]);

    const ensaladas = platillosArreglo.filter(ensalada=> ensalada.getAttribute('data-platillo')==='ensalada');
    const sushi = platillosArreglo.filter(sushi=> sushi.getAttribute('data-platillo')==='sushi');
    const sopas = platillosArreglo.filter(sopa=> sopa.getAttribute('data-platillo')==='sopa');
    const postres = platillosArreglo.filter(postre=> postre.getAttribute('data-platillo')==='postre');

    mostrarPlatillos(ensaladas, sushi, sopas, postres, platillosArreglo);
}

const mostrarPlatillos = (ensaladas, sushi, sopas, postres, todos) =>{
    btnEnsaladas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        ensaladas.forEach(ensalada=> contenedorPlatillos.appendChild(ensalada));
    })
    btnSushi.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        sushi.forEach(sushi=> contenedorPlatillos.appendChild(sushi));
    })
    btnSopas.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        sopas.forEach(sopa=> contenedorPlatillos.appendChild(sopa));
    })
    btnPostres.addEventListener('click', ()=>{
        limpiarHtml(contenedorPlatillos);
        postres.forEach(postre=> contenedorPlatillos.appendChild(postre));
    })
    btnTodos.addEventListener('click',()=>{
        limpiarHtml(contenedorPlatillos);
        todos.forEach(todo=> contenedorPlatillos.appendChild(todo));
    })
}

const limpiarHtml = (contenedor)=>{
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }

}