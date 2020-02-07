
let lessons = loadLessons();
// Get the html elements
let clapSound = document.querySelector('#clap-sound');
let congratsSound = document.querySelector('#congrats-sound');
let originalTextElement = document.querySelector('#original-text');
let textAreaBox = document.querySelector('#text-area');
let minutesElement = document.querySelector('#minutes');
let secondsElement = document.querySelector('#seconds');
let milliSecondsElement = document.querySelector('#m-seconds');
let resetButton = document.querySelector('#reset');
let congratsSection = document.querySelector('.cong-section');

let timer = 0;
let minutes = 0;
let seconds = 0;
let milliSeconds = 0;
let timerRunning = false;
let interval = 0;

// keyup event for textarea
textAreaBox.addEventListener('keyup',function() {
    let textEnteredLength = textAreaBox.value.length;
    // for the first character
    if(textEnteredLength === 1 && !timerRunning){
        interval = setInterval(startTimer,10);
        timerRunning = true;
    }
    let originalText = originalTextElement.innerText.trim();
    let textEntered = textAreaBox.value;
    let partialText = originalText.substr(0,textEntered.length);
    evaluateText(originalText,textEntered,partialText);
});

// click on reset Button
resetButton.addEventListener('click',function() {
    clearInterval(interval); // stop the timer
    clearFields();
});

// evaluate Text
let evaluateText = function(originalText,textEntered,partialText){
    if(textEntered  === ''){
        applyColors('gray');
    }
    else{
        if(textEntered === originalText){
            applyColors('limegreen');
            clearInterval(interval); // stop the timer
            congratsSection.style.display = 'block'; // display congrats section
            congratsSound.play(); // play the audio file
        }
        else {
            if(textEntered === partialText){
                applyColors('blueviolet');
            }
            else{
                applyColors('orangered');
                clapSound.play(); // play the audio file
            }
        }
    }
};

// applyColors
let applyColors = function(color){
    textAreaBox.style.borderColor = color;
    textAreaBox.style.boxShadow = `0 0 10px ${color}`;
};

// start Timer
let startTimer = function() {
    timer++;

    minutes = Math.floor((timer/100)/60);
    seconds = Math.floor((timer/100) - (minutes * 60));
    milliSeconds = Math.floor(timer - (seconds * 100) - (minutes * 6000));

    minutesElement.innerText = leadingZero(minutes);
    secondsElement.innerText = leadingZero(seconds);
    milliSecondsElement.innerText = leadingZero(milliSeconds);
};

// leading Zero
let leadingZero = function(time) {
    if(time <= 9){
        return '0' + time;
    }
    else{
        return  time;
    }
};

// clearFields
let clearFields = function() {
    timer = 0;
    minutes = 0;
    seconds = 0;
    milliSeconds = 0;
    timerRunning = false;
    interval = 0;
    textAreaBox.value = '';
    applyColors('gray');
    minutesElement.innerText = '00';
    secondsElement.innerText = '00';
    milliSecondsElement.innerText = '00';
    congratsSection.style.display = 'none';
};

// change Text
let changeText = (index) => {
    let lesson = lessons[index];
    originalTextElement.innerText = lesson;
};
