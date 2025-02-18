function greet(name) { // Объявляем функцию с именем "greet", которая принимает один параметр "name"
    return `Hello, ${name}!`; // Возвращаем строку, где используется шаблонная строка (template string) с интерполяцией переменной "name". Результат будет "Hello, [значение name]!"
}
console.log(greet('World')); // Вызываем функцию "greet" с аргументом 'World'. Функция возвращает строку "Hello, World!", которую мы выводим в консоль с помощью console.log. Вывод: Hello, World!

const farewell = (name) => { // Объявляем стрелочную функцию с именем "farewell", которая также принимает один параметр "name"
    return `Farewell, ${name}!`; // Возвращаем строку, используя шаблонную строку с интерполяцией переменной "name". Результат будет "Farewell, [значение name]!"
};
console.log(farewell('World')); // Вызываем функцию "farewell" с аргументом 'World'. Функция возвращает строку "Farewell, World!", которую мы выводим в консоль с помощью console.log. Вывод: Farewell, World!