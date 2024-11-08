import { taskRouter } from "./task.router";
import { Express } from "express";
import { userRouter } from "./user.rouer";
import * as authMiddleware from "../middlewares/auth.middleware";
const mainV1Router = (app: Express): void => {
    const version = "/api/v1";
    app.use(version + "/tasks", authMiddleware.requireAuth, taskRouter);
    app.use(version + "/users", userRouter);

};
export default mainV1Router;
