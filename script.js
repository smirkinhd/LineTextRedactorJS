const textInput = document.getElementById('textInput');
const sendBtn = document.getElementById('sendBtn');
const previewBtn = document.getElementById('previewBtn');
const previewArea = document.getElementById('previewArea');

let textLines = [];

sendBtn.addEventListener('click', () => {
    const inputText = textInput.value.trim();
    if (inputText) {
        textLines.push(inputText);
        textInput.value = ''; // Очистить поле ввода
    }
});

previewBtn.addEventListener('click', () => {
    previewArea.innerHTML = '<h3>Предпросмотр текста:</h3>'; // Сброс содержимого
    textLines.forEach(line => {
        const lineElement = document.createElement('div');
        lineElement.textContent = line; // Экранирует HTML
        previewArea.appendChild(lineElement);
    });
});
