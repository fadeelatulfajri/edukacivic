// Memuat Firebase CDN secara otomatis jika belum ada di halaman
(function loadFirebaseAuto() {
    if (typeof firebase === 'undefined') {
        const s1 = document.createElement('script');
        s1.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
        document.head.appendChild(s1);

        const s2 = document.createElement('script');
        s2.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js";
        document.head.appendChild(s2);

        s2.onload = () => {
            if (!firebase.apps.length) {
                firebase.initializeApp({
                    databaseURL: "https://edukacivic-default-rtdb.asia-southeast1.firebasedatabase.app"
                });
            }
        };
    } else if (!firebase.apps.length) {
        firebase.initializeApp({
            databaseURL: "https://edukacivic-default-rtdb.asia-southeast1.firebasedatabase.app"
        });
    }
})();
/**
 * EdukaCivic Student & Avatar Management System
 * Mengelola 50 Avatar Unik (25 Laki-laki, 25 Perempuan),
 * Registrasi/Login Siswa, Validasi Avatar Tunggal,
 * Sistem Progresi Linear Dunia & Level, Gating Aktivitas Interaktif,
 * dan Selebrasi/Apresiasi Kuis.
 */

// 1. DATA 50 AVATAR UNIK (25 Laki-laki, 25 Perempuan)
const EDUKACIVIC_AVATARS = [
    // === 25 AVATAR LAKI-LAKI (m_01 s/d m_25) ===
    { id: 'm_01', gender: 'L', name: 'Zidan', seed: 'Zidan', bg: 'b6e3f4', desc: 'Pejuang Konstitusi' },
    { id: 'm_02', gender: 'L', name: 'Budi', seed: 'Budi', bg: 'c0aede', desc: 'Pemimpin Cilik' },
    { id: 'm_03', gender: 'L', name: 'Satria', seed: 'Satria', bg: 'd1d4f9', desc: 'Ksatria Pancasila' },
    { id: 'm_04', gender: 'L', name: 'Bayu', seed: 'Bayu', bg: 'ffd5dc', desc: 'Pelajar Cendekia' },
    { id: 'm_05', gender: 'L', name: 'Arka', seed: 'Arka', bg: 'ffdfbf', desc: 'Petualang Muda' },
    { id: 'm_06', gender: 'L', name: 'Rian', seed: 'Rian', bg: 'b6e3f4', desc: 'Aktivis Sekolah' },
    { id: 'm_07', gender: 'L', name: 'Dimas', seed: 'Dimas', bg: 'c0aede', desc: 'Detektif Hukum' },
    { id: 'm_08', gender: 'L', name: 'Fajar', seed: 'Fajar', bg: 'd1d4f9', desc: 'Penjaga Toleransi' },
    { id: 'm_09', gender: 'L', name: 'Eko', seed: 'Eko', bg: 'ffd5dc', desc: 'Duta Demokrasi' },
    { id: 'm_10', gender: 'L', name: 'Gilang', seed: 'Gilang', bg: 'ffdfbf', desc: 'Juara Kuis' },
    { id: 'm_11', gender: 'L', name: 'Rizky', seed: 'Rizky', bg: 'b6e3f4', desc: 'Kader Bangsa' },
    { id: 'm_12', gender: 'L', name: 'Ilham', seed: 'Ilham', bg: 'c0aede', desc: 'Pionir Hukum' },
    { id: 'm_13', gender: 'L', name: 'Rafi', seed: 'Rafi', bg: 'd1d4f9', desc: 'Sahabat Warga' },
    { id: 'm_14', gender: 'L', name: 'Adit', seed: 'Adit', bg: 'ffd5dc', desc: 'Relawan Sosial' },
    { id: 'm_15', gender: 'L', name: 'Putra', seed: 'Putra', bg: 'ffdfbf', desc: 'Garuda Muda' },
    { id: 'm_16', gender: 'L', name: 'Kevin', seed: 'Kevin', bg: 'b6e3f4', desc: 'Kapten Tim' },
    { id: 'm_17', gender: 'L', name: 'Aldi', seed: 'Aldi', bg: 'c0aede', desc: 'Pemberani' },
    { id: 'm_18', gender: 'L', name: 'Bagas', seed: 'Bagas', bg: 'd1d4f9', desc: 'Tangguh Beraksi' },
    { id: 'm_19', gender: 'L', name: 'Danu', seed: 'Danu', bg: 'ffd5dc', desc: 'Bintang Prestasi' },
    { id: 'm_20', gender: 'L', name: 'Farhan', seed: 'Farhan', bg: 'ffdfbf', desc: 'Sahabat Siswa' },
    { id: 'm_21', gender: 'L', name: 'Galang', seed: 'Galang', bg: 'b6e3f4', desc: 'Generasi Emas' },
    { id: 'm_22', gender: 'L', name: 'Haikal', seed: 'Haikal', bg: 'c0aede', desc: 'Cinta Tanah Air' },
    { id: 'm_23', gender: 'L', name: 'Irfan', seed: 'Irfan', bg: 'd1d4f9', desc: 'Kreator Muda' },
    { id: 'm_24', gender: 'L', name: 'Joko', seed: 'Joko', bg: 'ffd5dc', desc: 'Teladan Gotong Royong' },
    { id: 'm_25', gender: 'L', name: 'Kiki', seed: 'Kiki', bg: 'ffdfbf', desc: 'Semangat Juang' },

    // === 25 AVATAR PEREMPUAN (f_01 s/d f_25) ===
    { id: 'f_01', gender: 'P', name: 'Siti', seed: 'Siti', bg: 'ffd5dc', desc: 'Srikandi Bangsa' },
    { id: 'f_02', gender: 'P', name: 'Citra', seed: 'Citra', bg: 'ffdfbf', desc: 'Duta Konstitusi' },
    { id: 'f_03', gender: 'P', name: 'Dina', seed: 'Dina', bg: 'c0aede', desc: 'Bintang Prestasi' },
    { id: 'f_04', gender: 'P', name: 'Fitri', seed: 'Fitri', bg: 'd1d4f9', desc: 'Penjaga Persatuan' },
    { id: 'f_05', gender: 'P', name: 'Hana', seed: 'Hana', bg: 'b6e3f4', desc: 'Cendekia Muda' },
    { id: 'f_06', gender: 'P', name: 'Intan', seed: 'Intan', bg: 'ffd5dc', desc: 'Sahabat Bijak' },
    { id: 'f_07', gender: 'P', name: 'Laras', seed: 'Laras', bg: 'ffdfbf', desc: 'Pelindung HAM' },
    { id: 'f_08', gender: 'P', name: 'Maya', seed: 'Maya', bg: 'c0aede', desc: 'Pendidik Sebaya' },
    { id: 'f_09', gender: 'P', name: 'Nabila', seed: 'Nabila', bg: 'd1d4f9', desc: 'Kreatif Beraksi' },
    { id: 'f_10', gender: 'P', name: 'Putri', seed: 'Putri', bg: 'b6e3f4', desc: 'Srikandi Hukum' },
    { id: 'f_11', gender: 'P', name: 'Rani', seed: 'Rani', bg: 'ffd5dc', desc: 'Teladan Ramah' },
    { id: 'f_12', gender: 'P', name: 'Sari', seed: 'Sari', bg: 'ffdfbf', desc: 'Jiwa Nasionalis' },
    { id: 'f_13', gender: 'P', name: 'Tia', seed: 'Tia', bg: 'c0aede', desc: 'Ceria Berprestasi' },
    { id: 'f_14', gender: 'P', name: 'Wulan', seed: 'Wulan', bg: 'd1d4f9', desc: 'Bintang Nusantara' },
    { id: 'f_15', gender: 'P', name: 'Yuni', seed: 'Yuni', bg: 'b6e3f4', desc: 'Penjaga Harmoni' },
    { id: 'f_16', gender: 'P', name: 'Zahra', seed: 'Zahra', bg: 'ffd5dc', desc: 'Teladan Toleran' },
    { id: 'f_17', gender: 'P', name: 'Alya', seed: 'Alya', bg: 'ffdfbf', desc: 'Aktivis Cilik' },
    { id: 'f_18', gender: 'P', name: 'Bella', seed: 'Bella', bg: 'c0aede', desc: 'Pemberani & Adil' },
    { id: 'f_19', gender: 'P', name: 'Cantika', seed: 'Cantika', bg: 'd1d4f9', desc: 'Harmoni Bangsa' },
    { id: 'f_20', gender: 'P', name: 'Dewi', seed: 'Dewi', bg: 'b6e3f4', desc: 'Karakter Luhur' },
    { id: 'f_21', gender: 'P', name: 'Erina', seed: 'Erina', bg: 'ffd5dc', desc: 'Pemenang Kuis' },
    { id: 'f_22', gender: 'P', name: 'Feby', seed: 'Feby', bg: 'ffdfbf', desc: 'Siswa Teladan' },
    { id: 'f_23', gender: 'P', name: 'Gita', seed: 'Gita', bg: 'c0aede', desc: 'Irama Persatuan' },
    { id: 'f_24', gender: 'P', name: 'Hesti', seed: 'Hesti', bg: 'd1d4f9', desc: 'Ksatria Muda' },
    { id: 'f_25', gender: 'P', name: 'Indah', seed: 'Indah', bg: 'b6e3f4', desc: 'Pelindung Keadilan' }
];

