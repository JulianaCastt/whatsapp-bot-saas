const pool = require('./db');

// Função para salvar uma mensagem no banco de dados
const saveMessage = async (user_id, message, received = false) => {
    try {
        const result = await pool.query(
            'INSERT INTO messages (user_id, message, received) VALUES ($1, $2, $3) RETURNING *',
            [user_id, message, received]
        );
        console.log('Mensagem salva:', result.rows[0]);
    } catch (err) {
        console.error('Erro ao salvar mensagem:', err);
    }
};

// Exporta a função para ser usada no servidor
module.exports = { saveMessage };
