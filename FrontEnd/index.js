

const ventasLocal = async () => {
    //fetch a los datos de venta local
    // console.log(pedidosJson)
    const fetchdatos = document.getElementById('fetchdatos');

    fetchdatos.addEventListener('submit', async (evento) => {
        evento.preventDefault();
        fetchPost();
        console.log('hola')
    })
    const fetchPost = async () => {

        const response = await fetch('https://ventas-local-api.herokuapp.com/pedido');
        const data = await response.json();
        console.log(data);

        let pedidosObj = {
            id_pedido: data.id_pedido,
            nombreProducto: data.nombreProducto,
            cantidad: data.cantidad
        }
        let pedidosJson = JSON.stringify(pedidosObj);

        await fetch('http://localhost:3001/api/pedido', {
            method: 'POST',
            body: pedidosJson,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
    }


}





ventasLocal();