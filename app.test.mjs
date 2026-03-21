import { jest } from '@jest/globals';
import { analyzerStock } from './app.js';

describe('Stock Analyzer Tests', () => {
    test('analyzerStock function should be defined', () => {
        expect(analyzerStock).toBeDefined();
    });
});