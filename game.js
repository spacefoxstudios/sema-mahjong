// === 🌐 20 DİL YERELLEŞTİRME SÖZLÜĞÜ ===
const TRANSLATIONS = {
    tr: {
        title: "SEMA MAHJONG",
        subtitle: "Pers, Selçuklu ve Osmanlı Has Bahçelerinin Dervişane Huzuruna Hoş Geldiniz. 100 Kademeli Bu Mistik Yolculukta Taşları Eşleştirin.",
        start: "Huzura Eriş (Başla)",
        level: "Seviye",
        score: "Skor",
        time: "Süre",
        undo: "Geri Al",
        shuffle: "Karıştır",
        musicOn: "Ney: Açık",
        musicOff: "Ney: Kapalı",
        harika: "Harika",
        muazzam: "Muazzam!",
        timeUp: "Süre bitti, derviş sabırla yeniden dener!",
        levelWin: "Tebrikler! Seviye {lvl} Tamamlandı!",
        gameWin: "100 Kademeli Dervişane Yolculuğu Başarıyla Tamamladınız!",
        flag: "🇹🇷", code: "TR"
    },
    en: {
        title: "SEMA MAHJONG",
        subtitle: "Welcome to the serene gardens of Persian, Seljuk, and Ottoman heritage. Match the tiles in this 100-level mystical journey.",
        start: "Enter Serenity (Start)",
        level: "Level",
        score: "Score",
        time: "Time",
        undo: "Undo",
        shuffle: "Shuffle",
        musicOn: "Ney: On",
        musicOff: "Ney: Off",
        harika: "Wonderful",
        muazzam: "Magnificent!",
        timeUp: "Time is up, try again with patience!",
        levelWin: "Congratulations! Level {lvl} Completed!",
        gameWin: "You have completed the 100-level mystical journey!",
        flag: "🇬🇧", code: "EN"
    },
    de: {
        title: "SEMA MAHJONG",
        subtitle: "Willkommen in den friedvollen Gärten des persischen, seldschukischen und osmanischen Erbes. Kombiniere die Ziegel.",
        start: "Eintreten (Start)",
        level: "Level",
        score: "Punkte",
        time: "Zeit",
        undo: "Rückgängig",
        shuffle: "Mischen",
        musicOn: "Ney: An",
        musicOff: "Ney: Aus",
        harika: "Wunderbar",
        muazzam: "Großartig!",
        timeUp: "Die Zeit ist abgelaufen, versuche es mit Geduld erneut!",
        levelWin: "Herzlichen Glückwunsch! Level {lvl} Abgeschlossen!",
        gameWin: "Du hast die mystische Reise erfolgreich beendet!",
        flag: "🇩🇪", code: "DE"
    },
    es: {
        title: "SEMA MAHJONG",
        subtitle: "Bienvenido a la serenidad de los jardines persas, selyúcidas u otomanos. Empareja las fichas en este viaje místico.",
        start: "Entrar (Iniciar)",
        level: "Nivel",
        score: "Puntos",
        time: "Tiempo",
        undo: "Deshacer",
        shuffle: "Barajar",
        musicOn: "Ney: On",
        musicOff: "Ney: Off",
        harika: "Fantástico",
        muazzam: "¡Magnífico!",
        timeUp: "¡Tiempo agotado, inténtalo de nuevo con paciencia!",
        levelWin: "¡Felicidades! ¡Nivel {lvl} completado!",
        gameWin: "¡Has completado el viaje místico de 100 niveles!",
        flag: "🇪🇸", code: "ES"
    },
    pt: {
        title: "SEMA MAHJONG",
        subtitle: "Bem-vindo aos serenos jardins persas, seljúcidas e otomanos. Combine as peças nesta jornada mística.",
        start: "Entrar (Iniciar)",
        level: "Nível",
        score: "Pontos",
        time: "Tempo",
        undo: "Desfazer",
        shuffle: "Embaralhar",
        musicOn: "Ney: On",
        musicOff: "Ney: Off",
        harika: "Maravilhoso",
        muazzam: "Magnífico!",
        timeUp: "O tempo acabou, tente novamente com paciência!",
        levelWin: "Parabéns! Nível {lvl} Concluído!",
        gameWin: "Você completou a jornada mística!",
        flag: "🇵🇹", code: "PT"
    },
    fr: {
        title: "SEMA MAHJONG",
        subtitle: "Bienvenue dans les jardins sereins de l'héritage perse, seldjoukide et ottoman. Associez les tuiles.",
        start: "Entrer (Commencer)",
        level: "Niveau",
        score: "Score",
        time: "Temps",
        undo: "Annuler",
        shuffle: "Mélanger",
        musicOn: "Ney: On",
        musicOff: "Ney: Off",
        harika: "Merveilleux",
        muazzam: "Magnifique!",
        timeUp: "Le temps est écoulé, réessayez avec patience!",
        levelWin: "Félicitations! Niveau {lvl} Terminé!",
        gameWin: "Vous avez terminé le voyage mystique!",
        flag: "🇫🇷", code: "FR"
    },
    it: {
        title: "SEMA MAHJONG",
        subtitle: "Benvenuto nei sereni giardini dell'eredità persiana, selgiuchide e ottomana. Abbina le tessere.",
        start: "Entra (Inizia)",
        level: "Livello",
        score: "Punti",
        time: "Tempo",
        undo: "Annulla",
        shuffle: "Mescola",
        musicOn: "Ney: On",
        musicOff: "Ney: Off",
        harika: "Meraviglioso",
        muazzam: "Magnifico!",
        timeUp: "Tempo scaduto, riprova con pazienza!",
        levelWin: "Congratulazioni! Livello {lvl} Completato!",
        gameWin: "Hai completato il viaggio mistico!",
        flag: "🇮🇹", code: "IT"
    },
    ja: {
        title: "SEMA MAHJONG",
        subtitle: "ペルシャ、セルジューク、オスマンの庭園の静寂へようこそ。100のレベルで牌を合わせていきましょう。",
        start: "静寂に入る (開始)",
        level: "レベル",
        score: "スコア",
        time: "時間",
        undo: "元に戻す",
        shuffle: "シャッフル",
        musicOn: "Ney: オン",
        musicOff: "Ney: オフ",
        harika: "素晴らしい",
        muazzam: "見事です！",
        timeUp: "時間切れです。忍耐強くもう一度お試しください！",
        levelWin: "おめでとうございます！レベル {lvl} クリア！",
        gameWin: "100の神秘的な旅を完了しました！",
        flag: "🇯🇵", code: "JA"
    },
    ko: {
        title: "SEMA MAHJONG",
        subtitle: "페르시아, 셀주크, 오스만 정원의 평화로운 세계에 오신 것을 환영합니다. 패를 맞추어 보세요.",
        start: "시작하기",
        level: "레벨",
        score: "점수",
        time: "시간",
        undo: "실행 취소",
        shuffle: "셔플",
        musicOn: "Ney: 켜짐",
        musicOff: "Ney: 꺼짐",
        harika: "훌륭합니다",
        muazzam: "엄청납니다!",
        timeUp: "시간이 다 되었습니다. 다시 시도해 보세요!",
        levelWin: "축하합니다! 레벨 {lvl} 완료!",
        gameWin: "모든 레벨을 완료하셨습니다!",
        flag: "🇰🇷", code: "KO"
    },
    zh: {
        title: "SEMA MAHJONG",
        subtitle: "欢迎来到波斯、塞尔柱和奥斯曼花园的宁静世界。在100个关卡中匹配图案。",
        start: "进入宁静 (开始)",
        level: "关卡",
        score: "得分",
        time: "时间",
        undo: "撤销",
        shuffle: "洗牌",
        musicOn: "Ney: 开启",
        musicOff: "Ney: 关闭",
        harika: "太棒了",
        muazzam: "绝妙！",
        timeUp: "时间到，请耐心重试！",
        levelWin: "恭喜！关卡 {lvl} 已完成！",
        gameWin: "您已完成100关的神圣之旅！",
        flag: "🇨🇳", code: "ZH"
    },
    ru: {
        title: "SEMA MAHJONG",
        subtitle: "Добро пожаловать в умиротворяющие сады персидского, сельджукского и османского наследия.",
        start: "Войти (Старт)",
        level: "Уровень",
        score: "Счет",
        time: "Время",
        undo: "Отмена",
        shuffle: "Перемешать",
        musicOn: "Ней: Вкл",
        musicOff: "Ней: Выкл",
        harika: "Замечательно",
        muazzam: "Великолепно!",
        timeUp: "Время вышло, попробуйте снова!",
        levelWin: "Поздравляем! Уровень {lvl} пройден!",
        gameWin: "Вы прошли весь мистический путь!",
        flag: "🇷🇺", code: "RU"
    },
    ar: {
        title: "SEMA MAHJONG",
        subtitle: "مرحبًا بكم في حدائق التراث الفارسي والسلجوقي والعثماني الهادئة. طابق الأحجار في هذه الرحلة.",
        start: "ابدأ (دخول)",
        level: "مستوى",
        score: "النقاط",
        time: "الوقت",
        undo: "تراجع",
        shuffle: "خلط",
        musicOn: "ناي: مفعل",
        musicOff: "ناي: معطل",
        harika: "رائع",
        muazzam: "مذهل!",
        timeUp: "انتهى الوقت، حاول مرة أخرى بصبر!",
        levelWin: "تهانينا! اكتمل المستوى {lvl}!",
        gameWin: "لقد أكملت الرحلة بنجاح!",
        flag: "🇸🇦", code: "AR"
    },
    he: {
        title: "SEMA MAHJONG",
        subtitle: "ברוכים הבאים לגנים המוצלים של המורשת הפרסית, הסלג'וקית והעות'מאנית. התאימו את האריחים במסע.",
        start: "התחל",
        level: "שלב",
        score: "ניקוד",
        time: "זמן",
        undo: "בטל",
        shuffle: "ערבב",
        musicOn: "ניי: פעיל",
        musicOff: "ניי: כבוי",
        harika: "נהדר",
        muazzam: "מדהים!",
        timeUp: "נגמר הזמן, נסה שוב בסבלנות!",
        levelWin: "כל הכבוד! שלב {lvl} הושלם!",
        gameWin: "השלמת את המסע המוסטי בהצלחה!",
        flag: "🇮🇱", code: "HE"
    },
    pl: {
        title: "SEMA MAHJONG",
        subtitle: "Witaj w spokojnych ogrodach dziedzictwa perskiego, seldżuckiego i osmańskiego.",
        start: "Wejdź (Start)",
        level: "Poziom",
        score: "Wynik",
        time: "Czas",
        undo: "Cofnij",
        shuffle: "Przetasuj",
        musicOn: "Ney: Wł",
        musicOff: "Ney: Wył",
        harika: "Wspaniale",
        muazzam: "Niesamowicie!",
        timeUp: "Czas minął, spróbuj ponownie z cierpliwością!",
        levelWin: "Gratulacje! Poziom {lvl} Ukończony!",
        gameWin: "Ukończyłeś mistyczną podróż!",
        flag: "🇵🇱", code: "PL"
    },
    nl: {
        title: "SEMA MAHJONG",
        subtitle: "Welkom in de rustgevende tuinen van Perzisch, Seltsjoeks en Osmaans erfgoed.",
        start: "Start",
        level: "Niveau",
        score: "Score",
        time: "Tijd",
        undo: "Ongedaan",
        shuffle: "Schudden",
        musicOn: "Ney: Aan",
        musicOff: "Ney: Uit",
        harika: "Geweldig",
        muazzam: "Magnifiek!",
        timeUp: "Tijd is om, probeer het opnieuw!",
        levelWin: "Gefeliciteerd! Niveau {lvl} Voltooid!",
        gameWin: "Je hebt de reis voltooid!",
        flag: "🇳🇱", code: "NL"
    },
    sv: {
        title: "SEMA MAHJONG",
        subtitle: "Välkommen till de fridfulla trädgårdarna i persiskt, seldjukiskt och osmanskt kulturarv.",
        start: "Starta",
        level: "Nivå",
        score: "Poäng",
        time: "Tid",
        undo: "Ångra",
        shuffle: "Blanda",
        musicOn: "Ney: På",
        musicOff: "Ney: Av",
        harika: "Underbart",
        muazzam: "Magnifikt!",
        timeUp: "Tiden är ute, försök igen!",
        levelWin: "Grattis! Nivå {lvl} Klar!",
        gameWin: "Du har slutfört den mystiska resan!",
        flag: "🇸🇪", code: "SV"
    },
    id: {
        title: "SEMA MAHJONG",
        subtitle: "Selamat datang di taman kedamaian warisan Persia, Seljuk, dan Utsmaniyah.",
        start: "Mulai",
        level: "Level",
        score: "Skor",
        time: "Waktu",
        undo: "Batal",
        shuffle: "Acak",
        musicOn: "Ney: On",
        musicOff: "Ney: Off",
        harika: "Luar Biasa",
        muazzam: "Hebat!",
        timeUp: "Waktu habis, coba lagi dengan sabar!",
        levelWin: "Selamat! Level {lvl} Selesai!",
        gameWin: "Anda telah menyelesaikan perjalanan mistis ini!",
        flag: "🇮🇩", code: "ID"
    },
    vi: {
        title: "SEMA MAHJONG",
        subtitle: "Chào mừng bạn đến với khu vườn thanh bình của di sản Ba Tư, Seljuk và Ottoman.",
        start: "Bắt đầu",
        level: "Cấp độ",
        score: "Điểm",
        time: "Thời gian",
        undo: "Hoàn tác",
        shuffle: "Xáo trộn",
        musicOn: "Ney: Bật",
        musicOff: "Ney: Tắt",
        harika: "Tuyệt vời",
        muazzam: "Phi thường!",
        timeUp: "Hết giờ, hãy thử lại nhé!",
        levelWin: "Chúc mừng! Cấp độ {lvl} Hoàn thành!",
        gameWin: "Bạn đã hoàn thành hành trình bí ẩn!",
        flag: "🇻🇳", code: "VI"
    },
    hi: {
        title: "SEMA MAHJONG",
        subtitle: "फ़ारसी, सेल्जुक्स और ओटोमन विरासत के शांत बगीचों में आपका स्वागत है।",
        start: "प्रारंभ",
        level: "स्तर",
        score: "अंक",
        time: "समय",
        undo: "पूर्ववत करें",
        shuffle: "मिश्रण",
        musicOn: "नेय: चालू",
        musicOff: "नेय: बंद",
        harika: "अद्भुत",
        muazzam: "शानदार!",
        timeUp: "समय समाप्त, धैर्यपूर्वक पुनः प्रयास करें!",
        levelWin: "बधाई हो! स्तर {lvl} पूर्ण हुआ!",
        gameWin: "आपने 100-स्तरीय यात्रा पूरी कर ली है!",
        flag: "🇮🇳", code: "HI"
    },
    th: {
        title: "SEMA MAHJONG",
        subtitle: "ยินดีต้อนรับสู่สวนอันเงียบสงบของมรดกเปอร์เซีย เซลจุก และออตโตมัน",
        start: "เริ่ม",
        level: "ด่าน",
        score: "คะแนน",
        time: "เวลา",
        undo: "เลิกทำ",
        shuffle: "สลับ",
        musicOn: "ขลุ่ย: เปิด",
        musicOff: "ขลุ่ย: ปิด",
        harika: "ยอดเยี่ยม",
        muazzam: "มหัศจรรย์!",
        timeUp: "หมดเวลา พยายามใหม่อีกครั้ง!",
        levelWin: "ยินดีด้วย! ด่าน {lvl} เสร็จสมบูรณ์!",
        gameWin: "คุณเสร็จสิ้นการเดินทางอันลึกลับแล้ว!",
        flag: "🇹🇭", code: "TH"
    }
};

