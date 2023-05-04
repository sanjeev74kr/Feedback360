"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./database");
const restaurant_routes_1 = __importDefault(require("./routes/restaurant_routes"));
const admin_routes_1 = __importDefault(require("./routes/admin_routes"));
const messages_1 = require("./utils/messages");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/restaurants', restaurant_routes_1.default);
app.use('/admin', admin_routes_1.default);
const PORT = process.env.PORT;
if (!PORT) {
    console.error(messages_1.messages.ERROR_PORT_ENV);
    process.exit(1);
}
app.listen(PORT, () => {
    console.log(`${messages_1.messages.SUCCESS_PORT} ${PORT}`);
});
//# sourceMappingURL=app.js.map