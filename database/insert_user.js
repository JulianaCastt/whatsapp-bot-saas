const pool = require('./db');

const insertUser = async (name, phone) => {
    try {
        const result = await pool.query(
            'INSERT INTO users (name, phone) VALUES ($1, $2) RETURNING *',
            [name, phone]
        );
        console.log(' Usuario inserido:', result.rows[0]);
    } catch (err) {
        console.error(' Erro ao inserir usuario:', err);
    }
};

// Testando a inserção de um usuário
insertUser('Juliana Castro', '+5511988887777');
