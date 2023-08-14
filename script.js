function add(...array) {
    return array.reduce((sum, item) => sum + item, 0);
}

function subtract(...array) {
    return array.reduce((diff, item) => {
        diff - item
    }, array[0]*2);
}

function multiply(...array) {
    return array.reduce((prod, item) => prod * item, 1);
}

function divide(...array) {
    return array.reduce((total, item) => {
        total / item
    }, array[0]**2);
}