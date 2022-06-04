// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

const getProductos = async () => {

    try {

        const respuesta = await axios.get('https://ventas-local-api.herokuapp.com/pedido');
        const data = respuesta.data;
        console.log(data);

        if (respuesta.status === 200) {
            let listaProducto = '';


            data.forEach(producto => {


                if (data.estado_Pedido == 'Pendiente') {
                    console.log('pendiente');
                }
                listaProducto += `
            <table class="">
        </tr>
            <tbody>
                <tr class=" bg-lime-100">
                    <td class="p-3 text-semibol text-black ">${producto.id}</td>
                    <td class="p-3 text-semibol text-black ">${producto.cantidad}</td>
                    <td id="pendiente" class="p-3 text-semibol text-black ">${producto.estado_Pedido}</td>
                    
                </tr>
            </tbody>
        </table>
            `;

                document.getElementById('productos').innerHTML = listaProducto;

            });
        }


    } catch (error) {
        console.log(error);
    }

}

getProductos();


const postPedidos = async () => {

    const formulario  = document.getElementById('formulario');
    
    formulario.addEventListener('submit', async(evento) =>{
        evento.preventDefault();
        console.log('Hola me diste click')

        let cantidad = document.getElementById('cantidad').value;
        let precio = document.getElementById('precio').value;
        let estado_Pedido = document.getElementById('estado_Pedido').value;

        // let pedidosObj  = {
        //     cantidad: cantidad,
        //     precio: precio,
        //     estado_Pedido: estado_Pedido
        // }
        // let pedidoJson = JSON.stringify(pedidosObj);
        

        await axios.post('https://ventas-local-api.herokuapp.com/agregarPedido',{
            cantidad: cantidad,
            precio: precio,
            estado_Pedido: estado_Pedido,
        },{headers: {
            'Content-Type': 'application/json'

        }

        })
        .then(response => {
            console.log(response);
            // alert('Pedido agregado');
            // getProductos();
        })

    })
}

postPedidos();

// const 






