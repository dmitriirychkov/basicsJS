// Функция newYear принимает имя персонажа и возвращает строку с использованием шаблонных строк
function newYear(character) {
    // Проверяем, какой персонаж передан
    if (character === 'Дед Мороз') {
        return `${character}! ${character}! ${character}!`;
    } else if (character === 'Снегурочка') {
        return `${character}! ${character}! ${character}!`;
    } else {
        return 'Неизвестный персонаж'; // Обработка случая, если передано неизвестное имя
    }
}

// Экспортируем функцию для использования в тестах
module.exports = newYear;