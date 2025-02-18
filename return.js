const check = () => {
    console.log('Видно');
    return 'результат';
    console.log('Не видно'); // не выполняется
};

console.log(check());