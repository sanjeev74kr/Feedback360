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
const business_model_1 = require("../models/business_model");
const messages_1 = require("../utils/messages");
const getAnalytics = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield business_model_1.businessModel.aggregate([
            {
                $lookup: {
                    from: 'feedbacks',
                    localField: '_id',
                    foreignField: 'businessId',
                    as: 'businessFeedbacks',
                },
            },
        ]);
        console.log(businesses);
        return businesses;
    }
    catch (error) {
        throw new Error(messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getAnalytics = getAnalytics;
//# sourceMappingURL=admin_service.js.map