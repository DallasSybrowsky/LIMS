const router = require("express").Router();
const {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} = require("../../controllers/clientController");

// /api/clients
router.route("/").get(getAllClients).post(createClient);

// /api/clients/:id
router.route("/:id").get(getClientById).put(updateClient).delete(deleteClient);

module.exports = router;