// 🛡️ TRY-CATCH SARMALLI GÜVENLİ KAYIT SİSTEMİ
const SaveSystem = {
    saveProgress(level, score, stars) {
        try {
            const gameData = {
                currentLevel: level,
                highScore: score,
                starsEarned: stars,
                lastPlayed: new Date().toISOString()
            };
            localStorage.setItem('sema_mahjong_save', JSON.stringify(gameData));
        } catch(e) {
            console.log("Save yazma hatası tolore edildi:", e);
        }
    },

    loadProgress() {
        try {
            const savedData = localStorage.getItem('sema_mahjong_save');
            return savedData ? JSON.parse(savedData) : { currentLevel: 1, highScore: 0, starsEarned: 0 };
        } catch(e) {
            console.log("Save okuma hatası tolore edildi:", e);
            return { currentLevel: 1, highScore: 0, starsEarned: 0 };
        }
    }
};

let savedLang = null;
try {
    savedLang = localStorage.getItem('spacefox_mahjong_lang');
} catch(e) { console.log(e); }

let currentLang = savedLang || (navigator.language ? navigator.language.slice(0, 2) : 'tr');
if (!TRANSLATIONS[currentLang]) currentLang = "en";

let musicPlaying = false;
let canvas, ctx;
let tiles = [];
let selectedTile = null;
let moveHistory = [];
let currentProgress = SaveSystem.loadProgress();
let currentLevel = currentProgress.currentLevel;
let score = currentProgress.highScore;
let timeLeft = 180;
let timerInterval;

