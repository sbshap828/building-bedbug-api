import { Router } from "express";
import buildingsRoutes from "./buildings.js";
import bedbugsRoutes from "./bedbugs.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/buildings", buildingsRoutes);
router.use("/bedbugs", bedbugsRoutes);

export default router;
