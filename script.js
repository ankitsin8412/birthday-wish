// ================================
// MUSIC
// ================================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

function startMusic() {

    music.volume = 0.35;

    music.play()
        .then(() => {
            musicBtn.innerHTML = "🎵 Music On";
        })
        .catch(() => {
            musicBtn.innerHTML = "🎵 Play Music";
        });
}

function toggleMusic() {

    if (music.paused) {

        music.play()
            .then(() => {
                musicBtn.innerHTML = "🎵 Music On";
            })
            .catch(() => {
                musicBtn.innerHTML = "🎵 Play Music";
            });

    } else {

        music.pause();
        musicBtn.innerHTML = "🔇 Music Off";

    }
}


// ================================
// OPEN SURPRISE
// ================================

function openSurprise() {

    startMusic();

    document.body.classList.add("cinematic-transition");

    createHeartBurst();

    setTimeout(() => {

        const welcome = document.querySelector(".welcome");

        if (welcome) {
            welcome.style.display = "none";
        }

        document.body.classList.remove("cinematic-transition");

        const birthdayScreen = document.createElement("div");

        birthdayScreen.className = "birthday-screen";

        birthdayScreen.innerHTML = `

            <div class="birthday-content">

                <div class="birthday-sparkle">
                    ✨
                </div>

                <p class="small-text">
                    Today is a little more special...
                </p>

                <h1>
                    Happy Birthday
                    <br>
                    <span>Baby Girl ❤️</span>
                </h1>

                <p class="birthday-message">
                    Because someone as special as you
                    deserves a special little surprise. 🥹❤️
                </p>

                <div class="cake">
                    🎂
                </div>

                <button onclick="showMemories()">
                    Come, Let's Remember Us 📸
                </button>

            </div>

        `;

        document.body.appendChild(birthdayScreen);

        createHearts();

    }, 900);
}


// ================================
// MEMORIES
// ================================

function showMemories() {

    const birthdayScreen =
        document.querySelector(".birthday-screen");

    if (birthdayScreen) {

        birthdayScreen.style.animation =
            "fadeOut 0.8s forwards";
    }

    setTimeout(() => {

        if (birthdayScreen) {
            birthdayScreen.remove();
        }

        const memories = document.createElement("div");

        memories.className = "memories";

        memories.innerHTML = `

            <div class="memories-content">

                <p class="small-text">
                    A few moments...
                </p>

                <h1>
                    My Favourite
                    <br>
                    <span>Memories ❤️</span>
                </h1>

                <p class="memory-subtitle">
                    Some moments become memories...
                    because of you. 🥹
                </p>

                <div class="memory-grid">

                    <div class="memory-card"
                         onclick="openPhoto('images/baby1.jpg')">

                        <img
                            src="images/baby1.jpg"
                            alt="Beautiful Memory"
                        >

                        <h3>
                            That Smile... 🥹
                        </h3>

                        <p>
                            The smile I could never get tired of.
                        </p>

                    </div>


                    <div class="memory-card"
                         onclick="openPhoto('images/baby2.jpg')">

                        <img
                            src="images/baby2.jpg"
                            alt="Beautiful Memory"
                        >

                        <h3>
                            My Pretty Girl ❤️
                        </h3>

                        <p>
                            Somehow you always look beautiful.
                        </p>

                    </div>


                    <div class="memory-card"
                         onclick="openPhoto('images/baby3.jpg')">

                        <img
                            src="images/baby3.jpg"
                            alt="Beautiful Memory"
                        >

                        <h3>
                            My Cute One 🫶
                        </h3>

                        <p>
                            One picture, a thousand feelings.
                        </p>

                    </div>

                </div>


                <button class="letter-btn"
                        onclick="showLetter()">

                    There's Something
                    I Want To Tell You 💌

                </button>

            </div>

        `;

        document.body.appendChild(memories);

        createHearts();

    }, 800);
}


// ================================
// PHOTO VIEWER
// ================================

function openPhoto(imagePath) {

    const viewer = document.createElement("div");

    viewer.className = "photo-viewer";

    viewer.innerHTML = `

        <div class="photo-viewer-bg"
             onclick="closePhoto()">
        </div>

        <div class="photo-viewer-content">

            <button class="close-photo"
                    onclick="closePhoto()">

                ✕

            </button>

            <img
                src="${imagePath}"
                alt="Beautiful Memory"
            >

            <p>
                This moment is special
                because it's you. ❤️
            </p>

        </div>

    `;

    document.body.appendChild(viewer);
}


