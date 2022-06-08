// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

document.addEventListener('DOMContentLoaded', (evento) => {
    // evento.preventDefault();
    // getProductos();
    // putProducto();
});

const getProductos = async () => {
    //sdasdasas
    try {
        //!Api de practica 
        const respuesta = await axios.get('https://ventas-local-api.herokuapp.com/pedido');
        const data = respuesta.data;
        // console.log(data[0].estado_Pedido === 'Pendiente');
        // console.log(data)
        // data.forEach(pedido => {
        //     console.log(pedido.estado_Pedido == 'Pendiente');
        //     // console.log('pendiente');
        // })
        // console.log(data[0].nombreproducto);

        // console.log(data[data.length - 1].nombreproducto);

        if (respuesta.status === 200) {
            let listaProducto = '';


            /*
            !Lo que voy a recibir de la API
            *Id_pedido
            *NombreProducto
            *Cantidad
            */
            const productosid = [data.length];
            const contador = 0;

            data.forEach(producto => {



                // if (data.estado_Pedido == 'Pendiente') {
                //     console.log('pendiente');
                // }


                const id = producto.id_pedido
                productosid[contador] = id;
                for (var i = 0; i < productosid.length; i++) {
                    if (id == productosid[i]) {
                        break;
                    } else {

                    }
                }
                console.log(id);
                if (data.estado_Pedido == 'Pendiente') {
                    console.log('pendiente');
                }




                listaProducto += `
            <table class="">
        </tr>
            <tbody class="">
                <tr class=" bg-lime-100">
                    <td class="p-3 text-semibol text-black ">${producto.id_pedido}</td>
                    <td class="p-3 text-semibol text-black ">${producto.nombreproducto} <input type="checkbox"  </td>
                    <td id="pendiente" class="p-3 text-semibol text-black ">${producto.cantidad}</td>
                    <td id="" class="p-3 text-semibol text-black ">${producto.estado_Pedido} <input type="checkbox" id="${producto.id_pedido}"   onclick="putProducto()"> </td>
                <td class="p-3 text-semibol text-black ">${producto.id_pedido}</td>
                <td class="p-3 text-semibol text-black ">${producto.nombreproducto} <input type="checkbox" name="" id="coso+${producto.id_pedido}"> <input type="checkbox" name="" id="${producto.id_pedido}"> <input type="checkbox" name="" id="${producto.id_pedido}"> <input type="checkbox" name="" id="${producto.id_pedido}">  </td>
                <td id="pendiente" class="p-3 text-semibol text-black ">${producto.cantidad}</td>
                `
                console.log(producto.id_pedido); `

                    
                </tr>
            </tbody>
        </table>
        
            `;



                document.getElementById('productos').innerHTML = listaProducto;


                // const listo = document.getElementById('ids');
                // listo.addEventListener('click', () => {
                //     console.log('Hola me diste click')
                // })

            });

            // console.log(data[0].id_pedido);
        }
        let test = data[data.length - 1].id_pedido;




        console.log(data[data.length - 1].nombreproducto);


        // const putProducto = async () => {

        //     try {
        //         //!Api de practica

        //         await axios.put(`https://api-produccion.herokuapp.com/api/actualizar/` + test, {
        //             estado: 'Listo'

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
        // putProducto();



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







        // })


    } catch (error) {
        console.log(error);
    }



    // getProductos();



}//!Fin getProductos

const prueba = () => {
    console.log('Hola')
}



const putProducto = async () => {
    console.log('hola me diste click putproducto')

    try {
        //!Api de practica

        await axios.put(`https://api-produccion.herokuapp.com/api/actualizar/1944`, {
            estado: 'Listo'

        }), {
            headers: {
                'Content-Type': 'application/json',
            }
        }


        //


    } catch (error) {
        console.log(error);
    }


}




const pruebaValidaciones = async () => {
    try {
        const respuesta = await axios.get('http://localhost:3001/Pruebas');
        const data = respuesta.data;

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


getProductos();

pruebaValidaciones();



// const 






