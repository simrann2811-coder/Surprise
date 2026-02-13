// CONFIGURATION
const CORRECT_PASS = "2405"; // Change this to your anniversary or a special 4-digit code

// Password Logic
function checkPass() {
    const input = document.getElementById('passkey').value;
    const overlay = document.getElementById('auth-overlay');
    const heart = document.getElementById('heartTrigger');
    const error = document.getElementById('error-msg');

    if(input === CORRECT_PASS) {
        overlay.style.transform = "translateY(-100%)";
        setTimeout(() => {
            overlay.classList.add('hidden');
            heart.classList.remove('hidden');
        }, 800);
    } else {
        error.style.display = "block";
        document.getElementById('passkey').value = "";
    }
}

// Reveal Logic
const heartTrigger = document.getElementById('heartTrigger');
const messageVault = document.getElementById('messageVault');

heartTrigger.addEventListener('click', () => {
    heartTrigger.style.transform = 'scale(0)';
    setTimeout(() => {
        heartTrigger.classList.add('hidden');
        messageVault.classList.remove('hidden');
        messageVault.classList.add('visible');
        startRain();
    }, 500);
});

// Particle System (Keep the same code from the previous response here)
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

class HeartParticle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = -20;
        this.size = Math.random() * 15 + 10;
        this.speed = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.5 + 0.5;
    }
    draw() {
        ctx.fillStyle = `rgba(255, 77, 109, ${this.opacity})`;
        ctx.font = `${this.size}px serif`;
        ctx.fillText('❤️', this.x, this.y);
    }
    update() {
        this.y += this.speed;
        if (this.y > canvas.height) this.y = -20;
    }
}

function startRain() {
    for (let i = 0; i < 50; i++) {
        hearts.push(new HeartParticle());
    }
    animate();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
        h.update();
        h.draw();
    });
    requestAnimationFrame(animate);
}

// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => document.getElementById('loader').remove(), 800);
    }, 1500);
});
