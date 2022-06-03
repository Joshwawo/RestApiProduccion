
const fetchPedidos = async() =>{

    const respuesta = await fetch('https://ventas-local-api.herokuapp.com/pedido');
    const data = await respuesta.json();
    console.log(data);

    

    let output = '';
    // let total = 'holas';

    


    data.forEach(producto => {

        const productos ={
            id: data.id_pedido,
            name: data.estado_Pedido,
            estado_Pedido:data.estado_Pedido
        }
        
    
        console.log(productos.estado_Pedido);

        if(data.estado_Pedido == 'Pendiente'){
            console.log('pendiente');
        }
        output += `
        <table class="">
        
        
    </tr>
        <tbody>
            <tr class=" bg-lime-100">
                <td class="p-3 text-semibol text-black ">${producto.id_pedido}</td>
                <td class="p-3 text-semibol text-black ">${producto.cantidad}</td>
                <td id="pendiente" class="p-3 text-semibol text-black ">${producto.estado_Pedido}</td>
                
            </tr>
        </tbody>
    </table>
        `;
    });

    data.forEach(producto => {
        // console.log(producto.estado_Pedido);
        if(producto.estado_Pedido == 'pendiente'){
            
            let pendiente  = document.getElementById('pendiente');
            // pendiente.classList.add('pendiente')

        }
        
        
    }); 

    document.getElementById('productos').innerHTML = output;

    // if(data.estado_Pedido == 'pendiente'){
    //     let pendiente = document.getElementById('pendiente');
    //     pendiente.classList.add('pendiente');
    // }
}

fetchPedidos();



/*
!Pruenbas

<td><input type="checkbox" name="name1" />&nbsp;</td>
<td><input type="checkbox" name="name2" />&nbsp;</td>


*/









// const ventasLocal = async () => {
//     //fetch a los datos de venta local
//     // console.log(pedidosJson)
//     const fetchdatos = document.getElementById('fetchdatos');

//     fetchdatos.addEventListener('submit', async (evento) => {
//         evento.preventDefault();
//         fetchPost();
//         console.log('hola')
//     })

    

//     const fetchPost = async () => {

//         const response = await fetch('https://ventas-local-api.herokuapp.com/pedido');
//         const data = await response.json();
//         console.log(data);

//         let pedidosObj = {
//             id_pedido: data.id_pedido,
//             nombreProducto: data.nombreProducto,
//             cantidad: data.cantidad
//         }
//         let pedidosJson = JSON.stringify(pedidosObj);

//         await fetch('http://localhost:3001/api/pedido', {
//             method: 'POST',
//             body: pedidosJson,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//             .then(res => console.log(res))
//     }


// }





// ventasLocal();