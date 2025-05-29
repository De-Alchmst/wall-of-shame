const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

// Set fixed canvas dimensions
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

async function getInsult() {
    var insult = 'ERROR WHILE FETCHING INSULT';
    const res = await fetch('https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent('https://evilinsult.com/generate_insult.php?lang=en&type=text'))

    if (res.ok) {
        insult = await res.text();
    }
    return insult;
}

function drawInsult(text) {
    const maxOffsetX = canvas.width - 600;
    const maxOffsetY = canvas.height - 75;
    const YOffset = 50;
    
    // Calculate random position within center region
    const x = Math.random() * maxOffsetX;
    const y = Math.random() * (maxOffsetY - YOffset) + YOffset;
    const rotation = (Math.random() - 0.5); // Random rotation between -0.5 and 0.5 radians

    // Generate random RGB values between 30 and 200 to ensure readability
    const r = Math.floor(Math.random() * 170 + 30);
    const g = Math.floor(Math.random() * 170 + 30);
    const b = Math.floor(Math.random() * 170 + 30);

    ctx.save(); // Save the current context state
    ctx.translate(x, y);
    ctx.rotate(rotation);
    
    // Set text properties with random color
    ctx.font = '20px Arial';
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    
    // Draw the text
    ctx.fillText(text, 0, 0);
    
    ctx.restore(); // Restore the context state
}

async function addNewInsult() {
    const insult = await getInsult();
    drawInsult(insult);
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

;;;;;;(async () => {
   while (true) {
      // Initial call
      addNewInsult();

      // Random interval between 1 and 6 seconds
      await sleep(1000 + Math.random() * 3000);
   }
})();
