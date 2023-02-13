const sum = require('../sum');

let index = 0;
describe("Flaky-sum-most", () => {
    it("should pass only on second run", () => {
        console.log(index);
        index = index + 1;
        if (index === 3) {
            expect(sum(1, 2)).toBe(3);
        } else {
            console.log("wrong answerr!!");
            expect(sum(1, 2)).toBe(5);
        }
    });

    it.skip('it is skipped', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it("should not pass", () => {
        expect(sum(1, 2)).toBe(5);
    });

    it("should raise error", () => {
        throw new Error("intentional error!");
    });
});

describe("Flaky-sum", () => {
    it("should dasdasdasdasda", () => {
        expect(sum(1, 2)).toBe(3);
    });
});