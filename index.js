const express = require ('express');

const app = express();

app.get(
    '/',
    (req,res) => res.send('Bem-vindo ao sistema')


);

app.get(
    'sistema/:ip',
    (req,res) => {
        let ip = req.params.ip

        res.send('Bem vindo ao sistema.')
    }
);

app.listen(
    3000,
    console.log('Servidor em execução')
);