let hasPlayedHarikaThisLevel = false;
let hasPlayedMuazzamThisLevel = false;

const TILE_W = 62;
const TILE_H = 80;

const MOTIFS = [
    { id: 1,  name: "Hayat Ağacı", type: "tree",     color: "#1b5e20", stroke: "#0d3c12" },
    { id: 2,  name: "Rumi",        type: "rumi",     color: "#0277bd", stroke: "#01579b" },
    { id: 3,  name: "Penç",        type: "penc",     color: "#d81b60", stroke: "#ad1457" },
    { id: 4,  name: "Lale",        type: "lale",     color: "#d32f2f", stroke: "#b71c1c" },
    { id: 5,  name: "Hatayi",      type: "hatayi",   color: "#00838f", stroke: "#006064" },
    { id: 6,  name: "Karanfil",    type: "karanfil", color: "#e64a19", stroke: "#d84315" },
    { id: 7,  name: "Saz Yolu",    type: "saz",      color: "#0d47a1", stroke: "#002171" },
    { id: 8,  name: "Çintemani",   type: "cintemani", color: "#d4af37", stroke: "#b8860b" },
    { id: 9,  name: "Zencerek",    type: "zencerek",  color: "#00695c", stroke: "#004d40" },
    { id: 10, name: "Kartal",      type: "kartal",   color: "#3e2723", stroke: "#1b0000" },
    { id: 11, name: "Kurt",        type: "kurt",     color: "#37474f", stroke: "#212121" },
    { id: 12, name: "Nazar",       type: "nazar",    color: "#1565c0", stroke: "#0d47a1" }
];

