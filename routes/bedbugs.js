import { Router } from "express";
import * as controllers from "../controllers/bedbugs.js";

const router = Router();

router.get("/", controllers.getBedbugs);
router.get("/:id", controllers.getBedbug);
router.get("/date/:filing_date", controllers.getBedBugDate);
router.post("/", controllers.createBedbugs);
router.put("/:id", controllers.updateBedbug);
router.delete("/:id", controllers.deleteBedbug);

export default router;