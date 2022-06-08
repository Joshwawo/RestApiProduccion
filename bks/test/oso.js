const hola = async () => {


    try {
        const respuesta = await axios.get('https://cafe-deer-online.herokuapp.com/api/orders/produccion');
        const data = respuesta.data;
        console.log(data)
    } catch (error) {
        console.log(error)

    }


}

hola();



if(data.estado == 'ok'){
    const respuesta = await axios.get('https://api-produccion.herokuapp.com/api/online/productos');
    const data = respuesta.data;
    console.log(data)
    const productos = data.productos;
    console.log(productos)
    const productosHTML = productos.map(producto => {
        const {id, name, price, quantity, total} = producto;
        return `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${total}</td>
            </tr>
        `
    }).join('');
    document.getElementById('productos').innerHTML = productosHTML;
}

