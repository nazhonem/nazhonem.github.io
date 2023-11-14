const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';
const qstText = document.querySelector('#js-quote-text');
const ansText = document.querySelector('#js-answer-text');
const qstBtn = document.querySelector('#js-new-quote');
const ansBtn = document.querySelector('#js-tweet');

qstBtn.addEventListener('click', async () => {
    ansText.textContent = '';
    try {
        const response = await fetch(endpoint); // wait for result of fetch from endpoint var
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        qstText.textContent = json['question'];

        ansBtn.addEventListener('click', () => {
            ansText.textContent = json['answer'];
        });
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch quote.');
    }
});

qstBtn.click();