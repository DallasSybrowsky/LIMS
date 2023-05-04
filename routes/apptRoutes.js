const router = require("express").Router();
const {
  getAllAppts,
  getApptById,
  createAppt,
  updateAppt,
  deleteAppt,
} = require("../../controllers/apptController");

// /api/appts
router.route("/").get(getAllAppts).post(createAppt);

// /api/appts/:id
router.route("/:id").get(getApptById).put(updateAppt).delete(deleteAppt);

module.exports = router;
