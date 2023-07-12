// routes/storeRoutes.js
const express = require('express');
const router = express.Router();
const storeController = require('../controllers/store.js');

router.post('/order', storeController.placeOrder);
router.get('/order/:orderId', storeController.findOrderById);
router.delete('/order/:orderId', storeController.deleteOrder);
router.get('/inventory', storeController.getInventory);

module.exports = router;
