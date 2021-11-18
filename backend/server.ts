import express from "express";
import cors from "cors";
import mountRoutes from "./routes/index";

const server = express();
server.use(express.json());
server.use(cors({ origin: "http://localhost:3000" }));
mountRoutes(server);

export default server;
