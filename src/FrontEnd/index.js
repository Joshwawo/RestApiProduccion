
const fetchPedidos = async() =>{

    const respuesta = await fetch('https://ventas-local-api.herokuapp.com/pedido');
    const data = await respuesta.json();
    console.log(data);

    

    let output = '';
    let output2 = '';
    // let total = 'holas';

    


    data.forEach(producto => {

        // const productos ={
        //     id: data.id_pedido,
        //     name: data.estado_Pedido,
        //     estado_Pedido:data.estado_Pedido
        // }
        
    
        console.log(producto.estado_Pedido);

        if(data.estado_Pedido == 'Pendiente'){
            console.log('pendiente');
        }
        output += `
        
        <div id="card">
        <div class="flex items-center justify-start py-4  px-4">
        <div class="md:w-96 rounded-md shadow-lg p-5 dark:bg-gray-800 bg-white">
            <h1 class="pt-2 pb-7 text-gray-800 dark:text-gray-100 font-bold text-lg">Pedido</h1>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg1.svg" alt="cart" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 ">
                        <p class=" text-sm font-medium pl-3">ID: ${producto.id_pedido} </p>
                    </a>
                </div>
                <p class="text-sm font-medium text-indigo-700"> </p>
            </div>
            <div class="flex items-center justify-between pt-5">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg2.svg" alt="message" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 ">
                        <p class=" text-sm font-medium pl-3">Nombre Producto </p>
                        <p class=" px-2.5">Comida <span>(${producto.cantidad})</span></p>
                        
                                
                    </a>
                </div>
            </div>
            <div class="flex items-center justify-between pt-5">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg1.svg" alt="cart" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-400">
                        <!-- <p class=" text-sm font-medium pl-3">Cantidad <span class="bg-yellow-400 text-red-700 "></span></p> -->
                    </a>
                </div>
                <!-- <p class="text-sm font-medium text-indigo-700">$205</p> -->
            </div>
            <div class="flex items-center justify-between pt-5">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg3.svg" alt="text" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-400">
                        <!-- <p class=" text-sm font-medium pl-3">Invoice generated</p> -->
                    </a>
                </div>
                <a href="javascript:void(0)"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 rounded-md focus:text-indigo-800 hover:text-indigo-800 text-indigo-700">
                    <!-- <p class="text-sm font-medium cursor-pointer ">View</p> -->
                </a>

            </div>
            <div class=" flex justify-center gap-4 ">
                <button class="bg-yellow-300 my-5 rounded-md w-40">Proceso</button>
                <button class="bg-green-300 my-5 rounded-md w-40">Listo</button>
            </div>
        </div>

    </div>
    </div>

        `;
    });

    data.forEach(producto => {

        // const productos ={
        //     id: data.id_pedido,
        //     name: data.estado_Pedido,
        //     estado_Pedido:data.estado_Pedido
        // }
        
    
        console.log(producto.estado_Pedido);

        if(data.estado_Pedido == 'Pendiente'){
            console.log('pendiente');
        }
        output2 += `
        
        <div id="card">
        <div class="flex items-center justify-start py-4 px-4">
        <div class="md:w-96 rounded-md shadow-lg p-5 dark:bg-gray-800 bg-white">
            <h1 class="pt-2 pb-7 text-gray-800 dark:text-gray-100 font-bold text-lg">Pedido</h1>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg1.svg" alt="cart" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 ">
                        <p class=" text-sm font-medium pl-3">ID: ${producto.id_pedido} </p>
                    </a>
                </div>
                <p class="text-sm font-medium text-indigo-700"> </p>
            </div>
            <div class="flex items-center justify-between pt-5">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg2.svg" alt="message" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 ">
                        <p class=" text-sm font-medium pl-3">Nombre Producto </p>
                        <p class=" px-2.5">Comida <span>(${producto.cantidad})</span></p>
                        
                                
                    </a>
                </div>
            </div>
            <div class="flex items-center justify-between pt-5">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg1.svg" alt="cart" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-400">
                        <!-- <p class=" text-sm font-medium pl-3">Cantidad <span class="bg-yellow-400 text-red-700 "></span></p> -->
                    </a>
                </div>
                <!-- <p class="text-sm font-medium text-indigo-700">$205</p> -->
            </div>
            <div class="flex items-center justify-between pt-5">
                <div class="flex items-center">
                    <div class="">
                        <!-- <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card3-svg3.svg" alt="text" /> -->

                    </div>
                    <a href="javascript:void(0)"
                        class="focus:outline-none focus:underline focus:text-gray-400 text-gray-600 dark:text-gray-100 hover:text-gray-400">
                        <!-- <p class=" text-sm font-medium pl-3">Invoice generated</p> -->
                    </a>
                </div>
                <a href="javascript:void(0)"
                    class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 rounded-md focus:text-indigo-800 hover:text-indigo-800 text-indigo-700">
                    <!-- <p class="text-sm font-medium cursor-pointer ">View</p> -->
                </a>

            </div>
            <div class=" flex justify-center gap-4 ">
                <button class="bg-yellow-300 my-5 rounded-md w-40">Proceso</button>
                <button class="bg-green-300 my-5 rounded-md w-40">Listo</button>
            </div>
        </div>

    </div>
    </div>

        `;
    });



    document.querySelector('.productos').innerHTML = output;
    document.querySelector('.productos2').innerHTML = output2;
    // document.getElementById('productos').innerHTML = output;

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








