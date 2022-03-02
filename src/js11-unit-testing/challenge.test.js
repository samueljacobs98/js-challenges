import * as challenge from "./js11";

describe("greet function should return a new greeting string", () => {
    it("should return a new string \"Hello, nice to meet you\"", () => {
        const result = challenge.greet()
        expect(result).toBe("Hello, nice to meet you")
    })
})

describe("sumTwoNumbers should return the sum of two input numbers", () => {
    it("Adds 2 and 4 to equal 6", () => {
        const result = challenge.sumTwoNumbers(2,4)
        expect(result).toBe(6)
    })
    it("Adds 2 and -4 to equal -2", () => {
        const result = challenge.sumTwoNumbers(2,-4)
        expect(result).toBe(-2)
    })
})

describe("checkLarger returns string describing relationship between two numbers", () => {
    it("when num1=100 & num2=99 returns \"100 is bigger than 99\"", () => {
        const result = challenge.checkLarger(100,99)
        expect(result).toBe("100 is bigger than 99")
    })
    it("when num1=99 & num2=100 returns \"100 is bigger than 99\"", () => {
        const result = challenge.checkLarger(99,100)
        expect(result).toBe("100 is bigger than 99")
    })
    it("when num1=100 & num2=100 returns \"Both numbers are equal\"", () => {
        const result = challenge.checkLarger(100,100)
        expect(result).toBe("Both numbers are equal")
    })
})

describe("filterByLength return a filtered array of valid names", () => {
    it("Should return [\"Samuel\",\"Stuart\"] if input is [\"Samuel\",\"Jonathan\",\"Stuart\"]", () => {
        const array = ["Samuel", "Jonathan", "Stuart"]
        const result = challenge.filterByLength(array)
        expect(result).toStrictEqual(["Samuel", "Stuart"])

    })
    it("should return \"Sorry, no valid names supplied\" if no elements exist in the filtered array", () => {
        const array = ["1234567","abcdefg"]
        const result = challenge.filterByLength(array)
        expect(result).toBe("Sorry, no valid names supplied")
    })
    it("should return \"Sorry, no valid names supplied\" if the names array is empty", () => {
        const array = []
        const result = challenge.filterByLength(array)
        expect(result).toBe("Sorry, no valid names supplied")
    })
})

describe("Returns new array with 0 =< number =< 255 and each number has been reduced", () => {
    it("Should return a new array of [8, 27, 14]", () => {
        const array = [16,35,22]
        const reducer = 8
        const result = challenge.reduceNumbers(array,reducer)
        expect(result).toStrictEqual([8, 27, 14])
    })
    it("Should return a new array of [0, 27, 14]", () => {
        const array = [-16,35,22]
        const reducer = 8
        const result = challenge.reduceNumbers(array,reducer)
        expect(result).toStrictEqual([0, 27, 14])
    })
    it("Should return a new array of [0, 27, 14]", () => {
        const array = [8,35,22]
        const reducer = 8
        const result = challenge.reduceNumbers(array,reducer)
        expect(result).toStrictEqual([0, 27, 14])
    })
    it("Should return a new array of [0, 27, 250]", () => {
        const array = [-16,35,265]
        const reducer = 8
        const result = challenge.reduceNumbers(array,reducer)
        expect(result).toStrictEqual([0, 27, 255])
    })
    it("Should return a new array of [0, 27, 250]", () => {
        const array = [-16,35,263]
        const reducer = 8
        const result = challenge.reduceNumbers(array,reducer)
        expect(result).toStrictEqual([0, 27, 255])
    })
})