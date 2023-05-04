"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReviewController = exports.saveRestaurantController = exports.getRestaurantByIdController = exports.getAllRestaurantsController = void 0;
const mongoose_1 = require("mongoose");
const restaurant_service_1 = require("../services/restaurant_service");
const sendErrorResponse_1 = __importDefault(require("../utils/sendErrorResponse"));
const messages_1 = require("../utils/messages");
const getAllRestaurantsController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield (0, restaurant_service_1.getAllRestaurants)();
        resp.status(200).json(restaurants);
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getAllRestaurantsController = getAllRestaurantsController;
const getRestaurantByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantId = req.params._id;
        const restaurant = yield (0, restaurant_service_1.getRestaurantById)(new mongoose_1.Types.ObjectId(restaurantId));
        resp.status(200).json(restaurant);
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getRestaurantByIdController = getRestaurantByIdController;
const saveRestaurantController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurant = yield (0, restaurant_service_1.saveRestaurant)(req.body);
        resp.status(200).json({ message: messages_1.messages.SUCCESS_RESTAURANT_SAVED });
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.saveRestaurantController = saveRestaurantController;
const postReviewController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantId = req.params._id;
        const rating = req.body.rating;
        const reviewText = req.body.reviewText;
        yield (0, restaurant_service_1.postReview)(new mongoose_1.Types.ObjectId(restaurantId), rating, reviewText);
        resp.status(200).json({ message: messages_1.messages.SUCCESS_REVIEW_SUBMIT });
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.postReviewController = postReviewController;
//# sourceMappingURL=restaurant_controller.js.map