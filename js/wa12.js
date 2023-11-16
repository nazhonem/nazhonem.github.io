const endpoint = 'https://official-joke-api.appspot.com/jokes/programming/random';
const qstText = document.querySelector('#js-quote-text');
const ansText = document.querySelector('#js-answer-text');
const sveList = document.querySelector('#js-terrible-jokes')
const qstBtn = document.querySelector('#js-new-quote');
const ansBtn = document.querySelector('#js-tweet');
const sveBtn = document.querySelector('#js-save');
let savedCount = 0;
let jsonQ = '';
let jsonA = '';

qstBtn.addEventListener('click', async () => {
    ansText.textContent = '';
    try {
        const response = await fetch(endpoint); // wait for result of fetch from endpoint var
        if(!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        jsonQ = json[0]['setup'];
        jsonA = json[0]['punchline'];

        qstText.textContent = jsonQ;

        ansBtn.addEventListener('click', () => {
            ansText.textContent = jsonA;
        });
    }
    catch(err) {
        console.log(err);
        alert('Failed to fetch quote.');
    }
});

qstBtn.click();

sveBtn.addEventListener('click', () => {
    let qli = document.createElement('li')
    qli.appendChild(document.createTextNode(jsonQ));
    sveList.appendChild(qli);

    /* Nest answer */
    let aul = document.createElement('ul')
    let ali = document.createElement('li')
    ali.appendChild(document.createTextNode(jsonA));
    aul.appendChild(ali);
    sveList.appendChild(aul);
});
