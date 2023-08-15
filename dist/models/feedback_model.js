"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feedbackModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const feedbackSchema = new mongoose_1.default.Schema({
    businessId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'businesses',
        required: true
    },
    ratings: {
        type: Number,
        required: true
    },
    reviews: {
        type: String,
    },
});
const feedbackModel = mongoose_1.default.model('feedbacks', feedbackSchema);
exports.feedbackModel = feedbackModel;
//# sourceMappingURL=feedback_model.js.map