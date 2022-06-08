const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());

app.use(cors());
//Prueba
app.use(
    // express.urlencoded({extended:true})
    express.urlencoded({
        extended: true
    })
);
app.use(express.json({
    type: "*/*"
}));

const conn = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b990083e7d850e',
    password: '95b7e22f',
    database: 'heroku_7aebcab0f2d79c9'
});

conn.connect(function (err) {
    if (err) {
        console.log('error conecting:' + err.stack);
        return;
    }
    console.log('Conectado A la BD ' + conn.threadId)
})

setInterval(() => {
    conn.query('SELECT 1');
}, 5000);

app.get('/', (req, res) => {
    res.send('hola desde la api de produccion');
});

/*Endpoint prueba */
app.get('/Pruebas', (req, res) => {
    //res.send('hola desde la api de produccion')
    const prueba = "Select id_pedido from pedido where id_pedido = 1794";
    conn.query(prueba, (error, resultadoPrueba) => {
        if (error) throw error;
        if (resultadoPrueba.length > 0) {
            res.json(resultadoPrueba)
        } else {
            console.log("No se encontro el registro marcado")
        }
    });
});
//tacos de kk

app.get('/api/pedido', (req, res) => {
    // res.send('hola desde producto')

    const sql = 'SELECT id_pedido, id_producto, estado FROM pedido';
    conn.query(sql, (error, resultados) => {
        if (error) throw error;
        if (resultados.length > 0) {
            res.json(resultados)
        } else {
            res.send('Sin resultados en pedidos')
        }
    });
});
//

app.get('/api/online', (req, res) => {
    // res.send('hola desde producto')

    const sql = 'SELECT id, estado FROM pedidoonline';
    conn.query(sql, (error, resultados) => {
        if (error) throw error;
        if (resultados.length > 0) {
            res.json(resultados)
        } else {
            res.send('Sin resultados en pedidos')
        }
    });
});

// app.post('/api/online', (req, res) => {
//     const sql = 'INSERT INTO pedidoonline SET ?';
//     const baseObj = {
//         id: req.body.id,
//         nombreProducto: req.body.nombreProducto,
//         cantidad: req.body.cantidad,
//         nombreCliente: req.body.nombreCliente,
//         idUsuario: req.body.idUsuario,
//         estado: req.body.estado,
//         direccion: req.body.direccion,
//     }

//     conn.query(sql, baseObj, error => {
//         if (error) throw error;
//         res.send('Pedido Creado');

//     });
// });

app.post('/api/online', (req, res) => {
    const sql = 'INSERT INTO pedidoonline SET ?';
    const baseObj = {
        id: req.body.id,
        estado: req.body.estado,

    }

    conn.query(sql, baseObj, error => {
        if (error) throw error;
        res.send('Pedido Creado');

    });
});


//asd
app.post('/api/pedido', (req, res) => {
    const sql = 'INSERT INTO pedido SET ?';
    const pedidoObjP = {
        // cantidadPedido:req.body.cantidadPedido,
        id_pedido: req.body.id_pedido,
        nombreproducto: req.body.nombreproducto,
        cantidad: req.body.cantidad,
        estado: req.body.estado,
    }

    conn.query(sql, pedidoObjP, error => {
        if (error) throw error;
        res.send('Pedido Creado');

    });
});



// app.post('/api/pedidonline', (req, res) => {
//     const sql = 'INSERT INTO pedidoonline SET ?';
//     const pedidoObjP = {
//         estado: req.body.estado,
//         id_producto: req.body.id_producto
//     }

//     conn.query(sql, pedidoObjP, error => {
//         if (error) throw error;
//         res.send('Pedido Creado');

//     });
// });


app.put('/api/actualizar/:id', (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    const sql = `UPDATE pedido SET estado ='${estado}' WHERE id_pedido=${id}`;

    conn.query(sql, error => {
        if (error) throw error;
        res.send(req.body);

    });

    if (!id) {
        res.send('no existe el pedido con ese id')
    }
})

// app.put('/api/actualizaronline/:id', (req, res) => {
//     const { id } = req.params;
//     const { estado } = req.body;
//     const sql = `UPDATE pedidoonline SET estado ='${estado}' WHERE id=${id}`;

//     conn.query(sql, error => {
//         if (error) throw error;
//         res.send(req.body);

//     });

//     if (!id) {
//         res.send('no existe el pedido con ese id')
//     }
// })

app.put('/api/actualizaronline/:id', (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    const sql = `UPDATE pedidoonline SET estado ='${estado}' WHERE id=${id}`;
    args = [id, estado];

    conn.query(sql,args ,error => {
        if (error) throw error;
        res.send(req.body);

    });

    if (!id) {
        res.send('no existe el pedido con ese id')
    }
})


app.delete('/api/delete/:id', (req, res) => {
    const { id } = req.params;

    const sql = `DELETE FROM pedido WHERE id_pedido=${id}`;

    conn.query(sql, error => {
        if (error) throw error;
        res.send('Pedido eliminado');

    })
})


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`)
});

///hola amigos de youtube
/*
!Zona para commits
asdasda
Zonaasdaasd
asdadasdasd
*/