// 2. DATA STRUKTUR 20 LEVEL (Dunia 1 s/d 5)
const EDUKACIVIC_LEVELS_ORDER = [
    'd1l1', 'd1l2', 'd1l3', 'd1l4',
    'd2l1', 'd2l2', 'd2l3', 'd2l4',
    'd3l1', 'd3l2', 'd3l3', 'd3l4',
    'd4l1', 'd4l2', 'd4l3', 'd4l4',
    'd5l1', 'd5l2', 'd5l3', 'd5l4'
];

const EDUKACIVIC_LEVEL_MAP = {
    'd1l1': { dunia: 1, level: 1, name: 'Apa Itu Konstitusi?', url: 'dunia1-level1.html', kuisUrl: 'dunia1-level1-kuis.html', nextLevel: 'd1l2', points: 25 },
    'd1l2': { dunia: 1, level: 2, name: 'Mengapa Negara Membutuhkan Konstitusi?', url: 'dunia1-level2.html', kuisUrl: 'dunia1-level2-kuis.html', nextLevel: 'd1l3', points: 25 },
    'd1l3': { dunia: 1, level: 3, name: 'Konstitusi dan UUD NRI Tahun 1945', url: 'dunia1-level3.html', kuisUrl: 'dunia1-level3-kuis.html', nextLevel: 'd1l4', points: 25 },
    'd1l4': { dunia: 1, level: 4, name: 'Indonesia Membutuhkan UUD 1945', url: 'dunia1-level4.html', kuisUrl: 'dunia1-level4-kuis.html', nextLevel: 'd2l1', points: 25 },

    'd2l1': { dunia: 2, level: 5, name: 'Mengenal BPUPKI', url: 'dunia2-level1.html', kuisUrl: 'dunia2-level1-kuis.html', nextLevel: 'd2l2', points: 25 },
    'd2l2': { dunia: 2, level: 6, name: 'Tokoh & Panitia Perancang UUD', url: 'dunia2-level2.html', kuisUrl: 'dunia2-level2-kuis.html', nextLevel: 'd2l3', points: 25 },
    'd2l3': { dunia: 2, level: 7, name: 'Perjalanan Perumusan UUD', url: 'dunia2-level3.html', kuisUrl: 'dunia2-level3-kuis.html', nextLevel: 'd2l4', points: 25 },
    'd2l4': { dunia: 2, level: 8, name: 'Rangkuman & Boss Battle Dunia 2', url: 'dunia2-level4.html', kuisUrl: 'dunia2-level4-boss.html', nextLevel: 'd3l1', points: 25 },

    'd3l1': { dunia: 3, level: 9, name: 'Mengenal PPKI', url: 'dunia3-level1.html', kuisUrl: 'dunia3-level1-kuis.html', nextLevel: 'd3l2', points: 25 },
    'd3l2': { dunia: 3, level: 10, name: 'Perjalanan Menuju Pengesahan UUD', url: 'dunia3-level2.html', kuisUrl: 'dunia3-level2-kuis.html', nextLevel: 'd3l3', points: 25 },
    'd3l3': { dunia: 3, level: 11, name: 'UUD Disahkan & Keputusan Sidang', url: 'dunia3-level3.html', kuisUrl: 'dunia3-level3-kuis.html', nextLevel: 'd3l4', points: 25 },
    'd3l4': { dunia: 3, level: 12, name: 'Boss Battle Sidang PPKI', url: 'dunia3-level4.html', kuisUrl: 'dunia3-level4.html', nextLevel: 'd4l1', points: 25 },

    'd4l1': { dunia: 4, level: 13, name: 'Sifat UUD NRI Tahun 1945', url: 'dunia4-level1.html', kuisUrl: 'dunia4-level1-kuis.html', nextLevel: 'd4l2', points: 25 },
    'd4l2': { dunia: 4, level: 14, name: 'Fungsi UUD NRI Tahun 1945', url: 'dunia4-level2.html', kuisUrl: 'dunia4-level2-kuis.html', nextLevel: 'd4l3', points: 25 },
    'd4l3': { dunia: 4, level: 15, name: 'Kedudukan UUD NRI Tahun 1945', url: 'dunia4-level3.html', kuisUrl: 'dunia4-level3-kuis.html', nextLevel: 'd4l4', points: 25 },
    'd4l4': { dunia: 4, level: 16, name: 'Misi Hukum Dasar - Analisis Kasus', url: 'dunia4-level4.html', kuisUrl: 'dunia4-level4.html', nextLevel: 'd5l1', points: 25 },

    'd5l1': { dunia: 5, level: 17, name: 'Sikap Taat terhadap Konstitusi', url: 'dunia5-level1.html', kuisUrl: 'dunia5-level1-kuis.html', nextLevel: 'd5l2', points: 25 },
    'd5l2': { dunia: 5, level: 18, name: 'Game Kerjasama: Ekspedisi Tali Konstitusi (Pico Park)', url: 'dunia5-level2.html', kuisUrl: 'dunia5-level2.html', nextLevel: 'd5l3', points: 25 },
    'd5l3': { dunia: 5, level: 19, name: 'Kanvas Kolaboratif: Mosaik Konstitusi 4 Kuadran', url: 'dunia5-level3.html', kuisUrl: 'dunia5-level3.html', nextLevel: 'd5l4', points: 25 },
    'd5l4': { dunia: 5, level: 20, name: 'FINAL BOSS: Taat Konstitusi', url: 'dunia5-level4.html', kuisUrl: 'dunia5-level4.html', nextLevel: null, points: 50 }
};

