// Lista completa de palabras con sus pistas (dos líneas)
const allWords = [
    // Tecnología y Programación
    { word: "JAVASCRIPT", hint: "Lenguaje de programación para la web\nSe ejecuta en navegadores y servidores", category: "Tecnología", language: "Inglés" },
    { word: "PYTHON", hint: "Lenguaje de programación con nombre de serpiente\nMuy popular para IA y ciencia de datos", category: "Tecnología", language: "Inglés" },
    { word: "PROGRAMACION", hint: "Arte de escribir código\nCrear instrucciones para las computadoras", category: "Tecnología", language: "Español" },
    { word: "ALGORITMO", hint: "Secuencia de pasos para resolver un problema\nBase fundamental de la programación", category: "Tecnología", language: "Español" },
    { word: "DESARROLLO", hint: "Proceso de crear software\nDiseñar, codificar y probar aplicaciones", category: "Tecnología", language: "Español" },
    { word: "VARIABLE", hint: "Contenedor de datos en programación\nAlmacena valores que pueden cambiar", category: "Tecnología", language: "Español" },
    { word: "FUNCION", hint: "Bloque de código reutilizable\nRealiza una tarea específica", category: "Tecnología", language: "Español" },
    { word: "DEPURAR", hint: "Proceso de encontrar y corregir errores\nTambién llamado debugging", category: "Tecnología", language: "Español" },
    { word: "COMPILADOR", hint: "Traduce código a lenguaje de máquina\nConvierte programas en ejecutables", category: "Tecnología", language: "Español" },
    { word: "FRAMEWORK", hint: "Estructura base para desarrollo\nFacilita la creación de aplicaciones", category: "Tecnología", language: "Inglés" },
    { word: "DEBUGGING", hint: "Proceso de eliminar bugs del código\nBuscar y corregir errores de software", category: "Tecnología", language: "Inglés" },
    { word: "BACKEND", hint: "Parte del servidor de una aplicación\nManeja lógica y base de datos", category: "Tecnología", language: "Inglés" },
    { word: "FRONTEND", hint: "Interfaz visual de una aplicación\nLo que el usuario ve e interactúa", category: "Tecnología", language: "Inglés" },
    { word: "DATABASE", hint: "Sistema para almacenar datos\nOrganiza información de forma estructurada", category: "Tecnología", language: "Inglés" },
    { word: "INTERFACE", hint: "Punto de interacción entre sistemas\nConexión entre usuario y programa", category: "Tecnología", language: "Inglés" },
    
    // Hardware y Dispositivos
    { word: "COMPUTADORA", hint: "Dispositivo electrónico para procesar datos\nTiene CPU, memoria y almacenamiento", category: "Hardware", language: "Español" },
    { word: "TECLADO", hint: "Dispositivo de entrada con letras\nPermite escribir texto y comandos", category: "Hardware", language: "Español" },
    { word: "MONITOR", hint: "Pantalla de la computadora\nDispositivo de salida visual", category: "Hardware", language: "Español" },
    { word: "PROCESADOR", hint: "Cerebro de la computadora\nEjecuta instrucciones y cálculos", category: "Hardware", language: "Español" },
    { word: "MEMORIA", hint: "Almacena datos temporalmente\nRAM permite acceso rápido", category: "Hardware", language: "Español" },
    { word: "DISCO", hint: "Almacenamiento permanente de datos\nGuarda archivos y programas", category: "Hardware", language: "Español" },
    { word: "MOTHERBOARD", hint: "Placa base de la computadora\nConecta todos los componentes", category: "Hardware", language: "Inglés" },
    { word: "ROUTER", hint: "Distribuye conexión de internet\nConecta dispositivos en red local", category: "Hardware", language: "Inglés" },
    { word: "IMPRESORA", hint: "Dispositivo de salida en papel\nImprime documentos físicos", category: "Hardware", language: "Español" },
    
    // Internet y Redes
    { word: "INTERNET", hint: "Red mundial de comunicación\nConecta millones de dispositivos globalmente", category: "Internet", language: "Inglés" },
    { word: "NAVEGADOR", hint: "Aplicación para explorar la web\nChrome, Firefox o Edge son ejemplos", category: "Internet", language: "Español" },
    { word: "SERVIDOR", hint: "Computadora que proporciona servicios\nResponde a peticiones de clientes", category: "Internet", language: "Español" },
    { word: "WEBSITE", hint: "Sitio en la world wide web\nPáginas conectadas por enlaces", category: "Internet", language: "Inglés" },
    { word: "PROTOCOLO", hint: "Reglas de comunicación en redes\nDefine cómo se transfieren datos", category: "Internet", language: "Español" },
    { word: "DOMINIO", hint: "Nombre único de un sitio web\nEjemplo: google.com", category: "Internet", language: "Español" },
    { word: "HOSTING", hint: "Servicio de alojamiento web\nEspacio donde vive tu sitio", category: "Internet", language: "Inglés" },
    { word: "DOWNLOAD", hint: "Descargar archivos de internet\nTraer datos a tu dispositivo", category: "Internet", language: "Inglés" },
    { word: "STREAMING", hint: "Transmisión continua de contenido\nVer videos sin descargar", category: "Internet", language: "Inglés" },
    { word: "FIREWALL", hint: "Protección de red contra intrusos\nFiltra tráfico no autorizado", category: "Internet", language: "Inglés" },
    
    // Plataformas y Herramientas
    { word: "GITHUB", hint: "Plataforma para alojar código\nPermite colaboración y control de versiones", category: "Plataformas", language: "Inglés" },
    { word: "STACKOVERFLOW", hint: "Comunidad de programadores\nRespuestas a preguntas técnicas", category: "Plataformas", language: "Inglés" },
    { word: "WORDPRESS", hint: "Sistema de gestión de contenidos\nCrea sitios web y blogs fácilmente", category: "Plataformas", language: "Inglés" },
    { word: "VISUAL", hint: "Editor de código muy popular\nCreado por Microsoft", category: "Plataformas", language: "Inglés" },
    { word: "DOCKER", hint: "Plataforma de contenedores\nEmpaqueta aplicaciones con dependencias", category: "Plataformas", language: "Inglés" },
    
    // Conceptos de Software
    { word: "SOFTWARE", hint: "Programas y aplicaciones\nParte no física de la computadora", category: "Software", language: "Inglés" },
    { word: "APLICACION", hint: "Programa con función específica\nSoftware que usas a diario", category: "Software", language: "Español" },
    { word: "SISTEMA", hint: "Conjunto organizado de elementos\nSoftware que gestiona hardware", category: "Software", language: "Español" },
    { word: "ARCHIVO", hint: "Unidad de datos almacenados\nDocumento, imagen o programa", category: "Software", language: "Español" },
    { word: "CARPETA", hint: "Contenedor de archivos\nOrganiza documentos en directorios", category: "Software", language: "Español" },
    { word: "ACTUALIZACION", hint: "Nueva versión de software\nMejora funciones y seguridad", category: "Software", language: "Español" },
    { word: "INSTALACION", hint: "Proceso de configurar software\nPreparar programa para usar", category: "Software", language: "Español" },
    { word: "LICENCIA", hint: "Permiso para usar software\nDerechos de uso del programa", category: "Software", language: "Español" },
    
    // Seguridad
    { word: "PASSWORD", hint: "Contraseña de acceso\nClave secreta para autenticarse", category: "Seguridad", language: "Inglés" },
    { word: "ENCRIPTACION", hint: "Codificación de información\nProtege datos con cifrado", category: "Seguridad", language: "Español" },
    { word: "ANTIVIRUS", hint: "Protección contra malware\nDetecta y elimina virus", category: "Seguridad", language: "Inglés" },
    { word: "HACKER", hint: "Experto en seguridad informática\nPuede ser ético o malicioso", category: "Seguridad", language: "Inglés" },
    { word: "BACKUP", hint: "Copia de seguridad de datos\nRespaldo para recuperar información", category: "Seguridad", language: "Inglés" },
    
    // Multimedia
    { word: "PIXEL", hint: "Punto más pequeño en pantalla\nUnidad básica de imagen digital", category: "Multimedia", language: "Inglés" },
    { word: "RESOLUCION", hint: "Cantidad de píxeles en pantalla\nMide calidad de imagen", category: "Multimedia", language: "Español" },
    { word: "RENDERIZAR", hint: "Generar imagen desde modelo 3D\nProcesar gráficos computacionales", category: "Multimedia", language: "Español" },
    { word: "STREAMING", hint: "Transmisión en tiempo real\nContenido sin necesidad de descarga", category: "Multimedia", language: "Inglés" },
    { word: "PODCAST", hint: "Programa de audio bajo demanda\nEpisodios que puedes escuchar cuando quieras", category: "Multimedia", language: "Inglés" }
];

