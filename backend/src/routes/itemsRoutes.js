const express = require('express');
const router = express.Router();
// Usando o controller do Supabase
const itemsController = require('../controllers/itemsControllerSupabase');
// Se quiser voltar a usar o PostgreSQL local, descomente a linha abaixo e comente a linha acima
// const itemsController = require('../controllers/itemsController');

router.get('/items', itemsController.getAll);
router.get('/items/:id', itemsController.getById);
router.post('/items', itemsController.createItem);
router.put('/items/:id', itemsController.updateItem);
router.delete('/items/:id', itemsController.deleteItem);

module.exports = router;