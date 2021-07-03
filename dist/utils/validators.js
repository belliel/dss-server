"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNotOnlyNumbers = exports.isNotLatin = void 0;
const regexps_1 = require("./regexps");
const isNotLatin = value => {
    if (!!(value).toString().match(regexps_1.nonASCIISymbols)) {
        return Promise.reject("value is not latin");
    }
    return true;
};
exports.isNotLatin = isNotLatin;
const isNotOnlyNumbers = value => {
    if (!isNaN(Number(value))) {
        return Promise.reject("value is only numbers");
    }
    return true;
};
exports.isNotOnlyNumbers = isNotOnlyNumbers;
//# sourceMappingURL=validators.js.map