let availableWords = [...allWords]; // Copia de palabras disponibles
let usedWords = []; // Palabras ya jugadas
let currentWord = "";
let currentHint = "";
let currentCategory = "";
let currentLanguage = "";
let guessedLetters = [];
let attemptsLeft = 6;
let score = 0;
let gamesPlayed = 0;
let gamesWon = 0;
let currentStreak = 0; // Racha actual
let bestStreak = 0; // Mejor racha histórica
let hintUsed = false; // Si se usó la pista en la palabra actual
let gameActive = true;

// Partes del cuerpo del ahorcado en orden
const bodyParts = ['rope', 'head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];

// Elementos del DOM
const wordDisplay = document.getElementById("wordDisplay");
const keyboard = document.getElementById("keyboard");
const attemptsElement = document.getElementById("attempts");
const scoreElement = document.getElementById("score");
const gamesPlayedElement = document.getElementById("gamesPlayed");
const gamesWonElement = document.getElementById("gamesWon");
const currentStreakElement = document.getElementById("currentStreak");
const bestStreakElement = document.getElementById("bestStreak");
const categoryElement = document.getElementById("category");
const wordsRemainingElement = document.getElementById("wordsRemaining");
const messageElement = document.getElementById("message");
const hintElement = document.getElementById("hint");
const newGameBtn = document.getElementById("newGameBtn");
const hintBtn = document.getElementById("hintBtn");
const shareBtn = document.getElementById("shareBtn");

// Crear teclado
function createKeyboard() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    keyboard.innerHTML = "";
    
    for (let letter of letters) {
        const key = document.createElement("button");
        key.textContent = letter;
        key.className = "key";
        key.addEventListener("click", () => handleGuess(letter));
        keyboard.appendChild(key);
    }
}

