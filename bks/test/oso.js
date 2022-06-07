const hola = async () => {

    // const respuesta = await fetch('https://cafe-deer-online.herokuapp.com/api/orders')
    // const data = await respuesta.json()
    // console.log(data)

    // try {
        const respuesta = await axios.get('https://cafe-deer-online.herokuapp.com/api/orders/produccion');
        const data = respuesta.data;
        console.log(data)
    // } catch (error) {
    //     // console.log(error)

    // }


}

hola();