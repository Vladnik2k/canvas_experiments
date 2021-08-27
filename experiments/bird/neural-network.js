class NeuralNetwork {
    inputsNodes;
    hiddenNodes;
    outputsNodes;
    model;

    constructor(inputsNodes, hiddenNodes, outputsNodes, model = null) {
        this.inputsNodes = inputsNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputsNodes = outputsNodes;
        this.model = model ? model : this.createModel();
    }

    createModel() {
        const model = tf.sequential();

        const hidden = tf.layers.dense({
            units: this.hiddenNodes,
            inputShape: this.inputsNodes,
            activation: 'sigmoid'
        });
        model.add(hidden);

        const output = tf.layers.dense({
            units: this.outputsNodes,
            activation: 'softmax'
        });
        model.add(output);

        return model;
    }

    copy() {
        const modelCopy = this.createModel();
        const weights = this.model.getWeights();
        const weightCopies = [];
        for (let i = 0; i < weights.length; i++) {
            weightCopies[i] = weights[i].clone();
        }
        modelCopy.setWeights(weightCopies);

        return new NeuralNetwork(this.inputsNodes, this.hiddenNodes, this.outputsNodes, modelCopy);
    }

    mutate(chance) {
        const weights = this.model.getWeights();
        const mutatedWeights = [];

        for (let i = 0; i < weights.length; i++) {
            const tensor = weights[i];
            const shape = weights[i].shape;
            const values = tensor.dataSync().slice();

            for (let j = 0; j < values.length; j++) {
                if (random(1) < chance) {
                    values[i] = values[i] + randomGaussian();
                }
            }
            mutatedWeights[i] = tf.tensor(values, shape);
        }
        this.model.setWeights(mutatedWeights);
    }

    predict(inputs) {
        const normalInputs = tf.tensor2d([inputs]);
        const result = this.model.predict(normalInputs);
        return result.dataSync();
    }

}
