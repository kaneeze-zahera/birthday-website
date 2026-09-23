const opening = document.getElementById("opening");
const birthday = document.getElementById("birthday");
const message = document.getElementById("message");
const bgMusic = document.getElementById("bgMusic");
document.addEventListener("click", function startMusic() {

    if (bgMusic) {
        bgMusic.play();
    }

}, { once: true });
const memories = document.getElementById("memories");
const cakePage = document.getElementById("cake-page");
const videoPage = document.getElementById("video-page");
const videoNextButton = document.getElementById("videoNextButton");
const final = document.getElementById("final");


const yesScreen = document.getElementById("yesScreen");
const noScreen = document.getElementById("noScreen");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const tryAgainButton = document.getElementById("tryAgainButton");

const continueButton = document.getElementById("continueButton");
const photosButton = document.getElementById("photosButton");
const friendshipButton = document.getElementById("friendshipButton");
const kissVideoPage = document.getElementById("kiss-video-page");
const kissVideoNext = document.getElementById("kissVideoNext");
const tapPage = document.getElementById("tap-page");

const tapButton = document.getElementById("tapButton");



/* =====================================================
   🎊 BIRTHDAY PAPER BLAST
===================================================== */
/* =====================================================
   ✨ TAP TO START MUSIC
===================================================== */

if (tapButton) {

    tapButton.addEventListener("click", function () {

        if (bgMusic) {
            bgMusic.play();
        }

        tapPage.style.display = "none";

        opening.style.display = "flex";

    });

}

function birthdayBlast() {

    const container =
        document.getElementById("confetti-container");

    if (!container) return;

    container.innerHTML = "";

    for (let i = 0; i < 200; i++) {

        const paper =
            document.createElement("div");

        paper.className = "paper-blast";

        paper.style.left = "50%";
        paper.style.top = "50%";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            250 + Math.random() * 700;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;

        paper.style.setProperty(
            "--x",
            x + "px"
        );

        paper.style.setProperty(
            "--y",
            y + "px"
        );

        paper.style.setProperty(
            "--rotate",
            (Math.random() * 720 - 360) + "deg"
        );

        paper.style.width =
            (6 + Math.random() * 10) + "px";

        paper.style.height =
            (8 + Math.random() * 15) + "px";

        container.appendChild(paper);
    }

    setTimeout(function () {
        container.innerHTML = "";
    }, 3000);
}


window.addEventListener("load", function () {

    setTimeout(function () {
        birthdayBlast();
    }, 300);

});


/* =====================================================
   ❤️ YES BUTTON + 😒 NO BUTTON
===================================================== */

let noActive = false;
let noStartTime = 0;
let noTimer = null;


/* =====================================================
   ❤️ YES BUTTON
===================================================== */

if (yesButton) {

    yesButton.addEventListener("click", function () {
if (bgMusic) {
    bgMusic.play();
}
        // Stop NO button movement
        noActive = false;

        if (noTimer) {
            clearInterval(noTimer);
            noTimer = null;
        }

        // Hide opening page
        opening.style.display = "none";

        // Show birthday page
        birthday.style.display = "flex";

        // Keep other pages hidden
        message.style.display = "none";
        memories.style.display = "none";
        cakePage.style.display = "none";
        final.style.display = "none";
        noScreen.style.display = "none";

        // Reset NO button position
        noButton.style.position = "static";
        noButton.style.left = "";
        noButton.style.top = "";

    });

}


/* =====================================================
   😒 NO BUTTON - MOVE FOR 15 SECONDS
===================================================== */

if (noButton) {

    // Computer mouse
    noButton.addEventListener("mouseenter", function () {

        startNoMovement();

    });


    // Phone / touch
    noButton.addEventListener("touchstart", function (event) {

        const elapsed =
            noActive
                ? Date.now() - noStartTime
                : 0;

        // Before 15 seconds:
        // stop the normal click and move the button
        if (!noActive || elapsed < 5000) {

            event.preventDefault();

            startNoMovement();

            return;
        }

        // After 15 seconds:
        // allow the click to open the NO screen

    });


    // Click NO
    noButton.addEventListener("click", function () {

        // If movement has not started
        if (!noActive) {
            startNoMovement();
            return;
        }

        const elapsed =
            Date.now() - noStartTime;


        // Still within 15 seconds
        if (elapsed < 15000) {

            moveNoButton();

            return;
        }


        // 15 seconds completed
        noActive = false;

        if (noTimer) {

            clearInterval(noTimer);

            noTimer = null;

        }


        // Hide YES screen
        yesScreen.style.display = "none";

        // Show NO screen with no.gif
        noScreen.style.display = "flex";


        // Reset NO button
        noButton.style.position = "static";
        noButton.style.left = "";
        noButton.style.top = "";

    });

}


/* =====================================================
   START NO BUTTON MOVEMENT
===================================================== */

