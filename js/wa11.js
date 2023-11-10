const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgSrc = ['prry[.png','sylris-sq.png','soren-thigh-up.png','lav.png','Calrae-base.png']

/* Declaring the alternative text for each image file */
const altTxt = ["Art of a man with long brown hair and markings on his face", "art of a person with scars on their face", "fanart of soren from the dragon prince","Art of a person with curly dark greying hair","Art of a man standing outside"];

/* Looping through images */
for(var i=0; i<5; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', '../img/wa11/'+imgSrc[i]);
    newImage.setAttribute('alt', altTxt[i]);

    /* had to resize for new images */
    newImage.setAttribute('object-fit', 'cover')
    newImage.setAttribute('width', '128px')
    newImage.setAttribute('height', '128px')
    
    thumbBar.appendChild(newImage);

    newImage.addEventListener("click", () => {
        displayedImage.setAttribute('src', newImage.src);
        displayedImage.setAttribute('alt', newImage.alt);

        /* had to resize for new images */
        displayedImage.setAttribute('object-fit', 'cover')
        displayedImage.setAttribute('width', '640px')
        displayedImage.setAttribute('height', '640px')
    });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if(btn.getAttribute("class") === "dark"){
        btn.setAttribute("class","light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class","dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});