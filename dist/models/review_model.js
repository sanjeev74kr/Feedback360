"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reviewSchema = new mongoose_1.default.Schema({
    restaurantId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'restaurants',
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    },
});
const reviewModel = mongoose_1.default.model('reviews', reviewSchema);
exports.reviewModel = reviewModel;
//# sourceMappingURL=review_model.js.map