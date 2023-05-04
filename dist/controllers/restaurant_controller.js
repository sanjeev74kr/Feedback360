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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postReviewController = exports.saveRestaurantController = exports.getRestaurantByIdController = exports.getAllRestaurantsController = void 0;
const mongoose_1 = require("mongoose");
const restaurant_service_1 = require("../services/restaurant_service");
const getAllRestaurantsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield (0, restaurant_service_1.getAllRestaurants)();
        res.status(200).json(restaurants);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.getAllRestaurantsController = getAllRestaurantsController;
const getRestaurantByIdController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantId = req.params._id;
        const restaurant = yield (0, restaurant_service_1.getRestaurantById)(new mongoose_1.Types.ObjectId(restaurantId));
        res.status(200).json(restaurant);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.getRestaurantByIdController = getRestaurantByIdController;
const saveRestaurantController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurant = yield (0, restaurant_service_1.saveRestaurant)(req.body);
        res.status(200).json({ message: 'data saved successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.saveRestaurantController = saveRestaurantController;
const postReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurantId = req.params._id;
        const reviewText = req.body.reviewText;
        yield (0, restaurant_service_1.postReview)(new mongoose_1.Types.ObjectId(restaurantId), reviewText);
        res.status(200).json({ message: 'Review submitted successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.postReviewController = postReviewController;
//# sourceMappingURL=restaurant_controller.js.map