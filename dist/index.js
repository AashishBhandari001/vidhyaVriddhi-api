"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const winston_1 = require("./src/common/config/winston");
const app = (0, express_1.default)();
const morgan = require("morgan");
const cors = require("cors");
app.enable("trust proxy");
app.use(cors());
app.use(morgan('{"remote-addr": ":remote-addr", "remote-user": ":remote-user", "method": ":method", "url": ":url", "status": ":status", "content-length": ":res[content-length]", "referrer": ":referrer", "response-time": ":response-time ms", "user-agent": ":user-agent"}', { stream: winston_1.stream }));
app.use(express_1.default.json());
exports.default = app;
