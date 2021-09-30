const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB
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
        expect(createRange(1, 3)).toStrictEqual([1, 2, 3]);
    });
    test('it works okay with enter step value', () => {
        expect(createRange(1, 9, 2)).toStrictEqual([1, 3, 5, 7, 9]);
    });
});
describe("getScreentimeAlertList", () => {
    test('it throws an error if not passed users or date ', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
        ];
        expect(() => {
            getScreentimeAlertList();
        }).toThrow("users is required");
        expect(() => {
            getScreentimeAlertList(users);
        }).toThrow("date is required");
    });

    test('return empty array if date not found in user array  or no user exceed limit usage time in this date', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-06-04", usage: { twitter: 10, instagram: 20, facebook: 70 } },
                ]
            },
            {
                username: "Mar_1234",
                name: "Marwa ",
                screenTime: [
                    { date: "2019-06-01", usage: { twitter: 34, instagram: 8, facebook: 40 } },
                    { date: "2019-06-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-06-03", usage: { twitter: 12, instagram: 0, facebook: 19 } },
                    { date: "2019-06-04", usage: { twitter: 10, instagram: 40, facebook: 10 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, '2019-06-07')).toStrictEqual([]);
        expect(getScreentimeAlertList(users, '2019-06-04')).toStrictEqual([]);
    });
    test('return all users in array if usage record are above 100 min in given date', () => {
        const users = [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-06-01", usage: { twitter: 34, instagram: 22, facebook: 60 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "Mar_1234",
                name: "Marwa ",
                screenTime: [
                    { date: "2019-06-01", usage: { twitter: 34, instagram: 60, facebook: 40 } },
                    { date: "2019-06-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-06-03", usage: { twitter: 12, instagram: 0, facebook: 19 } },
                    { date: "2019-06-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            }
        ];
        expect(getScreentimeAlertList(users, '2019-06-01')).toStrictEqual(["beth_1234", "Mar_1234"]);
    });
});
describe("hexToRGB", () => {
    test('it throws an error if not passed array ', () => {
        expect(() => {
            hexToRGB();
        }).toThrow("hexStr is required");
    });

    test('it return the Rigt RGB formate', () => {
        expect(hexToRGB('#FF1133')).toBe('rgb(255,17,51)');
        expect(hexToRGB('#FF0070')).toBe('rgb(255,0,112)');
    });
    test('it works okay with edges', () => {
        expect(hexToRGB('#FFFFFF')).toBe('rgb(255,255,255)');
        expect(hexToRGB('#000000')).toBe('rgb(0,0,0)');
    });
});