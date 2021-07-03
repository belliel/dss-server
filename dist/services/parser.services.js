"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParseSpecifiedFormatCall = async (value) => {
    const call = {
        duration: 0,
        startDate: new Date(),
        accessCode: 0,
        dialedNumber: "",
        chargedNumber: "",
        timeInQueue: 0,
    };
    if (value.split(" ").length === 6) {
        const _s = value.split(" ");
        // 0-1 seconds 2-3 minutes
        call.duration = parseInt(_s[0].slice(0, 2)) + (60 * parseInt(_s[0].slice(2, 4)));
        /* adding - to get date as string in format mm-dd-yyyy
        * 0-1 month mm
        * 2-3 day   dd
        * 4-8 year yyyy
        */
        const _d = _s[1].split("");
        _d.splice(2, 0, "-");
        _d.splice(5, 0, "-");
        call.startDate = new Date(_d.join(""));
        // access code at 2 splitted index
        call.accessCode = parseInt(_s[2]);
        // dialed number at 3 splitted index
        call.dialedNumber = _s[3];
        // charged number at 4 splitted index
        call.chargedNumber = _s[4];
        // time in queue at 5 splitted index
        call.timeInQueue = parseInt(_s[5]);
    }
    else {
        return { error: "invalid value" };
    }
    return call;
};
exports.default = {
    ParseSpecifiedFormatCall
};
//# sourceMappingURL=parser.services.js.map