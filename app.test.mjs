import { analyzerStock } from './app.js';

describe('Stock Analyzer Tests', () => {
    test('analyzerStock function should be defined', () => {
        expect(analyzerStock).toBeDefined();
    });

    test('Should handle invalid symbols gracefully', async () => {
        // This simulates a call with a fake stock
        const result = await analyzerStock('INVALID_TICKER');
        expect(result).toBeUndefined(); 
    });
});