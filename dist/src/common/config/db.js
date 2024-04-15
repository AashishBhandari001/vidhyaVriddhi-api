"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./config");
const winston_1 = __importDefault(require("./winston"));
mongoose_1.default
    .connect(config_1.config.mongoURI)
    .then(() => {
    console.log("Connected to MongoDB");
    winston_1.default.info("Connected to MongoDB");
})
    .catch((error) => {
    console.log("Error connecting to MongoDB", error);
    winston_1.default.error("Error connecting to MongoDB", error);
});
