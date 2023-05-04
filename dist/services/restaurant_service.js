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
exports.postReview = exports.saveRestaurant = exports.getRestaurantById = exports.getAllRestaurants = void 0;
const restaurant_model_1 = require("../models/restaurant_model");
const review_model_1 = require("../models/review_model");
const messages_1 = require("../utils/messages");
const getAllRestaurants = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield restaurant_model_1.restaurantModel.find({}, { name: 1, address: 1 });
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getAllRestaurants = getAllRestaurants;
const getRestaurantById = (restaurantId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield restaurant_model_1.restaurantModel.aggregate([
            {
                $match: { _id: restaurantId },
            },
            {
                $lookup: {
                    from: "reviews",
                    localField: "_id",
                    foreignField: "restaurantId",
                    as: "restaurantReviews",
                },
            },
            {
                $project: {
                    name: 1,
                    address: 1,
                    description: 1,
                    "restaurantReviews.rating": 1,
                    "restaurantReviews.reviewText": 1,
                },
            },
        ]);
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getRestaurantById = getRestaurantById;
const saveRestaurant = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newRestaurant = new restaurant_model_1.restaurantModel(data);
        return yield newRestaurant.save();
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.saveRestaurant = saveRestaurant;
const postReview = (restaurantId, rating, reviewText) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newReview = new review_model_1.reviewModel({ restaurantId, rating, reviewText });
        return yield newReview.save();
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.postReview = postReview;
//# sourceMappingURL=restaurant_service.js.map