// controllers/petsController.js
const Pet = require('../models/pets.js');

// Upload an image for a pet
async function uploadPetImage(req, res) {
  const { petId } = req.params;
  const { additionalMetadata, file } = req.body;

  // Process the image upload

  res.json({ code: 0, type: 'string', message: 'string' });
}

// Add a new pet to the store
async function addPet(req, res) {
  const petData = req.body;

  try {
    console.log(petData)
    const pet = await Pet.create(petData);
    res.json(pet);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
}

// Update an existing pet
async function updatePetInfo(req, res) {
  console.log("ccch==")
  const petData = req.body;

  try {
    const { id } = petData;
    const pet = await Pet.findByPk(id);

    if (!pet) {
      res.status(404).json({ error: 'Pet not found' });
    } else {
      await pet.update(petData);
      res.json(pet);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID supplied' });
  }
}

// Find pets by status
async function findPetsByStatus(req, res) {
  const { status } = req.query;

  try {
    const pets = await Pet.findAll({
      where: {
        status,
      },
    });

    res.json(pets);
  } catch (error) {
    res.status(400).json({ error: 'Invalid status value' });
  }
}

// Find pets by tags
async function findPetsByTags(req, res) {
  // Implement logic to find pets by tags
  // Not provided in the Swagger documentation
}

// Find pet by ID
async function findPetById(req, res) {
  console.log("pet by id")
  const { petId } = req.params;

  try {
    const pet = await Pet.findByPk(petId);

    if (!pet) {
      res.status(404).json({ error: 'Pet not found' });
    } else {
      res.json(pet);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID supplied' });
  }
}

// Updates a pet in the store with form data
async function updatePetWithFormData(req, res) {
  const { petId } = req.params;
  const { name, status } = req.body;

  try {
    const pet = await Pet.findByPk(petId);

    if (!pet) {
      res.status(404).json({ error: 'Pet not found' });
    } else {
      pet.name = name;
      pet.status = status;
      await pet.save();
      res.json(pet);
    }
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Invalid input' });
  }
}

// Deletes a pet
async function deletePet(req, res) {
  const { petId } = req.params;

  try {
    const pet = await Pet.findByPk(petId);

    if (!pet) {
      res.status(404).json({ error: 'Pet not found' });
    } else {
      await pet.destroy();
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID supplied' });
  }
}

module.exports = {
  uploadPetImage,
  addPet,
  updatePetInfo,
  findPetsByStatus,
  findPetsByTags,
  findPetById,
  updatePetWithFormData,
  deletePet,
};