const hasBahceler = [
  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f",
  "https://images.pexels.com/photos/34214427/pexels-photo-34214427.jpeg",
  "https://images.pexels.com/photos/38319969/pexels-photo-38319969.jpeg"
];

function playIvoryMatchSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1800, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
        
        gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start();
        osc.stop(audioCtx.currentTime + 0.05);
    } catch(e) {
        console.log("Fildişi ses efekti üretilemedi:", e);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.getElementById('start-btn');
    const musicBtn = document.getElementById('music-btn');
    const undoBtn = document.getElementById('undo-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');

    if (startBtn) startBtn.addEventListener('click', oyunuBaslat);
    if (musicBtn) musicBtn.addEventListener('click', muzikToggle);
    if (undoBtn) undoBtn.addEventListener('click', hamleyiGeriAl);
    if (shuffleBtn) shuffleBtn.addEventListener('click', tahtayiKaristir);

    applyLocalization();
});

function oyunuBaslat() {
    const intro = document.getElementById('intro-screen');
    const container = document.getElementById('game-container');
    
    if (intro) intro.style.display = 'none';
    if (container) container.style.display = 'flex';
    
    canvas = document.getElementById('canvas');
    if (canvas) {
        ctx = canvas.getContext('2d');
        canvas.onclick = onCanvasClick;
    }

    const ney = document.getElementById('ney-audio');
    const musicBtn = document.getElementById('music-btn');
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS['tr'];

    if (ney) {
        ney.play().then(() => {
            musicPlaying = true;
            if (musicBtn) {
                musicBtn.innerText = t.musicOn;
                musicBtn.style.background = "#8b6508";
            }
        }).catch(err => {
            console.log("Ses otomatik oynatma kısıtlaması.");
        });
    }

    seviyeyiYukle(currentLevel);
}

