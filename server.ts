import { config } from "./src/common/config/config";
import { successMessage, errorMessage } from "./src/common/config/message";
import logger from "./src/common/config/winston";
import app from "./index";
import mongoose from "mongoose";

mongoose
  .connect(config.mongoURI)
  .then(() => {
    console.log(successMessage.DATABASE_CONNECTED);
    logger.info("Connected to MongoDB");
  })
  .catch((error: any) => {
    console.log(errorMessage.DATABASE_CONNECTION_ERROR, error);
    logger.error("Error connecting to MongoDB", error);
  });

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
  logger.info(`Server running on port ${config.port}`);
});
