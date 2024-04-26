import express, { Express } from "express";
import { config } from "./src/common/config/config";
import { stream } from "./src/common/config/winston";

const app: Express = express();
const morgan = require("morgan");
const cors = require("cors");

app.enable("trust proxy");
app.use(cors());
app.use(
  morgan(
    '{"remote-addr": ":remote-addr", "remote-user": ":remote-user", "method": ":method", "url": ":url", "status": ":status", "content-length": ":res[content-length]", "referrer": ":referrer", "response-time": ":response-time ms", "user-agent": ":user-agent"}',
    { stream }
  )
);

app.use(express.json());

export default app;
