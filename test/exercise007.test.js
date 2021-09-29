const {
    sumDigits,
    createRange
} = require("../challenges/exercise007");

describe("sumDigits", () => {
    test('it throws an error if not passed array ', () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
        expect(() => {
            sumDigits(12.34);
        }).toThrow("n is not integer");
    });

    test('it works okay with decimal numbers', () => {
        expect(sumDigits(123)).toBe(6);
        expect(sumDigits(457)).toBe(16);
    });
});
describe("createRange", () => {
    test('it throws an error if not passed array ', () => {
        expect(() => {
            createRange();
        }).toThrow("start is required");
        expect(() => {
            createRange(12);
        }).toThrow("end is required");
    });

    test('it works okay without enter step value', () => {
        expect(createRange(1,3)).toStrictEqual([1,2,3]);
    });
    test('it works okay with enter step value', () => {
        expect(createRange(1,9,2)).toStrictEqual([1,3,5,7,9]);
    });
});