// Iniciar nuevo juego
function newGame() {
    // Si no hay palabras disponibles, reiniciar el pool
    if (availableWords.length === 0) {
        availableWords = [...allWords];
        usedWords = [];
        showMessage("🎊 ¡Completaste todas las palabras! Reiniciando...", "win");
        setTimeout(() => {
            messageElement.textContent = "";
        }, 2000);
    }
    
    // Seleccionar palabra aleatoria de las disponibles
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const selectedWord = availableWords[randomIndex];
    
    // Mover palabra a usadas y quitarla de disponibles
    currentWord = selectedWord.word;
    currentHint = selectedWord.hint;
    currentCategory = selectedWord.category;
    currentLanguage = selectedWord.language;
    usedWords.push(selectedWord);
    availableWords.splice(randomIndex, 1);
    
    guessedLetters = [];
    attemptsLeft = 6;
    gameActive = true;
    gamesPlayed++;
    hintUsed = false; // Resetear el uso de pista
    
    messageElement.textContent = "";
    messageElement.className = "message";
    hintElement.textContent = "";
    hintElement.style.display = "none";
    hintBtn.textContent = `💡 Ver Pista (-20 pts)`;
    hintBtn.disabled = false;
    
    // Ocultar todas las partes del cuerpo
    resetHangman();
    
    updateDisplay();
    createKeyboard();
    updateAttempts();
    updateStats();
}

// Mostrar mensaje temporal
function showMessage(text, type) {
    messageElement.textContent = text;
    messageElement.className = `message ${type}`;
}

// Resetear el dibujo del ahorcado
function resetHangman() {
    bodyParts.forEach(part => {
        const element = document.getElementById(part);
        element.classList.remove('show');
        element.classList.add('hidden');
    });
}

