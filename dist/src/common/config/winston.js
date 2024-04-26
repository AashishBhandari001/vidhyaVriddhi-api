"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = void 0;
const winston_1 = __importDefault(require("winston"));
winston_1.default.addColors({
    error: "red",
    warn: "yellow",
    info: "green",
    http: "magenta",
    debug: "blue",
});
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
    transports: [
        new winston_1.default.transports.Console(),
        new winston_1.default.transports.File({ filename: "error.log", level: "error" }),
        new winston_1.default.transports.File({ filename: "combined.log" }),
    ],
});
exports.stream = {
    write: (message) => {
        const jsonMessage = JSON.parse(message);
        logger.info(jsonMessage);
    },
};
exports.default = logger;
