"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const restaurantSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    address: { type: String,
        required: true
    },
    description: { type: String,
        required: true },
});
const restaurantModel = mongoose_1.default.model('restaurants', restaurantSchema);
exports.restaurantModel = restaurantModel;
//# sourceMappingURL=restaurant_model.js.map