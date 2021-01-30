const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/', itemsCtrl.getAllItems);
router.post('/save', itemsCtrl.saveItem);
router.post('/edit', itemsCtrl.updateItem);
router.get('/id/:id', itemsCtrl.getItemById);
router.delete('/delete', itemsCtrl.deleteItem);


module.exports = router;