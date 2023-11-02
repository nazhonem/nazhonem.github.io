/* HTML Refs */
const customName1 = document.getElementById('customname1');
const customName2 = document.getElementById('customname2');
const place = document.getElementById('place');
const happening = document.getElementById('happening');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// randomValue
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// variables to declare
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"];
const insertY = ["the soup kitchen","Disneyland","the White House"];
const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"];

// event listener & function
randomize.addEventListener('click', () =>{
    let newStory = storyText;

    if(customName1.value !== '') {
        const name1 = customName1.value;
        newStory = newStory.replaceAll(":insertx:", name1);
    }
    else {
        const xItem = randomValueFromArray(insertX);
        newStory = newStory.replaceAll(":insertx:", xItem);
    }

    if(customName2.value !== '') {
        const name2 = customName2.value;
        newStory = newStory.replaceAll("Bob", name2);
    }

    if(place.value !== '') {
        const insertPlace = place.value;
        newStory = newStory.replaceAll(":inserty:", insertPlace);
    }
    else {
        const yItem = randomValueFromArray(insertY);
        newStory = newStory.replaceAll(":inserty:", yItem);
    }

    if(happening.value !== '') {
        const insertHappening = happening.value;
        newStory = newStory.replaceAll(":insertz:", insertHappening);
    }
    else {
        const zItem = randomValueFromArray(insertZ);
        newStory = newStory.replaceAll(":insertz:", zItem);
    }

    if(document.getElementById("uk").checked) {
        const weight = `${Math.round(300/2.205)} kilograms`;
        const temperature =  `${Math.round(94 * 5/9)} celsius`;

        newStory = newStory.replaceAll('300 pounds', weight);
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
});