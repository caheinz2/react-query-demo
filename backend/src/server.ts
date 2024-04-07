import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Profiles } from "./data/profile";

const app: Express = express();
app.use(cors());

const port = 3001;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

app.get("/user/:id", (req: Request<{ id: number }>, res: Response) => {
  res.send(Profiles[req.params.id]);
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
