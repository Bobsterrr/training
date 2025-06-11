//Фильтр комментариев
// Цель: отработать регулярные выражения, работу с массивами, DOM и событиями.
//
// Условие:
// Сделай страницу с полем ввода и кнопкой "Проверить". Пользователь вводит текст комментария. Твоя задача — проверить, содержит ли он запрещённые слова (например: лох, тупой, дурак) с помощью регулярки и:
//
// если есть — показать предупреждение: “Ваш комментарий содержит недопустимые слова”
//
// если всё ок — показать: “Комментарий принят”
//
// Что ты потренируешь:
// RegExp, флаги (gi), методы test или match
//
// обработку событий и работу с value
//
// основы валидации пользовательского ввода
//
// ✅ Задача 2: Загрузка новостей с задержкой
// Цель: разобраться с промисами, fetch и async/await.
//
// Условие:
// Создай кнопку "Загрузить новости". При клике запускается async-функция, которая:
//
// Ждёт 2 секунды (await new Promise(resolve => setTimeout(resolve, 2000)))
//
// После этого делает fetch на:
//
// Копировать
// Редактировать
// https://jsonplaceholder.typicode.com/posts?_limit=5
// Показывает заголовки новостей на странице.
//
// Что ты потренируешь:
// Promise, setTimeout, async/await, try/catch
//
// отображение загрузки (например: “Загрузка...”)
//
// динамическое создание DOM-элементов

document.addEventListener('DOMContentLoaded', () => {
    const receivedText = document.getElementsByTagName("input")[0];
    console.log(receivedText);

    receivedText.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const message = receivedText.value;
            if (message.length > 0) {
                const regex = /душный|дурак|тупой|лох/gi;
                const match = regex.exec(message);
                const result = document.getElementsByTagName("span")[0];
                result.className = '';
                if (match) {
                    result.classList.add('bad-word');
                    result.textContent = `Осторожно: найдено слово "${match[0]}"`;
                } else {
                    result.classList.add('good-message');
                    result.textContent = 'Комментарий принят!';
                }
            }
        }
    });
});
