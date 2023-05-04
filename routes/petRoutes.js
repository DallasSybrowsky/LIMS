const router = require("express").Router();
const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("../../controllers/petController");

// /api/pets
router.route("/").get(getAllPets).post(createPet);

// /api/pets/:id
router.route("/:id").get(getPetById).put(updatePet).delete(deletePet);

module.exports = router;
