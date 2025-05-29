async function speak(text) {
    // Check if speech synthesis is available
    if (!('speechSynthesis' in window)) {
        console.error('Speech synthesis not supported');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9;  // Slightly slower than default
    utterance.pitch = 1;   // Normal pitch
    
    window.speechSynthesis.speak(utterance);
}
