import express from "express";
import mountRoutes from "./routes/index";

const app = express();
app.use(express.json());
mountRoutes(app);

export default app;
