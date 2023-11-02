import { Router } from "express";
import * as controllers from "../controllers/buildings.js";

const router = Router();

router.get("/", controllers.getBuildings);
router.get("/:id", controllers.getBuilding);
router.post("/", controllers.createBuilding);
router.put("/:id", controllers.updateBuilding);
router.delete("/:id", controllers.deleteBuilding);

export default router;