// Actualizar display de la palabra
function updateDisplay() {
    wordDisplay.innerHTML = "";
    
    for (let letter of currentWord) {
        const letterBox = document.createElement("div");
        
        if (letter === " ") {
            letterBox.className = "letter-box space";
        } else {
            letterBox.className = "letter-box";
            if (guessedLetters.includes(letter)) {
                letterBox.textContent = letter;
                letterBox.classList.add("revealed");
            }
        }
        
        wordDisplay.appendChild(letterBox);
    }
}

// Manejar intento de letra
function handleGuess(letter) {
    if (!gameActive || guessedLetters.includes(letter)) return;
    
    guessedLetters.push(letter);
    
    const key = Array.from(keyboard.children).find(k => k.textContent === letter);
    
    if (currentWord.includes(letter)) {
        // Letra correcta
        key.classList.add("correct");
        updateDisplay();
        checkWin();
    } else {
        // Letra incorrecta
        key.classList.add("incorrect");
        attemptsLeft--;
        showNextBodyPart();
        updateAttempts();
        checkLose();
    }
    
    key.classList.add("disabled");
}

// Mostrar siguiente parte del cuerpo
function showNextBodyPart() {
    const partIndex = 6 - attemptsLeft - 1;
    if (partIndex >= 0 && partIndex < bodyParts.length) {
        const part = document.getElementById(bodyParts[partIndex]);
        part.classList.remove('hidden');
        part.classList.add('show');
    }
}

// Actualizar intentos
function updateAttempts() {
    attemptsElement.textContent = attemptsLeft;
    attemptsElement.style.color = attemptsLeft <= 2 ? "#dc3545" : "#667eea";
}

// Verificar victoria
function checkWin() {
    const allLettersGuessed = currentWord
        .split("")
        .filter(letter => letter !== " ")
        .every(letter => guessedLetters.includes(letter));
    
    if (allLettersGuessed) {
        gameActive = false;
        gamesWon++;
        currentStreak++;
        
        // Actualizar mejor racha
        if (currentStreak > bestStreak) {
            bestStreak = currentStreak;
            saveStats();
        }
        
        score += attemptsLeft * 10 + 50; // Bonus por ganar
        
        let message = `🎉 ¡Excelente! +${attemptsLeft * 10 + 50} pts`;
        if (currentStreak > 1) {
            message += ` | 🔥 Racha: ${currentStreak}`;
        }
        if (currentStreak === bestStreak && currentStreak >= 5) {
            message = `🏆 ¡NUEVO RÉCORD! Racha: ${currentStreak} 🔥`;
        }
        
        messageElement.textContent = message;
        messageElement.className = "message win";
        
        updateScore();
        updateStats();
        disableKeyboard();
        
        // Efecto de confeti (visual)
        celebrateWin();
        
        // Guardar estadísticas
        saveStats();
    }
}

// Verificar derrota
function checkLose() {
    if (attemptsLeft === 0) {
        gameActive = false;
        
        let message = `😢 Game Over - Era: ${currentWord}`;
        if (currentStreak > 0) {
            message += ` | Racha perdida: ${currentStreak}`;
        }
        
        // Resetear racha actual
        currentStreak = 0;
        
        messageElement.textContent = message;
        messageElement.className = "message lose";
        updateStats();
        disableKeyboard();
        revealWord();
        
        // Guardar estadísticas
        saveStats();
    }
}

// Revelar palabra completa
function revealWord() {
    const letterBoxes = wordDisplay.querySelectorAll(".letter-box:not(.space)");
    letterBoxes.forEach((box, index) => {
        const letter = currentWord.replace(/ /g, "")[index];
        box.textContent = letter;
        box.classList.add("revealed");
    });
}

// Desactivar teclado
function disableKeyboard() {
    const keys = keyboard.querySelectorAll(".key");
    keys.forEach(key => key.classList.add("disabled"));
}

// Actualizar puntuación
function updateScore() {
    scoreElement.textContent = score;
}

