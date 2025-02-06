const pool = require('./db'); // Importa a conexão com o banco

// Função para salvar eventos Webhook no banco de dados
async function saveWebhook(eventType, payload) {
    try {
        const query = 'INSERT INTO webhooks (event_type, payload) VALUES ($1, $2)';
        await pool.query(query, [eventType, payload]);
        console.log(`Webhook salvo: ${eventType}`);
    } catch (err) {
        console.error('Erro ao salvar webhook:', err);
    }
}

module.exports = { saveWebhook };
