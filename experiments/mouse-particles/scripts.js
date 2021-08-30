let particles = [];
let hue = 0;

function animation() {
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < newParticlesPerFrame; i++) {
        particles.push(new Particle(mouse, `hsl(${hue}, 100%, 50%)`));
    }

    for (let i = 0; i < particles.length; i++) {
        particles[i].move();
        particles[i].draw();
    }

    particles = particles.filter(particle => particle.size);

    hue++;
    stats.update();
    requestAnimationFrame(animation);
}

animation();
