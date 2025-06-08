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
