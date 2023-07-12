// controllers/storeController.js
const Store = require('../models/store.js');

// Place an order for a pet
async function placeOrder(req, res) {
  const orderData = req.body;

  try {
    const order = await Store.create(orderData);
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: 'Invalid Order' });
  }
}

// Find purchase order by ID
async function findOrderById(req, res) {
  const { orderId } = req.params;

  try {
    const order = await Store.findByPk(orderId);

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      res.json(order);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID supplied' });
  }
}

// Delete purchase order by ID
async function deleteOrder(req, res) {
  const { orderId } = req.params;

  try {
    const order = await Store.findByPk(orderId);

    if (!order) {
      res.status(404).json({ error: 'Order not found' });
    } else {
      await order.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID supplied' });
  }
}

// Returns pet inventories by status
async function getInventory(req, res) {
  // Implement logic to retrieve pet inventories by status
  // Not provided in the Swagger documentation
}

module.exports = {
  placeOrder,
  findOrderById,
  deleteOrder,
  getInventory,
};