// Actualizar estadísticas
function updateStats() {
    gamesPlayedElement.textContent = gamesPlayed;
    gamesWonElement.textContent = gamesWon;
    currentStreakElement.textContent = currentStreak;
    bestStreakElement.textContent = bestStreak;
    categoryElement.textContent = currentCategory || "---";
    wordsRemainingElement.textContent = availableWords.length;
    
    // Mostrar idioma de la palabra actual
    if (currentLanguage) {
        const languageIcon = currentLanguage === "Español" ? "🇪🇸" : "🇺🇸";
        categoryElement.textContent = `${currentCategory} ${languageIcon} ${currentLanguage}`;
    }
    
    // Calcular porcentaje de victorias
    const winRate = gamesPlayed > 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0;
    gamesWonElement.title = `${winRate}% de victorias`;
    
    // Efecto visual en racha
    if (currentStreak >= 3) {
        currentStreakElement.style.animation = 'streakPulse 1s ease infinite';
    } else {
        currentStreakElement.style.animation = 'none';
    }
}

// Efecto de celebración al ganar
function celebrateWin() {
    const container = document.querySelector('.container');
    container.style.animation = 'none';
    setTimeout(() => {
        container.style.animation = 'winPulse 0.5s ease 3';
    }, 10);
}

// Guardar estadísticas en localStorage
function saveStats() {
    const stats = {
        score,
        gamesPlayed,
        gamesWon,
        currentStreak,
        bestStreak
    };
    localStorage.setItem('hangmanStats', JSON.stringify(stats));
}

// Cargar estadísticas desde localStorage
function loadStats() {
    const saved = localStorage.getItem('hangmanStats');
    if (saved) {
        const stats = JSON.parse(saved);
        score = stats.score || 0;
        gamesPlayed = stats.gamesPlayed || 0;
        gamesWon = stats.gamesWon || 0;
        currentStreak = stats.currentStreak || 0;
        bestStreak = stats.bestStreak || 0;
        updateScore();
        updateStats();
    }
}

// Compartir en WhatsApp
function shareOnWhatsApp() {
    const winRate = gamesPlayed > 0 ? Math.round((gamesWon / gamesPlayed) * 100) : 0;
    
    let message = `🎮 *Ahorcado / Hangman* 🎮\n\n`;
    message += `📊 *Mis Estadísticas:*\n`;
    message += `🏆 Puntuación: ${score}\n`;
    message += `🎯 Jugadas: ${gamesPlayed}\n`;
    message += `✅ Ganadas: ${gamesWon} (${winRate}%)\n`;
    message += `🔥 Racha actual: ${currentStreak}\n`;
    message += `⭐ Mejor racha: ${bestStreak}\n\n`;
    
    if (currentStreak >= 5) {
        message += `¡Estoy en racha de ${currentStreak} victorias! 🔥🔥🔥\n\n`;
    } else if (bestStreak >= 10) {
        message += `¡Mi récord es ${bestStreak} victorias seguidas! 🏆\n\n`;
    }
    
    message += `¿Puedes superarme? 🎯\n`;
    message += `Juega aquí: https://santiago999-hub.github.io/hangman-santy`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Mostrar pista
function showHint() {
    if (gameActive && currentHint) {
        if (hintElement.style.display === "none" || hintElement.style.display === "") {
            // Primera vez que se abre la pista - restar puntos
            if (!hintUsed) {
                score = Math.max(0, score - 20); // No permitir puntuación negativa
                updateScore();
                hintUsed = true;
            }
            
            hintElement.textContent = `💡 Pista: ${currentHint}`;
            hintElement.style.display = "flex";
            hintBtn.textContent = "🔒 Ocultar Pista";
        } else {
            hintElement.style.display = "none";
            hintBtn.textContent = "💡 Ver Pista";
        }
    }
}

// Event listeners
newGameBtn.addEventListener("click", newGame);
hintBtn.addEventListener("click", showHint);
shareBtn.addEventListener("click", shareOnWhatsApp);

// Soporte para teclado físico
document.addEventListener("keydown", (e) => {
    const letter = e.key.toUpperCase();
    if (/^[A-Z]$/.test(letter) && gameActive && !guessedLetters.includes(letter)) {
        handleGuess(letter);
    }
});

// Cargar estadísticas guardadas y iniciar el juego
loadStats();
newGame();
