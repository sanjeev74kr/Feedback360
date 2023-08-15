"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user_controller");
const router = express_1.default.Router();
router.post('/signUp', user_controller_1.signUpController);
router.post('/logIn', user_controller_1.logInController);
exports.default = router;
//# sourceMappingURL=user_routes.js.map