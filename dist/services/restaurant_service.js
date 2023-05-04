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
const getAllRestaurants = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield restaurant_model_1.restaurantModel.find({}, { name: 1, address: 1 });
});
exports.getAllRestaurants = getAllRestaurants;
const getRestaurantById = (restaurantId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield restaurant_model_1.restaurantModel.aggregate([
        {
            $match: { _id: restaurantId },
        },
        {
            $lookup: {
                from: "reviews",
                localField: "_id",
                foreignField: "restaurantId",
                as: "reviews",
            },
        },
        {
            $project: {
                name: 1,
                address: 1,
                description: 1,
                "reviews.reviewText": 1,
            },
        },
    ]);
});
exports.getRestaurantById = getRestaurantById;
const saveRestaurant = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const newRestaurant = new restaurant_model_1.restaurantModel(data);
    return yield newRestaurant.save();
});
exports.saveRestaurant = saveRestaurant;
const postReview = (restaurantId, reviewText) => __awaiter(void 0, void 0, void 0, function* () {
    const newReview = new review_model_1.reviewModel({ restaurantId, reviewText });
    return yield newReview.save();
});
exports.postReview = postReview;
//# sourceMappingURL=restaurant_service.js.map