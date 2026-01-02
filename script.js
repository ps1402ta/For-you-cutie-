document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");
    const screens = document.querySelectorAll(".screen");

    const longMessage = `Sun yaar…

Mujhe pata hai humare beech aaj‑kal kuch theek nahi chal raha,
shayad kuch hai bhi nahi.
Par main bas itna chahta hoon ki tu jo chahe, wo tujhe mil jaaye.
Chahe main teri chahne wali list mein hoon ya nahi,
bas tu hamesha khush rahe 🤍

Pata hai humari starting kahan se hui thi? 😂
Ek chhoti si meetup, achanak se… aur tu, main, pata nahi kaise ek random GC mein aa gaya tha.
Tab socha bhi nahi tha ki wahan koi aisa hoga jo mere saath 1.5 saal tak chalega.

Aur haan yaar… 1.5 saal ho gaye, pata hi nahi chala.
Tujhe wo date yaad hai? June 17 — jab tu mujhe mili thi, jab humari baatein start hui thi.

Wo song yaad hai tujhe? Ruk… uski kuch lines aaj bhi mujhe yaad hain:
“Haan, maanga jo mera hai, jaata kya tera hai? Maine kaun si tujhse jannat maang li? Kaisa Khuda hai tu, bas naam ka hai tu Rabba, jo teri itni si bhi na chali”
Ye lines aaj tak mere saath hain, shayad kabhi bhool bhi nahi paunga.

Phir meri life mein wo breakup hua… jab mujhe dhokha mila. Us time tu hi thi jo mere saath thi. Dheere‑dheere baatein hui, dosti hui, aur pata hi nahi chala kab kya ho gaya.

Sach bolun, mujhe kaafi options mile the... Rakhi, Sanchita, Priya, Sejal 😂
Uski wajah se kitne kalesh hue the humare beech. Tu bahut gussa hui thi, aur tujhe manane mein maine bhi bahut papad bele the 😅

Par phir bhi main tujhse alag nahi ho paaya. Pata nahi tere andar aisa kya tha jo mujhe tujhse door jaane hi nahi deta.
Humari baatein itni badh gayi thi ki mujhe pata hi nahi chala kab dosti se love wali feeling aa gayi.

Yaad hai wo din? Ghanto‑ghanto baatein, tu mujhe sone nahi deti thi 😂 main din mein so jata tha aur tu call pe call karke pareshaan karti thi. Bahut achhe din the yaar.

Shayad kisi ki nazar lag gayi. Tu kehti thi na “nazar is real” aur aaj main bhi maanta hoon — nazar is real.
Phir tera college jaana… aur ek‑ek mahina wait karna ki kab tera message ya call aayega 🫠

Pyaar mein insaan wait karta hai, attachment mein pagal ho jata hai. Shayad main dono tha.
Main 5 mahine bhi wait karta raha sirf ek baar baat karne ke liye.

Tere naam se mujhe pyaar hai, jise sunte hi meri heartbeat tez ho jaati hai. Teri awaaz se pyaar hai, jise sunte hi sab normal ho jata hai.
Mujhe poori ki poori tu pasand hai.

Abhi mujhe bahut kuch paana hai — ek achhi job, tere paas hi thoda door ek ghar, aur last mein… tujhe.
Agar tu saath rahi to main sab karke dikhaunga. Par agar tu aise hi hurt karti rahi to sach mein main door chala jaunga… bhool phir bhi nahi paunga.

2024 se 2025 tak ki kahani... I hope 2026 mein aur bhi achhe moments banayenge 🤍

Ly ❤️‍
Happpppppyyyy Birthday meri Shraddha 🎂❤️`;

    function showScreen(index) {
        screens.forEach(s => s.classList.remove("active"));
        screens[index].classList.add("active");
    }

    // STEP 1: UNLOCK
    document.getElementById("unlock-btn").addEventListener("click", () => {
        music.play().catch(e => console.log("Audio block fix active"));
        showScreen(1);
        startLoading();
    });

    // STEP 2: LOADING
    function startLoading() {
        let progress = 0;
        const bar = document.getElementById("p-bar");
        const btn = document.getElementById("timer-next-btn");
        const interval = setInterval(() => {
            progress += 2;
            bar.style.width = progress + "%";
            if (progress >= 100) {
                clearInterval(interval);
                btn.classList.remove("hidden");
                btn.classList.remove("disabled");
                btn.disabled = false;
                btn.innerText = "Open Memories ✨";
            }
        }, 50);
    }

    document.getElementById("timer-next-btn").addEventListener("click", () => showScreen(2));

    // STEP 3: READY
    document.getElementById("ready-btn").addEventListener("click", () => {
        showScreen(3);
        startTypewriter();
    });

    // STEP 4: TYPEWRITER
    function startTypewriter() {
        let i = 0;
        const target = document.getElementById("typewriter-text");
        function type() {
            if (i < longMessage.length) {
                target.innerText += longMessage.charAt(i);
                target.scrollTop = target.scrollHeight;
                i++;
                setTimeout(type, 40);
            } else {
                document.getElementById("memories-next-btn").classList.remove("hidden");
            }
        }
        type();
    }

    document.getElementById("memories-next-btn").addEventListener("click", () => showScreen(4));
    document.getElementById("end-btn").addEventListener("click", () => {
        showScreen(5);
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    });
});
