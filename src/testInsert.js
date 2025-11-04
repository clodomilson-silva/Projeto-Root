const db = require('./db');

async function testInsert() {
    try {
        // Primeiro testa a conexão
        const testConn = await db.query('SELECT NOW()');
        console.log('Conexão com o banco estabelecida!');
        
        // Tenta inserir um item
        const item = {
            name: 'Caneta',
            description: 'Caneta azul',
            price: 2.50
        };
        
        console.log('Tentando inserir:', item);
        
        const result = await db.query(
            'INSERT INTO items (name, description, price) VALUES ($1, $2, $3) RETURNING *',
            [item.name, item.description, item.price]
        );
        
        console.log('Item inserido com sucesso:', result.rows[0]);
        
        // Busca todos os itens para confirmar
        const allItems = await db.query('SELECT * FROM items');
        console.log('\nTodos os itens após inserção:', allItems.rows);
        
    } catch (error) {
        console.error('Erro durante o teste:');
        console.error('Mensagem:', error.message);
        console.error('Detalhes:', error);
    } finally {
        // Fecha o pool de conexões
        await db.pool.end();
    }
}

testInsert();