function startNoMovement() {

    // Already moving
    if (noActive) {
        return;
    }


    noActive = true;

    noStartTime =
        Date.now();


    // Move immediately
    moveNoButton();


    // Keep moving every 500 milliseconds
    noTimer =
        setInterval(function () {

            const elapsed =
                Date.now() - noStartTime;


            // Stop after 15 seconds
            if (elapsed >= 15000) {

                clearInterval(noTimer);

                noTimer = null;


                // Stop the button
                noButton.style.position = "static";
                noButton.style.left = "";
                noButton.style.top = "";


                return;

            }


            moveNoButton();

        }, 500);

}


/* =====================================================
   MOVE NO BUTTON
===================================================== */

function moveNoButton() {

    if (!noButton || !noActive) {
        return;
    }


    const elapsed =
        Date.now() - noStartTime;


    if (elapsed >= 15000) {
        return;
    }


    noButton.style.position = "fixed";


    const maxX =
        window.innerWidth -
        noButton.offsetWidth -
        20;


    const maxY =
        window.innerHeight -
        noButton.offsetHeight -
        20;


    const x =
        20 +
        Math.random() *
        Math.max(maxX - 20, 20);


    const y =
        20 +
        Math.random() *
        Math.max(maxY - 20, 20);


    noButton.style.left =
        x + "px";


    noButton.style.top =
        y + "px";

}


/* =====================================================
   ❤️ TRY AGAIN
===================================================== */

if (tryAgainButton) {

    tryAgainButton.addEventListener(
        "click",
        function () {

            // Hide NO screen
            noScreen.style.display = "none";

            // Show YES/NO screen
            yesScreen.style.display = "flex";


            // Reset NO movement
            noActive = false;

            noStartTime = 0;


            if (noTimer) {

                clearInterval(noTimer);

                noTimer = null;

            }


            // Reset NO button position
            noButton.style.position = "static";
            noButton.style.left = "";
            noButton.style.top = "";

        }
    );

}


/* =====================================================
   🎂 BIRTHDAY → KISSES VIDEO
===================================================== */
if (continueButton) {

    continueButton.addEventListener(
        "click",
        function () {

            birthday.style.display = "none";

            kissVideoPage.style.display = "flex";

        }
    );

}


/* =====================================================
   💋 KISSES GIF → MESSAGE
===================================================== */

if (kissVideoNext) {

    kissVideoNext.addEventListener(
        "click",
        function () {

            kissVideoPage.style.display = "none";

            message.style.display = "flex";

        }
    );

}
/* =====================================================
   💌 MESSAGE → MEMORIES
===================================================== */

if (photosButton) {

    photosButton.addEventListener(
        "click",
        function () {

            message.style.display = "none";

            memories.style.display = "flex";

            showSlide(0);

            startSlideshow();

        }
    );

}


/* =====================================================
   📸 SLIDESHOW - 10 PHOTOS
===================================================== */

const slideImage =
    document.getElementById("slideImage");

const slideCaption =
    document.getElementById("slideCaption");

const slideCounter =
    document.getElementById("slideCounter");

const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");


const photos = [

    "photos/photo1.jpg",

    "photos/photo2.jpg",

    "photos/photo3.jpg",

    "photos/photo4.jpg",

    "photos/photo5.jpg",

    "photos/photo6.jpg",

    "photos/photo7.jpg",

    "photos/photo8.jpg",

    "photos/photo9.jpg",

    "photos/photo10.jpg"

];


const captions = [

    "One of those moments I'll always remember. 💕",

    "Another beautiful memory with you. 🫶",

    "Crazy moments we'll never forget. 😂❤️",

    "And many more memories to come. ✨",

    "Another little moment worth remembering. 💗",

    "A memory that always makes me smile. 🥹❤️",

    "Just us being our crazy selves. 😂",

    "One more beautiful memory together. 🫶✨",

    "So many memories, and still more to come. 💕",

    "Our little moments will always be special. ♾️💗"

];


let slideIndex = 0;

let slideshowTimer = null;


/* =====================================================
   SHOW SLIDE
===================================================== */

function showSlide(index) {

    if (!slideImage) {
        return;
    }


    if (index < 0) {

        slideIndex =
            photos.length - 1;

    }
    else if (index >= photos.length) {

        slideIndex = 0;

    }
    else {

        slideIndex = index;

    }


    slideImage.src =
        photos[slideIndex];


    if (slideCaption) {

        slideCaption.innerHTML =
            captions[slideIndex];

    }


    if (slideCounter) {

        slideCounter.innerHTML =
            (slideIndex + 1) +
            " / " +
            photos.length;

    }

}


/* =====================================================
   START SLIDESHOW
===================================================== */

function startSlideshow() {

    clearInterval(slideshowTimer);


    slideshowTimer =
        setInterval(function () {

            showSlide(
                slideIndex + 1
            );

        }, 4000);

}


/* =====================================================
   RESTART SLIDESHOW
===================================================== */

function restartSlideshow() {

    clearInterval(slideshowTimer);

    startSlideshow();

}


