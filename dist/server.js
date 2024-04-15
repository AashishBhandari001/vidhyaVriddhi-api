"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./src/common/config/config");
const message_1 = require("./src/common/config/message");
const winston_1 = __importDefault(require("./src/common/config/winston"));
const index_1 = __importDefault(require("./index"));
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default
    .connect(config_1.config.mongoURI)
    .then(() => {
    console.log(message_1.successMessage.DATABASE_CONNECTED);
    winston_1.default.info("Connected to MongoDB");
})
    .catch((error) => {
    console.log(message_1.errorMessage.DATABASE_CONNECTION_ERROR, error);
    winston_1.default.error("Error connecting to MongoDB", error);
});
index_1.default.listen(config_1.config.port, () => {
    console.log(`Server running on port ${config_1.config.port}`);
    winston_1.default.info(`Server running on port ${config_1.config.port}`);
});
