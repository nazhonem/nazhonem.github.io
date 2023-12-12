const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth-100);
const height = (canvas.height = window.innerWidth-100);

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

class Button {
    constructor(x, y, velX, velY, size, color) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        ctx.fill();
    }

    update() {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }
        
        this.x += this.velX;
        this.y += this.velY;
    }
}

const buttons = [];

for (let i = 0; i < 12; i++) {
    const size = random(20, 40);
    button = new Button(
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-0.5, 0.5),
        random(-0.5, 0.5),
        size,
        randomRGB(),
    );
    if(i >= 10) {
        button.size = 30;
        button.color = '#000000';
    }
    buttons.push(button);
}

canvas.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;
  
    for (const button of buttons) {
        button.update(mouseX, mouseY);
    }
});

canvas.addEventListener('click', function(event) {
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;

    for (const button of buttons) {
        if (x > button.x && x < button.x + button.size &&
            y > button.y && y < button.y + button.size) {
            if (buttons.indexOf(button) === 10) {
                removeFromNumbers(); 
            } else if (buttons.indexOf(button) === 11) {
                clearAllNumbers(); 
            } else {
                addToNumbers(buttons.indexOf(button));
            }
            break;
        }
    }
});

let numbers = [];

function addToNumbers(number) {
    numbers.push(number);
    updateOutput();
}

function removeFromNumbers() {
    numbers.pop();
    updateOutput();
}

function clearAllNumbers() {
    numbers = []; 
    updateOutput();
  }

function updateOutput() {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = 'Your Number: ' + numbers.join('');
}

function loop() {
    ctx.clearRect(0, 0, width, height);
    for (const button of buttons) {
        button.draw();
        button.update();
    }
    requestAnimationFrame(loop);
}

loop();

const speedBtn = document.getElementById('speedBtn');
speedBtn.addEventListener('click', function() {
    for (const button of buttons) {
        button.velX *= 2;
        button.velY *= 2;
    }
});

const revealBtn = document.getElementById('revealBtn');
revealBtn.addEventListener('click', function() {
    for (const button of buttons) {
        button.color = '#f6f6f6';
    }
});

const sizeBtn = document.getElementById('sizeBtn');
sizeBtn.addEventListener('click', function() {
    for (const button of buttons) {
        button.size -= 10;
    }
});

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function() {
    alert('Your phone number:' + numbers);
});
