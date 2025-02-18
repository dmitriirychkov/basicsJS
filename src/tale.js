function kolobok(character) {
    // Проверяем, какой персонаж передан
    if (character === 'дедушка') {
        return 'Я от дедушки ушёл';
    } else if (character === 'заяц') {
        return 'Я от зайца ушёл';
    } else if (character === 'лиса') {
        return 'Меня съели';
    } else {
        return 'Неизвестный персонаж'; // Обработка случая, если передано неизвестное имя
    }
}

// Экспортируем функцию для использования в тестах
module.exports = kolobok;