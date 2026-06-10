const express = require ('express');
const app = express();


// Exercício 1: Rota GET raiz (/) que exibe uma string de boas-vindas
app.get('/', (req, res) => {
res.send('Bem-vindo ao sistema');
});

// Exercício 2: Rota GET /sobre que exibe informações sobre a aplicação
app.get('/sobre', (req, res) => {
res.send('Esta é uma aplicação Express.js simples construída para exercitar o roteamento básico.');
});

// Exercício 3: Rota GET /contato retornando um objeto JSON
app.get('/contato', (req, res) => {
res.json({
email: "contato@email.com",
telefone: "(81) 99999-9999"
});
});

// Exercício 4: Rota GET /erro retornando status 404 e mensagem
app.get('/erro', (req, res) => {
res.status(404).send('Página não encontrada');
});

// Exercício 5: Rota GET /inicio que redireciona para /
app.get('/inicio', (req, res) => {
res.redirect('/');
});

// Exercício 6 (Ajustado): Retorna "Usuário [id]"
app.get('/usuarios/:id', (req, res) => {
const id = req.params.id;
res.send('Usuário' + id);
});

// Exercício 7: Retorna o nome do produto enviado
app.get('/produtos/:nome', (req, res) => {
const nome = req.params.nome;
res.send('Produto' + nome);
}
);


// Exercício 8: Captura múltiplos parâmetros (:id e :nome)
app.get('/filmes/:id/:nome', (req, res) => {
const idFilme = req.params.id;
const nomeFilme = req.params.nome;

res.send('ID do filme:' + idFilme ,  'Nome: ' +nomeFilme);
});




app.listen(
    3000,
    console.log('Servidor em execução')
);