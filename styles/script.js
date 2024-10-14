// Get the text input element where users will enter the text to convert
const text = document.getElementById("textToConvert");

// Get the button element that will trigger the text-to-speech conversion
const convertBtn = document.getElementById("convertBtn");

// Add an event listener for the 'click' event on the button
convertBtn.addEventListener('click', function () {
    // Create a reference to the Web Speech API's speech synthesis object
    const speechSynth = window.speechSynthesis;
    
    // Get the value (text) entered by the user in the text area
    const enteredText = text.value;
    
    // Get the element where error messages will be displayed
    const error = document.querySelector('.error-para');

    // Check if the speech synthesis is not currently speaking and no text is entered
    if (!speechSynth.speaking && !enteredText.trim().length) {
        // Show an error message if no text is available for conversion
        error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }
    
    // If speech synthesis is not speaking and text is entered
    if (!speechSynth.speaking && enteredText.trim().length) {
        // Clear any previous error messages
        error.textContent = "";
        
        // Create a new speech synthesis utterance object with the entered text
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        
        // Pass the utterance to the speech synthesis API to speak the text
        speechSynth.speak(newUtter);
        
        // Change the button text to indicate that the sound is playing
        convertBtn.textContent = "Sound is Playing..."
    }
    
    // After 5 seconds (5000 milliseconds), reset the button text
    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound"
    }, 5000);
});
