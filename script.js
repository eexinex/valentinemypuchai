document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const music = document.getElementById("bg-music");
    const toggleMusicBtn = document.getElementById("toggleMusic");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const imageDescription = document.getElementById("image-description");
    const lyricsContainer = document.querySelector(".lyrics-container");
  
    const descriptions = [
        "🌹 จ้ะเออ๊ตกใจอะดิ้ๆๆๆๆ ตั้งใจอ่านควรมีเวลาอ่านอย่างน้อย20นาที งานรีบอย่าว่ากันนะ",
        "💖 จำได้มั้ยเราจับมือกันบ่อยมากๆๆๆๆๆๆเค้าเคยพูดบ่อยๆว่าเค้าชอบมือเธอเพราะมันอุ่น งั้นอยู่ให้เค้าจับนานๆได้มั้ย",
        "🎶 เค้าว่าเราก็แอบไปมาด้วยกันหลายที่เลย เเต่เค้าก็ยังอยากไปด้วยกับเธออีกหลายๆที่เหมือนกัน เธออยากไปกับเค้าอยู่มั้ย",
        "🎁 เค้าอยากไปกินของหวานอร่อยๆกับเธอด้วย",
        "🍰 เธอดูดิเรากินอีกเเล้ว",
        "🌙 เอาจริงเค้าก็ไม่คิดว่าเธอจะเขียนชื่อเธอลงในนั้นเหมือนกัน ใจเต้นเเปลกๆแหะ",
        "🎆 เธอเค้าชอบไอติมทอด ไว้ทำให้กินได้มั้ย",
        "🌊 ในอัลบั้มเค้ามีเเต่รูปที่ไปกินกับเธอ อร่อย ไปอีก เค้าอยากกินของอร่อยๆกับเธอ เเต่ถ้าเค้าอ้วนเธอจะรักเค้าอยู่มั้อะ",
        "🎨 เธอดูดิเรากิอีกเเล้ว เธองงมั้ยทำไมเค้าชอบเเอบถ่ายเธอ",
        "✨ เค้าก็ไม่รู้ ว่าถ่ายได้มั้ย เอาจริงๆเค้าก็อยากให้ช่วงชีวิตเค้ามีเธอติดด้วย เเต่ก็กลัวจะรบกวนความเป็นส่วนตัวเธอ เค้าขอโทษที่เค้ายังเด็กนะ",
        " ขอบคุณเธอที่ยอมยกเหนียวหมูบัณฑิตให้เค้า เเต่จริงๆเค้าเเอบดีใจอยู่ที่ได้มีรูปคู่เธอเเบบนี้ด้วย",
        "📖 มีคนเเอบถ่ายมาให้ดู น่ารักจัง จริงๆเราก็เหมือนคนพิสูจน์รักกันอยู่นะเนี่ย เค้าเเอบยอมเเพ้ไปเเล้ว จริงๆเหนื่อยากเธอ วันซ้อมไปหาไม่เจอ เสียดาย จริงๆเค้าเเอบหงุดหงิด ร้องไห้เลยทิ้งของที่จะให้เธอไป เเต่พอมองย้อนไปก็สนุกดี ไม่ต้องห่วง เต็มใจไปหา เเค่คนเยอะ กับวันนั้นทำงานเพลียๆ ",
        "🕯️ ปกติเธอไม่ค่อยถ่ารูปรายงานเเบบนี้ เเอบน่ารักดี เเต่ไปทำอะไรผิดมาึเปล่าเนี่ยยย",
        "🛤️ พาหมาเเก่ไปตัดขนมาด้วย ดูฉำ่เลยน้า สบายมั้ยมีคนนวดให้", 
        "🌿 โอ้ยมีเเต่ของกิอีกเเล้วเธอ เธอพาเค้าอ้วน",
        "📜 นี่ด้วย เเ่อยากไปกินอีกเเงงงงงง",
        "🎈 ชอบไปเดินตลาดกับเธอ ชอบให้เธอบ่นนู่นนี่ให้ฟัง อาจจะได้เเค่ฟัง เเต่เค้าก็อยากให้เธอรู้ว่าเค้าอยู่ตรงนี้เป็รเพื่อน เธอไม่ได้ตัวคนเดียว เค้าอยากรู้จักเธอไปเรื่อยๆ อยากรู้จักทุกๆวัน ",
        "🎭 ทำไมไม่ตื่นมาเล่นกับเค้าาาาา",
        "🛶 อันนี้เสวๆๆ ชอบอะฟิน ออกกำังกายกัน",
        "🏖️ เธอออออเค้าเจ็บตัวตลอดเลยอะ ขอบคุณที่ดูเเเลเค้านะ",
        "💓 รูปคู่อีกเเล้ว เย้ๆๆๆ เบื่อยัง" ,
        "🎆 เค้าชอบฮาจิบัง เเต่จริงๆชอบเธอมากกว่า",
        "🌊 หม่าล่าก็ชอบ เเต่ก็ชอบเธอมากกว่าอยู่ดี",
        "🎨 เเอบถ่ายเธออีกเเล้ว ถ้าเธอเบื่อก้เรื่องของเธอ ฮ่าๆๆๆๆๆ",
        "✨ จริงๆก็งอนอยู่ที่เธอลืมเรื่องที่จะง้อ เธอถามเค้าว่าขอโอกาสได้มั้ย ละลืมไปเอง เเต่ก็เพราะว่าอยากอยู่กับเธอ เเต่ถ้าเธอไม่อยากอยู่เเล้วก็บอกกันดีๆนะ วันไหนที่เธอเหนื่อย เค้ารู้ว่าเค้าชอบพูดเเบบนี้อีกเเล้ว เเต่เค้าก็กลัวอยู่ดี จริงๆก็ไม่ได้มั่นใจ เหมือนกับเธอนั่นเเหละ เเต่เค้าก็อยากอยู่กับเธอนะ ไม่ได้อยากทำให้เธอเหนื่อยเลย",
        " อยากมีเวลามากกว่านี้จัง",
        "📖 เค้าเเอบอวยพรให้เธอมีความสุขทุกวัน เเอบคิดว่าถ้าเธอไปจากเค้า เธอจะเจอคนที่ดีกว่านี้มั้ย เธอจะเหนื่อยน้อยกว่านี้รึเปล่า ทั้งๆที่เค้าอยากโตไปด้วยกับเธอเเท้ๆ เเต่มันจะทันเธอมั้ย บางทีเราเหมือนคนไม่รู้จักกันเลย เค้าล้ำเส้นไปรึเปล่า เเต่เค้าขอเห็นเเก่ตัวอยู่กับเธอไปก่อนละกัน",
        "🛤️ เองทำทำไมเนี่ย", 
        "🕯️ มีคนปลอมตัวเป็นหนุ่มพระจอม เธอใส่ช้อปก็หล่อนะเนี่ย ฟินอะ มีหนุ่มวิดวะนั่งกินข้าวด้วย",
        "🛤️ อยากเสียตังอีก", 
        "🛤️ อร่อยอะมงคล", 
        "🕯️ เนี่ยยยมีเเต่รูปไปกิน",
        "📜 อยากจุ่มมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมมม",
        "🎈 เค้าอยากได้ลิปอีกเเล้ว ",
        "🎭 ฟินอะ จำได้มั้ยอันนี้เเรกๆที่ไปหา เธอนวดให้เค้าด้วย",
        "🛶 คนขี้เมา",
        "🏖️ โอ้ยฟิน",
        "💓 จำได้ป่าวที่เจอกันวันเเรก เเต่เค้าไม่ได้อยากให้เรามีวันสุดท้ายเลย เค้าไม่รู้ว่าเธอจะเบื่อเค้ามั้ยตอนไหน เพราะบางทีเธอก็เเอบเหนื่อยใช่มั้ยล่ะ  ",
        "🏖️ ถามเฉยๆ ไม่ได้จะทำให้เหนื่อยน้อยลง ทีนี้อยู่ที่เธอเเล้วว่าอยากอยู่มั้ย สารภาพเลยว่าเค้าเด็กขี้น้อยใจ เพราะบางครั้งเค้าก็ไม่รู้ไม่เข้าใจ เธออาจจะมอง่าเค้าชวนทะเลาะ เเต่เค้าก็ไม่ได้อยากทะเลาะเพื่อเลิก เค้าเข้าจในความเป็นคนโตเเล้ว เเต่เธอช่วยเข้าใจความเด็กของเค้าได้มั้ย เธอบอกว่าเธอพยายามอยู่เหมือนกัน เเต่บางครั้งเค้าก็ไม่รู้ บางอย่างเค้าก็ต้องถาม เเต่พอถามก็เหมือนเค้บังคับ ถามบ่อยๆ ก็ไม่ดีนะเธอ ไม่รู้ว่าเราจะพยายามไปกันนานเเค่ไหน เเต่อยากให้รู้ว่าเค้าเลือกเธอ เลือกที่จะอยู่กับเธอ ถ้าไม่อยากให้อยู่ก็พูด ถ้าอยากให้อยู่ก็พูดหน่อย บางอย่างการกระทำเธอก็เหมือนผลักเค้าเลย ไม่รู้ว่าจะน้อยใจรึเปล่า เเต่เค้าก็อยากพยายามทุกอย่างไปกับเธอนั่นเเหละ",
        "💓 เค้าไม่รู้ว่ามุมมองความรักเธอเป็นเเบบไหน เเต่เค้าก็พยายามรักเธอให้มากเท่าที่เค้าจะทำได้ รักเธอนะ  "
    ];



    const images = [];
    for (let i = 1; i <= 40; i++) {
        const img = document.createElement("img");
        img.src = `img2/สไลด์${i}.JPG`;
        img.alt = `Image ${i}`;
        images.push(img);
    }

    let currentIndex = 0;
    let lyricsTimeout;

    function updateGallery() {
        gallery.innerHTML = "";
        gallery.appendChild(images[currentIndex]);
        images[currentIndex].classList.add("show");
        imageDescription.textContent = descriptions[currentIndex];
    }

    prevBtn.onclick = function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateGallery();
    };

    nextBtn.onclick = function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    };

    toggleMusicBtn.onclick = function () {
        if (music.paused) {
            music.play();
            toggleMusicBtn.textContent = "Pause Music";
            lyricsTimeout = setTimeout(showLyrics, 42000); 
        } else {
            music.pause();
            toggleMusicBtn.textContent = "Play Music";
            clearTimeout(lyricsTimeout);
            hideLyrics();
        }
    };

    function showLyrics() {
        lyricsContainer.innerHTML = "";
        const lyrics = [
            "Like water in the desert", "Impossible to find",
            "You found me when I was broken", "Put me back together, gave me life",
            "Like a flower in the concrete", "So beautiful and rare",
            "You gave me hope when I was empty", "Walked me through the fire, you were there",
            "You're the sun to the moon", "You're my ocean, painted blue",
            "You, I'm nothing without you", "(Without you, without you)",
            "Like an angel in a nightmare", "You opened up my eyes",
            "Looking in all the wrong places", "You're the one I needed this whole time",
            "You're the sun to the moon", "You're my ocean, painted blue",
            "You, I'm nothing without you", "(Without you, without you)",
            "You're the light in the dark", "You're the arrow through my heart",
            "You, I'm nothing without you (oh, oh)", "I'm nothing without you (oh, oh)",
            "I'm nothing without you (oh, oh)", "I'm nothing without you",
            "You, I'm nothing without you", "I'm nothing without you",
            "I'm nothing without you", "I'm nothing without you",
            "You're the air in my lungs", "You're the veins to my blood",
            "Yeah, you, I'm nothing without you", "You're the sun to the moon",
            "You're my ocean, painted blue", "You, I'm nothing without you",
            "(Without you, without you)", "You're the light in the dark",
            "You're the arrow through my heart", "You, I'm nothing without you"
        ];

        let index = 0;
        function showNextLyric() {
            if (index >= lyrics.length) return;

            let lyricDiv = document.createElement("div");
            lyricDiv.classList.add("lyric");
            lyricDiv.textContent = lyrics[index];
            lyricsContainer.innerHTML = "";
            lyricsContainer.appendChild(lyricDiv);
            lyricDiv.classList.add("show");

            index++;
            setTimeout(showNextLyric, 5000);
        }

        showNextLyric();
    }

    function hideLyrics() {
        lyricsContainer.innerHTML = "";
    }

    updateGallery();
});