function muzikToggle() {
    const ney = document.getElementById('ney-audio');
    const btn = document.getElementById('music-btn');
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS['tr'];
    if (!ney || !btn) return;

    if (musicPlaying) {
        ney.pause();
        musicPlaying = false;
        btn.innerText = t.musicOff;
        btn.style.background = "#2a3d31";
    } else {
        ney.play().then(() => {
            musicPlaying = true;
            btn.innerText = t.musicOn;
            btn.style.background = "#8b6508";
        }).catch(err => {
            console.log("Ney çalınamadı.");
        });
    }
}

function seviyeyiYukle(lvl) {
    currentLevel = lvl;
    hasPlayedHarikaThisLevel = false;
    hasPlayedMuazzamThisLevel = false;

    updateHeaderUI();
    
    const bgIndex = (lvl - 1) % hasBahceler.length;
    const boardWrapper = document.getElementById('board-wrapper');
    if (boardWrapper) {
        boardWrapper.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${hasBahceler[bgIndex]}')`;
    }

    timeLeft = Math.max(60, 180 - (lvl * 1)); 
    updateHeaderUI();
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateHeaderUI();
        if(timeLeft <= 0) {
            clearInterval(timerInterval);
            const t = TRANSLATIONS[currentLang] || TRANSLATIONS['tr'];
            alert(t.timeUp);
            seviyeyiYukle(currentLevel);
        }
    }, 1000);

    tiles = generateLevelTiles(48);
    selectedTile = null;
    moveHistory = [];
    
    drawBoard();
}

function updateHeaderUI() {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS['tr'];
    const headerEl = document.querySelector('#game-container header');
    if (headerEl) {
        headerEl.innerHTML = `
            <div id="level-title" style="font-size: 1.5rem; font-weight: bold; color: #f3d583;">${t.level}: ${currentLevel} / 100</div>
            <div class="stats" style="display: flex; gap: 20px; font-size: 1.1rem; color: #e2d9c5;">
                <div>${t.score}: <span id="score">${score}</span></div>
                <div>${t.time}: <span id="timer">${timeLeft}s</span></div>
            </div>
        `;
    }
}

