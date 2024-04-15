import winston from "winston";
import Sentry from "winston-transport-sentry-node";
import { config } from "./config";

const options = {
  console: {
    level: "debug",
    handleExceptions: true,
  },
  sentry: {
    level: "error",
    sentry: {
      dsn: config.sentryDsn,
    },
  },
};

const winstonLoggerTransports: any = [new Sentry(options.sentry)];

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: winstonLoggerTransports,
  exitOnError: false,
});

export const stream = {
  write: (message: string) => {
    const jsonMessage = JSON.parse(message);
    logger.info(jsonMessage);
  },
};

export default logger;
