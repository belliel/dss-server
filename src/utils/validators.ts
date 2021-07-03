import { CustomValidator } from "express-validator";
import { nonASCIISymbols } from "./regexps";

const isNotLatin: CustomValidator = value => {
    if (!!(value).toString().match(nonASCIISymbols)) {
        return Promise.reject("value is not latin")
    }
    return true
}

const isNotOnlyNumbers: CustomValidator = value => {
    if (!isNaN(Number(value))) {
        return Promise.reject("value is only numbers")
    }
    return true
}

export {
    isNotLatin,
    isNotOnlyNumbers
}