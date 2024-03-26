"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IVFRounds = void 0;
class IVFRounds {
    generate(num) {
        let output = [];
        for (let i = 0; i < num; i++) {
            const live_birth = (i + 1) % 5 === 0;
            output.push(this.fetchReplacement(i, live_birth));
        }
        return output;
    }
    fetchReplacement(num, live_birth) {
        let ivf = "";
        if (num % 3 === 0) {
            ivf = "FRESH";
        }
        else {
            ivf = "FROZEN";
        }
        if (live_birth) {
            return ivf + "+LIVE_BIRTH";
        }
        else {
            return ivf;
        }
    }
}
exports.IVFRounds = IVFRounds;
