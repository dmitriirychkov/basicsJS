// app.test.js
const getScore = require('./app'); // Импорт функции из app.js

describe('getScore', () => {
  test('should correctly sum scores from object', () => {
    const scores = {
      Anna: 10,
      Olga: 1,
      Ivan: 5
    };
    expect(getScore(scores)).toBe(16);
  });

  test('should return 0 for empty object', () => {
    const scores = {};
    expect(getScore(scores)).toBe(0);
  });
});