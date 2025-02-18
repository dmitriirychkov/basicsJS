// Импортируем функцию newYear из tale.js
const newYear = require('../src/tale2');

// Тестовый набор для функции newYear
test('newYear meets Дед Мороз', () => {
    expect(newYear('Дед Мороз')).toBe('Дед Мороз! Дед Мороз! Дед Мороз!');
});

test('newYear meets Снегурочка', () => {
    expect(newYear('Снегурочка')).toBe('Снегурочка! Снегурочка! Снегурочка!');
});

test('newYear meets unknown character', () => {
    expect(newYear('Леший')).toBe('Неизвестный персонаж');
});