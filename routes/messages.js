const express = require('express');
const pool = require('../database/db');
const { saveMessage } = require('../database/messages');

const router = express.Router();

// Rota para salvar mensagens no banco de dados
router.post('/', async (req, res) => {
    const { user_id, message, received } = req.body;

    if (!user_id || !message) {
        return res.status(400).json({ error: 'user_id e message sao obrigatorios' });
    }

    try {
        await saveMessage(user_id, message, received);
        res.json({ success: 'Mensagem salva com sucesso!' });
    } catch (err) {
        console.error('Erro ao salvar mensagem:', err);
        res.status(500).json({ error: 'Erro ao salvar mensagem' });
    }
});

// Rota para listar mensagens armazenadas no banco de dados
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM messages ORDER BY sent_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar mensagens:', err);
        res.status(500).json({ error: 'Erro ao buscar mensagens' });
    }
});

module.exports = router;
