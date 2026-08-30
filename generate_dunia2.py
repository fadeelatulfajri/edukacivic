import os

template_dunia2_html = """<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dunia 2: Perumusan UUD NRI Tahun 1945 - EdukaCivic</title>
    <link rel="icon" type="image/png" href="EDUKACIVIC.png">
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Poppins', 'sans-serif'] },
                    colors: {
                        brand: {
                            red: '#DC2626', redLight: '#EF4444', redDark: '#B91C1C',
                            dark: '#0F172A', darker: '#020617', light: '#F8FAFC'
                        }
                    },
                    animation: {
                        'float': 'float 3s ease-in-out infinite',
                        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0)' },
                            '50%': { transform: 'translateY(-10px)' },
                        }
                    }
                }
            }
        }
    </script>
    <style>
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #0F172A; }
        ::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #4B5563; }
        .glow-orange:hover { box-shadow: 0 0 30px rgba(249, 115, 22, 0.3); }
        .level-locked { position: relative; overflow: hidden; }
        .level-locked::before {
            content: ''; position: absolute; inset: 0;
            background: rgba(15, 23, 42, 0.6); backdrop-filter: blur(2px);
            z-index: 10; border-radius: 1.5rem;
        }
    </style>
    <script>
        function getProgress() {
            try { return JSON.parse(localStorage.getItem('edukacivic_progress')) || { poin: 0, level: 1, dunia: 1, completedLevels: [] }; }
            catch(e) { return { poin: 0, level: 1, dunia: 1, completedLevels: [] }; }
        }
        const prog = getProgress();
        if (!prog.completedLevels || !prog.completedLevels.includes('d1l4')) {
            window.location.href = 'index.html';
        }
    </script>
</head>
<body class="bg-brand-darker text-white font-sans antialiased overflow-x-hidden min-h-screen">
    <!-- NAVBAR -->
    <nav class="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center gap-4">
                    <a href="index.html" class="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                            <i class="fa-solid fa-arrow-left text-sm"></i>
                        </div>
                        <span class="text-sm font-medium hidden sm:inline">Kembali</span>
                    </a>
                    <div class="w-px h-8 bg-gray-700"></div>
                    <a href="index.html" class="flex items-center gap-2 cursor-pointer">
                        <img src="EDUKACIVIC.png" alt="EdukaCivic" class="h-8 w-auto">
                        <span class="font-bold text-lg tracking-tight text-white hidden sm:inline">Eduka<span class="text-brand-red">Civic</span></span>
                    </a>
                </div>
                <div class="hidden md:flex items-center gap-3">
                    <div class="w-8 h-8 bg-orange-500/20 text-orange-400 rounded-lg flex items-center justify-center">
                        <i class="fa-solid fa-book-open text-sm"></i>
                    </div>
                    <div>
                        <p class="text-white font-semibold text-sm leading-none">Dunia 2</p>
                        <p class="text-gray-400 text-xs">Perumusan UUD NRI Tahun 1945</p>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="hidden sm:flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                        <i class="fa-solid fa-bolt text-yellow-400 text-xs"></i>
                        <span id="nav-poin" class="text-yellow-400 font-bold text-sm">0</span>
                        <span class="text-gray-500 text-xs">Poin</span>
                    </div>
                    <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-brand-red to-orange-400 p-0.5">
                        <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Student&backgroundColor=transparent" alt="Avatar" class="w-full h-full rounded-full bg-brand-dark">
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- HERO BANNER -->
    <section class="relative pt-24 pb-12 overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-orange-900/20 via-brand-darker to-brand-darker"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div class="flex-1 text-center lg:text-left">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 mb-4">
                        <i class="fa-solid fa-book-open text-orange-400 text-xs"></i>
                        <span class="text-xs font-bold text-orange-400 tracking-wide uppercase">Level 5 – 8</span>
                    </div>
                    <h1 class="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                        Dunia 2: <br>
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">Perumusan UUD NRI Tahun 1945</span>
                    </h1>
                    <p class="text-gray-400 text-base lg:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
                        Pelajari bagaimana para pendiri bangsa merumuskan UUD NRI Tahun 1945 melalui sidang-sidang BPUPKI.
                    </p>
                    <div class="bg-gray-800/50 p-4 rounded-2xl border border-gray-700 max-w-md mx-auto lg:mx-0">
                        <div class="flex justify-between text-xs mb-2">
                            <span class="text-gray-300 font-medium">Progres Dunia 2</span>
                            <span id="progress-text" class="text-orange-400 font-bold">0 / 4 Level</span>
                        </div>
                        <div class="w-full h-2.5 bg-gray-900 rounded-full overflow-hidden">
                            <div id="progress-bar" class="h-full bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full transition-all duration-1000" style="width: 0%"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- LEVEL MAP SECTION -->
    <section class="py-12 relative">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="space-y-6">

                <!-- LEVEL L1 -->
                <div id="level-1-card" class="group relative">
                    <div class="hidden lg:block absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-orange-500/40 to-transparent"></div>
                    <a href="dunia2-level1.html" class="block bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 glow-orange overflow-hidden">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-48 bg-gradient-to-br from-orange-600 to-orange-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div class="relative z-10">
                                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 mx-auto backdrop-blur-sm border border-white/20">
                                        <i class="fa-solid fa-users text-3xl text-white"></i>
                                    </div>
                                    <span class="text-orange-200 text-xs font-bold uppercase tracking-widest">Level</span>
                                    <p class="text-white text-4xl font-extrabold leading-none">05</p>
                                </div>
                            </div>
                            <div class="flex-1 p-6">
                                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-2">
                                            <span class="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">BPUPKI</span>
                                            <span id="level1-status" class="bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                                                <i class="fa-solid fa-lock-open text-[8px]"></i> Terbuka
                                            </span>
                                        </div>
                                        <h4 class="text-xl font-bold text-white mb-2">Mengenal BPUPKI</h4>
                                        <p class="text-gray-400 text-sm leading-relaxed mb-4">Sejarah pembentukan BPUPKI dan sidang-sidangnya.</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white group-hover:bg-orange-400 group-hover:scale-110 transition-all shadow-lg shadow-orange-500/30">
                                            <i class="fa-solid fa-play text-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>

                <!-- LEVEL L2 -->
                <div id="level-2-card" class="group relative">
                    <div class="hidden lg:block absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-orange-500/40 to-transparent"></div>
                    <div class="block bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 glow-orange overflow-hidden level-locked cursor-not-allowed">
                        <div class="absolute inset-0 z-20 flex items-center justify-center">
                            <div class="bg-gray-900/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-700 text-center">
                                <i class="fa-solid fa-lock text-2xl text-gray-500 mb-2"></i>
                                <p class="text-gray-300 font-bold text-sm">Level Terkunci</p>
                                <p class="text-gray-500 text-xs">Selesaikan Level 5 terlebih dahulu</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-48 bg-gradient-to-br from-orange-600 to-orange-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div class="relative z-10">
                                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 mx-auto backdrop-blur-sm border border-white/20">
                                        <i class="fa-solid fa-user-tie text-3xl text-white"></i>
                                    </div>
                                    <span class="text-orange-200 text-xs font-bold uppercase tracking-widest">Level</span>
                                    <p class="text-white text-4xl font-extrabold leading-none">06</p>
                                </div>
                            </div>
                            <div class="flex-1 p-6">
                                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-2">
                                            <span class="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Tokoh</span>
                                            <span class="bg-gray-700 text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                                                <i class="fa-solid fa-lock text-[8px]"></i> Terkunci
                                            </span>
                                        </div>
                                        <h4 class="text-xl font-bold text-white mb-2">Tokoh dan Panitia</h4>
                                        <p class="text-gray-400 text-sm leading-relaxed mb-4">Pelajari panitia dan tokoh penting di balik rumusan UUD.</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                                            <i class="fa-solid fa-lock text-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LEVEL L3 -->
                <div id="level-3-card" class="group relative">
                    <div class="hidden lg:block absolute left-1/2 -bottom-6 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-orange-500/40 to-transparent"></div>
                    <div class="block bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 glow-orange overflow-hidden level-locked cursor-not-allowed">
                        <div class="absolute inset-0 z-20 flex items-center justify-center">
                            <div class="bg-gray-900/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-700 text-center">
                                <i class="fa-solid fa-lock text-2xl text-gray-500 mb-2"></i>
                                <p class="text-gray-300 font-bold text-sm">Level Terkunci</p>
                                <p class="text-gray-500 text-xs">Selesaikan Level 6 terlebih dahulu</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-48 bg-gradient-to-br from-orange-600 to-orange-800 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div class="relative z-10">
                                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 mx-auto backdrop-blur-sm border border-white/20">
                                        <i class="fa-solid fa-clock-rotate-left text-3xl text-white"></i>
                                    </div>
                                    <span class="text-orange-200 text-xs font-bold uppercase tracking-widest">Level</span>
                                    <p class="text-white text-4xl font-extrabold leading-none">07</p>
                                </div>
                            </div>
                            <div class="flex-1 p-6">
                                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-2">
                                            <span class="bg-orange-500/20 text-orange-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Timeline</span>
                                            <span class="bg-gray-700 text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                                                <i class="fa-solid fa-lock text-[8px]"></i> Terkunci
                                            </span>
                                        </div>
                                        <h4 class="text-xl font-bold text-white mb-2">Perjalanan Perumusan UUD</h4>
                                        <p class="text-gray-400 text-sm leading-relaxed mb-4">Urutkan kronologi perumusan UUD NRI Tahun 1945.</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                                            <i class="fa-solid fa-lock text-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- LEVEL L4 -->
                <div id="level-4-card" class="group relative">
                    <div class="block bg-gray-800/50 backdrop-blur-sm rounded-3xl border border-gray-700 hover:border-orange-400/50 transition-all duration-300 glow-orange overflow-hidden level-locked cursor-not-allowed">
                        <div class="absolute inset-0 z-20 flex items-center justify-center">
                            <div class="bg-gray-900/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-gray-700 text-center">
                                <i class="fa-solid fa-lock text-2xl text-gray-500 mb-2"></i>
                                <p class="text-gray-300 font-bold text-sm">Level Terkunci</p>
                                <p class="text-gray-500 text-xs">Selesaikan Level 7 terlebih dahulu</p>
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-48 bg-gradient-to-br from-red-600 to-red-900 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                                <div class="relative z-10">
                                    <div class="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 mx-auto backdrop-blur-sm border border-white/20">
                                        <i class="fa-solid fa-khanda text-3xl text-white"></i>
                                    </div>
                                    <span class="text-red-200 text-xs font-bold uppercase tracking-widest">Boss</span>
                                    <p class="text-white text-4xl font-extrabold leading-none">08</p>
                                </div>
                            </div>
                            <div class="flex-1 p-6">
                                <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                    <div class="flex-1">
                                        <div class="flex items-center gap-2 mb-2">
                                            <span class="bg-red-500/20 text-red-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                                                <i class="fa-solid fa-khanda text-[8px]"></i> Boss Battle
                                            </span>
                                            <span class="bg-gray-700 text-gray-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1">
                                                <i class="fa-solid fa-lock text-[8px]"></i> Terkunci
                                            </span>
                                        </div>
                                        <h4 class="text-xl font-bold text-white mb-2">Rangkuman & Boss Battle</h4>
                                        <p class="text-gray-400 text-sm leading-relaxed mb-4">Uji pengetahuan Dunia 2 dan kalahkan Boss!</p>
                                    </div>
                                    <div class="flex items-center">
                                        <div class="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center text-gray-500">
                                            <i class="fa-solid fa-lock text-lg"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="bg-brand-dark text-gray-400 py-8 border-t border-gray-800 mt-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <div class="flex items-center gap-2">
                <img src="EDUKACIVIC.png" alt="EdukaCivic" class="h-6 w-auto">
                <span class="font-bold text-white">Eduka<span class="text-brand-red">Civic</span></span>
            </div>
            <p>&copy; 2026 EdukaCivic | Fadilatul Fajri</p>
        </div>
    </footer>

    <script>
        document.getElementById('nav-poin').textContent = prog.poin || 0;
        const completed = prog.completedLevels || [];
        const d2Levels = ['d2l1','d2l2','d2l3','d2l4'];
        let completedCount = 0;
        d2Levels.forEach(l => { if (completed.includes(l)) completedCount++; });

        document.getElementById('progress-text').textContent = completedCount + ' / 4 Level';
        document.getElementById('progress-bar').style.width = (completedCount / 4 * 100) + '%';

        function unlockLevel(cardId, href) {
            const card = document.getElementById(cardId);
            if (!card) return;
            const wrapper = card.querySelector('.level-locked');
            if (wrapper) {
                wrapper.classList.remove('level-locked', 'cursor-not-allowed');
                const overlay = wrapper.querySelector('.absolute.inset-0.z-20');
                if (overlay) overlay.remove();
                const lockIcon = wrapper.querySelector('.bg-gray-700.rounded-xl');
                if (lockIcon) {
                    lockIcon.className = 'w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center text-white group-hover:bg-orange-400 group-hover:scale-110 transition-all shadow-lg shadow-orange-500/30';
                    lockIcon.innerHTML = '<i class="fa-solid fa-play text-lg"></i>';
                }
                const link = document.createElement('a');
                link.href = href;
                link.className = wrapper.className + ' block';
                link.innerHTML = wrapper.innerHTML;
                wrapper.parentNode.replaceChild(link, wrapper);
            }
        }

        if (completed.includes('d2l1')) {
            const l1status = document.getElementById('level1-status');
            if (l1status) {
                l1status.innerHTML = '<i class="fa-solid fa-check text-[8px]"></i> Selesai';
                l1status.className = 'bg-green-500/20 text-green-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase flex items-center gap-1';
            }
            unlockLevel('level-2-card', 'dunia2-level2.html');
        }
        if (completed.includes('d2l2')) unlockLevel('level-3-card', 'dunia2-level3.html');
        if (completed.includes('d2l3')) unlockLevel('level-4-card', 'dunia2-level4.html');
    </script>
</body>
</html>
"""

