const db = require('./db');

async function testConnection() {
    try {
        const result = await db.query('SELECT NOW()');
        console.log('Conexão bem sucedida!');
        console.log('Hora do servidor:', result.rows[0].now);
        
        // Testa a tabela items
        const items = await db.query('SELECT * FROM items');
        console.log('\nItens encontrados:', items.rows.length);
        console.log('Itens:', items.rows);
        
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:');
        console.error(error.message);
    } finally {
        // Fecha o pool de conexões
        db.pool.end();
    }
}

testConnection();