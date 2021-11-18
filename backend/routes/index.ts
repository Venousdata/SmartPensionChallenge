import { Express } from "express";

export default (app: Express): void => {
  app.get("/webpageviews", (req, res) => {
    console.log("==testing==");
    res.send("hello");
  });
};
