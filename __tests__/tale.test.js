// Импортируем функцию kolobok из tale.js
const kolobok = require('../src/tale');

// Тестовый набор для функции kolobok
test('kolobok meets дедушка', () => {
    expect(kolobok('дедушка')).toBe('Я от дедушки ушёл');
});

test('kolobok meets заяц', () => {
    expect(kolobok('заяц')).toBe('Я от зайца ушёл');
});

test('kolobok meets лиса', () => {
    expect(kolobok('лиса')).toBe('Меня съели');
});

test('kolobok meets unknown character', () => {
    expect(kolobok('медведь')).toBe('Неизвестный персонаж');
});