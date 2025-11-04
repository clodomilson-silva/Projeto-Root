const supabase = require('../db/supabase');

async function getAll(req, res) {
    try {
        console.log('Iniciando busca de todos os items...');
        const { data, error } = await supabase
            .from('items')
            .select('*')
            .order('id', { ascending: true });
        
        if (error) throw error;
        
        console.log(`${data.length} items encontrados`);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ 
            error: 'Erro ao buscar items',
            details: error.message 
        });
    }
}

async function getById(req, res) {
    const { id } = req.params;
    try {
        const { data, error } = await supabase
            .from('items')
            .select('*')
            .eq('id', id)
            .single();
        
        if (error) {
            if (error.code === 'PGRST116') {
                return res.status(404).json({ error: 'Item não encontrado' });
            }
            throw error;
        }
        
        res.status(200).json(data);
    } catch (error) {
        console.error('Error fetching item by ID:', error);
        res.status(500).json({ error: 'Erro ao buscar item' });
    }
}

async function createItem(req, res) {
    const { name, description, price } = req.body;
    console.log('Tentando criar item:', { name, description, price });
    
    if (!name || price == null) {
        console.log('Dados inválidos:', { name, price });
        return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
    }
    
    try {
        const { data, error } = await supabase
            .from('items')
            .insert([{ name, description, price }])
            .select()
            .single();
        
        if (error) throw error;
        
        console.log('Item criado com sucesso:', data);
        res.status(201).json(data);
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ 
            error: 'Erro ao criar item',
            details: error.message
        });
    }
}

async function updateItem(req, res) {
    const { id } = req.params;
    const { name, description, price } = req.body;
    try {
        const { data, error } = await supabase
            .from('items')
            .update({ name, description, price })
            .eq('id', id)
            .select()
            .single();
        
        if (error) {
            if (error.code === 'PGRST116') {
                return res.status(404).json({ error: 'Item não encontrado' });
            }
            throw error;
        }
        
        res.status(200).json(data);
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json({ error: 'Erro ao atualizar item' });
    }
}

async function deleteItem(req, res) {
    const { id } = req.params;
    try {
        const { data, error } = await supabase
            .from('items')
            .delete()
            .eq('id', id)
            .select()
            .single();
        
        if (error) {
            if (error.code === 'PGRST116') {
                return res.status(404).json({ error: 'Item não encontrado' });
            }
            throw error;
        }
        
        res.status(200).json({ message: 'Item deletado com sucesso', item: data });
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Erro ao deletar item' });
    }
}

module.exports = {
    getAll,
    getById,
    createItem,
    updateItem,
    deleteItem,
};
