import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "16-11247"
        ));
    });

    test('should return my name', () => {
        const query = "What is your name";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "AmarantaVc"
        ));
    });

    // Nuevas pruebas para operaciones matemáticas
    test('should return the sum of 25 plus 69', () => {
        const query = "What is 25 plus 69?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("94");
    });

    test('should return the sum of 33 plus 23', () => {
        const query = "What is 33 plus 23?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("56");
    });

    test('should return the sum of 32 plus 27', () => {
        const query = "What is 32 plus 27?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("59");
    });

    test('should return the sum of 10 plus 69', () => {
        const query = "What is 10 plus 69?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("79");
    });

    test('should return the sum of 82 plus 22', () => {
        const query = "What is 82 plus 22?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("104");
    });

    test('should return the largest number from given numbers', () => {
        const query = "Which of the following numbers is the largest: 61, 96, 30?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("96");
    });

    test('should return the sum of 86 plus 70', () => {
        const query = "What is 86 plus 70?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("156");
    });

    test('should return the sum of 60 plus 70', () => {
        const query = "What is 60 plus 70?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("130");
    });

    test('should return the sum of 13 plus 61', () => {
        const query = "What is 13 plus 61?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("74");
    });

    test('should return the sum of 78 plus 37', () => {
        const query = "What is 78 plus 37?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("115");
    });

    test('should return the largest number from given numbers', () => {
        const query = "Which of the following numbers is the largest: 31, 17, 51?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("51");
    });

    test('should return the largest number from given numbers', () => {
        const query = "Which of the following numbers is the largest: 31, 67, 98?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("98");
    });

    test('should return the largest number from given numbers', () => {
        const query = "Which of the following numbers is the largest: 18, 87, 71?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("87");
    });
});