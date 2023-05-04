"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("../controllers/admin_controller");
const router = express_1.default.Router();
router.get('/analytics', admin_controller_1.getAnalyticsForAdmin);
exports.default = router;
//# sourceMappingURL=admin_routes.js.map