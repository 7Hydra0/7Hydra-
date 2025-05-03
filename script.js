document.addEventListener('DOMContentLoaded', () => {
    // Configuração da animação de entrada
    const canvas = document.getElementById('particleCanvas');
    const terminal = document.getElementById('terminal');
    const introAnimation = document.querySelector('.intro-animation');
    const heroSection = document.querySelector('.hero-section');

    // Verificações de erro
    if (!canvas || !terminal || !introAnimation || !heroSection) {
        console.error('Erro: Elementos necessários não encontrados.');
        console.error('Canvas:', canvas);
        console.error('Terminal:', terminal);
        console.error('Intro Animation:', introAnimation);
        console.error('Hero Section:', heroSection);
        heroSection.classList.add('visible');
        return;
    }

    const ctx = canvas.getContext('2d');
    let width, height, particles = [], time = 0, dissolve = 0;

    function resizeCanvas() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    }

    function initParticles() {
        particles = [];
        const size = Math.min(width, height) * 0.5;
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: (Math.random() - 0.5) * size,
                y: (Math.random() - 0.5) * size,
                z: (Math.random() - 0.5) * size * 0.5,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                vz: (Math.random() - 0.5) * 0.3,
                life: Math.random() * 50
            });
        }
    }

    function animateParticles() {
        if (time > 4500) return; // Parar após 4.5 segundos
        ctx.clearRect(0, 0, width, height);
        const centerX = width / 2;
        const centerY = height / 2;
        const size = Math.min(width, height) * 0.5;
        const perspective = 800;
        time += 16.67; // Aproximadamente 60 FPS
        dissolve = time > 3500 ? (time - 3500) / 1000 : 0; // Dissolução após 3.5s

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.z += p.vz;
            p.life--;
            if (p.life <= 0 && time < 3500) {
                p.x = (Math.random() - 0.5) * size;
                p.y = (Math.random() - 0.5) * size;
                p.z = (Math.random() - 0.5) * size * 0.5;
                p.vx = (Math.random() - 0.5) * 0.3;
                p.vy = (Math.random() - 0.5) * 0.3;
                p.vz = (Math.random() - 0.5) * 0.3;
                p.life = Math.random() * 50;
            }
            const scale = perspective / (perspective + p.z);
            const px = p.x * scale + centerX;
            const py = p.y * scale + centerY;
            if (p.z > -size) {
                ctx.beginPath();
                ctx.arc(px, py, 2 * scale, 0, 2 * Math.PI);
                ctx.fillStyle = `rgba(255, 255, 255, ${0.8 - dissolve})`;
                ctx.fill();
            }
        });

        requestAnimationFrame(animateParticles);
    }

    // Animação do terminal
    function animateTerminal() {
        const lines = [
            "> Initializing 7Hydra System...",
            "> Loading core modules... OK",
            "> Checking network integrity... <span class='error'>ERROR: Packet loss detected</span>",
            "> Rerouting data stream... OK",
            "> Establishing secure connection... OK",
            "> Verifying user credentials... OK",
            "> <span class='error'>WARNING: Unauthorized access attempt detected</span>",
            "> Deploying countermeasures... OK",
            "> 7Hydra - Sistema Ativado",
            "> Conexão Segura Estabelecida"
        ];
        let currentLine = 0;
        let currentChar = 0;
        let output = '';

        const typingInterval = setInterval(() => {
            if (time > 3500) {
                clearInterval(typingInterval);
                terminal.innerHTML = output;
                return;
            }
            if (currentLine < lines.length) {
                const line = lines[currentLine];
                if (currentChar <= line.length) {
                    output = lines.slice(0, currentLine).join('\n') + '\n' + line.substring(0, currentChar);
                    terminal.innerHTML = output + '<span class="cursor">█</span>';
                    currentChar++;
                } else {
                    currentLine++;
                    currentChar = 0;
                    output = lines.slice(0, currentLine).join('\n');
                    terminal.innerHTML = output + '\n<span class="cursor">█</span>';
                }
            } else {
                terminal.innerHTML = output;
                clearInterval(typingInterval);
            }
        }, 50);

        // Animação do cursor piscante
        setInterval(() => {
            const cursor = terminal.querySelector('.cursor');
            if (cursor) {
                cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
            }
        }, 500);
    }

    // Executar animação de entrada com atraso para garantir carregamento
    setTimeout(() => {
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            console.log('Iniciando animação do terminal...');
            window.addEventListener('resize', resizeCanvas);
            resizeCanvas();
            initParticles();
            animateParticles();
            animateTerminal();
            setTimeout(() => {
                console.log('Finalizando animação e mostrando hero-section');
                introAnimation.classList.add('hidden');
                heroSection.classList.add('visible');
            }, 5000); // 5s para completar a animação
        } else {
            console.log('Animação desativada devido a prefers-reduced-motion');
            introAnimation.style.display = 'none';
            heroSection.classList.add('visible');
        }
    }, 100);

    // Efeito de terminal-overlay
    function showTerminalOverlay() {
        const overlay = document.getElementById('errorScreen');
        if (!overlay) {
            console.error('Erro: Terminal overlay não encontrado');
            return;
        }
        overlay.style.display = 'block';
        overlay.classList.add('active');
        const messages = [
            "> System Access Verified\n> Welcome to 7Hydra Network\n> Initializing Secure Connection...",
            "> Authentication Complete\n> Accessing Hydra Database\n> Connection Stable",
            "> Secure Channel Established\n> 7Hydra Protocol Active\n> Ready for Interaction"
        ];
        const messageText = messages[Math.floor(Math.random() * messages.length)];
        let i = 0;
        const interval = setInterval(() => {
            overlay.textContent = messageText.substring(0, i);
            i++;
            if (i > messageText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    overlay.classList.remove('active');
                    overlay.style.display = 'none';
                }, 1500);
            }
        }, 40);
    }

    // Ativar terminal-overlay aleatoriamente (3% de chance)
    setInterval(() => {
        if (Math.random() < 0.03) showTerminalOverlay();
    }, 8000);

    // Efeito de navbar ao rolar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }
    });
});