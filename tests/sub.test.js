const sub = require('../sub');

let index = 0;
describe("Flaky-sub-most", () => {
    it("should pass only on third run", () => {
        console.log(index);
        index = index + 1;
        if (index === 3) {
            expect(sub(1, 2)).toBe(-1);
        } else {
            console.log("wrong answerr!!");
            expect(sub(1, 2)).toBe(5);
        }
    });

    it.skip('it is skipped', () => {
        expect(sub(1, 2)).toBe(3);
    });

    it("should not pass", () => {
        expect(sub(1, 2)).toBe(5);
    });

    it("should raise error", () => {
        throw new Error("intentional error!");
    });
});

describe("Flaky-sub-most-2", () => {
    it("should pass only on third run", () => {
        console.log(index);
        index = index + 1;
        if (index === 3) {
            expect(sub(1, 2)).toBe(-1);
        } else {
            console.log("wrong answerr!!");
            expect(sub(1, 2)).toBe(5);
        }
    });

    it.skip('it is skipped', () => {
        expect(sub(1, 2)).toBe(3);
    });

    it("should not pass", () => {
        expect(sub(1, 2)).toBe(5);
    });

    it("should raise error", () => {
        throw new Error("intentional error!");
    });
});

describe("success-sub", () => {
    it("should dasdasdasdasda", () => {
        expect(sub(1, 2)).toBe(3);
    });
});