function closePhoto() {

    const viewer =
        document.querySelector(".photo-viewer");

    if (viewer) {
        viewer.remove();
    }
}


// ================================
// LOVE LETTER
// ================================

function showLetter() {

    const memories =
        document.querySelector(".memories");

    if (memories) {

        memories.style.animation =
            "fadeOut 0.8s forwards";
    }

    setTimeout(() => {

        if (memories) {
            memories.remove();
        }

        const letterScreen =
            document.createElement("div");

        letterScreen.className =
            "letter-screen";

        letterScreen.innerHTML = `

            <div class="letter-content">

                <div class="heart">
                    ♡
                </div>

                <p class="small-text">
                    Something from my heart...
                </p>

                <h1>
                    For My
                    <br>
                    <span>Baby Girl ❤️</span>
                </h1>

                <div class="letter">

                    <div
                        class="letter-text"
                        id="typewriterText">
                    </div>

                    <button onclick="showFinalSurprise()">

                        One Last Surprise 🎁

                    </button>

                </div>

            </div>

        `;

        document.body.appendChild(letterScreen);

        createHearts();

        startTypewriter();

    }, 800);
}


// ================================
// TYPEWRITER EFFECT
// ================================

function startTypewriter() {

    const text = `Happy Birthday, Baby Girl ❤️

Pata hai, shayad main har baar words mein explain nahi kar pata ki tu mere liye kya hai…
But honestly, tu meri life ka woh hissa hai jise main kabhi kisi aur se replace nahi kar sakta.

Tu meri dost hai, meri favourite person hai, meri duo partner hai… aur sach bolun toh in sabse kahin zyada hai. Main tujhse bahut pyaar karta hoon. ❤️

Meri life mein bahut log aaye aur jaaye, lekin tere liye jo jagah hai na, woh kisi aur ki ho hi nahi sakti.

Tu meri khushi ka reason hai, meri stupid si smiles ka reason hai, meri countless memories ka reason hai. Tere saath chhoti si baat bhi mere liye special ban jaati hai.

Meri life tere saath shuru hoti hai aur meri har khubsurat imagination mein tu hi hoti hai.

Aaj tera birthday hai, aur meri bas ek wish hai—
tu hamesha khush rahe, hamesha smile karti rahe, aur zindagi tujhe woh sab de jo tu deserve karti hai. 🥹❤️

Aur haan… ek baat kabhi mat bhoolna—
Tu sirf meri favourite person nahi hai,
tu woh person hai jise main khona nahi chahta. ❤️

Happy Birthday, Baby Girl. 🎂❤️

I love you… more than I probably know how to put into words. 🫶`;

    const element =
        document.getElementById("typewriterText");

    if (!element) return;

    element.innerHTML = "";

    let index = 0;

    function type() {

        if (index < text.length) {

            element.innerHTML +=
                text.charAt(index);

            index++;

            setTimeout(type, 28);

        }

    }

    type();
}


// ================================
// FINAL SURPRISE
// ================================

function showFinalSurprise() {

    const letterScreen =
        document.querySelector(".letter-screen");

    if (letterScreen) {

        letterScreen.style.animation =
            "fadeOut 0.8s forwards";
    }

    setTimeout(() => {

        if (letterScreen) {
            letterScreen.remove();
        }

        const finalScreen =
            document.createElement("div");

        finalScreen.className =
            "final-screen";

        finalScreen.innerHTML = `

            <div class="final-surprise">

                <div class="final-stars">
                    ✨
                </div>

                <p class="small-text">
                    One last thing...
                </p>

                <h1>
                    A Little Gift
                    <br>
                    <span>
                        For My Baby Girl ❤️
                    </span>
                </h1>

                <div class="gift-box"
                     onclick="openGift()">

                    <div class="gift-lid"></div>

                    <div class="gift-body">
                        🎁
                    </div>

                </div>

                <p class="gift-hint">
                    Tap the gift 🎁
                </p>

            </div>

        `;

        document.body.appendChild(finalScreen);

        createHearts();

    }, 800);
}


