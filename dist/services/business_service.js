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
exports.postFeedback = exports.saveBusiness = exports.getBusinessById = exports.getAllBusinesses = exports.getBusinessByCategory = void 0;
console.log("entered in service class upr");
const business_model_1 = require("../models/business_model");
const feedback_model_1 = require("../models/feedback_model");
const messages_1 = require("../utils/messages");
const getBusinessByCategory = (categoryIs) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("entered in service class");
        return yield business_model_1.businessModel.find({ category: categoryIs });
    }
    catch (error) {
        console.log("error is: ", error);
        throw new Error(messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getBusinessByCategory = getBusinessByCategory;
const getAllBusinesses = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield business_model_1.businessModel.find();
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getAllBusinesses = getAllBusinesses;
const getBusinessById = (restaurantId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield business_model_1.businessModel.aggregate([
            {
                $match: { _id: 'businessId' },
            },
            {
                $lookup: {
                    from: "feedbacks",
                    localField: "_id",
                    foreignField: "businessId",
                    as: "businessFeedbacks",
                },
            },
            {
                $project: {
                    name: 1,
                    location: 1,
                    description: 1,
                    "businessFeedbacks.ratings": 1,
                    "businessFeedbacks.reviews": 1,
                },
            },
        ]);
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getBusinessById = getBusinessById;
const saveBusiness = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBusiness = new business_model_1.businessModel(data);
        return yield newBusiness.save();
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.saveBusiness = saveBusiness;
const postFeedback = (businessId, ratings, reviews) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newFeedback = new feedback_model_1.feedbackModel({ businessId, ratings, reviews });
        return yield newFeedback.save();
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.postFeedback = postFeedback;
//# sourceMappingURL=business_service.js.map