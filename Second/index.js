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