function generateLevelTiles(totalTiles = 48) {
    let deck = [];
    let groupsNeeded = totalTiles / 4; 
    
    for(let i = 0; i < groupsNeeded; i++) {
        let motif = MOTIFS[i % MOTIFS.length];
        deck.push(motif, motif, motif, motif);
    }
    deck.sort(() => Math.random() - 0.5);

    // 🛡️ ANDROID VE CANVAS BOYUT GÜVENCESİ
    let cWidth = (canvas && canvas.width > 0) ? canvas.width : window.innerWidth;
    let cHeight = (canvas && canvas.height > 0) ? canvas.height : window.innerHeight;

    let generatedTiles = [];
    let startX = (cWidth - (8 * (TILE_W + 8))) / 2 + 35;
    let startY = (cHeight - (4 * (TILE_H + 8))) / 2;

    // Eğer koordinatlar negatif çıkarsa (ekran darlığı durumunda) güvenli merkeze sabitle
    if (startX < 10) startX = 20;
    if (startY < 10) startY = 50;

    let idx = 0;
    for(let r = 0; r < 4; r++) {
        for(let c = 0; c < 8; c++) {
            if(idx < deck.length && idx < 32) {
                generatedTiles.push({ id: idx, motif: deck[idx], layer: 0, x: startX + c * (TILE_W + 8), y: startY + r * (TILE_H + 8), matched: false });
                idx++;
            }
        }
    }
    for(let r = 0; r < 3; r++) {
        for(let c = 0; c < 4; c++) {
            if(idx < deck.length && idx < 44) {
                generatedTiles.push({ id: idx, motif: deck[idx], layer: 1, x: startX + (c + 2) * (TILE_W + 8) - 6, y: startY + (r + 0.5) * (TILE_H + 8) - 6, matched: false });
                idx++;
            }
        }
    }
    for(let r = 0; r < 2; r++) {
        for(let c = 0; c < 2; c++) {
            if(idx < deck.length) {
                generatedTiles.push({ id: idx, motif: deck[idx], layer: 2, x: startX + (c + 3) * (TILE_W + 8) - 12, y: startY + (r + 1) * (TILE_H + 8) - 12, matched: false });
                idx++;
            }
        }
    }
    return generatedTiles;
}

function isTileLocked(tile) {
    if (tile.matched) return false;
    return tiles.some(other => 
        !other.matched && 
        other.layer > tile.layer && 
        Math.abs(other.x - tile.x) < TILE_W * 0.8 && 
        Math.abs(other.y - tile.y) < TILE_H * 0.8
    );
}