def generate_page(title, content, req_level=None, is_quiz=False, js_logic=""):
    return f"""<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title} - EdukaCivic</title>
    <link rel="icon" type="image/png" href="EDUKACIVIC.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {{
            theme: {{
                extend: {{
                    fontFamily: {{ sans: ['Poppins', 'sans-serif'] }},
                    colors: {{
                        brand: {{ red: '#DC2626', redLight: '#EF4444', redDark: '#B91C1C', dark: '#0F172A', darker: '#020617', light: '#F8FAFC' }}
                    }}
                }}
            }}
        }}
    </script>
    <script>
        function getProgress() {{
            try {{ return JSON.parse(localStorage.getItem('edukacivic_progress')) || {{ poin: 0, level: 1, dunia: 1, completedLevels: [] }}; }}
            catch(e) {{ return {{ poin: 0, level: 1, dunia: 1, completedLevels: [] }}; }}
        }}
        const prog = getProgress();
        {f"if (!prog.completedLevels || !prog.completedLevels.includes('{req_level}')) window.location.href = 'dunia2.html';" if req_level else ""}
        function saveProgress(data) {{ localStorage.setItem('edukacivic_progress', JSON.stringify(data)); }}
    </script>
</head>
<body class="bg-brand-darker text-white font-sans antialiased min-h-screen flex flex-col">
    <!-- NAVBAR -->
    <nav class="fixed w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
            <a href="dunia2.html" class="text-gray-400 hover:text-white flex items-center gap-2">
                <i class="fa-solid fa-arrow-left"></i> Kembali ke Peta
            </a>
            <div class="flex items-center gap-2">
                <img src="EDUKACIVIC.png" alt="EdukaCivic" class="h-8">
                <span class="font-bold text-lg hidden sm:inline">Eduka<span class="text-brand-red">Civic</span></span>
            </div>
            <div class="flex items-center gap-2 bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                <i class="fa-solid fa-bolt text-yellow-400"></i>
                <span id="nav-poin" class="text-yellow-400 font-bold text-sm">0</span>
            </div>
        </div>
    </nav>
    <script>document.getElementById('nav-poin').textContent = prog.poin;</script>

    <main class="flex-grow pt-24 pb-12 px-4 max-w-4xl mx-auto w-full">
        <div class="bg-gray-800 rounded-3xl p-6 md:p-10 shadow-2xl border border-gray-700">
            <h1 class="text-3xl font-bold text-orange-400 mb-6 text-center">{title}</h1>
            {content}
        </div>
    </main>

    <!-- FOOTER -->
    <footer class="bg-brand-dark text-gray-400 py-6 border-t border-gray-800 text-center">
        <p>&copy; 2026 EdukaCivic | Fadilatul Fajri</p>
    </footer>
    {js_logic}
</body>
</html>"""

