

const fetchLocal =  async() => {

    const response = await fetch('https://solicitud-de-pedido.herokuapp.com/api/pedidos/');
    const data = await response.json();
    console.log(data);

    console.log(data.pedidos);

}

fetchLocal();