// 3. HELPER TINGKATAN LENCANA / PERINGKAT POIN
function getStudentTier(poin) {
    poin = poin || 0;
    if (poin > 500) return { title: 'Presiden', badge: '👑', color: 'text-amber-400', bg: 'bg-red-500/20 text-red-400 border-red-500/30' };
    if (poin >= 400) return { title: 'Menteri', badge: '💼', color: 'text-purple-400', bg: 'bg-purple-500/20 text-purple-400 border-purple-500/30' };
    if (poin >= 300) return { title: 'Pejabat', badge: '🏛️', color: 'text-blue-400', bg: 'bg-blue-500/20 text-blue-400 border-blue-500/30' };
    if (poin >= 200) return { title: 'Aktivis', badge: '🔥', color: 'text-emerald-400', bg: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' };
    if (poin >= 100) return { title: 'Warga', badge: '🛡️', color: 'text-sky-400', bg: 'bg-sky-500/20 text-sky-400 border-sky-500/30' };
    return { title: 'Pemula', badge: '🌱', color: 'text-gray-400', bg: 'bg-slate-700/50 text-slate-300 border-slate-600/50' };
}

// Helper URL Generator DiceBear Adventurer
function getAvatarUrl(avatarObj) {
    if (!avatarObj) return 'https://api.dicebear.com/7.x/adventurer/svg?seed=Student&backgroundColor=b6e3f4';
    return `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(avatarObj.seed)}&backgroundColor=${avatarObj.bg}`;
}

// 4. SISTEM PROGRES & DATABASE SISWA
function getPlayerProgress() {
    try {
        const p = JSON.parse(localStorage.getItem('edukacivic_progress')) || { poin: 0, level: 1, dunia: 1, completedLevels: [] };
        if (!Array.isArray(p.completedLevels)) p.completedLevels = [];
        return p;
    } catch(e) {
        return { poin: 0, level: 1, dunia: 1, completedLevels: [] };
    }
}

function isLevelUnlocked(levelKey) {
    // Khusus Level 18 (d5l2) dan Level 19 (d5l3) selalu terbuka untuk game bersama kelompok
    if (levelKey === 'd5l2' || levelKey === 'd5l3') return true;
    
    const idx = EDUKACIVIC_LEVELS_ORDER.indexOf(levelKey);
    if (idx <= 0) return true; // Level 1 selalu terbuka
    const prevLevel = EDUKACIVIC_LEVELS_ORDER[idx - 1];
    const prog = getPlayerProgress();
    return prog.completedLevels.includes(prevLevel);
}

// 4.1 SISTEM TOKEN RAHASIA ANTAR-DUNIA (1 DUNIA = 1 PERTEMUAN PEMBELAJARAN)
const EDUKACIVIC_WORLD_TOKENS = {
    2: 'uudnri1945',   // Dunia 2 (Pertemuan 2): Sidang BPUPKI & Perumusan UUD
    3: 'ppki1945',     // Dunia 3 (Pertemuan 3): Pengesahan UUD 1945
    4: 'hierarkiuud',  // Dunia 4 (Pertemuan 4): Tata Urutan Perundang-undangan
    5: 'patuhhukum'    // Dunia 5 (Pertemuan 5): Taat Konstitusi & Duta Hukum
};

const EDUKACIVIC_WORLD_INFO = {
    1: { name: 'Mengenal Norma & Konstitusi', meeting: 'Pertemuan 1', levels: 'Level 1 - 4', reqKey: null, reqName: 'Dunia 1', token: null },
    2: { name: 'Perumusan UUD NRI Tahun 1945', meeting: 'Pertemuan 2', levels: 'Level 5 - 8', reqKey: 'd1l4', reqName: 'Dunia 1', token: 'uudnri1945' },
    3: { name: 'Pengesahan UUD NRI Tahun 1945', meeting: 'Pertemuan 3', levels: 'Level 9 - 12', reqKey: 'd2l4', reqName: 'Dunia 2', token: 'ppki1945' },
    4: { name: 'Kekuatan & Tata Urutan Peraturan', meeting: 'Pertemuan 4', levels: 'Level 13 - 16', reqKey: 'd3l4', reqName: 'Dunia 3', token: 'hierarkiuud' },
    5: { name: 'Taat Konstitusi dalam Kehidupan', meeting: 'Pertemuan 5', levels: 'Level 17 - 20', reqKey: 'd4l4', reqName: 'Dunia 4', token: 'patuhhukum' }
};

function getUnlockedWorldTokens() {
    try {
        const t = JSON.parse(localStorage.getItem('edukacivic_unlocked_tokens')) || [];
        return Array.isArray(t) ? t : [];
    } catch(e) {
        return [];
    }
}

function isWorldPreviousCompleted(worldNum) {
    if (worldNum <= 1) return true;
    const prog = getPlayerProgress();
    const completed = prog.completedLevels || [];
    if (worldNum === 2) return completed.includes('d1l4');
    if (worldNum === 3) return completed.includes('d2l4');
    if (worldNum === 4) return completed.includes('d3l4');
    if (worldNum === 5) return completed.includes('d4l4');
    return false;
}

function isWorldTokenUnlocked(worldNum) {
    if (worldNum <= 1) return true;
    if (sessionStorage.getItem('edukacivic_guru')) return true; // Mode guru selalu buka token
    
    const unlockedTokens = getUnlockedWorldTokens();
    if (unlockedTokens.includes(Number(worldNum))) return true;
    if (localStorage.getItem(`edukacivic_token_dunia_${worldNum}`) === 'true') return true;
    return false;
}

function isWorldUnlocked(worldNum) {
    if (worldNum <= 1) return true;
    if (sessionStorage.getItem('edukacivic_guru')) return true;
    return isWorldPreviousCompleted(worldNum) && isWorldTokenUnlocked(worldNum);
}

function unlockWorldWithToken(worldNum, inputToken) {
    const expected = (EDUKACIVIC_WORLD_TOKENS[worldNum] || '').toLowerCase().trim();
    const clean = (inputToken || '').toLowerCase().trim();
    
    if (clean === expected) {
        const unlockedTokens = getUnlockedWorldTokens();
        const num = Number(worldNum);
        if (!unlockedTokens.includes(num)) {
            unlockedTokens.push(num);
            localStorage.setItem('edukacivic_unlocked_tokens', JSON.stringify(unlockedTokens));
        }
        localStorage.setItem(`edukacivic_token_dunia_${num}`, 'true');
        
        const student = getActiveStudent();
        if (student) {
            if (!Array.isArray(student.unlockedTokens)) student.unlockedTokens = [];
            if (!student.unlockedTokens.includes(num)) student.unlockedTokens.push(num);
            localStorage.setItem('edukacivic_siswa', JSON.stringify(student));
        }
        return { success: true, message: `Token benar! Gerbang Dunia ${num} berhasil dibuka.` };
    }
    return { success: false, message: `Token salah! Silakan minta token rahasia yang tepat kepada Guru.` };
}

function showWorldTokenPromptModal(worldNum, redirectUrl) {
    const info = EDUKACIVIC_WORLD_INFO[worldNum] || { name: `Dunia ${worldNum}`, meeting: `Pertemuan ${worldNum}` };
    const prevInfo = EDUKACIVIC_WORLD_INFO[worldNum - 1] || { name: `Dunia ${worldNum - 1}` };
    const student = getActiveStudent();
    const studentName = student ? student.nama : 'Siswa EdukaCivic';
    const avatarUrl = student && student.avatarUrl ? student.avatarUrl : 'https://api.dicebear.com/7.x/adventurer/svg?seed=Student';

    let modal = document.getElementById('global-world-token-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'global-world-token-modal';
        modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md transition-all duration-300';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="bg-gray-900 border border-gray-700 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center relative overflow-hidden transform scale-100 transition-all">
            <div class="absolute -top-12 -right-12 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute -bottom-12 -left-12 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none"></div>

            <!-- Avatar / Icon Badge -->
            <div class="relative inline-block mx-auto mb-4">
                <div class="w-20 h-20 rounded-3xl p-1 bg-gradient-to-tr from-orange-500 via-amber-500 to-red-500 shadow-xl shadow-orange-500/20">
                    <img src="${avatarUrl}" alt="${studentName}" class="w-full h-full rounded-2xl bg-slate-950 object-cover">
                </div>
                <div class="absolute -bottom-1 -right-1 bg-amber-400 text-slate-950 w-7 h-7 rounded-xl font-black text-xs flex items-center justify-center shadow-lg border-2 border-slate-900">
                    <i class="fa-solid fa-key text-[11px]"></i>
                </div>
            </div>

            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                <i class="fa-solid fa-lock text-[10px]"></i> ${info.meeting} · Dunia ${worldNum}
            </div>

            <h3 class="text-xl sm:text-2xl font-extrabold text-white mb-2">Gerbang Dunia ${worldNum} Terkunci</h3>
            <p class="text-gray-300 text-xs sm:text-sm leading-relaxed mb-6">
                Pembelajaran ${prevInfo.name} telah selesai untuk pertemuan minggu lalu. Masukkan <strong>Token Rahasia dari Guru</strong> untuk membuka <strong>${info.name}</strong> pada pertemuan minggu ini:
            </p>

            <form id="world-token-form" onsubmit="handleWorldTokenSubmit(event, ${worldNum}, '${redirectUrl || ''}')" class="space-y-4">
                <div class="relative">
                    <i class="fa-solid fa-key absolute left-4 top-1/2 -translate-y-1/2 text-orange-400"></i>
                    <input type="text" id="world-token-input" required autocomplete="off" placeholder="Masukkan token rahasia..." class="w-full bg-slate-950 border-2 border-gray-700 focus:border-orange-500 rounded-2xl pl-11 pr-4 py-3.5 text-sm text-white font-mono placeholder-gray-500 text-center tracking-wider uppercase focus:outline-none transition-all">
                </div>

                <div id="world-token-error" class="hidden text-xs text-red-400 font-semibold p-2.5 bg-red-950/40 border border-red-500/30 rounded-xl"></div>

                <div class="flex flex-col gap-2.5 pt-2">
                    <button type="submit" id="btn-submit-token" class="w-full py-3.5 px-6 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/30 transition transform hover:scale-[1.02] flex items-center justify-center gap-2 text-sm">
                        <span>Buka Gerbang Dunia ${worldNum}</span> <i class="fa-solid fa-arrow-right"></i>
                    </button>
                    <button type="button" onclick="closeWorldTokenModal()" class="w-full py-2.5 px-4 bg-gray-800/80 hover:bg-gray-800 text-gray-400 hover:text-white font-semibold rounded-xl text-xs transition">
                        Nanti Saja / Kembali
                    </button>
                </div>
            </form>
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
        const inp = document.getElementById('world-token-input');
        if (inp) inp.focus();
    }, 100);
}

