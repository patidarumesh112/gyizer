

import express   from 'express';
import UserController from '../controllers/userController.js'
import multerMW from '../core/multer.js'
let router = express.Router();
let userController = new UserController();

router.post('/contacts', userController.userAdd.bind(userController));
router.put('/contacts/:id', userController.userUpdate.bind(userController));
router.get('/contacts', userController.getUsers.bind(userController));
router.get('/contacts/:id', userController.getUserById.bind(userController));
router.delete('/contacts/:id', userController.deleteUser.bind(userController));

export default router;