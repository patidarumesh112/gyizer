// routes/petsRoutes.js
const express = require('express');
const router = express.Router();
const petsController = require('../controllers/pet.js');

// router.post('/:petId/uploadImage', petsController.uploadPetImage);
router.post('/add', petsController.addPet);
router.put('/petupdate', petsController.updatePetInfo);
router.get('/findByStatus', petsController.findPetsByStatus);
router.get('/findByTags', petsController.findPetsByTags);
router.get('/pet/:petId', petsController.findPetById);
router.post('/pet/:petId', petsController.updatePetWithFormData);
router.delete('/pet/:petId', petsController.deletePet);

module.exports = router;
