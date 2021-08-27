const audio = document.getElementById('audio');
const fileInput = document.getElementById('file-input');

const audioContext = new AudioContext();
const audioSource = audioContext.createMediaElementSource(audio);
let analyzer = audioContext.createAnalyser();
audioSource.connect(analyzer);
analyzer.connect(audioContext.destination);
let bufferLength;
let dataArray;

fileInput.addEventListener('change', function () {
    const file = this.files[0];

    if (!file) return;
    audio.src = URL.createObjectURL(file);
    audio.play();
    analyzer.fftSize = Math.pow(2, fftSizeMultiplier);

    bufferLength = analyzer.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
});

function animate() {
    if (dataArray && dataArray.length) {
        analyzer.getByteFrequencyData(dataArray);

        const barWidth = (canvas.width / bufferLength) + 1;
        let barHeight;
        let x = 0;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < bufferLength; i++) {
            const maxSize = canvas.height / 2; // max height line will be half of screen
            barHeight = dataArray[i] * maxSize / 255;
            const radius = barWidth / 2;

            // line
            ctx.fillStyle = wavesColor;
            ctx.fillRect(x, canvas.height - barHeight + radius, barWidth, barHeight);

            // circle in the end of the line

            const circlePosX = x + radius;
            const circlePosY = canvas.height - barHeight + radius;

            ctx.beginPath();
            ctx.arc(circlePosX, circlePosY, radius, 0, 2 * Math.PI, false);
            ctx.fill();

            x += barWidth + 1;
        }
    }

    stats.update();
    requestAnimationFrame(animate);
}
animate();
