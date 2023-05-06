const router = require("express").Router();
import allergiesRoutes from "./allergiesRoutes";
import apptRoutes from "./apptRoutes";
import clientRoutes from "./clientRoutes";
import commentRoutes from "./commentRoutes";
import employeeRoutes from "./employeeRoutes";
import labRoutes from "./labRoutes";
import medicationRoutes from "./medicationRoutes";
import petRoutes from "./petRoutes";
import surgeryRoutes from "./surgeryRoutes";
import vaccineRoutes from "./vaccineRoutes";

router.use("/allergies", allergiesRoutes);
router.use("/appts", apptRoutes);
router.use("/clients", clientRoutes);
router.use("/comments", commentRoutes);
router.use("/employees", employeeRoutes);
router.use("/labs", labRoutes);
router.use("/medications", medicationRoutes);
router.use("/pets", petRoutes);
router.use("/surgeries", surgeryRoutes);
router.use("/vaccines", vaccineRoutes);

export default router;
