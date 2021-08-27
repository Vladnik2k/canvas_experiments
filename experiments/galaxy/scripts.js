let stars = [];

function generateStars() {
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(new Star());
    }
}

function animate() {
    ctx.fillStyle = spaceColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < stars.length; i++) {
        stars[i].move();
        stars[i].draw();
    }

    stats.update();
    requestAnimationFrame(animate);
}

generateStars();
animate();
