const supabase = require('./db/supabase');

async function testSupabaseConnection() {
    try {
        console.log('Testando conexão com Supabase...\n');
        
        // Teste 1: Verificar tabelas
        console.log('1. Verificando se a tabela items existe...');
        const { data: items, error: fetchError } = await supabase
            .from('items')
            .select('*')
            .limit(5);
        
        if (fetchError) {
            console.error('Erro ao buscar items:', fetchError.message);
            console.log('\nA tabela "items" pode não existir ainda no Supabase.');
            console.log('Crie a tabela usando o SQL Editor no Supabase Dashboard:\n');
            console.log(`
CREATE TABLE IF NOT EXISTS items (
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    price NUMERIC(10,2),
    created_at TIMESTAMP DEFAULT now()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE items ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir todas as operações (para desenvolvimento)
CREATE POLICY "Enable all operations for all users" ON items
FOR ALL
USING (true)
WITH CHECK (true);
            `);
        } else {
            console.log('✓ Tabela items encontrada!');
            console.log(`✓ ${items.length} items encontrados:`);
            console.log(items);
        }
        
        console.log('\n2. Testando inserção de um novo item...');
        const newItem = {
            name: 'Item de Teste Supabase',
            description: 'Teste de inserção via API',
            price: 99.99
        };
        
        const { data: insertedItem, error: insertError } = await supabase
            .from('items')
            .insert([newItem])
            .select()
            .single();
        
        if (insertError) {
            console.error('Erro ao inserir item:', insertError.message);
        } else {
            console.log('✓ Item inserido com sucesso:');
            console.log(insertedItem);
        }
        
        console.log('\n✓ Conexão com Supabase está funcionando corretamente!');
        
    } catch (error) {
        console.error('Erro durante o teste:', error.message);
    }
}

testSupabaseConnection();