function closeWorldTokenModal() {
    const modal = document.getElementById('global-world-token-modal');
    if (modal) modal.classList.add('hidden');
}

function handleWorldTokenSubmit(e, worldNum, redirectUrl) {
    if (e) e.preventDefault();
    const input = document.getElementById('world-token-input');
    const errBox = document.getElementById('world-token-error');
    const val = input ? input.value.trim() : '';

    const res = unlockWorldWithToken(worldNum, val);
    if (res.success) {
        errBox.className = 'text-xs text-green-400 font-bold p-3 bg-green-950/50 border border-green-500/40 rounded-xl block';
        errBox.innerHTML = `🎉 Token Benar! Gerbang Dunia ${worldNum} Berhasil Dibuka! Mengalihkan...`;
        errBox.classList.remove('hidden');
        if (input) input.disabled = true;
        
        try { playCelebrationFanfare(); } catch(e) {}
        try { triggerCelebrationConfetti(); } catch(e) {}

        setTimeout(() => {
            closeWorldTokenModal();
            window.location.href = redirectUrl || `dunia${worldNum}.html`;
        }, 800);
    } else {
        errBox.textContent = `❌ ${res.message}`;
        errBox.classList.remove('hidden');
        if (input) {
            input.classList.add('border-red-500');
            input.select();
            setTimeout(() => input.classList.remove('border-red-500'), 1000);
        }
    }
}

function openWorldWithTokenCheck(worldNum, targetUrl) {
    const num = Number(worldNum);
    const dest = targetUrl || `dunia${num}.html`;
    
    if (num <= 1) {
        window.location.href = dest;
        return;
    }
    
    if (!isWorldPreviousCompleted(num)) {
        const prevNum = num - 1;
        alert(`🔒 Dunia ${num} masih terkunci!\nSilakan selesaikan seluruh level pada Dunia ${prevNum} terlebih dahulu.`);
        return;
    }
    
    if (!isWorldTokenUnlocked(num)) {
        showWorldTokenPromptModal(num, dest);
        return;
    }
    
    window.location.href = dest;
}

function getLatestStudentProgressUrl() {
    const prog = getPlayerProgress();
    const completed = prog.completedLevels || [];

    for (let i = 0; i < EDUKACIVIC_LEVELS_ORDER.length; i++) {
        const lvlKey = EDUKACIVIC_LEVELS_ORDER[i];
        if (!completed.includes(lvlKey)) {
            const meta = EDUKACIVIC_LEVEL_MAP[lvlKey];
            if (meta) {
                return `dunia${meta.dunia}.html`;
            }
        }
    }
    return 'dunia5.html';
}

function handleMulaiBelajar() {
    const siswa = getActiveStudent();
    if (!siswa) {
        window.location.href = 'login-siswa.html';
        return;
    }
    window.location.href = getLatestStudentProgressUrl();
}

function calculateWorldProgress(completedLevels = []) {
    const d1 = ['d1l1', 'd1l2', 'd1l3', 'd1l4'];
    const d2 = ['d2l1', 'd2l2', 'd2l3', 'd2l4'];
    const d3 = ['d3l1', 'd3l2', 'd3l3', 'd3l4'];
    const d4 = ['d4l1', 'd4l2', 'd4l3', 'd4l4'];
    const d5 = ['d5l1', 'd5l2', 'd5l3', 'd5l4'];

    const countD1 = d1.filter(l => completedLevels.includes(l)).length;
    const countD2 = d2.filter(l => completedLevels.includes(l)).length;
    const countD3 = d3.filter(l => completedLevels.includes(l)).length;
    const countD4 = d4.filter(l => completedLevels.includes(l)).length;
    const countD5 = d5.filter(l => completedLevels.includes(l)).length;

    return {
        dunia1: { count: countD1, total: 4, pct: Math.round((countD1 / 4) * 100) },
        dunia2: { count: countD2, total: 4, pct: Math.round((countD2 / 4) * 100) },
        dunia3: { count: countD3, total: 4, pct: Math.round((countD3 / 4) * 100) },
        dunia4: { count: countD4, total: 4, pct: Math.round((countD4 / 4) * 100) },
        dunia5: { count: countD5, total: 4, pct: Math.round((countD5 / 4) * 100) },
        totalCompleted: completedLevels.length
    };
}

function initStudentDatabase() {
    let reg = localStorage.getItem('edukacivic_registered_students');
    if (!reg) {
        localStorage.setItem('edukacivic_registered_students', JSON.stringify([]));
    } else {
        try {
            let students = JSON.parse(reg);
            if (!Array.isArray(students)) {
                localStorage.setItem('edukacivic_registered_students', JSON.stringify([]));
            }
        } catch(e) {
            localStorage.setItem('edukacivic_registered_students', JSON.stringify([]));
        }
    }
}

function getRegisteredStudents() {
    initStudentDatabase();
    try {
        return JSON.parse(localStorage.getItem('edukacivic_registered_students')) || [];
    } catch(e) {
        return [];
    }
}

