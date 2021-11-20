import { Express } from "express";
import { getWebsiteViews } from "../controllers/webpage_controller";

export default (app: Express): void => {
  app.post("/webpageviews", async ({ body: { sortBy, order } }, res) => {
    try {
      const data = await getWebsiteViews("./data/webserver.log", sortBy, order);
      res.send(data);
    } catch ({ message }) {
      res.status(500).send(message);
    }
  });
};
