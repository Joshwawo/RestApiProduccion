import React, { useEffect } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import { HomeSharp, Send } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


export default function Solicitud() {
    const [solicitud, setSolicitud] = React.useState([]);
    const [destino, setDestino] = React.useState("");
    const [origen, setOrigen] = React.useState("");
    const [cvv, setCVV] = React.useState("");
    const [exp, setEXP] = React.useState("");
    const [ammount, setAmount] = React.useState("");
    const [concept, setConcept] = React.useState("");

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item className="solicitud-form">
                <FormControl>
                    <Typography variant="h4" component="h4" marginTop="40px">
                        Transaccion
                    </Typography>
                    <br />
                </FormControl>
            </Grid>
            <Grid item md={12}>
                <FormControl>
                    <TextField
                        label="Cuenta Destino"
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        onChange={(ev) => setDestino(ev.target.value)}
                    />
                    <TextField
                        label="Cuenta Origen"
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        onChange={(ev) => setOrigen(ev.target.value)}
                    />
                    <br />
                    <TextField
                        label="CVV"
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        onChange={(ev) => setCVV(ev.target.value)}
                    />
                    <TextField
                        label="Fecha de exp"
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        onChange={(ev) => setEXP(ev.target.value)}
                    />
                    <br />
                    <TextField
                        label="Cantidad"
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        onChange={(ev) => setAmount(ev.target.value)}
                    />
                    <TextField
                        label="Concepto"
                        id="outlined-basic"
                        variant="outlined"
                        type="text"
                        onChange={(ev) => setConcept(ev.target.value)}
                    />
                    <br />
                    <Button
                        color="success"
                        variant="contained"
                        onClick={() => {
                            sendSolicitud(solicitud);
                            alert('Envíado con éxito');
                        }}
                    >
                        Enviar Solicitud
                    </Button>
                    <br />
                    <Button
                        color="success"
                        variant="contained"
                        onClick={() => (window.location.href = "/menu")}
                    >
                        Inicio
                    </Button>
                </FormControl>
            </Grid>
        </Grid>
    );
    function sendSolicitud(solicitud) {

        axios.post('https://deerbank.herokuapp.com/transfer/',
            {
                'destiny_account': destino,
                'origin_account': origen,
                'cvv': cvv,
                'exp_date': exp,
                'ammount': ammount,
                'concept': concept
            }
            , {
                headers: {
                    Authorization: 'Token 2de7ee32b45003ec7dfa2c4353bc98cd71ec254c'
                }
            }).then(response => axios.post('https://deerland-finanzas.herokuapp.com/transacciones/agregar', response.data).then(response => console.log(response.data)));


        //Si qutio los comentarios del alert y del location no me deja enviar la respuesta de banco a nuestra base de datos
        //.then(response=> console.log(response.data));
        //alert('Envíado con éxito'); 
        //window.location.href = "/menu";
    }
}