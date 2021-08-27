function calculateFitness(birds) {
    let sum = 0;
    for (let bird of birds) {
        sum += bird.distance;
    }
    for (let bird of birds) {
        bird.fitness = bird.distance / sum;
    }
}

function pickOne(birds) {
    let index = 0;
    let r = random(1);
    while (r > 0) {
        r = r - birds[index].fitness;
        index++;
    }
    index--;
    let bird = birds[index];
    let child = new Bird(bird.brain);
    child.brain.mutate(mutation);

    return child;
}
