"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ivfRounds_1 = require("../src/ivfRounds");
describe("Test generate", () => {
    const iVFRounds = new ivfRounds_1.IVFRounds;
    it("should return list of string arrays with fizz and buzz", () => {
        expect(iVFRounds.generate(5)).toEqual([
            "FRESH",
            "FROZEN",
            "FROZEN",
            "FRESH",
            "FROZEN+LIVE_BIRTH"
        ]);
    });
    it("should return list of string arrays with fizzbuzz", () => {
        expect(iVFRounds.generate(18)).toEqual([
            "FRESH",
            "FROZEN",
            "FROZEN",
            "FRESH",
            "FROZEN+LIVE_BIRTH",
            "FROZEN",
            "FRESH",
            "FROZEN",
            "FROZEN",
            "FRESH+LIVE_BIRTH",
            "FROZEN",
            "FROZEN",
            "FRESH",
            "FROZEN",
            "FROZEN+LIVE_BIRTH",
            "FRESH",
            "FROZEN",
            "FROZEN",
        ]);
    });
});
