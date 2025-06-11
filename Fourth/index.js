//Генератор шуток с пропусками
// Цель: Понять, как генераторы могут не только отдавать значение, но и принимать его обратно через yield.
//
// 🧠 Условие
// У тебя есть массив «шуток с пропущенными словами», например:
//
// js
// Копировать
// Редактировать
// const jokes = [
//   ["Почему курица перешла", "дорогу?"],
//   ["Как зовут собаку без лап?", "Неважно — она всё равно не придёт."],
//   ["Что скажет программист, увидев красивую девушку?", "Ошибка компиляции."]
// ];
// Напиши генератор, который сначала отдаёт первую часть шутки (например: "Почему курица перешла"), ждёт, пока пользователь нажмёт кнопку и введёт свою догадку, а потом показывает настоящую концовку.
//
// После каждой шутки — следующая. Когда шутки заканчиваются — пишется "Шутки закончились".
//
// 🧪 Что ты потренируешь:
// .next() и .next(value)
//
// Обратную передачу значения в генератор
//
// Простую форму взаимодействия с пользователем
//
// Управление состоянием внутри генератора

document.addEventListener("DOMContentLoaded", () => {
    const jokesSetup = [
        "Почему курица перешла дорогу?",
        "Как зовут собаку без лап?",
        "Что скажет программист, увидев красивую девушку?",
        'Сетапов больше нет...'
    ]
    const jokesPunchline = [
        "Чтобы попасть на другую сторону дороги.",
        "Неважно — она всё равно не придёт.",
        "Ошибка компиляции.",
        'Как и панчлайнов...'
    ]
    const setup = document.getElementsByTagName('button')[0];
    const assumption = document.getElementsByTagName('input')[0];
    const punchline = document.getElementsByTagName('button')[1];
    const setSetup = document.getElementById('setup');
    const setPunchline = document.getElementById('punchline');
    const userInput = document.getElementById('user');

    function* setupGenerator() {
        for (let i = 0; i < jokesSetup.length; i++) {
            yield jokesSetup[i];
        }
    }
    function* punchlineGenerator() {
        for (let i = 0; i < jokesPunchline.length; i++) {
            yield jokesPunchline[i]
        }
    }
    const punch = punchlineGenerator();
    const set = setupGenerator();
    setSetup.classList.add('setup');
    setPunchline.classList.add('disabledP');

    setup.addEventListener('click', () => {
        if (setSetup.classList.contains('setup') && setPunchline.classList.contains('disabledP')) {
            setSetup.textContent = set.next().value;
            setSetup.classList.remove('setup');
            setSetup.classList.add('disabledS');
            setPunchline.classList.remove('disabledP')
            setPunchline.classList.add('punchline')
        } else if (setSetup.classList.contains('disabledS') && setPunchline.classList.contains('punchline')) {
            setSetup.textContent = "Подожди Панчлайна"
        }
    })
    punchline.addEventListener('click', () => {
        if (setPunchline.classList.contains('punchline') && setSetup.classList.contains('disabledS')) {
            setPunchline.textContent = punch.next().value;
            setPunchline.classList.remove('punchline');
            setPunchline.classList.add('disabledP');
            setSetup.classList.remove('disabledS');
            setSetup.classList.add('setup');
        } else if (setPunchline.classList.contains('disabledP') && setSetup.classList.contains('setup')) {
            setPunchline.textContent = 'Подожди Сетапа'
        }
    })
    assumption.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const message = assumption.value;
            if (message.length > 0) {
                userInput.className = '';
                userInput.classList.add('userAssumption');
                userInput.textContent = message;
                assumption.value = '';
            }
        }
    })
})