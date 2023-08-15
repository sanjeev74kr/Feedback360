"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Entered in database file");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const messages_1 = require("./utils/messages");
dotenv_1.default.config();
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    console.error(messages_1.messages.ERROR_DATABASE_ENV);
    process.exit(1);
}
mongoose_1.default.connect(MONGODB_URI)
    .then(() => {
    console.log(messages_1.messages.SUCCESS_DATABASE);
})
    .catch((error) => {
    console.log(error);
    console.log(messages_1.messages.ERROR_DATABASE);
});
//# sourceMappingURL=database.js.map