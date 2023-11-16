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

/* API Guide used to help me implement authentication: https://publicapis.io/genius-api */

/* Information to get access token */
const clientId = '-VoLywFfqAYzV-N-zx0qK49Hv-nP-m4VHLSM0MnF2LZAjiX-rESsNg2kigSkoNgE';
const clientSecret = '3ZaWinZ4yROelrkg_3Rvf9brbDR_E-xL4BCec0HdwA9eSLL91jYBfHRZ9COEsvonTqc4lF5OoqtVJtF3_RtpVA';
const authUrl = 'https://api.genius.com/oauth/token';
const authHeaders = {
  'Content-Type': 'application/x-www-form-urlencoded',
  Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
};
const authData = {
  grant_type: 'client_credentials',
};

/* fetch auth token */
async function getAuthTok() {
    const authToken = await fetch(authUrl, {
        method: 'POST',
        headers: authHeaders,
        body: new URLSearchParams(authData),
    }).then((response) => response.json()).then((data) => data.access_token);
    console.log(authToken)
}
getAuthTok();

authToken = 'h0BlFNonxNzRjKADem6MUM3bto2RxnlIMIDaY8Y4CgjCTOSjYHpnEYiXH3UvajIK';

const searchTerm = 'Kendrick Lamar';
const searchUrl = `https://api.genius.com/search?q=${encodeURIComponent(searchTerm)}`;
const searchHeaders = {
  Authorization: `Bearer ${authToken}`,
};

async function getSearch() {
    const searchResults = await fetch(searchUrl, {
        headers: searchHeaders,
    }).then((response) => response.json()).then((data) => data.response.hits);
    console.log(searchResults);
}