function drawMotifIcon(ctx, cx, cy, motif) {
    ctx.save();
    ctx.translate(cx, cy);

    ctx.fillStyle = motif.color;
    ctx.strokeStyle = motif.stroke;
    ctx.lineWidth = 2;

    let t = motif.type;

    if (t === "lale") {
        ctx.beginPath();
        ctx.moveTo(0, 14);
        ctx.bezierCurveTo(-14, 0, -12, -18, -16, -22);
        ctx.bezierCurveTo(-6, -14, 0, -8, 0, -18);
        ctx.bezierCurveTo(0, -8, 6, -14, 16, -22);
        ctx.bezierCurveTo(12, -18, 14, 0, 0, 14);
        ctx.fill(); ctx.stroke();
    } 
    else if (t === "penc" || t === "hatayi") {
        for(let i=0; i<6; i++) {
            ctx.rotate((Math.PI * 2) / 6);
            ctx.beginPath();
            ctx.arc(0, -10, 7, 0, Math.PI * 2);
            ctx.fill(); ctx.stroke();
        }
        ctx.fillStyle = "#fbc02d";
        ctx.beginPath(); ctx.arc(0, 0, 6, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
    else if (t === "cintemani") {
        ctx.beginPath(); ctx.arc(-7, 5, 5, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(7, 5, 5, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(0, -7, 5, 0, Math.PI*2); ctx.fill(); ctx.stroke();
    }
    else if (t === "nazar") {
        ctx.fillStyle = "#1565c0"; ctx.beginPath(); ctx.arc(0, 0, 16, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#ffffff"; ctx.beginPath(); ctx.arc(0, 0, 11, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#42a5f5"; ctx.beginPath(); ctx.arc(0, 0, 7, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = "#0d47a1"; ctx.beginPath(); ctx.arc(0, 0, 3, 0, Math.PI*2); ctx.fill();
    }
    else if (t === "tree") {
        ctx.beginPath();
        ctx.moveTo(-2, 14); ctx.lineTo(2, 14); ctx.lineTo(2, -2); ctx.lineTo(-2, -2);
        ctx.fill();
        ctx.beginPath(); ctx.arc(0, -8, 12, 0, Math.PI*2); ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.arc(-8, -2, 7, 0, Math.PI*2); ctx.fill();
        ctx.beginPath(); ctx.arc(8, -2, 7, 0, Math.PI*2); ctx.fill();
    }
    else if (t === "rumi" || t === "zencerek") {
        for(let i=0; i<2; i++) {
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-10, -10, 20, 20);
            ctx.strokeRect(-10, -10, 20, 20);
        }
    }
    else if (t === "saz") {
        ctx.beginPath();
        ctx.moveTo(-12, 14);
        ctx.quadraticCurveTo(8, 10, 12, -16);
        ctx.quadraticCurveTo(-2, -4, -12, 14);
        ctx.fill(); ctx.stroke();
    }
    else if (t === "kartal") {
        ctx.beginPath();
        ctx.moveTo(0, 12); ctx.lineTo(-14, 0); ctx.lineTo(-8, -12);
        ctx.lineTo(0, -4); ctx.lineTo(8, -12); ctx.lineTo(14, 0);
        ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    else if (t === "kurt") {
        ctx.beginPath();
        ctx.moveTo(-10, 12); ctx.lineTo(-4, -6); ctx.lineTo(-12, -14);
        ctx.lineTo(2, -8); ctx.lineTo(10, -14); ctx.lineTo(6, 12);
        ctx.closePath(); ctx.fill(); ctx.stroke();
    }
    else {
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill(); ctx.stroke();
    }

    ctx.restore();
}

function drawBoard() {
    if(!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let sortedTiles = [...tiles].sort((a, b) => a.layer - b.layer);

    let activeUnlockedCount = 0;
    let totalActiveCount = 0;

    sortedTiles.forEach(tile => {
        if (tile.matched) return;
        totalActiveCount++;
        let locked = isTileLocked(tile);
        if (!locked) activeUnlockedCount++;

        ctx.fillStyle = "rgba(0, 0, 0, 0.45)";
        ctx.beginPath(); ctx.roundRect(tile.x + 5, tile.y + 5, TILE_W, TILE_H, 10); ctx.fill();

        let isSel = (selectedTile && selectedTile.id === tile.id);
        ctx.fillStyle = isSel ? "#fff8e1" : (locked ? "#738078" : "#faf8f5");
        ctx.strokeStyle = isSel ? "#e74c3c" : "#d4af37";
        ctx.lineWidth = isSel ? 3 : 2;

        ctx.beginPath(); ctx.roundRect(tile.x, tile.y, TILE_W, TILE_H, 10); ctx.fill(); ctx.stroke();

        if (locked) {
            ctx.fillStyle = "rgba(10, 20, 15, 0.4)";
            ctx.beginPath(); ctx.roundRect(tile.x, tile.y, TILE_W, TILE_H, 10); ctx.fill();
            ctx.font = "20px Segoe UI Emoji"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText("🔒", tile.x + TILE_W / 2, tile.y + TILE_H / 2);
        } else {
            drawMotifIcon(ctx, tile.x + TILE_W / 2, tile.y + TILE_H / 2 - 8, tile.motif);
            ctx.fillStyle = "#1a252c"; ctx.font = "bold 8.5px Georgia"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
            ctx.fillText(tile.motif.name, tile.x + TILE_W / 2, tile.y + TILE_H - 12);
        }
    });

    if (totalActiveCount > 0 && activeUnlockedCount === totalActiveCount && !hasPlayedHarikaThisLevel) {
        hasPlayedHarikaThisLevel = true;
        sesliMesajGoster("harika", "Harika");
    }
}

// 🌟 GARANTİLİ VE KORUMALI SEVİYE GEÇİŞ TETİKLEYİCİSİ
function onCanvasClick(e) {
    let rect = canvas.getBoundingClientRect();
    let clickX = e.clientX - rect.left;
    let clickY = e.clientY - rect.top;

    let clickedTile = [...tiles].reverse().find(t => !t.matched && clickX >= t.x && clickX <= t.x + TILE_W && clickY >= t.y && clickY <= t.y + TILE_H);
    if (!clickedTile || isTileLocked(clickedTile)) return;

    if (!selectedTile) {
        selectedTile = clickedTile;
    } else if (selectedTile.id === clickedTile.id) {
        selectedTile = null;
    } else if (selectedTile.motif.id === clickedTile.motif.id) {
        playIvoryMatchSound();
        try {
            if ("vibrate" in navigator) {
                navigator.vibrate(40);
            }
        } catch(err) { console.log(err); }

        selectedTile.matched = true;
        clickedTile.matched = true;
        moveHistory.push([selectedTile, clickedTile]);
        score += 100;
        
        const scoreEl = document.getElementById('score');
        if (scoreEl) scoreEl.innerText = score;
        selectedTile = null;

        drawBoard();

        // 🎯 KİLİTLENMEYEN SEVİYE BİTİŞ KONTROLÜ
        let remainingTiles = tiles.filter(t => !t.matched);
        if (remainingTiles.length === 0) {
            clearInterval(timerInterval);
            
            // "Muazzam!" ses efekti ve görsel bildirimi
            sesliMesajGoster("muazzam", "Muazzam!");

            // ANDROID KİLİTLENMESİNİ ÖNLEYEN GARANTİLİ KASKAD GEÇİŞ
            setTimeout(() => {
                try {
                    if (currentLevel < 100) {
                        SaveSystem.saveProgress(currentLevel + 1, score, 3);
                        seviyeyiYukle(currentLevel + 1);
                    } else {
                        const t = TRANSLATIONS[currentLang] || TRANSLATIONS['tr'];
                        alert(t.gameWin || "100 Kademeli Dervişane Yolculuğu Başarıyla Tamamladınız!");
                    }
                } catch(err) {
                    console.log("Level geçiş hatası tolore edildi, doğrudan yükleniyor:", err);
                    seviyeyiYukle(currentLevel + 1);
                }
            }, 800);
            return;
        }
    } else {
        selectedTile = clickedTile;
    }
    drawBoard();
}

function sesliMesajGoster(metinKey, varsayilanMetin) {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS['tr'];
    const sesMetni = t[metinKey] || varsayilanMetin;

    const msg = document.getElementById('feedback-msg');
    if(msg) {
        msg.innerText = sesMetni;
        msg.classList.add('show');
        setTimeout(() => { msg.classList.remove('show'); }, 1500);
    }
    
    try {
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(sesMetni);
            const langMap = {
                tr: 'tr-TR', en: 'en-US', de: 'de-DE', es: 'es-ES', pt: 'pt-PT',
                fr: 'fr-FR', it: 'it-IT', ja: 'ja-JP', ko: 'ko-KR', zh: 'zh-CN',
                ru: 'ru-RU', ar: 'ar-SA', he: 'he-IL', pl: 'pl-PL', nl: 'nl-NL',
                sv: 'sv-SE', id: 'id-ID', vi: 'vi-VN', hi: 'hi-IN', th: 'th-TH'
            };
            utterance.lang = langMap[currentLang] || 'en-US';
            utterance.rate = 0.95;
            speechSynthesis.speak(utterance);
        }
    } catch(e) {
        console.log("Ses sentezleme tolore edildi:", e);
    }
}

function hamleyiGeriAl() {
    if (moveHistory.length > 0) {
        let lastMove = moveHistory.pop();
        if (lastMove) {
            lastMove[0].matched = false;
            lastMove[1].matched = false;
            selectedTile = null;
            score = Math.max(0, score - 100);
            const scoreEl = document.getElementById('score');
            if (scoreEl) scoreEl.innerText = score;
            drawBoard();
        }
    }
}

// 🌟 KUSURSUZ VE EMNİYET SÜBABLI SHUFFLE
function tahtayiKaristir() {
    let activeTiles = tiles.filter(t => !t.matched);
    if (activeTiles.length < 2) return;

    let currentMotifs = activeTiles.map(t => t.motif);

    for (let i = currentMotifs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentMotifs[i], currentMotifs[j]] = [currentMotifs[j], currentMotifs[i]];
    }

    activeTiles.forEach((tile, index) => {
        tile.motif = currentMotifs[index];
    });

    selectedTile = null;
    drawBoard();
}

function toggleLangMenu() {
    const dropdown = document.getElementById('lang-dropdown');
    if (dropdown) {
        dropdown.classList.toggle('lang-dropdown-hidden');
    }
}

function changeLanguage(langCode) {
    if (!TRANSLATIONS[langCode]) return;
    currentLang = langCode;
    try {
        localStorage.setItem('spacefox_mahjong_lang', langCode);
    } catch(e) { console.log(e); }
    
    applyLocalization();
    toggleLangMenu();
}

function applyLocalization() {
    const t = TRANSLATIONS[currentLang] || TRANSLATIONS['tr'];
    if (!t) return;
    
    const startBtn = document.getElementById('start-btn');
    const introTitle = document.querySelector('#intro-screen h1');
    const introSubtitle = document.querySelector('#intro-screen p');

    if (startBtn) startBtn.innerText = t.start;
    if (introTitle) introTitle.innerText = t.title;
    if (introSubtitle) introSubtitle.innerText = t.subtitle;
    
    const undoBtn = document.getElementById('undo-btn');
    const shuffleBtn = document.getElementById('shuffle-btn');
    const musicBtn = document.getElementById('music-btn');
    const flagEl = document.getElementById('current-flag');
    const codeEl = document.getElementById('current-lang-code');

    if (undoBtn) undoBtn.innerText = t.undo;
    if (shuffleBtn) shuffleBtn.innerText = t.shuffle;
    if (musicBtn) musicBtn.innerText = musicPlaying ? t.musicOn : t.musicOff;
    if (flagEl) flagEl.innerText = t.flag;
    if (codeEl) codeEl.innerText = t.code;
    
    updateHeaderUI();

    if (currentLang === 'he' || currentLang === 'ar') {
        document.body.style.direction = 'rtl';
    } else {
        document.body.style.direction = 'ltr';
    }
}