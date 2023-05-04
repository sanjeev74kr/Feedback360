"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_controller_1 = require("../controllers/restaurant_controller");
const router = express_1.default.Router();
router.get('', restaurant_controller_1.getAllRestaurantsController);
router.get('/:_id', restaurant_controller_1.getRestaurantByIdController);
router.post('/:_id/review', restaurant_controller_1.postReviewController);
router.post('/post', restaurant_controller_1.saveRestaurantController);
exports.default = router;
//# sourceMappingURL=restaurant_routes.js.map