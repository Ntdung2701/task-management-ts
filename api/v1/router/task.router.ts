import { Router } from "express";
const router: Router = Router();
import * as controller from "../controller/task.controller";

router.get("/",controller.index );

router.get("/detail/:id", controller.detail);
router.patch("/change-status/:id", controller.changeStatus);
router.patch("/change-multi", controller.changeMulti);
router.patch("/edit/:id", controller.edit);
router.post("/create", controller.create);
router.delete("/delete/:id", controller.deleteTask);
export const taskRouter: Router = router;