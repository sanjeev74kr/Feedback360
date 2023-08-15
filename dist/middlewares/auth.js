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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, resp, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.cookies.userjwt;
        const SECRET_KEY = process.env.SECRET_KEY;
        if (SECRET_KEY != null) {
            const decodedToken = jsonwebtoken_1.default.verify(token, SECRET_KEY);
            console.log("verification result:", decodedToken);
            const role = decodedToken.role;
            if (role === 'admin')
                next();
            else
                resp.json("Not authoried to visit");
        }
    }
    catch (error) {
        console.log(error);
        throw new Error();
    }
});
exports.default = auth;
//# sourceMappingURL=auth.js.map