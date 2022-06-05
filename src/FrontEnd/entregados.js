
// console.log('hola mundo')
const entregados = async () => {

    try {

        const response = await axios.get(`https://api-produccion.herokuapp.com/api/pedido`);
        const data = response.data;

        console.log(data);

        // data.forEach(element => {
          

        //     axios.put(`https://api-produccion.herokuapp.com/api/actualizar/${element.id_pedido}`, {
        //         estado: 'Entregado'
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

        // });
        

    } catch (error) {
        console.log(error);
    }

}

// entregados();