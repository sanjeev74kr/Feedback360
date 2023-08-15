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
exports.signUpController = exports.logInController = void 0;
const user_service_1 = require("../services/user_service");
const sendErrorResponse_1 = __importDefault(require("../utils/sendErrorResponse"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const logInController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const adminId = req.body.adminId;
        const res = yield (0, user_service_1.logIn)(email, password, adminId);
        console.log("res:", res);
        if (res != null) {
            const token = generateAuthToken(res._id, res.role);
            resp.cookie('userjwt', token);
            resp.status(200).send("LoggedIn succesfully");
        }
        else {
            resp.status(404).send("Invalid credentials");
        }
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 505, "Some error occured");
    }
});
exports.logInController = logInController;
const signUpController = (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const res = yield (0, user_service_1.signUp)(data);
        console.log("res:", res);
        const token = generateAuthToken(res._id, res.role);
        resp.cookie('userjwt', token);
        resp.status(200).send("Signed up successfully");
    }
    catch (error) {
        (0, sendErrorResponse_1.default)(resp, error, 505, "Error occured while signing up");
    }
});
exports.signUpController = signUpController;
function generateAuthToken(userId, role) {
    const SECRET_KEY = process.env.SECRET_KEY;
    if (SECRET_KEY != null) {
        const token = jsonwebtoken_1.default.sign({ userId, role }, SECRET_KEY);
        return token;
    }
}
//# sourceMappingURL=user_controller.js.map