const procesarPago= document.getElementById('boton')
const inicio= document.getElementById('usuario')


procesarPago.addEventListener('click', ()=> {
fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((data) => {
           return data.json();
        })
        .then((res) =>{
        console.log(res);
        inicio.innerHTML =`
        <div class="container">

    <form action="">

        <div class="row">

            <div class="col">

                <h3 class="title">Dirección de envío</h3>

                <div class="inputBox">
                    <span>Nombre:</span>
                    <input type="text" value= "${res.name}" required>
                </div>
                
                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" value="${res.email}"required>
                </div>
                <div class="inputBox">
                    <span>Direccion :</span>
                    <input type="text" value="${res.address.street}"required>
                </div>
                <div class="inputBox">
                    <span>ciudad :</span>
                    <input type="text" value="${res.address.city}"required>
                </div>

                

            </div>

            <div class="col">

                <h3 class="title">Información de pago</h3>

                <div class="inputBox">
                    <span>Nombre del titular :</span>
                    <input type="text" value="${res.name}"required>
                </div>
                <div class="inputBox">
                    <span> Número de tarjeta de crédito:</span>
                    <input type="text" value="1111-2222-3333-4444" required>
                </div>
                <div class="inputBox">
                    <span>Mes de vencimiento :</span>
                    <input type="text" value="january"required>
                </div>

                <div class="flex">
                    <div class="inputBox">
                        <span> Año de vencimiento  :</span>
                        <input type="number" value="2025"required>
                    </div>
                    <div class="inputBox">
                        <span>CVV :</span>
                        <input type="password" value="123"required>
                    </div>
                </div>

            </div>
    
    
      
        <a href="./pagoExitoso.html" class="btn btn-info btn-block">Pagar</a>
        `
   
        })
        .catch ((error)=> {
           console.log(error);
        })

    })

    