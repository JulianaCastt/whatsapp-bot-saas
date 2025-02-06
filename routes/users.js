const express = require('express');
const pool = require('../database/db');

const router = express.Router();

// Rota para listar todos os usuários
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar usuarios:', err);
        res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
});

module.exports = router;
