// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createWithArray', userController.createUsersWithArray);
router.get('/:username', userController.getUserByUsername);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);
router.get('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);
module.exports = router;
