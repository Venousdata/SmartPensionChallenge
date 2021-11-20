import { Express } from "express";
import { getWebsiteViews } from "../controllers/webpage_controller";

export default (app: Express): void => {
  app.get("/webpageviews", async (req, res) => {
    const data = await getWebsiteViews("./data/webserver.log");
    res.send(data);
  });
};