function getOccupiedAvatars(excludeStudentId = null) {
    const list = getRegisteredStudents();
    const map = {};
    list.forEach(st => {
        if (st.avatarId && (!excludeStudentId || st.id !== excludeStudentId)) {
            map[st.avatarId] = {
                nama: st.nama,
                kelas: st.kelas,
                noAbsen: st.noAbsen
            };
        }
    });
    return map;
}

function getActiveStudent() {
    try {
        return JSON.parse(localStorage.getItem('edukacivic_siswa'));
    } catch(e) {
        return null;
    }
}

function saveAndLoginStudent(formData) {
    initStudentDatabase();
    const students = getRegisteredStudents();
    
    const kelasSlug = (formData.kelas || 'VIII').replace(/\s+/g, '_');
    const studentId = formData.id || `std_${formData.noAbsen}_${kelasSlug}`;

    const occupied = getOccupiedAvatars(studentId);
    if (occupied[formData.avatarId]) {
        return {
            success: false,
            message: `Avatar ini sudah dipilih oleh ${occupied[formData.avatarId].nama} (Kelas ${occupied[formData.avatarId].kelas}, No. ${occupied[formData.avatarId].noAbsen})! Silakan pilih avatar lain yang masih tersedia.`
        };
    }

    const avObj = EDUKACIVIC_AVATARS.find(a => a.id === formData.avatarId) || EDUKACIVIC_AVATARS[0];
    const avatarUrl = getAvatarUrl(avObj);

    let userProg = getPlayerProgress();
    const now = new Date();
    const waktuLogin = now.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) + ' ' + 
                       now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });

    const studentRecord = {
        id: studentId,
        nama: formData.nama.trim(),
        noAbsen: parseInt(formData.noAbsen, 10),
        kelas: formData.kelas || 'Kelas VIII',
        gender: formData.gender || 'L',
        sekolah: formData.sekolah || 'SMP Negeri 5 Purwokerto',
        avatarId: formData.avatarId,
        avatarName: avObj.name,
        avatarUrl: avatarUrl,
        waktuLogin: waktuLogin,
        poin: userProg.poin || 0,
        level: userProg.level || 1,
        dunia: userProg.dunia || 1,
        completedLevels: userProg.completedLevels || [],
        progresDunia: calculateWorldProgress(userProg.completedLevels || [])
    };

    const existingIdx = students.findIndex(s => s.id === studentId || (s.noAbsen === studentRecord.noAbsen && s.kelas === studentRecord.kelas));
    if (existingIdx >= 0) {
        studentRecord.poin = Math.max(students[existingIdx].poin || 0, studentRecord.poin);
        studentRecord.completedLevels = Array.from(new Set([...(students[existingIdx].completedLevels || []), ...(studentRecord.completedLevels || [])]));
        studentRecord.progresDunia = calculateWorldProgress(studentRecord.completedLevels);
        students[existingIdx] = studentRecord;
    } else {
        students.push(studentRecord);
    }

    localStorage.setItem('edukacivic_registered_students', JSON.stringify(students));
    localStorage.setItem('edukacivic_siswa', JSON.stringify(studentRecord));

    return {
        success: true,
        student: studentRecord
    };
}

function syncCurrentStudentProgress() {
    const activeStudent = getActiveStudent();
    if (!activeStudent) return;

    let userProg = getPlayerProgress();
    const students = getRegisteredStudents();
    const idx = students.findIndex(s => s.id === activeStudent.id);

    activeStudent.poin = userProg.poin || 0;
    activeStudent.level = userProg.level || 1;
    activeStudent.dunia = userProg.dunia || 1;
    activeStudent.completedLevels = userProg.completedLevels || [];
    activeStudent.progresDunia = calculateWorldProgress(userProg.completedLevels || []);

    if (idx >= 0) {
        students[idx] = activeStudent;
    } else {
        students.push(activeStudent);
    }

    // Simpan lokal di browser
    localStorage.setItem('edukacivic_registered_students', JSON.stringify(students));
    localStorage.setItem('edukacivic_siswa', JSON.stringify(activeStudent));

    // Kirim otomatis ke Firebase Database Online
    if (typeof firebase !== 'undefined' && firebase.apps.length) {
        firebase.database().ref('students/' + activeStudent.id).set(activeStudent);
    }
}
}

function recordLevelCompleted(levelKey, scoreEarned = 0) {
    let prog = getPlayerProgress();
    if (!prog.completedLevels.includes(levelKey)) {
        prog.completedLevels.push(levelKey);
    }
    if (typeof scoreEarned === 'number' && scoreEarned > 0) {
        prog.poin = (prog.poin || 0) + scoreEarned;
    }

    const idx = EDUKACIVIC_LEVELS_ORDER.indexOf(levelKey);
    if (idx >= 0 && idx + 1 < EDUKACIVIC_LEVELS_ORDER.length) {
        const nextKey = EDUKACIVIC_LEVELS_ORDER[idx + 1];
        const nextMeta = EDUKACIVIC_LEVEL_MAP[nextKey];
        if (nextMeta) {
            prog.level = Math.max(prog.level || 1, nextMeta.level);
            prog.dunia = Math.max(prog.dunia || 1, nextMeta.dunia);
        }
    }
    localStorage.setItem('edukacivic_progress', JSON.stringify(prog));
    syncCurrentStudentProgress();
    updateNavbarStudent();
    return prog;
}

function deleteStudentById(studentId) {
    initStudentDatabase();
    let students = getRegisteredStudents();
    const targetStudent = students.find(s => s.id === studentId);
    students = students.filter(s => s.id !== studentId);
    localStorage.setItem('edukacivic_registered_students', JSON.stringify(students));

    // If currently active student is deleted, reset active session
    const activeStudent = getActiveStudent();
    if (activeStudent && (activeStudent.id === studentId || (targetStudent && activeStudent.nama === targetStudent.nama && activeStudent.noAbsen === targetStudent.noAbsen))) {
        localStorage.removeItem('edukacivic_siswa');
        localStorage.setItem('edukacivic_progress', JSON.stringify({ poin: 0, level: 1, dunia: 1, completedLevels: [] }));
        Object.keys(sessionStorage).forEach(k => {
            if (k.startsWith('edukacivic_act_')) sessionStorage.removeItem(k);
        });
    }
    updateNavbarStudent();
    return true;
}

function clearAllStudents() {
    localStorage.setItem('edukacivic_registered_students', JSON.stringify([]));
    localStorage.removeItem('edukacivic_siswa');
    localStorage.setItem('edukacivic_progress', JSON.stringify({ poin: 0, level: 1, dunia: 1, completedLevels: [] }));
    Object.keys(sessionStorage).forEach(k => {
        if (k.startsWith('edukacivic_act_')) sessionStorage.removeItem(k);
    });
    updateNavbarStudent();
    return true;
}

