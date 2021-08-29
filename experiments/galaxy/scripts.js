let showStars = [];
let allStars = [];

function generateStars() {
    for (let i = 0; i < maxNumberOfStars; i++) {
        allStars.push(new Star());
    }
    showStars = allStars.slice(0, numberOfStars);
}

function moveStars() {
    ctx.beginPath();
    ctx.strokeStyle = starColor;
    for (let i = 0; i < showStars.length; i++) {
        showStars[i].move();

        // draw
        ctx.moveTo(showStars[i].position.x, showStars[i].position.y);
        ctx.lineTo(showStars[i].prevPosition.x, showStars[i].prevPosition.y);
    }
    ctx.stroke();
}

function animate() {
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    moveStars();

    stats.update();
    requestAnimationFrame(animate);
}

generateStars();
animate();
