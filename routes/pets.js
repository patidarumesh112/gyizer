// routes/petsRoutes.js
const express = require('express');
const router = express.Router();
const petsController = require('../controllers/pet.js');

router.post('/:petId/uploadImage', petsController.uploadPetImage);
router.post('/', petsController.addPet);
router.put('/', petsController.updatePet);
router.get('/findByStatus', petsController.findPetsByStatus);
router.get('/findByTags', petsController.findPetsByTags);
router.get('/:petId', petsController.findPetById);
router.post('/:petId', petsController.updatePetWithFormData);
router.delete('/:petId', petsController.deletePet);

module.exports = router;
