const express = require('express');
const cors = require('cors');
const path = require('path');
const pool = require('./database/db');

// Importando rotas modularizadas
const usersRoutes = require('./routes/users');
const messagesRoutes = require('./routes/messages');
const webhooksRoutes = require('./routes/webhooks');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json({ limit: '10mb', type: 'application/json', charset: 'utf-8' }));
app.use(express.static('public'));

// Middleware para definir UTF-8 nas respostas
app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    next();
});

// Definir rotas
app.use('/users', usersRoutes);
app.use('/messages', messagesRoutes);
app.use('/webhooks', webhooksRoutes);

// Rota para servir o Dashboard HTML
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
