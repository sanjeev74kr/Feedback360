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
exports.getAnalyticsForAdmin = void 0;
const admin_service_1 = require("../services/admin_service");
const sendErrorResponse_1 = __importDefault(require("../utils/sendErrorResponse"));
const messages_1 = require("../utils/messages");
const getAnalyticsForAdmin = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const analytics = yield (0, admin_service_1.getAnalytics)();
        resp.status(200).json(analytics);
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 500, messages_1.messages.ERROR_FETCHING_DATA);
    }
});
exports.getAnalyticsForAdmin = getAnalyticsForAdmin;
//# sourceMappingURL=admin_controller.js.map