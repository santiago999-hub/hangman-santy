// Lista de palabras con sus pistas (dos líneas)
const words = [
    { word: "JAVASCRIPT", hint: "Lenguaje de programación para la web\nSe ejecuta en navegadores y servidores" },
    { word: "COMPUTADORA", hint: "Dispositivo electrónico para procesar datos\nTiene CPU, memoria y almacenamiento" },
    { word: "PROGRAMACION", hint: "Arte de escribir código\nCrear instrucciones para las computadoras" },
    { word: "INTERNET", hint: "Red mundial de comunicación\nConecta millones de dispositivos globalmente" },
    { word: "DESARROLLO", hint: "Proceso de crear software\nDiseñar, codificar y probar aplicaciones" },
    { word: "ALGORITMO", hint: "Secuencia de pasos para resolver un problema\nBase fundamental de la programación" },
    { word: "TECLADO", hint: "Dispositivo de entrada con letras\nPermite escribir texto y comandos" },
    { word: "MONITOR", hint: "Pantalla de la computadora\nDispositivo de salida visual" },
    { word: "SERVIDOR", hint: "Computadora que proporciona servicios\nResponde a peticiones de clientes" },
    { word: "NAVEGADOR", hint: "Aplicación para explorar la web\nChrome, Firefox o Edge son ejemplos" },
    { word: "PYTHON", hint: "Lenguaje de programación con nombre de serpiente\nMuy popular para IA y ciencia de datos" },
    { word: "GITHUB", hint: "Plataforma para alojar código\nPermite colaboración y control de versiones" },
    { word: "VARIABLE", hint: "Contenedor de datos en programación\nAlmacena valores que pueden cambiar" },
    { word: "FUNCION", hint: "Bloque de código reutilizable\nRealiza una tarea específica" },
    { word: "DEPURAR", hint: "Proceso de encontrar y corregir errores\nTambién llamado debugging" }
];

let currentWord = "";
let currentHint = "";
let guessedLetters = [];
let attemptsLeft = 6;
let score = 0;
let gameActive = true;

// Partes del cuerpo del ahorcado en orden
const bodyParts = ['rope', 'head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];

// Elementos del DOM
const wordDisplay = document.getElementById("wordDisplay");
const keyboard = document.getElementById("keyboard");
const attemptsElement = document.getElementById("attempts");
const scoreElement = document.getElementById("score");
const messageElement = document.getElementById("message");
const hintElement = document.getElementById("hint");
const newGameBtn = document.getElementById("newGameBtn");
const hintBtn = document.getElementById("hintBtn");

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
    const randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].word;
    currentHint = words[randomIndex].hint;
    guessedLetters = [];
    attemptsLeft = 6;
    gameActive = true;
    
    messageElement.textContent = "";
    messageElement.className = "message";
    hintElement.textContent = "";
    
    // Ocultar todas las partes del cuerpo
    resetHangman();
    
    updateDisplay();
    createKeyboard();
    updateAttempts();
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
        messageElement.textContent = "🎉 ¡Ganaste! ¡Felicitaciones!";
        messageElement.className = "message win";
        score += attemptsLeft * 10;
        updateScore();
        disableKeyboard();
    }
}

// Verificar derrota
function checkLose() {
    if (attemptsLeft === 0) {
        gameActive = false;
        messageElement.textContent = `😢 Perdiste. La palabra era: ${currentWord}`;
        messageElement.className = "message lose";
        disableKeyboard();
        revealWord();
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

// Mostrar pista
function showHint() {
    if (gameActive && currentHint) {
        hintElement.textContent = `💡 Pista: ${currentHint}`;
    }
}

// Event listeners
newGameBtn.addEventListener("click", newGame);
hintBtn.addEventListener("click", showHint);

// Soporte para teclado físico
document.addEventListener("keydown", (e) => {
    const letter = e.key.toUpperCase();
    if (/^[A-Z]$/.test(letter) && gameActive && !guessedLetters.includes(letter)) {
        handleGuess(letter);
    }
});

// Iniciar el juego al cargar
newGame();
