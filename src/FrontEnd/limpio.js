// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

document.addEventListener('DOMContentLoaded', (evento) => {
    // evento.preventDefault();
    // getProductos();
    // putProducto();
});

const getProductos = async () => {
    //sdasd
    try {
        //!Api de practica 
        const respuesta = await axios.get('https://ventas-local-api.herokuapp.com/pedido');
        const data = respuesta.data;

        if (respuesta.status === 200) {
            let listaProducto = '';
            /*
            !Lo que voy a recibir de la API
            *Id_pedido
            *NombreProducto
            *Cantidad
            */

            data.forEach(producto => {
                listaProducto += `
            <table class="">
        </tr>
            <tbody class="">
                <tr class=" bg-lime-100">
                    <td class="p-3 text-semibol text-black ">${producto.id_pedido}</td>
                    <td class="p-3 text-semibol text-black ">${producto.nombreproducto} <input type="checkbox"  </td>
                    <td id="pendiente" class="p-3 text-semibol text-black ">${producto.cantidad}</td>
                    <td id="" class="p-3 text-semibol text-black ">${producto.estado_Pedido} <input type="checkbox" id="${producto.id_pedido}"   onclick="putProducto()"> </td>
                    
                </tr>
            </tbody>
        </table>
        
            `;



                document.getElementById('productos').innerHTML = listaProducto;


            });

            // const putDato2 = document.getElementById('putDato');
            // putDato2.addEventListener('click', putProducto);

            const post = async () => {
                await axios.post('https://api-produccion.herokuapp.com/api/pedido', {
                    id_pedido: data[data.length - 1].id_pedido,
                    nombreproducto: data[data.length - 1].nombreproducto,
                    cantidad: data[data.length - 1].cantidad,
                    estado: 'Pendiente'
                }, {
                    headers: {
                        'Content-Type': 'application/json'

                    }

                })
                    .then(response => {
                        console.log(response);
                        // alert('Pedido agregado');
                        // getProductos();
                    })
            }

            // console.log(data[0].id_pedido);
        }

    } catch (error) {
        console.log(error);
    }



    // getProductos();



}//!Fin getProductos

const prueba = () => {
    console.log('Hola')
}









// getProductos();



// const






// const putProducto = async () => {
//     console.log('hola me diste click putproducto')

//     try {
//         //!Api de practica

//         await axios.put(`https://api-produccion.herokuapp.com/api/actualizar/1944`, {
//             estado: 'dadada'

//         }), {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }


//         //


//     } catch (error) {
//         console.log(error);
//     }


// }