def main():
    base_dir = r"e:\EDUKACIVIC"
    if not os.path.exists(base_dir):
        os.makedirs(base_dir)

    # 1. dunia2.html
    with open(os.path.join(base_dir, "dunia2.html"), "w", encoding="utf-8") as f:
        f.write(template_dunia2_html)

    # 2. dunia2-level1.html
    content_l1 = """
    <div class="space-y-6 text-gray-300">
        <p>Badan Penyelidik Usaha-Usaha Persiapan Kemerdekaan Indonesia (BPUPKI) memiliki peran penting dalam perumusan UUD NRI Tahun 1945.</p>
        <ul class="list-disc list-inside space-y-2">
            <li><strong>Nama Resmi:</strong> Dokuritsu Junbi Cosakai</li>
            <li><strong>Waktu:</strong> Diumumkan 1 Maret 1945, diresmikan 29 April 1945</li>
            <li><strong>Pimpinan:</strong> Dr. K.R.T. Radjiman Wedyodiningrat (Ketua)</li>
            <li><strong>Sidang I (29 Mei–1 Juni 1945):</strong> Merumuskan Dasar Negara</li>
            <li><strong>Masa Reses (22 Juni 1945):</strong> Pembentukan Piagam Jakarta oleh Panitia Sembilan</li>
            <li><strong>Sidang II (10–17 Juli 1945):</strong> Pembahasan Rancangan UUD</li>
        </ul>
        <div class="text-center mt-8">
            <a href="dunia2-level1-kuis.html" class="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-xl transition-all">Lanjut ke Kuis <i class="fa-solid fa-arrow-right ml-2"></i></a>
        </div>
    </div>
    """
    with open(os.path.join(base_dir, "dunia2-level1.html"), "w", encoding="utf-8") as f:
        f.write(generate_page("Mengenal BPUPKI", content_l1, "d1l4"))

    # 3. dunia2-level1-kuis.html
    content_l1_kuis = """
    <div id="quiz-container" class="space-y-6">
        <p class="text-center text-gray-400">Jawab 5 pertanyaan berikut dengan benar!</p>
        <div id="questions" class="space-y-8"></div>
        <button onclick="checkAnswers()" class="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-all">Kirim Jawaban</button>
        <p id="result" class="text-center font-bold text-xl hidden"></p>
        <div id="next-btn-container" class="hidden text-center mt-4">
            <a href="dunia2.html" class="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-xl">Kembali ke Peta</a>
        </div>
    </div>
    """
    js_l1_kuis = """
    <script>
    const questions = [
        {q: "Apa nama Jepang dari BPUPKI?", opts: ["Dokuritsu Junbi Cosakai", "Dokuritsu Junbi Inkai", "Keibodan", "Seinendan"], a: 0},
        {q: "Kapan BPUPKI diresmikan?", opts: ["1 Maret 1945", "29 April 1945", "1 Juni 1945", "17 Agustus 1945"], a: 1},
        {q: "Siapa ketua BPUPKI?", opts: ["Ir. Soekarno", "Drs. Moh Hatta", "Dr. K.R.T. Radjiman Wedyodiningrat", "Mr. Soepomo"], a: 2},
        {q: "Apa agenda Sidang I BPUPKI?", opts: ["Rancangan UUD", "Pemilihan Presiden", "Merumuskan Dasar Negara", "Pembentukan Tentara"], a: 2},
        {q: "Kapan Sidang II BPUPKI dilaksanakan?", opts: ["29 Mei - 1 Juni 1945", "22 Juni 1945", "10-17 Juli 1945", "18 Agustus 1945"], a: 2}
    ];
    const qDiv = document.getElementById('questions');
    questions.forEach((q, i) => {
        let html = `<div class="bg-gray-700/50 p-4 rounded-xl"><p class="font-bold mb-3">${i+1}. ${q.q}</p><div class="space-y-2">`;
        q.opts.forEach((opt, j) => {
            html += `<label class="block flex items-center gap-2 cursor-pointer"><input type="radio" name="q${i}" value="${j}" class="form-radio text-orange-500"><span>${opt}</span></label>`;
        });
        html += `</div></div>`;
        qDiv.innerHTML += html;
    });

    function checkAnswers() {
        let score = 0;
        let allAnswered = true;
        questions.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if(!selected) allAnswered = false;
            else if(parseInt(selected.value) === q.a) score += 5; // 5 poin per soal, total 25
        });
        if(!allAnswered) { alert("Harap jawab semua pertanyaan!"); return; }
        
        document.getElementById('result').textContent = `Skor kamu: ${score} Poin!`;
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('next-btn-container').classList.remove('hidden');
        
        let prog = getProgress();
        if(!prog.completedLevels.includes('d2l1')) {
            prog.poin += score;
            prog.completedLevels.push('d2l1');
            saveProgress(prog);
        }
    }
    </script>
    """
    with open(os.path.join(base_dir, "dunia2-level1-kuis.html"), "w", encoding="utf-8") as f:
        f.write(generate_page("Kuis: Mengenal BPUPKI", content_l1_kuis, "d1l4", True, js_l1_kuis))

    # 4. dunia2-level2.html
    content_l2 = """
    <div class="space-y-6 text-gray-300">
        <p>Perumusan UUD tidak lepas dari peran panitia khusus yang dibentuk pada sidang BPUPKI.</p>
        <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-700/50 p-4 rounded-xl border border-gray-600">
                <h3 class="font-bold text-orange-400 mb-2">Panitia Perancang UUD</h3>
                <p>Diketuai oleh <strong>Ir. Soekarno</strong> dan beranggotakan 19 orang. Bertugas membahas rancangan UUD secara garis besar.</p>
            </div>
            <div class="bg-gray-700/50 p-4 rounded-xl border border-gray-600">
                <h3 class="font-bold text-orange-400 mb-2">Panitia Kecil Perancang UUD</h3>
                <p>Diketuai oleh <strong>Prof. Dr. Mr. Soepomo</strong>. Bertugas merancang isi dan pasal-pasal UUD.</p>
            </div>
            <div class="bg-gray-700/50 p-4 rounded-xl border border-gray-600 md:col-span-2">
                <h3 class="font-bold text-orange-400 mb-2">Panitia Penghalus Bahasa</h3>
                <p>Bertugas menyempurnakan tata bahasa UUD. Beranggotakan: <strong>Prof. Dr. Mr. Soepomo, H. Agus Salim, dan Hoesein Djajadiningrat</strong>.</p>
            </div>
        </div>
        <div class="text-center mt-8">
            <a href="dunia2-level2-kuis.html" class="inline-block bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 px-8 rounded-xl transition-all">Lanjut ke Kuis <i class="fa-solid fa-arrow-right ml-2"></i></a>
        </div>
    </div>
    """
    with open(os.path.join(base_dir, "dunia2-level2.html"), "w", encoding="utf-8") as f:
        f.write(generate_page("Tokoh dan Panitia Perumus", content_l2, "d2l1"))

    # 5. dunia2-level2-kuis.html
    content_l2_kuis = """
    <div id="quiz-container" class="space-y-6">
        <div id="questions" class="space-y-8"></div>
        <button onclick="checkAnswers()" class="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl transition-all">Kirim Jawaban</button>
        <p id="result" class="text-center font-bold text-xl hidden"></p>
        <div id="next-btn-container" class="hidden text-center mt-4">
            <a href="dunia2.html" class="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-6 rounded-xl">Kembali ke Peta</a>
        </div>
    </div>
    """
    js_l2_kuis = """
    <script>
    const questions = [
        {q: "Siapa ketua Panitia Perancang UUD?", opts: ["Ir. Soekarno", "Mr. Soepomo", "Mohammad Hatta", "Agus Salim"], a: 0},
        {q: "Berapa jumlah anggota Panitia Perancang UUD?", opts: ["9 orang", "19 orang", "21 orang", "27 orang"], a: 1},
        {q: "Siapa ketua Panitia Kecil Perancang UUD?", opts: ["Ir. Soekarno", "Prof. Dr. Mr. Soepomo", "KH Wahid Hasyim", "Moh. Yamin"], a: 1},
        {q: "Berikut ini yang BUKAN anggota Panitia Penghalus Bahasa adalah...", opts: ["Prof. Dr. Mr. Soepomo", "H. Agus Salim", "Hoesein Djajadiningrat", "Ir. Soekarno"], a: 3},
        {q: "Tugas Panitia Penghalus Bahasa adalah...", opts: ["Merumuskan Pancasila", "Memilih Presiden", "Menyempurnakan bahasa UUD", "Merancang Proklamasi"], a: 2}
    ];
    const qDiv = document.getElementById('questions');
    questions.forEach((q, i) => {
        let html = `<div class="bg-gray-700/50 p-4 rounded-xl"><p class="font-bold mb-3">${i+1}. ${q.q}</p><div class="space-y-2">`;
        q.opts.forEach((opt, j) => {
            html += `<label class="block flex items-center gap-2 cursor-pointer"><input type="radio" name="q${i}" value="${j}" class="form-radio text-orange-500"><span>${opt}</span></label>`;
        });
        html += `</div></div>`;
        qDiv.innerHTML += html;
    });

    function checkAnswers() {
        let score = 0;
        let allAnswered = true;
        questions.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if(!selected) allAnswered = false;
            else if(parseInt(selected.value) === q.a) score += 5;
        });
        if(!allAnswered) { alert("Harap jawab semua pertanyaan!"); return; }
        
        document.getElementById('result').textContent = `Skor kamu: ${score} Poin!`;
        document.getElementById('result').classList.remove('hidden');
        document.getElementById('next-btn-container').classList.remove('hidden');
        
        let prog = getProgress();
        if(!prog.completedLevels.includes('d2l2')) {
            prog.poin += score;
            prog.completedLevels.push('d2l2');
            saveProgress(prog);
        }
    }
    </script>
    """
    with open(os.path.join(base_dir, "dunia2-level2-kuis.html"), "w", encoding="utf-8") as f:
        f.write(generate_page("Kuis: Tokoh dan Panitia", content_l2_kuis, "d2l1", True, js_l2_kuis))

    # 6. dunia2-level3.html (Materi + Drag-Drop Timeline + Tebak Tokoh)
    content_l3 = """
    <div class="space-y-10">
        <!-- MATERI -->
        <div class="bg-gray-700/30 p-6 rounded-2xl">
            <h2 class="text-xl font-bold text-orange-400 mb-4">Kronologi Perumusan UUD NRI Tahun 1945</h2>
            <ol class="list-decimal list-inside space-y-3 text-gray-300">
                <li><strong class="text-white">1 Maret 1945:</strong> Pengumuman pembentukan BPUPKI.</li>
                <li><strong class="text-white">29 April 1945:</strong> Peresmian pengurus BPUPKI.</li>
                <li><strong class="text-white">29 Mei - 1 Juni 1945:</strong> Sidang I (Merumuskan Dasar Negara).</li>
                <li><strong class="text-white">22 Juni 1945:</strong> Panitia Sembilan merumuskan Piagam Jakarta.</li>
                <li><strong class="text-white">10 - 17 Juli 1945:</strong> Sidang II (Membahas dan mengesahkan rancangan UUD).</li>
                <li><strong class="text-white">18 Agustus 1945:</strong> PPKI mengesahkan UUD 1945.</li>
            </ol>
        </div>

        <!-- QUIZ 1: Drag Drop -->
        <div>
            <h3 class="text-lg font-bold mb-4">Misi 1: Susun Timeline Perumusan UUD! (Drag & Drop)</h3>
            <p class="text-sm text-gray-400 mb-4">Urutkan peristiwa dari yang paling awal (atas) hingga paling akhir (bawah).</p>
            
            <div id="drag-container" class="space-y-2 mb-6">
                <!-- Items akan digenerate via JS -->
            </div>
            
            <button onclick="checkTimeline()" class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl">Cek Urutan</button>
            <p id="timeline-result" class="mt-2 font-bold"></p>
        </div>

        <hr class="border-gray-700">

        <!-- QUIZ 2: Tebak Tokoh -->
        <div>
            <h3 class="text-lg font-bold mb-4">Misi 2: Tebak Tokoh</h3>
            <p class="text-gray-300 mb-3">Aku adalah Ketua Panitia Kecil Perancang UUD dan salah satu anggota Panitia Penghalus Bahasa. Siapakah aku?</p>
            <input type="text" id="tebak-input" placeholder="Nama lengkap + gelar" class="w-full bg-gray-800 border border-gray-600 rounded-xl p-3 text-white mb-4">
            <button onclick="checkTebak()" class="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded-xl">Jawab</button>
            <p id="tebak-result" class="mt-2 font-bold"></p>
        </div>

        <div id="finish-btn-container" class="hidden text-center mt-8">
            <button onclick="finishLevel()" class="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-xl text-lg transition-all">Selesaikan Level 3</button>
        </div>
    </div>
    """
    js_l3 = """
    <script>
    let timelineDone = false;
    let tebakDone = false;
    let draggingItem = null;

    const events = [
        {id: "e1", text: "Pengumuman BPUPKI (1 Maret 1945)", order: 1},
        {id: "e3", text: "Sidang I BPUPKI (Dasar Negara)", order: 3},
        {id: "e5", text: "Sidang II BPUPKI (Rancangan UUD)", order: 5},
        {id: "e2", text: "Peresmian BPUPKI (29 April 1945)", order: 2},
        {id: "e4", text: "Piagam Jakarta (22 Juni 1945)", order: 4},
        {id: "e6", text: "PPKI mengesahkan UUD 1945 (18 Agustus 1945)", order: 6}
    ];

    const container = document.getElementById('drag-container');
    
    // Render list
    events.forEach(e => {
        const div = document.createElement('div');
        div.className = "bg-gray-700 p-4 rounded-xl cursor-move border border-gray-600 hover:bg-gray-600 transition-colors";
        div.draggable = true;
        div.textContent = e.text;
        div.dataset.order = e.order;
        
        div.addEventListener('dragstart', (ev) => {
            draggingItem = div;
            setTimeout(() => div.classList.add('opacity-50'), 0);
        });
        
        div.addEventListener('dragend', () => {
            draggingItem = null;
            div.classList.remove('opacity-50');
        });
        
        container.appendChild(div);
    });

    container.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(container, e.clientY);
        if (afterElement == null) {
            container.appendChild(draggingItem);
        } else {
            container.insertBefore(draggingItem, afterElement);
        }
    });

    function getDragAfterElement(container, y) {
        const draggableElements = [...container.querySelectorAll('div:not(.opacity-50)')];
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect();
            const offset = y - box.top - box.height / 2;
            if (offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child };
            } else {
                return closest;
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    function checkTimeline() {
        if(timelineDone) return;
        const currentOrder = [...container.querySelectorAll('div')].map(el => parseInt(el.dataset.order));
        const isCorrect = currentOrder.every((val, index) => val === index + 1);
        
        const res = document.getElementById('timeline-result');
        if(isCorrect) {
            res.textContent = "✅ Urutan benar! +15 Poin";
            res.className = "mt-2 font-bold text-green-400";
            timelineDone = true;
            checkAllDone();
        } else {
            res.textContent = "❌ Urutan masih salah, coba lagi!";
            res.className = "mt-2 font-bold text-red-400";
        }
    }

    function checkTebak() {
        if(tebakDone) return;
        const ans = document.getElementById('tebak-input').value.toLowerCase().replace(/[^a-z]/g, '');
        const target = "prof. dr. mr. soepomo".toLowerCase().replace(/[^a-z]/g, '');
        
        const res = document.getElementById('tebak-result');
        if(ans.includes('soepomo') || ans.includes('supomo')) {
            res.textContent = "✅ Benar! +10 Poin";
            res.className = "mt-2 font-bold text-green-400";
            tebakDone = true;
            checkAllDone();
        } else {
            res.textContent = "❌ Masih salah, coba lagi!";
            res.className = "mt-2 font-bold text-red-400";
        }
    }

    function checkAllDone() {
        if(timelineDone && tebakDone) {
            document.getElementById('finish-btn-container').classList.remove('hidden');
        }
    }

    function finishLevel() {
        let prog = getProgress();
        if(!prog.completedLevels.includes('d2l3')) {
            prog.poin += 25; // Total 25 poin
            prog.completedLevels.push('d2l3');
            saveProgress(prog);
        }
        window.location.href = "dunia2.html";
    }
    </script>
    """
    with open(os.path.join(base_dir, "dunia2-level3.html"), "w", encoding="utf-8") as f:
        f.write(generate_page("Perjalanan Perumusan UUD", content_l3, "d2l2", False, js_l3))

    # 7. dunia2-level4.html (Rangkuman & Boss Battle)
    content_l4 = """
    <div class="space-y-6">
        <div class="bg-gray-700/50 p-6 rounded-2xl border border-orange-500/30">
            <h2 class="text-xl font-bold text-orange-400 mb-2"><i class="fa-solid fa-khanda mr-2"></i> Rangkuman Dunia 2</h2>
            <p class="text-gray-300 text-sm leading-relaxed mb-4">
                BPUPKI dibentuk untuk mempersiapkan kemerdekaan, dengan diketuai oleh Radjiman Wedyodiningrat. 
                Dalam perjalanannya, dibentuk Panitia Perancang UUD (Ketua: Soekarno), Panitia Kecil Perancang UUD (Ketua: Soepomo), dan Panitia Penghalus Bahasa untuk merumuskan UUD.
                Semua ini berpuncak pada pengesahan UUD 1945 oleh PPKI pada 18 Agustus 1945.
            </p>
            <p class="font-bold text-white">Siap menghadapi Ujian Akhir (Boss Battle)? Kamu harus menjawab SEMUA pertanyaan dengan benar!</p>
        </div>

        <div id="boss-battle-container" class="space-y-8 mt-8">
            <!-- Questions rendered here -->
        </div>

        <button id="submit-boss" onclick="checkBoss()" class="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-xl text-lg transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]">Serang Boss!</button>
        
        <p id="boss-result" class="text-center font-bold text-xl hidden mt-4"></p>
        
        <div id="victory-container" class="hidden text-center mt-8 space-y-4">
            <div class="inline-block bg-yellow-500/20 text-yellow-400 px-6 py-3 rounded-full font-bold text-xl animate-pulse">
                🏆 Dunia 2 Berhasil Diselesaikan!
            </div>
            <a href="dunia3.html" class="block w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl text-lg transition-all">Lanjut ke Dunia 3 <i class="fa-solid fa-arrow-right ml-2"></i></a>
            <a href="dunia2.html" class="block text-gray-400 hover:text-white mt-2">Kembali ke Peta Dunia 2</a>
        </div>
    </div>
    """
    js_l4 = """
    <script>
    const qData = [
        {q: "Kapan BPUPKI diresmikan?", opts: ["1 Maret 1945", "29 April 1945", "1 Juni 1945", "18 Agustus 1945"], a: 1},
        {q: "Siapa ketua BPUPKI?", opts: ["Ir. Soekarno", "Mr. Soepomo", "Dr. Radjiman Wedyodiningrat", "Moh. Hatta"], a: 2},
        {q: "Siapa ketua Panitia Perancang UUD?", opts: ["Ir. Soekarno", "Mr. Soepomo", "Agus Salim", "Wahid Hasyim"], a: 0},
        {q: "Siapa ketua Panitia Kecil Perancang UUD?", opts: ["Ir. Soekarno", "Mr. Soepomo", "Moh. Yamin", "Hoesein Djajadiningrat"], a: 1},
        {q: "Kapan Sidang II BPUPKI dilaksanakan?", opts: ["29 Mei-1 Juni 1945", "22 Juni 1945", "10-17 Juli 1945", "18 Agustus 1945"], a: 2},
        {q: "Apa tugas utama Panitia Penghalus Bahasa?", opts: ["Merumuskan dasar negara", "Menyempurnakan tata bahasa UUD", "Memilih Presiden", "Membentuk tentara"], a: 1},
        {q: "Siapa saja anggota Panitia Penghalus Bahasa?", opts: ["Soekarno, Hatta, Radjiman", "Soepomo, Agus Salim, Hoesein D.", "Soepomo, Yamin, Soekarno", "Agus Salim, Wahid Hasyim, Yamin"], a: 1},
        {q: "Apa nama lembaga yang mengesahkan UUD 1945 pada 18 Agustus 1945?", opts: ["BPUPKI", "KNIP", "PPKI", "DPR"], a: 2},
        {q: "Kapan Piagam Jakarta dirumuskan oleh Panitia Sembilan?", opts: ["1 Juni 1945", "22 Juni 1945", "17 Agustus 1945", "10 Juli 1945"], a: 1},
        {q: "Apa agenda utama Sidang I BPUPKI?", opts: ["Merumuskan Dasar Negara", "Membahas Rancangan UUD", "Membentuk Panitia Sembilan", "Mengesahkan Pancasila"], a: 0}
    ];
    
    const container = document.getElementById('boss-battle-container');
    qData.forEach((q, i) => {
        let html = `<div class="bg-gray-800 p-4 rounded-xl border border-red-500/20"><p class="font-bold mb-3">${i+1}. ${q.q}</p><div class="space-y-2">`;
        q.opts.forEach((opt, j) => {
            html += `<label class="block flex items-center gap-2 cursor-pointer"><input type="radio" name="bq${i}" value="${j}" class="form-radio text-red-500"><span>${opt}</span></label>`;
        });
        html += `</div></div>`;
        container.innerHTML += html;
    });

    function checkBoss() {
        let isAllCorrect = true;
        let answered = 0;
        
        qData.forEach((q, i) => {
            const selected = document.querySelector(`input[name="bq${i}"]:checked`);
            if(selected) {
                answered++;
                if(parseInt(selected.value) !== q.a) isAllCorrect = false;
            }
        });

        if(answered < qData.length) {
            alert("Kamu harus menjawab semua pertanyaan Boss!");
            return;
        }

        const res = document.getElementById('boss-result');
        res.classList.remove('hidden');

        if(isAllCorrect) {
            res.textContent = "🎉 Kemenangan Sempurna! +50 Poin";
            res.className = "text-center font-bold text-xl mt-4 text-green-400";
            
            document.getElementById('submit-boss').classList.add('hidden');
            document.getElementById('victory-container').classList.remove('hidden');
            
            let prog = getProgress();
            if(!prog.completedLevels.includes('d2l4')) {
                prog.poin += 50;
                prog.completedLevels.push('d2l4');
                prog.dunia = 3; // Lanjut ke dunia 3
                saveProgress(prog);
            }
        } else {
            res.textContent = "💥 Serangan gagal! Ada jawaban yang salah. Boss memulihkan HP, coba lagi!";
            res.className = "text-center font-bold text-xl mt-4 text-red-400";
        }
    }
    </script>
    """
    with open(os.path.join(base_dir, "dunia2-level4.html"), "w", encoding="utf-8") as f:
        f.write(generate_page("Boss Battle: Dunia 2", content_l4, "d2l3", True, js_l4))

if __name__ == "__main__":
    main()
