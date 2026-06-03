
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#9CAF88', '#556B4A', '#ffffff', '#f4a460', '#ff69b4'];

    for (let i = 0; i < 50; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + '%';
        piece.style.top = '-10px';
        piece.style.background = colors[Math.floor(Math.random() * colors.length)];
        piece.style.animation = `fall ${2 + Math.random() * 2}s linear forwards`;
        piece.style.opacity = Math.random();

        container.appendChild(piece);
    }
}


const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


window.addEventListener('load', createConfetti);


document.querySelector('.start-adventure').addEventListener('click', () => {
    document.querySelector('.message-section').scrollIntoView({ behavior: 'smooth' });
});


const guestNameInput = document.getElementById('guestName');
const guestMessageInput = document.getElementById('guestMessage');
const submitBtn = document.querySelector('.submit-btn');
const guestbookMessages = document.getElementById('guestbook-messages');


function loadGuestbook() {
    const saved = localStorage.getItem('guestbook');
    if (saved) {
        const messages = JSON.parse(saved);
        messages.forEach(msg => displayMessage(msg.name, msg.message));
    }
}


function displayMessage(name, message) {
    const note = document.createElement('div');
    note.className = 'sticky-note';
    note.innerHTML = `
        <div class="sticky-note-name">${name}</div>
        <div class="sticky-note-message">${message}</div>
    `;
    guestbookMessages.appendChild(note);
}


function saveMessage() {
    const name = guestNameInput.value.trim();
    const message = guestMessageInput.value.trim();

    if (!name || !message) {
        alert('Please fill in both fields!');
        return;
    }


    displayMessage(name, message);


    const saved = localStorage.getItem('guestbook');
    const messages = saved ? JSON.parse(saved) : [];
    messages.push({ name, message });
    localStorage.setItem('guestbook', JSON.stringify(messages));


    guestNameInput.value = '';
    guestMessageInput.value = '';

    createCelebration();
}

submitBtn.addEventListener('click', saveMessage);


guestMessageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.ctrlKey) {
        saveMessage();
    }
});


function createCelebration() {
    const colors = ['✨', '⭐', '💫', '🌟'];
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.innerHTML = colors[Math.floor(Math.random() * colors.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = '50%';
        element.style.fontSize = '2rem';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '1000';
        element.style.animation = `celebrateFall ${1.5 + Math.random()}s ease-out forwards`;
        document.body.appendChild(element);

        setTimeout(() => element.remove(), 1500);
    }
}


const celebrateStyle = document.createElement('style');
celebrateStyle.textContent = `
    @keyframes celebrateFall {
        to {
            transform: translateY(300px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(celebrateStyle);


document.querySelectorAll('.skill-badge').forEach(badge => {
    badge.addEventListener('mouseenter', () => {
        badge.style.transform = 'scale(1.1) rotate(5deg)';
    });
    badge.addEventListener('mouseleave', () => {
        badge.style.transform = 'scale(1) rotate(0)';
    });
});


document.querySelectorAll('.stat-item').forEach(stat => {
    stat.addEventListener('click', function() {
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});


window.addEventListener('load', loadGuestbook);


window.addEventListener('scroll', () => {
    const clouds = document.querySelectorAll('.cloud');
    const scrollPos = window.scrollY;

    clouds.forEach(cloud => {
        cloud.style.transform = `translateY(${scrollPos * 0.3}px)`;
    });
});


document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', function() {
        this.style.transform = 'scale(1.5)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 300);
    });
});

document.addEventListener('keydown', (e) => {

    if (e.key.toLowerCase() === 'c') {
        createCelebration();
    }

    if (e.key.toLowerCase() === 'm') {
        createConfetti();
    }
});


window.addEventListener('beforeunload', () => {
    document.body.style.opacity = '0.7';
});

function createRandomSparkles() {
    setInterval(() => {
        if (Math.random() > 0.95) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;

            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            sparkle.style.fontSize = '1.5rem';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1';
            sparkle.style.animation = `sparkle 0.8s ease-out forwards`;
            sparkle.style.opacity = '0.6';

            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 800);
        }
    }, 100);
}


const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(1) translateY(0);
            opacity: 1;
        }
        100% {
            transform: scale(0) translateY(-30px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(sparkleStyle);


createRandomSparkles();


window.addEventListener('load', () => {
    document.body.style.animation = 'pageIn 0.5s ease-out';
});

const pageInStyle = document.createElement('style');
pageInStyle.textContent = `
    @keyframes pageIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(pageInStyle);

console.log('🎮 Welcome to Bria\'s Graduation Adventure! 🎮');
console.log('🎉 Press C to celebrate!');
console.log('🎊 Press M for confetti!');
