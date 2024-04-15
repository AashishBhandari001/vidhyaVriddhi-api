"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = void 0;
const winston_1 = __importDefault(require("winston"));
const winston_transport_sentry_node_1 = __importDefault(require("winston-transport-sentry-node"));
const config_1 = require("./config");
const options = {
    console: {
        level: "debug",
        handleExceptions: true,
    },
    sentry: {
        level: "error",
        sentry: {
            dsn: config_1.config.sentryDsn,
        },
    },
};
const winstonLoggerTransports = [new winston_transport_sentry_node_1.default(options.sentry)];
const logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), winston_1.default.format.json()),
    transports: winstonLoggerTransports,
    exitOnError: false,
});
exports.stream = {
    write: (message) => {
        const jsonMessage = JSON.parse(message);
        logger.info(jsonMessage);
    },
};
exports.default = logger;
