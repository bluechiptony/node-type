import express, { Application, Request, Response, NextFunction } from "express";
const applicationName = "My typescript application";
const port = process.env.PORT || 3500;
const app: Application = express();

app.use(express.json());

app.listen(() => {
  console.log(`${applicationName} running on port ${port}`);
});
