import React, { useEffect, useState } from 'react';
import api from "../services/api";

export default function ItemList() {
    const [items, setItems] = useState([]);
    const [newItemName, setNewItemName] = useState({ name: "", description: "" , price: "" });

    useEffect(() => {
        api.get('/items')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    // Adicionar item
    const addItem = () => {
        api.post('/items', newItemName)
            .then(response => {
                setItems([...items, response.data]);
                setNewItemName({ name: "", description: "", price: "" });
            })
            .catch(error => console.error(error));
    };

    // Deletar item
    const deleteItem = (id) => {
        api.delete(`/items/${id}`)
            .then(() => {
                setItems(items.filter(item => item.id !== id));
            })
            .catch(error => console.error(error));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Itens Cadastrados</h1>

            <div style={{ marginBottom: '20px' }}>
                <input
                    type="text"
                    placeholder="Nome do item"
                    value={newItemName.name}
                    onChange={(e) => setNewItemName({ ...newItemName, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descrição do item"
                    value={newItemName.description}
                    onChange={(e) => setNewItemName({ ...newItemName, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Preço do item"
                    value={newItemName.price}
                    onChange={(e) => setNewItemName({ ...newItemName, price: e.target.value })}
                />
                <button onClick={addItem}>Adicionar Item</button>
            </div>

            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.description} - {item.price}
                        <button onClick={() => deleteItem(item.id)}>Deletar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}