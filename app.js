const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

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
app.use(morgan('dev'));

const conn = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'b990083e7d850e',
    password: '95b7e22f',
    database: 'heroku_7aebcab0f2d79c9',
    multipleStatements: true
    
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
    res.send('hola desde la api de produccion')
});

///!orinal
// app.get('/api/pedido', (req, res) => {
//     // res.send('hola desde producto')

//     const sql = 'SELECT * FROM pedido';
//     conn.query(sql, (error, resultados) => {
//         if (error) throw error;
//         if (resultados.length > 0) {
//             res.json(resultados)
//         } else {
//             res.send('Sin resultados en pedidos')
//         }
//     });
// });

//!prueba
app.get('/api/pedido2', (req, res) => {
    // res.send('hola desde producto')

    // const sql = () => {
    //     const sql = 'SELECT * FROM pedido';
    //     // const sql2 = 'SELECT * FROM cliente';
    //     return  sql ;
        

    // }
    // const sql2 = () => {
    //     const sq2 = 'SELECT * FROM cliente';
    //     // const sql2 = 'SELECT * FROM cliente';
    //     return  sq2 ;
        
    // const conn = mysql.createConnection({multipleStatements: true});
    // }
    // const sql = {sql: 'SELECT * FROM pedido', nestTables: true, typeCast: true, multipleStatements: true, };
    // const sql2 = {sql: 'SELECT * FROM cliente', nestTables: true, typeCast: true, multipleStatements: true, };
    // const sql2 = {sql: 'SELECT * FROM cliente', nestTables: true};
    // const sql = 'SELECT * FROM pedido';
    conn.query(' SELECT * FROM Pedido; SELECT * FROM cliente',(error, resultados, fields) => {
        if (error) throw error;
        if (resultados.length > 0) {
            res.json(resultados)
        } else {
            res.send('Sin resultados en pedidos')
        }
    });
});


app.post('/api/pedido', (req, res) => {
    const sql = 'IF NOT EXIST INSERT INTO pedido SET ? ';
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

app.post('/api/pedido', (req, res) => {
    const sql = 'INSERT INTO pedido SET ?';
    const pedidoObjP = {
        estado: req.body.estado,
        id_producto: req.body.id_producto
    }

    conn.query(sql, pedidoObjP, error => {
        if (error) throw error;
        res.send('Pedido Creado');

    });
});


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

///hola amigos de youtubea
