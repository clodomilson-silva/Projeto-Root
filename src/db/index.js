const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
});

// Evento para quando uma nova conexão é estabelecida
pool.on('connect', () => {
    console.log('Database connected successfully');
    console.log('Connection params:', {
        host: process.env.PGHOST,
        user: process.env.PGUSER,
        database: process.env.PGDATABASE,
        port: process.env.PGPORT
    });
});

// Evento para erros de conexão
pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
});

module.exports = {
    query: async (text, params) => {
        try {
            const result = await pool.query(text, params);
            return result;
        } catch (error) {
            console.error('Error executing query:', error.message);
            console.error('Query:', text);
            console.error('Parameters:', params);
            throw error;
        }
    },
    pool
};