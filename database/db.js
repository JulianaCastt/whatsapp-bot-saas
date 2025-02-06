const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'whatsapp_bot',
    password: '123456',
    port: 5432,
    client_encoding: 'UTF8'
});

pool.connect()
    .then(() => console.log('Conectado ao PostgreSQL!'))
    .catch(err => console.error('Erro na conexão com o PostgreSQL:', err));

module.exports = pool;
