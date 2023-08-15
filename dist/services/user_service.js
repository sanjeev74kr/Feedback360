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
exports.signUp = exports.logIn = void 0;
const user_model_1 = require("../models/user_model");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const logIn = (email, password, adminId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.userModel.findOne({ email: email });
        if (user != null) {
            const isCompare = yield bcryptjs_1.default.compare(password, user.password);
            if (isCompare) {
                if (user.role === 'admin') {
                    if (validateAdmin(user, adminId))
                        return user;
                    else
                        return null;
                }
                return user;
            }
            else
                return null;
        }
    }
    catch (error) {
        console.log(error);
        throw new Error();
    }
});
exports.logIn = logIn;
const validateAdmin = (user, adminId) => {
    if (user.adminId.includes(adminId))
        return true;
    else
        return false;
};
const signUp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const password = data.password;
        const hashedpassword = yield bcryptjs_1.default.hash(password, 10);
        const newUser = new user_model_1.userModel({
            name: data.name,
            email: data.email,
            phone: data.phone,
            password: hashedpassword,
            role: data.role,
            adminId: data.adminId
        });
        yield newUser.validate();
        yield newUser.save();
        return newUser;
    }
    catch (error) {
        console.log(error);
        throw new Error();
    }
});
exports.signUp = signUp;
//# sourceMappingURL=user_service.js.map