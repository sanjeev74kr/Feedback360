"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sendErrorResponse(resp, error, statusCode, message) {
    console.log(error);
    resp.status(statusCode).send(message);
}
exports.default = sendErrorResponse;
//# sourceMappingURL=sendErrorResponse.js.map