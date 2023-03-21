const volver= document.getElementById('boton')

volver.addEventListener('click', ()=> {
   location.href=".././index.html"  
})



window.addEventListener('load', ()=>{
    const contenedor_loader = document.querySelector('.contenedor-loader')
    contenedor_loader.style.visibility= 'hidden'
})