// 5. GLOBAL NAVBAR AVATAR & POINT UPDATER
function updateNavbarStudent() {
    const siswa = getActiveStudent();
    const prog = getPlayerProgress();
    const currentPoints = prog.poin || (siswa ? siswa.poin : 0) || 0;

    let avatarUrl = 'https://api.dicebear.com/7.x/adventurer/svg?seed=Student&backgroundColor=b6e3f4';
    let studentName = 'Tamu Belajar';
    let studentClass = 'SMP';

    if (siswa) {
        if (siswa.avatarUrl) {
            avatarUrl = siswa.avatarUrl;
        } else if (siswa.avatarId) {
            const avObj = EDUKACIVIC_AVATARS.find(a => a.id === siswa.avatarId);
            if (avObj) avatarUrl = getAvatarUrl(avObj);
        }
        if (siswa.nama) studentName = siswa.nama;
        if (siswa.kelas) studentClass = siswa.kelas;
    }

    // 1. Update point counters
    const poinIds = ['nav-poin', 'user-points', 'nav-points', 'header-points', 'mobile-student-poin'];
    poinIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'mobile-student-poin') {
                el.innerHTML = `<i class="fa-solid fa-bolt text-xs text-yellow-400"></i> ${currentPoints} Poin`;
            } else {
                el.textContent = currentPoints;
            }
        }
    });

    // 2. Update all navbar avatar images
    const targetImages = document.querySelectorAll(`
        #nav-avatar-img,
        #nav-avatar,
        nav img[alt*="Avatar"],
        nav img[src*="dicebear"],
        nav img[src*="bottts"],
        nav img[src*="adventurer"],
        .nav-avatar-img,
        #hero-avatar-img
    `);

    targetImages.forEach(img => {
        if (img && img.tagName === 'IMG') {
            img.src = avatarUrl;
            img.alt = studentName;
            img.title = siswa ? `${studentName} (${studentClass}) — Klik untuk Profil` : 'Klik untuk Masuk Siswa';
            img.classList.remove('bg-brand-dark');
            img.style.objectFit = 'cover';
            img.style.backgroundColor = '#0f172a';

            if (!img.closest('a') && !img.closest('#nav-student-box')) {
                img.style.cursor = 'pointer';
                img.onclick = () => {
                    window.location.href = siswa ? 'profil-siswa.html' : 'login-siswa.html';
                };
            }
        }
    });

    // 3. Update any avatar wrapper containers with purple boxes or static placeholders
    document.querySelectorAll('nav .w-9.h-9.rounded-full, nav .w-8.h-8.rounded-full, nav .w-10.h-10.rounded-full').forEach(wrapper => {
        let img = wrapper.querySelector('img');
        if (!img) {
            wrapper.innerHTML = `<img src="${avatarUrl}" alt="${studentName}" class="w-full h-full rounded-full object-cover bg-slate-900">`;
        } else {
            img.src = avatarUrl;
            img.alt = studentName;
        }
        wrapper.style.cursor = 'pointer';
        wrapper.title = siswa ? `${studentName} (${studentClass})` : 'Masuk Siswa';
        if (!wrapper.closest('a') && !wrapper.closest('#nav-student-box')) {
            wrapper.onclick = () => {
                window.location.href = siswa ? 'profil-siswa.html' : 'login-siswa.html';
            };
        }
    });

    // 4. Update index.html student navbar button & mobile box
    const navStudentBox = document.getElementById('nav-student-box');
    const mobStudentBox = document.getElementById('mobile-student-box');
    if (navStudentBox) {
        if (siswa) {
            navStudentBox.classList.remove('hidden');
            navStudentBox.classList.add('flex');
            const navNama = document.getElementById('nav-student-nama');
            if (navNama) navNama.textContent = (siswa.nama || '').split(' ').slice(0, 2).join(' ');
            const navSub = document.getElementById('nav-student-sub');
            if (navSub) navSub.textContent = `${siswa.kelas || 'Kelas VIII'} · Absen ${siswa.noAbsen || '-'}`;
        } else {
            navStudentBox.classList.remove('flex');
            navStudentBox.classList.add('hidden');
        }
    }
    if (mobStudentBox) {
        if (siswa) {
            mobStudentBox.classList.remove('hidden');
            mobStudentBox.classList.add('flex');
        } else {
            mobStudentBox.classList.remove('flex');
            mobStudentBox.classList.add('hidden');
        }
    }
    if (typeof updateHeroCard === 'function') {
        updateHeroCard();
    }
}

// 6. SHARED WEB AUDIO FANFARE & CELEBRATION
function playCelebrationFanfare() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (audioCtx.state === 'suspended') audioCtx.resume();
        const now = audioCtx.currentTime;
        const notes = [
            { f: 523.25, d: 0.12 }, // C5
            { f: 659.25, d: 0.12 }, // E5
            { f: 783.99, d: 0.12 }, // G5
            { f: 1046.50, d: 0.35 } // C6
        ];
        let t = now;
        notes.forEach(n => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(n.f, t);
            gain.gain.setValueAtTime(0.2, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + n.d);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(t);
            osc.stop(t + n.d);
            t += n.d * 0.85;
        });
    } catch(e) {}
}

function triggerCelebrationConfetti() {
    if (typeof confetti === 'function') {
        try {
            confetti({
                particleCount: 80,
                spread: 70,
                origin: { y: 0.6 }
            });
            setTimeout(() => {
                confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 }
                });
                confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 }
                });
            }, 250);
        } catch(e) {}
    }
}

// 7. WORLD & LEVEL PROGRESSION CARD MANAGER
function configureLevelCard(cardId, statusId, isUnlocked, isCompleted, href, levelName, reqName) {
    const card = document.getElementById(cardId);
    const status = document.getElementById(statusId);
    if (!card) return;

    // Remove old overlay
    const oldOverlay = card.querySelector('.locked-overlay');
    if (oldOverlay) oldOverlay.remove();

    if (isCompleted) {
        if (status) {
            status.className = 'bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1';
            status.innerHTML = '<i class="fa-solid fa-check text-[8px]"></i> Selesai';
        }
        card.classList.remove('level-locked', 'opacity-70', 'cursor-not-allowed');
        const link = card.querySelector('a') || card;
        if (link && link.tagName === 'A') {
            link.href = href;
            link.onclick = (e) => {
                if (typeof playSfx === 'function') playSfx('click');
            };
        }
    } else if (isUnlocked) {
        if (status) {
            status.className = 'bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1';
            status.innerHTML = '<i class="fa-solid fa-lock-open text-[8px]"></i> Terbuka';
        }
        card.classList.remove('level-locked', 'opacity-70', 'cursor-not-allowed');
        const link = card.querySelector('a') || card;
        if (link && link.tagName === 'A') {
            link.href = href;
            link.onclick = (e) => {
                if (typeof playSfx === 'function') playSfx('click');
            };
        }
    } else {
        // Locked
        if (status) {
            status.className = 'bg-gray-700 text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1';
            status.innerHTML = '<i class="fa-solid fa-lock text-[8px]"></i> Terkunci';
        }
        card.classList.add('level-locked', 'opacity-70', 'cursor-not-allowed');
        
        const overlay = document.createElement('div');
        overlay.className = 'locked-overlay absolute inset-0 z-20 flex items-center justify-center bg-slate-950/75 backdrop-blur-[2px] rounded-3xl cursor-not-allowed';
        overlay.innerHTML = `
            <div class="bg-gray-900/95 border border-gray-700 px-5 py-3 rounded-2xl text-center shadow-xl transform transition-transform hover:scale-105">
                <i class="fa-solid fa-lock text-yellow-400 text-xl mb-1"></i>
                <p class="text-white font-bold text-xs">Level Terkunci</p>
                <p class="text-gray-400 text-[10px] mt-0.5">Selesaikan ${reqName} terlebih dahulu</p>
            </div>
        `;
        overlay.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (typeof playSfx === 'function') playSfx('hover');
            alert(`🔒 Level ini masih terkunci! Silakan selesaikan ${reqName} terlebih dahulu.`);
        };
        
        const targetContainer = card.querySelector('.block') || card;
        targetContainer.style.position = 'relative';
        targetContainer.appendChild(overlay);
    }
}

// 8. INTERACTIVE ACTIVITY GATING FOR LEVEL PAGES
function initInteractiveActivityGating(levelKey, quizUrl, ctaContainerId = 'quiz-cta-container') {
    const isLevelDone = getPlayerProgress().completedLevels.includes(levelKey);
    const isActDone = sessionStorage.getItem(`edukacivic_act_${levelKey}`) === 'true' || isLevelDone;

    const container = document.getElementById(ctaContainerId);
    if (!container) return;

    if (isActDone) {
        setQuizButtonUnlocked(levelKey, quizUrl, ctaContainerId);
    } else {
        setQuizButtonLocked(levelKey, ctaContainerId);
    }
}

