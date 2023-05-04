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
exports.getAnalytics = void 0;
const restaurant_model_1 = require("../models/restaurant_model");
const messages_1 = require("../utils/messages");
const getAnalytics = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield restaurant_model_1.restaurantModel.aggregate([
            {
                $lookup: {
                    from: 'reviews',
                    localField: '_id',
                    foreignField: 'restaurantId',
                    as: 'restaurantReviews',
                },
            },
            {
                $group: {
                    _id: '$_id',
                    restaurantId: { $first: '$_id' },
                    name: { $first: '$name' },
                    reviewCount: { $sum: { $size: '$restaurantReviews' }
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    ID: '$restaurantId',
                    RestaurantName: '$name',
                    TotalReviews: '$reviewCount'
                },
            },
        ]);
        return restaurants;
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getAnalytics = getAnalytics;
//# sourceMappingURL=admin_service.js.map