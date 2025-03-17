// app.js
function getScore(scores) {
    let total = 0;
    for (let name in scores) {
      total += scores[name];
    }
    return total;
  }
  
  module.exports = getScore; // Экспорт функции для использования в тестах