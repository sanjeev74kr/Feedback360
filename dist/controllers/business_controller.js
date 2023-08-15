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
exports.postFeedbackController = exports.saveBusinessController = exports.getBusinessByIdController = exports.getAllBusinessController = exports.getBusinessByCategoryController = void 0;
console.log("Entered in controller file");
const mongoose_1 = require("mongoose");
const business_service_1 = require("../services/business_service");
const sendErrorResponse_1 = __importDefault(require("../utils/sendErrorResponse"));
const messages_1 = require("../utils/messages");
const getBusinessByCategoryController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.body.category;
        console.log("category written in body: ", category);
        const businesses = yield (0, business_service_1.getBusinessByCategory)(category);
        if (businesses.length == 0) {
            resp.status(404).json(`No business is listed in  ${category} category`);
        }
        else {
            console.log("returned from service class");
            resp.status(200).json(businesses);
        }
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getBusinessByCategoryController = getBusinessByCategoryController;
const getAllBusinessController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businesses = yield (0, business_service_1.getAllBusinesses)();
        resp.status(200).json(businesses);
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getAllBusinessController = getAllBusinessController;
const getBusinessByIdController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params._id;
        const business = yield (0, business_service_1.getBusinessById)(new mongoose_1.Types.ObjectId(businessId));
        resp.status(200).json(business);
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getBusinessByIdController = getBusinessByIdController;
const saveBusinessController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const business = yield (0, business_service_1.saveBusiness)(req.body);
        resp.status(200).json({ message: messages_1.messages.SUCCESS_BUSINESS_SAVED });
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.saveBusinessController = saveBusinessController;
const postFeedbackController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const businessId = req.params._id;
        const ratings = req.body.rating;
        const reviews = req.body.reviewText;
        yield (0, business_service_1.postFeedback)(new mongoose_1.Types.ObjectId(businessId), ratings, reviews);
        resp.status(200).json({ message: messages_1.messages.SUCCESS_REVIEW_SUBMIT });
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_SAVING_DATA);
    }
});
exports.postFeedbackController = postFeedbackController;
//# sourceMappingURL=business_controller.js.map