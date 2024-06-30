const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch'); // Para fazer requisições HTTP

const app = express();
const port = 3000;

// Middleware para parsear o corpo das requisições
app.use(bodyParser.json());

// Rota para atualizar usuário
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body; // Dados do usuário a serem atualizados

  // Exemplo de URL do servidor JSON
  const baseURL = 'http://localhost:3000';

  fetch(`${baseURL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedUser)
  })
    .then(response => response.json())
    .then(data => {
      res.json({ message: 'Usuário atualizado com sucesso!', data });
    })
    .catch(error => {
      console.error('Erro ao atualizar usuário:', error);
      res.status(500).json({ error: 'Erro ao atualizar usuário. Tente novamente.' });
    });
});

// Rota para criar novo usuário
app.post('/users', (req, res) => {
  const newUser = req.body; // Dados do novo usuário a serem criados

  // Exemplo de URL do servidor JSON
  const baseURL = 'http://localhost:3000';

  fetch(`${baseURL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(response => response.json())
    .then(data => {
      res.json({ message: 'Usuário criado com sucesso!', data });
    })
    .catch(error => {
      console.error('Erro ao criar usuário:', error);
      res.status(500).json({ error: 'Erro ao criar usuário. Tente novamente.' });
    });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
