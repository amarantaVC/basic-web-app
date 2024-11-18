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

    test('should return the sum of 39 plus 93', () => {
        const query = "What is 39 plus 93?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("132");
    });

    test('should return the sum of 1 plus 61', () => {
        const query = "What is 1 plus 61?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("62");
    });

    test('should return the largest number from given numbers', () => {
        const query = "Which of the following numbers is the largest: 37, 17, 51?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("51");
    });

    test('should return the sum of 78 plus 37', () => {
        const query = "What is 78 plus 37?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("115");
    });

    test('should return the sum of 8 plus 89', () => {
        const query = "What is 8 plus 89?";
        const response: string = QueryProcessor(query);
        expect(response).toBe("97");
    });
});