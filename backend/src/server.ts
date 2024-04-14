import express, { Express, Request, Response } from "express";
import cors from "cors";
import { Profiles } from "./data/profile";
import { ProductPreviews, Products } from "./data/product";

const app: Express = express();
app.use(cors());

const port = 3001;

const delayMs = 1000;
app.use(function (_req, _res, next) {
  setTimeout(next, delayMs);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, this is Express + TypeScript");
});

app.get("/users/:id", (req: Request<{ id: number }>, res: Response) => {
  res.send(Profiles[req.params.id]);
});

app.get("/products", (_req: Request, res: Response) => {
  res.send(ProductPreviews);
});

app.get("/products/:id", (req: Request<{ id: number }>, res: Response) => {
  res.send(Products[req.params.id]);
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});