// ================================
// OPEN GIFT
// ================================

function openGift() {

    const gift = document.querySelector(".gift-box");

    if (!gift) return;

    gift.classList.add("gift-open");

    setTimeout(() => {

        const finalSurprise = document.querySelector(".final-surprise");

        if (!finalSurprise) return;

        finalSurprise.innerHTML = `
            <div class="opened-gift">

                <div class="final-heart">
                    ❤️
                </div>

                <p class="final-small">
                    From my heart...
                </p>

                <h1>
                    You Are My
                    <br>
                    <span>Favourite Person ❤️</span>
                </h1>

                <div class="heart-line">
                    ───── ❤️ ─────
                </div>

                <p class="final-message">
                    No matter how many people I meet,
                    nobody can ever have the place
                    you have in my heart.
                </p>

                <p class="final-message">
                    You are my friend,
                    my duo partner,
                    my happiness...
                    and the person I love the most. ❤️
                </p>

                <div class="forever">
                    Always You. ❤️
                </div>

                <div class="secret-trigger" onclick="showSecretFinale()">
                     Wait... I forgot one thing 👀
                </div>

                <button onclick="restartExperience()">
                    Experience It Again ✨
                </button>

            </div>
        `;

        document.body.classList.add("final-celebration");

        createHearts();
        createHeartBurst();

    }, 900);
}

// ================================
// FLOATING HEARTS
// ================================

function createHearts() {

    document
        .querySelectorAll(".floating-heart")
        .forEach(heart => heart.remove());

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            Math.random() > 0.5 ? "❤️" : "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        heart.style.animationDelay =
            Math.random() * 5 + "s";

        document.body.appendChild(heart);
    }
}


// ================================
// HEART BURST
// ================================

function createHeartBurst() {

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.className =
            "burst-heart";

        heart.innerHTML = "❤️";

        const x =
            (Math.random() - 0.5) * 500;

        const y =
            (Math.random() - 0.5) * 500;

        heart.style.setProperty(
            "--x",
            x + "px"
        );

        heart.style.setProperty(
            "--y",
            y + "px"
        );

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 1300);
    }
}


// ================================
// RESTART
// ================================

function restartExperience() {

    location.reload();

}
function showSecretFinale() {

    const finalSurprise = document.querySelector(".final-surprise");

    if (!finalSurprise) return;

    finalSurprise.style.animation = "fadeOut 0.7s forwards";

    setTimeout(() => {

        finalSurprise.innerHTML = `
            <div class="secret-finale">

                <div class="secret-stars">
                    ✨ ✨ ✨
                </div>

                <p class="secret-small">
                    5 September...
                </p>

                <h1>
                    Happy Birthday
                    <br>
                    <span>My Baby Girl ❤️</span>
                </h1>

                <div class="birthday-number">
                    05
                    <span>SEPTEMBER</span>
                </div>

                <p class="secret-message">
                    Aaj ka din sirf tera birthday nahi hai...
                    <br>
                    mere liye ye woh din hai
                    jis din meri favourite person duniya mein aayi thi. ❤️
                </p>

                <p class="secret-message">
                    Bas ek wish hai —
                    <br>
                    teri smile kabhi kam na ho,
                    aur meri life mein tera place
                    kabhi kisi aur ka na ho. 🥹❤️
                </p>

                <div class="final-love">
                    I Love You, Baby Girl ❤️
                </div>

                <div class="final-signature">
                    — Always Yours 🫶
                </div>

            </div>
        `;

        finalSurprise.style.animation = "finalReveal 1.2s ease forwards";

        createHearts();
        createHeartBurst();
        createConfetti();

    }, 700);
}
function createConfetti() {

    for (let i = 0; i < 45; i++) {

        const confetti = document.createElement("div");

        confetti.className = "confetti";

        confetti.innerHTML = ["❤️", "✨", "💖", "💕", "⭐"][Math.floor(Math.random() * 5)];

        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}
function updateCountdown() {

    const now = new Date();

    let year = now.getFullYear();

    let birthday = new Date(year, 8, 5, 0, 0, 0);

    // Agar is saal ka birthday nikal chuka hai
    if (now >= birthday) {
        birthday = new Date(year + 1, 8, 5, 0, 0, 0);
    }

    const difference = birthday - now;

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);