function setQuizButtonLocked(levelKey, ctaContainerId = 'quiz-cta-container') {
    const container = document.getElementById(ctaContainerId);
    if (!container) return;
    container.innerHTML = `
        <div class="text-center py-6">
            <div class="inline-flex items-center gap-2 bg-amber-500/15 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-full text-xs font-bold mb-3">
                <i class="fa-solid fa-lock"></i> Kuis Terkunci
            </div>
            <p class="text-gray-400 text-xs sm:text-sm mb-4">Selesaikan aktivitas interaktif di atas dengan benar untuk membuka kuis level ini!</p>
            <button onclick="alert('🔒 Kamu harus menyelesaikan aktivitas interaktif di atas dengan benar terlebih dahulu sebelum melanjutkan ke kuis!');" class="inline-flex items-center justify-center gap-3 bg-gray-800 hover:bg-gray-700 text-gray-400 font-bold py-4 px-8 rounded-xl border border-gray-700 cursor-not-allowed text-base sm:text-lg opacity-80 shadow-lg">
                <i class="fa-solid fa-lock"></i> Selesaikan Aktivitas untuk Buka Kuis
            </button>
        </div>
    `;
}

function setQuizButtonUnlocked(levelKey, quizUrl, ctaContainerId = 'quiz-cta-container') {
    try {
        sessionStorage.setItem(`edukacivic_act_${levelKey}`, 'true');
    } catch(e) {}

    const container = document.getElementById(ctaContainerId);
    if (!container) return;
    
    const meta = typeof EDUKACIVIC_LEVEL_MAP !== 'undefined' ? EDUKACIVIC_LEVEL_MAP[levelKey] : null;
    const levelNumStr = meta ? `Level ${meta.level}` : '';

    container.innerHTML = `
        <div class="text-center py-6 animate-pulse-slow">
            <div class="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/40 px-4 py-1.5 rounded-full text-xs font-bold mb-3 shadow-md">
                <i class="fa-solid fa-circle-check"></i> Aktivitas Selesai & Benar!
            </div>
            <p class="text-emerald-300 font-semibold text-xs sm:text-sm mb-4">Hebat! Kamu telah menuntaskan aktivitas dengan benar. Sekarang buktikan kemampuanmu di kuis!</p>
            <a href="${quizUrl}" class="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-black py-4 px-10 rounded-2xl shadow-2xl shadow-red-600/50 hover:scale-105 transition-all text-base sm:text-lg border border-red-400/40">
                <i class="fa-solid fa-play"></i> Lanjut ke Kuis ${levelNumStr} <i class="fa-solid fa-arrow-right"></i>
            </a>
        </div>
    `;

    setTimeout(() => {
        try {
            container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } catch(e) {}
    }, 150);
}