/* =====================================================
   NEXT PHOTO
===================================================== */

if (nextButton) {

    nextButton.addEventListener(
        "click",
        function () {

            showSlide(
                slideIndex + 1
            );

            restartSlideshow();

        }
    );

}


/* =====================================================
   PREVIOUS PHOTO
===================================================== */

if (prevButton) {

    prevButton.addEventListener(
        "click",
        function () {

            showSlide(
                slideIndex - 1
            );

            restartSlideshow();

        }
    );

}


showSlide(0);


/* =====================================================
   📸 MEMORIES → 🎂 CAKE
===================================================== */

if (friendshipButton) {

    friendshipButton.addEventListener(
        "click",
        function () {

            memories.style.display = "none";

            cakePage.style.display = "flex";

        }
    );

}


/* =====================================================
   🎤 CAKE MICROPHONE
===================================================== */

let audioContext = null;

let analyser = null;

let microphone = null;

let currentStream = null;

let dataArray = null;

let detecting = false;

let loudCount = 0;


function startBlowing() {

    const button =
        document.getElementById(
            "blow-button"
        );

    const text =
        document.getElementById(
            "blow-text"
        );


    if (detecting) {
        return;
    }


    button.innerHTML =
        "🎤 Starting...";


    text.innerHTML =
        "Please allow microphone access 🎤";


    if (
        !navigator.mediaDevices ||
        !navigator.mediaDevices.getUserMedia
    ) {

        button.innerHTML =
            "🎤 Try Again";

        text.innerHTML =
            "❌ Please open this website using Live Server.";

        return;

    }


    navigator.mediaDevices
        .getUserMedia({
            audio: true
        })

        .then(function (stream) {

            currentStream =
                stream;

            detecting = true;

            loudCount = 0;


            button.innerHTML =
                "🎤 Blow now!";


            text.innerHTML =
                "💨 Blow gently into the microphone!";


            audioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();


            if (
                audioContext.state ===
                "suspended"
            ) {

                audioContext.resume();

            }


            analyser =
                audioContext.createAnalyser();

            analyser.fftSize = 1024;


            microphone =
                audioContext
                    .createMediaStreamSource(
                        stream
                    );


            microphone.connect(
                analyser
            );


            dataArray =
                new Uint8Array(
                    analyser.fftSize
                );


            detectBlow();

        })

        .catch(function (error) {

            console.log(
                "Microphone error:",
                error
            );

            detecting = false;


            button.innerHTML =
                "🎤 Allow Microphone";


            text.innerHTML =
                "❌ Please allow microphone access.";

        });

}


/* =====================================================
   DETECT BLOW
===================================================== */

function detectBlow() {

    if (
        !analyser ||
        !detecting
    ) {

        return;

    }


    analyser.getByteTimeDomainData(
        dataArray
    );


    let sum = 0;


    for (
        let i = 0;
        i < dataArray.length;
        i++
    ) {

        const value =
            dataArray[i] - 128;

        sum +=
            value * value;

    }


    const volume =
        Math.sqrt(
            sum /
            dataArray.length
        );


    if (volume > 10) {

        loudCount++;

    }
    else {

        loudCount = 0;

    }


    if (loudCount >= 8) {

        candleBlown();

        return;

    }


    requestAnimationFrame(
        detectBlow
    );

}


/* =====================================================
   🕯️ CANDLE BLOWN
===================================================== */

function candleBlown() {

    detecting = false;


    const flame =
        document.getElementById(
            "flame"
        );

    const button =
        document.getElementById(
            "blow-button"
        );

    const text =
        document.getElementById(
            "blow-text"
        );


    if (flame) {

        flame.classList.add(
            "off"
        );

    }


    if (button) {

        button.style.display =
            "none";

    }


    if (text) {

        text.innerHTML =
            "✨ You blew out the candle! ✨";

    }


    if (currentStream) {

        currentStream
            .getTracks()
            .forEach(function (track) {

                track.stop();

            });

        currentStream = null;

    }


    if (audioContext) {

        audioContext.close();

        audioContext = null;

    }


    setTimeout(function () {

        const wishScreen =
            document.getElementById(
                "wish-screen"
            );

        if (wishScreen) {

            wishScreen.style.display =
                "flex";

        }

    }, 1200);

}


/* =====================================================
   💗 WISH MADE
===================================================== */

function wishMade() {

    const wishScreen =
        document.getElementById(
            "wish-screen"
        );


    if (wishScreen) {

        wishScreen.style.display =
            "none";

    }


    if (cakePage) {

        cakePage.style.display =
            "none";

    }


    if (videoPage) {

        videoPage.style.display =
            "flex";

    }
    if (bgMusic) {
    bgMusic.pause();
}

}
videoNextButton.addEventListener("click", () => {

    videoPage.style.display = "none";

    if (bgMusic) {
        bgMusic.play();
    }

    final.style.display = "flex";

});