// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

const getProductos = async () => {
    //sdasd
    try {
        //!Api de practica 
        const respuesta = await axios.get('https://ventas-local-api.herokuapp.com/pedido');
        const data = respuesta.data;
        
        console.log(data[0].nombreproducto);





        if (respuesta.status === 200) {
            let listaProducto = '';

            /*
            !Lo que voy a recibir de la API
            *Id_pedido
            *NombreProducto
            *Cantidad
            */

            data.forEach(producto => {


                if (data.estado_Pedido == 'Pendiente') {
                    console.log('pendiente');
                }
                listaProducto += `
            <table class="">
        </tr>
            <tbody class="">
                <tr class=" bg-lime-100">
                    <td class="p-3 text-semibol text-black ">${producto.id_pedido}</td>
                    <td class="p-3 text-semibol text-black ">${producto.nombreproducto} <input type="checkbox" name="" id="${producto.id_pedido}"></td>
                    <td id="pendiente" class="p-3 text-semibol text-black ">${producto.cantidad}</td>
                    
                </tr>
            </tbody>
        </table>
        
            `;

                document.getElementById('productos').innerHTML = listaProducto;

                const listo = document.getElementById(producto.id_pedido);
                listo.addEventListener('click', () => {
                    console.log('Hola me diste click')
                })

            });

            console.log(data[0].id_pedido);
        }

        // const formulario = document.getElementById('formulario');


        // evento.preventDefault();
        // console.log('Hola me diste click')
        // console.log(data);
        // let cantidad = document.getElementById('cantidad').value;
        // let precio = document.getElementById('precio').value;
        // let estado_Pedido = document.getElementById('estado_Pedido').value;

        // await data.forEach(producto => {
        //     console.log(producto.id_pedido);



        //     axios.post('https://api-produccion.herokuapp.com/api/pedido', {
        //         id_pedido: producto.id_pedido,
        //         nombreproducto: producto.nombreproducto,
        //         cantidad: producto.cantidad,
        //     }, {
        //         headers: {
        //             'Content-Type': 'application/json'

        //         }

        //     })
        //         .then(response => {
        //             console.log(response);
        //             // alert('Pedido agregado');
        //             // getProductos();
        //         })


        // })





    } catch (error) {
        console.log(error);
    }


    // getProductos();



}

getProductos();



// const 