// 9. QUIZ CELEBRATION & APPRECIATION MODAL
function renderQuizCelebration({
    levelKey,
    score,
    maxScore = 25,
    correctCount,
    totalQuestions = 10,
    timeText = '01:30',
    modalId = 'result-modal',
    containerId = 'result-content'
}) {
    const student = getActiveStudent();
    const studentName = student ? student.nama : 'Siswa Hebat';
    let avatarUrl = student && student.avatarUrl ? student.avatarUrl : 'https://api.dicebear.com/7.x/adventurer/svg?seed=Student&backgroundColor=b6e3f4';
    
    const pct = Math.round((score / maxScore) * 100);
    let appreciationTitle = 'Luar Biasa!';
    let appreciationDesc = `Selamat ${studentName}, kamu berhasil menuntaskan tantangan ini dengan sangat gemilang!`;
    let badgeText = '🏆 Sang Juara Konstitusi';
    let badgeBg = 'bg-amber-500/20 border-amber-500/40 text-amber-300';

    if (pct >= 80) {
        appreciationTitle = `Sempurna, ${studentName}! 🌟`;
        appreciationDesc = `Pemahamanmu tentang materi ini sangat mendalam dan luar biasa!`;
        badgeText = '👑 Penguasa Konstitusi';
        badgeBg = 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300';
    } else if (pct >= 60) {
        appreciationTitle = `Hebat Sekali, ${studentName}! 🎉`;
        appreciationDesc = `Kamu telah menunjukkan usaha dan penguasaan materi yang sangat baik!`;
        badgeText = '⭐ Pejuang Konstitusi';
        badgeBg = 'bg-blue-500/20 border-blue-500/40 text-blue-300';
    } else {
        appreciationTitle = `Bagus, ${studentName}! 👍`;
        appreciationDesc = `Terus semangat belajar dan coba lagi untuk mendapatkan skor sempurna!`;
        badgeText = '🌱 Semangat Belajar';
        badgeBg = 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300';
    }

    const meta = EDUKACIVIC_LEVEL_MAP[levelKey];
    const isEndOfWorld = (levelKey === 'd1l4' || levelKey === 'd2l4' || levelKey === 'd3l4' || levelKey === 'd4l4' || levelKey === 'd5l4');

    let actionButtonsHtml = '';

    if (levelKey === 'd1l4') {
        appreciationTitle = `🎉 Misi Dunia 1 Selesai!`;
        appreciationDesc = `Luar biasa, <strong>${studentName}</strong>! Kamu telah menuntaskan seluruh pembelajaran Dunia 1 (Level 1–4) untuk pertemuan minggu ini. Petualangan <strong>Dunia 2: Perumusan UUD 1945</strong> akan dibuka pada pertemuan minggu depan menggunakan <strong>Token Rahasia dari Guru</strong>.`;
        badgeText = '👑 Penjaga Konstitusi Dunia 1';
        badgeBg = 'bg-yellow-500/20 border-yellow-500/40 text-yellow-300';

        actionButtonsHtml = `
            <div class="flex flex-col gap-2.5">
                <a href="index.html#dunia-game" class="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <i class="fa-solid fa-earth-asia"></i> <span>Kembali ke Peta 5 Dunia</span> <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="profil-siswa.html" class="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-award text-yellow-400"></i> Lihat Rapor & Lencana Saya
                </a>
                <a href="dunia1.html" class="text-xs text-gray-400 hover:text-white transition py-1 text-center">
                    <i class="fa-solid fa-map mr-1"></i> Kembali ke Peta Dunia 1
                </a>
            </div>
        `;
    } else if (levelKey === 'd2l4') {
        appreciationTitle = `🦁 Boss Dunia 2 Terkalahkan!`;
        appreciationDesc = `Sempurna, <strong>${studentName}</strong>! Kamu berhasil mengalahkan Singa Konstitusi dan menuntaskan Dunia 2. Petualangan <strong>Dunia 3: Pengesahan UUD 1945</strong> akan dibuka pada pertemuan minggu depan menggunakan <strong>Token Rahasia dari Guru</strong>.`;
        badgeText = '🏆 Penakluk Singa Konstitusi';
        badgeBg = 'bg-orange-500/20 border-orange-500/40 text-orange-300';

        actionButtonsHtml = `
            <div class="flex flex-col gap-2.5">
                <a href="index.html#dunia-game" class="w-full py-4 px-6 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold rounded-2xl shadow-xl shadow-orange-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <i class="fa-solid fa-earth-asia"></i> <span>Kembali ke Peta 5 Dunia</span> <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="profil-siswa.html" class="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-award text-yellow-400"></i> Lihat Rapor & Lencana Saya
                </a>
                <a href="dunia2.html" class="text-xs text-gray-400 hover:text-white transition py-1 text-center">
                    <i class="fa-solid fa-map mr-1"></i> Kembali ke Peta Dunia 2
                </a>
            </div>
        `;
    } else if (levelKey === 'd3l4') {
        appreciationTitle = `🦅 Boss Dunia 3 Terkalahkan!`;
        appreciationDesc = `Luar biasa, <strong>${studentName}</strong>! Kamu berhasil menaklukkan Garuda Konstitusi dan menuntaskan seluruh pembelajaran Dunia 3 (Level 9–12) untuk pertemuan minggu ini. Petualangan <strong>Dunia 4: Menjiwai Nilai Konstitusi</strong> akan dibuka pada pertemuan minggu depan menggunakan <strong>Token Rahasia dari Guru</strong>.`;
        badgeText = '🏆 Penakluk Garuda Konstitusi';
        badgeBg = 'bg-rose-500/20 border-rose-500/40 text-rose-300';

        actionButtonsHtml = `
            <div class="flex flex-col gap-2.5">
                <a href="index.html#dunia-game" class="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold rounded-2xl shadow-xl shadow-red-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <i class="fa-solid fa-earth-asia"></i> <span>Kembali ke Peta 5 Dunia</span> <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="profil-siswa.html" class="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-award text-yellow-400"></i> Lihat Rapor & Lencana Saya
                </a>
                <a href="dunia3.html" class="text-xs text-gray-400 hover:text-white transition py-1 text-center">
                    <i class="fa-solid fa-map mr-1"></i> Kembali ke Peta Dunia 3
                </a>
            </div>
        `;
    } else if (levelKey === 'd4l4') {
        appreciationTitle = `🎉 Misi Dunia 4 Selesai!`;
        appreciationDesc = `Luar biasa, <strong>${studentName}</strong>! Kamu berhasil menuntaskan seluruh tantangan analisis kasus dan pembelajaran Dunia 4 (Level 13–16) untuk pertemuan minggu ini. Petualangan puncak <strong>Dunia 5: Penjaga Konstitusi Sejati</strong> akan dibuka pada pertemuan minggu depan menggunakan <strong>Token Rahasia dari Guru</strong>.`;
        badgeText = '👑 Detektif Konstitusi Handal';
        badgeBg = 'bg-purple-500/20 border-purple-500/40 text-purple-300';

        actionButtonsHtml = `
            <div class="flex flex-col gap-2.5">
                <a href="index.html#dunia-game" class="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-purple-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <i class="fa-solid fa-earth-asia"></i> <span>Kembali ke Peta 5 Dunia</span> <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="profil-siswa.html" class="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-award text-yellow-400"></i> Lihat Rapor & Lencana Saya
                </a>
                <a href="dunia4.html" class="text-xs text-gray-400 hover:text-white transition py-1 text-center">
                    <i class="fa-solid fa-map mr-1"></i> Kembali ke Peta Dunia 4
                </a>
            </div>
        `;
    } else if (isEndOfWorld) {
        appreciationTitle = `🎉 Misi Dunia ${meta.dunia} Selesai!`;
        appreciationDesc = `Selamat <strong>${studentName}</strong>! Kamu telah menyelesaikan seluruh level pada Dunia ${meta.dunia}. Petualangan berikutnya akan dibuka pada pertemuan selanjutnya!`;

        actionButtonsHtml = `
            <div class="flex flex-col gap-2.5">
                <a href="index.html#dunia-game" class="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold rounded-2xl shadow-xl shadow-red-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <i class="fa-solid fa-earth-asia"></i> <span>Kembali ke Peta 5 Dunia</span> <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="profil-siswa.html" class="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-award text-yellow-400"></i> Lihat Rapor & Lencana Saya
                </a>
            </div>
        `;
    } else {
        let nextLevelLink = 'index.html';
        let nextLevelText = 'Kembali ke Beranda';
        if (meta && meta.nextLevel && EDUKACIVIC_LEVEL_MAP[meta.nextLevel]) {
            const nextMeta = EDUKACIVIC_LEVEL_MAP[meta.nextLevel];
            nextLevelLink = nextMeta.url;
            nextLevelText = `Lanjut ke Level ${nextMeta.level}: ${nextMeta.name}`;
        } else if (meta && meta.dunia) {
            nextLevelLink = `dunia${meta.dunia}.html`;
            nextLevelText = `Kembali ke Peta Dunia ${meta.dunia}`;
        }

        actionButtonsHtml = `
            <div class="flex flex-col gap-3">
                <a href="${nextLevelLink}" class="w-full py-4 px-6 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-bold rounded-2xl shadow-xl shadow-red-600/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm sm:text-base">
                    <span>${nextLevelText}</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
                <a href="dunia${meta ? meta.dunia : 1}.html" class="w-full py-3 px-6 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold rounded-2xl border border-slate-700 transition flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <i class="fa-solid fa-map"></i> Kembali ke Peta Level
                </a>
            </div>
        `;
    }

    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.innerHTML = `
        <div class="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl shadow-2xl text-center border border-gray-700 transform scale-95 transition-all duration-300 max-h-[90vh] overflow-y-auto" id="${containerId}">
            
            <!-- Student Avatar Celebration Badge -->
            <div class="relative inline-block mx-auto mb-4">
                <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl p-1 bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-500 shadow-2xl shadow-rose-500/30 animate-float">
                    <img src="${avatarUrl}" alt="${studentName}" class="w-full h-full rounded-2xl bg-slate-900 object-cover">
                </div>
                <div class="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-950 w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center shadow-lg border-2 border-slate-900">
                    ⭐
                </div>
            </div>

            <!-- Appreciation Title & Student Name -->
            <div class="inline-block px-3.5 py-1 rounded-full text-xs font-black border mb-2 uppercase tracking-wider ${badgeBg}">
                ${badgeText}
            </div>
            <h2 class="text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                ${appreciationTitle}
            </h2>
            <p class="text-gray-300 text-xs sm:text-sm max-w-md mx-auto mb-6 leading-relaxed">
                ${appreciationDesc}
            </p>

            <!-- Score Summary Card -->
            <div class="bg-gray-900/90 rounded-2xl p-5 mb-6 border border-gray-700/80 space-y-3">
                <div class="flex justify-between items-center border-b border-gray-800 pb-2.5">
                    <span class="text-xs text-gray-400 font-semibold">Skor Kuis</span>
                    <span class="text-2xl font-black text-yellow-400">${score} <span class="text-sm text-gray-500">/ ${maxScore}</span></span>
                </div>
                ${correctCount !== undefined ? `
                <div class="flex justify-between items-center border-b border-gray-800 pb-2.5">
                    <span class="text-xs text-gray-400 font-semibold">Jawaban Benar</span>
                    <span class="text-sm font-bold text-green-400">${correctCount} / ${totalQuestions} Soal</span>
                </div>` : ''}
                <div class="flex justify-between items-center border-b border-gray-800 pb-2.5">
                    <span class="text-xs text-gray-400 font-semibold">Waktu Pengerjaan</span>
                    <span class="text-sm font-bold text-blue-400">${timeText}</span>
                </div>
                <div class="bg-gradient-to-r from-red-600/20 to-orange-500/20 text-yellow-300 py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 border border-red-500/30">
                    <i class="fa-solid fa-bolt text-yellow-400"></i> +${score} XP Poin Diperoleh!
                </div>
            </div>

            <!-- Action Buttons -->
            ${actionButtonsHtml}
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
        const c = document.getElementById(containerId);
        if (c) {
            c.classList.remove('scale-95');
            c.classList.add('scale-100');
        }
    }, 20);

    playCelebrationFanfare();
    triggerCelebrationConfetti();
    recordLevelCompleted(levelKey, score);
}

// 10. AUTO-INITIALIZATION ON PAGE LOAD
initStudentDatabase();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateNavbarStudent);
} else {
    updateNavbarStudent();
}
