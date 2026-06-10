const express = require('express');
const exphbs = require('express-handlebars'); //Exercicío 12
const app = express();

//Exercício 17:
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const videos = [

  {
    titulo: 'Receita rápida',
    criador: 'Maria',
    descricao: 'Aprenda em 1 minuto',
    visualizacoes: 1200,
    curtidas: 340,
    hashtag: '#receita',
    urlVideo: 'https://youtube.com',
    thumbnail: 'https://placehold.co/300x200'
  }

];

// Exercício 12:
app.engine(
  'handlebars',
  exphbs.engine({ defaultLayout: false })
);

app.set('view engine', 'handlebars');

// Exercício 1: Rota GET raiz (/) que exibe uma string de boas-vindas
app.get('/', (req, res) => {
res.render('home');
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
res.send('Usuário ' + id);
});

// Exercício 7: Retorna o nome do produto enviado
app.get('/produtos/:nome', (req, res) => {
const nome = req.params.nome;
res.send('Produto ' + nome);
}
);


// Exercício 8: Captura múltiplos parâmetros (:id e :nome)
app.get('/filmes/:id/:nome', (req, res) => {
const idFilme = req.params.id;
const nomeFilme = req.params.nome;

res.send('ID do filme: ' + idFilme + ' | Nome do filme: ' + nomeFilme);
});

// Exercício 9:
app.get('/buscar', (req, res) => {

  const nome = req.query.nome;

  res.send('Buscando por: ' + nome);

});

// Exercício 10:
app.get('/produtos', (req, res) => {
    const categoria = req.query.categoria;
    const pagina = req.query.pagina;

    res.send(
    'Categoria: ' + categoria +
    ' | Página: ' + pagina
  );

});

// Exercício 11:
app.get('/usuarios', (req,res ) => {
    const idade = req.query.idade;

    res.send(
    'Filtrando usuários com idade ' + idade
  );
});

// Exercício 13:
app.get('/perfil', (req, res) => {

  res.render('perfil', {
    nome: 'Matheus',
    idade: 16
  });

});


//Exercício 14: 
app.get('/filmes-lista', (req, res) => {

  const filmes = [
    'Matrix',
    'Avatar',
    'Interestelar',
    'Vingadores'
  ];

  res.render('filmes', {
    filmes
  });

});

//Exercício 15:
app.get('/condicional/true', (req, res) => {

  res.render('condicional', {

    logado: true,
    admin: false

  });

});

app.get('/condicional/false', (req, res) => {

  res.render('condicional', {

    logado: false,
    admin: false

  });

});

//Exercício 16:
app.get('/filmes', (req, res) => {

  const filmes = [

    { nome: 'Matrix', ano: 1999 },

    { nome: 'Avatar', ano: 2009 },

    { nome: 'Interestelar', ano: 2014 },

    { nome: 'Vingadores', ano: 2012 }

  ];

  res.render('filmesObjetos', {
    filmes
  });

});

//Exercício 17:
app.get('/tiktok', (req, res) => {

  res.render('homeTikTok');

});
//rota de listagem
app.get('/videos', (req, res) => {

  res.render('videos/listar', {
    videos
  });

});
//rota de cadastro
app.get('/videos/cadastrar', (req, res) => {

  res.render('videos/cadastrar');

});
//rota post
app.post('/videos', (req, res) => {

  const novoVideo = {

    titulo: req.body.titulo,
    criador: req.body.criador,
    descricao: req.body.descricao,
    visualizacoes: req.body.visualizacoes,
    curtidas: req.body.curtidas,
    hashtag: req.body.hashtag,
    urlVideo: req.body.urlVideo,
    thumbnail: req.body.thumbnail

  };

  videos.push(novoVideo);

  res.redirect('/videos');

});

app.listen(
    3000,
    console.log('Servidor em execução')
);