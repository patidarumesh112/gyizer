// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
console.log("usercont")
router.post('/createWithArray', userController.createUsersWithArray);
router.get('/:username', userController.getUserByUsername);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);
router.post('/login', userController.loginUser);
router.get('/logout', userController.logoutUser);
module.exports = router;
