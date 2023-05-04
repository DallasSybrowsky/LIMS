const router = require("express").Router();
import clientRoutes from "./clientRoutes";
import petRoutes from "./petRoutes";
import apptRoutes from "./apptRoutes";

router.use("/clients", clientRoutes);
router.use("/pets", petRoutes);
router.use("/appts", apptRoutes);

export default router;
