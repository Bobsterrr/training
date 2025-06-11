//Загрузка новостей с задержкой
// Цель: разобраться с промисами, fetch и async/await.
//
// Условие:
// Создай кнопку "Загрузить новости". При клике запускается async-функция, которая:
//
// Ждёт 2 секунды (await new Promise(resolve => setTimeout(resolve, 2000)))
//
// После этого делает fetch на:
//
// arduino
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
document.addEventListener("DOMContentLoaded", () => {
    const newsButton = document.getElementsByTagName('button')[0];
    const response = document.getElementsByTagName('span')[0];
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=5'
    newsButton.addEventListener('click', async function() {
        response.classList.add('pigeon');
        response.textContent = 'Новостной голубь летит на сайт!'
        await new Promise(resolve => setTimeout(resolve, 2000));
        try {
            const request = await fetch(url);
            const data = await request.json();
            response.classList.add('news');
            let flow = Math.floor(Math.random() * 5);
            response.textContent = JSON.stringify(data[flow].title, null);
        } catch (error) {
            response.textContent = 'Новостной голубь не долетел' + error.message;
        }

    });
});
