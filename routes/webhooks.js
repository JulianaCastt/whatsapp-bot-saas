const express = require('express');
const pool = require('../database/db');
const { saveWebhook } = require('../database/webhook');

const router = express.Router();

// Rota para receber Webhooks
router.post('/', async (req, res) => {
    try {
        const { event_type, payload } = req.body;

        if (!event_type || !payload) {
            return res.status(400).json({ error: 'Dados invalidos' });
        }

        await saveWebhook(event_type, payload);
        res.status(200).json({ success: 'Webhook recebido e salvo com sucesso!' });
    } catch (error) {
        console.error('Erro no webhook:', error);
        res.status(500).json({ error: 'Erro ao processar webhook' });
    }
});

// Rota para listar os eventos de Webhooks
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM webhooks ORDER BY received_at DESC');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar webhooks:', err);
        res.status(500).json({ error: 'Erro ao buscar eventos de webhooks' });
    }
});

module.exports = router;
