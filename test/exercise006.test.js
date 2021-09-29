const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test('it throws an error if not passed array ', () => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
        // expect(sumMultiples()).toThrow("arr is required");why this not working ??
        expect(() => {
            sumMultiples("foo");
        }).toThrow("arr must be an Array");
        expect(() => {
            sumMultiples(4);
        }).toThrow("arr must be an Array");
    });

    test('it works okay with decimal numbers', () => {
        expect(sumMultiples([1, 3, 5.0, 2, 12, 10])).toBe(30);
    });
    test('return 0 if there are no multiple of 3 or 5 ', () => {
        expect(sumMultiples([1, 4, 13.0, 2, 17, 11])).toBe(0);
    });


});
describe("isValidDNA", () => {//C, G, T or A
    test('it throws an error if not passed String ', () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
    });
    test("if the string is only letters from (C, G, T or A) , returns true", () => {
        expect(isValidDNA("C")).toBe(true);
        expect(isValidDNA("G")).toBe(true);
        expect(isValidDNA("A")).toBe(true);
        expect(isValidDNA("T")).toBe(true);
        expect(isValidDNA("GTT")).toBe(true);
        expect(isValidDNA("TAGGG")).toBe(true);
        expect(isValidDNA("GGGG")).toBe(true);
        expect(isValidDNA("AAAAT")).toBe(true);
        expect(isValidDNA("CGTA")).toBe(true);

    });
    test("Should not be case sensitive", () => {
        expect(isValidDNA("CGaaa")).toBe(true);
        expect(isValidDNA("cgTa")).toBe(true);
        expect(isValidDNA("cgTamM")).toBe(false);
    });

    test("Should return false ,  if any letter found other than (C, G, T or A) in the string", () => {
        expect(isValidDNA("CGMT")).toBe(false);
        expect(isValidDNA("GG7G")).toBe(false);
        expect(isValidDNA("AA!AT")).toBe(false);
    });
    test("Should return false ,  if no letter found from (C, G, T or A) in the string ", () => {
        expect(isValidDNA("lll")).toBe(false);
    });
});
describe("getComplementaryDNA", () => {
    test('it throws an error if not a valid String ', () => {
        expect(() => {
            getComplementaryDNA();
        }).toThrow("str is required");
        expect(() => {
            getComplementaryDNA("NMNMN");
        }).toThrow("str is not a valid DNA string");
    });
    test("return a valid basePair", () => {
        expect(getComplementaryDNA("CGT")).toBe("GCA");
        expect(getComplementaryDNA("G")).toBe("C");
        expect(getComplementaryDNA("GAT")).toBe("CTA");
    });
    test("Should not be case sensitive", () => {
        expect(getComplementaryDNA("cgt")).toBe("GCA");
        expect(getComplementaryDNA("a")).toBe("T");
        expect(getComplementaryDNA("gaT")).toBe("CTA");
    });
});
describe("isItPrime", () => {
    test('it throws an error if not a number ', () => {
        expect(() => {
            isItPrime();
        }).toThrow("n is required");
        expect(() => {
            isItPrime(3.65);
        }).toThrow("n is not an integer");
        expect(() => {
            isItPrime(-5);
        }).toThrow("negative integers can not be prime");
        expect(() => {
            isItPrime(0);
        }).toThrow("zero is not prime");
        expect(() => {
            isItPrime(1);
        }).toThrow("1 is not prime");
    });
    test('should return true ,if it is a prime number', () => {
        expect(isItPrime(3)).toBe(true);
        expect(isItPrime(23)).toBe(true);
    });
    test('should return false ,if not a prime number', () => {
        expect(isItPrime(6)).toBe(false);
        expect(isItPrime(102)).toBe(false);
    });
});
describe("createMatrix", () => {
    test('it throws an error if not pass parameters ', () => {
        expect(() => {
            createMatrix();
        }).toThrow("n is required");
        expect(() => {
            createMatrix(5);
        }).toThrow("fill is required");
    });
    test('should return matrix ', () => {
        //to solve serializes to the same string problem to make deep comparison
        expect(createMatrix(3, 'fn')).toStrictEqual([['fn', 'fn', 'fn'], ['fn', 'fn', 'fn'], ['fn', 'fn', 'fn']]);
    });
});
describe("areWeCovered", () => {
    test('it rthrow error  send undefined staff or day', () => {
        expect(() => {
            areWeCovered(areWeCovered());
        }).toThrow("staff is required");
        expect(() => {
            areWeCovered(([{ name: "marwa", rota: ["Monday", "Tuesday"] }]));
        }).toThrow("day is required");


    });
    test('it returns false , if  there are no  staff', () => {
        expect(areWeCovered([], 'Saturday')).toBe(false);
    });
    test('it returns false , if  there are  staff but not schedual to work ', () => {
        const staff = [
            { name: "marwa", rota: ["Monday", "Tuesday"] },
            { name: "adam", rota: ["Monday", "Tuesday"] },
            { name: "Noha", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] }
        ];
        expect(areWeCovered(staff, 'Saturday')).toBe(false);
    });
    test('it returns true , if  there are more than 3 staff  ', () => {
        const staff = [
            { name: "marwa", rota: ["Monday", "Tuesday"] },
            { name: "adam", rota: ["Monday", "Tuesday"] },
            { name: "Noha", rota: ["Monday", "Tuesday"] },
            { name: "jess", rota: ["Monday", "Tuesday"] }
        ];
        expect(areWeCovered(staff, 'Monday')).toBe(true);
    });
});