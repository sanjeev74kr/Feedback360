"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Entered in route file");
const express_1 = __importDefault(require("express"));
const business_controller_1 = require("../controllers/business_controller");
const router = express_1.default.Router();
console.log("Entered again in route file");
router.get('/category', business_controller_1.getBusinessByCategoryController);
router.get('', business_controller_1.getAllBusinessController);
router.get('/:_id', business_controller_1.getBusinessByIdController);
router.post('/:_id/feedback', business_controller_1.postFeedbackController);
router.post('/save', business_controller_1.saveBusinessController);
exports.default = router;
//# sourceMappingURL=business_routes.js.map