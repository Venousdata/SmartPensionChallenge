import cors from "cors";

export default (app) => {
  app.use(cors({ origin: "http://localhost:3000" }));
  app.get("/webpageviews", (req, res) => {
    console.log("==testing==");
    res.send("hello");
  });
};
