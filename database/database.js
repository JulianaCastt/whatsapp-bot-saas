const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',          // Usu�rio do PostgreSQL
    host: 'localhost',         // Host do banco de dados
    database: 'whatsapp_bot',  // Nome do banco de dados
    password: '123456',        // Senha do PostgreSQL
    port: 5432,                // Porta padr�o do PostgreSQL
});

pool.connect()
    .then(() => console.log('Conectado ao PostgreSQL!'))
    .catch(err => console.error('Erro na conex�o com o PostgreSQL:', err));

module.exports = pool;
