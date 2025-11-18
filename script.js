// Lista de palabras con sus pistas
const words = [
    { word: "JAVASCRIPT", hint: "Lenguaje de programación para la web" },
    { word: "COMPUTADORA", hint: "Dispositivo electrónico para procesar datos" },
    { word: "PROGRAMACION", hint: "Arte de escribir código" },
    { word: "INTERNET", hint: "Red mundial de comunicación" },
    { word: "DESARROLLO", hint: "Proceso de crear software" },
    { word: "ALGORITMO", hint: "Secuencia de pasos para resolver un problema" },
    { word: "TECLADO", hint: "Dispositivo de entrada con letras" },
    { word: "MONITOR", hint: "Pantalla de la computadora" },
    { word: "SERVIDOR", hint: "Computadora que proporciona servicios" },
    { word: "NAVEGADOR", hint: "Aplicación para explorar la web" },
    { word: "PYTHON", hint: "Lenguaje de programación con nombre de serpiente" },
    { word: "GITHUB", hint: "Plataforma para alojar código" },
    { word: "VARIABLE", hint: "Contenedor de datos en programación" },
    { word: "FUNCION", hint: "Bloque de código reutilizable" },
    { word: "DEPURAR", hint: "Proceso de encontrar y corregir errores" }
];

let currentWord = "";
let currentHint = "";
let guessedLetters = [];
let attemptsLeft = 6;
let score = 0;
let gameActive = true;

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
    
    updateDisplay();
    createKeyboard();
    updateAttempts();
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
        updateAttempts();
        checkLose();
    }
    
    key.classList.add("disabled");
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
