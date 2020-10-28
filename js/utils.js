const randomIntNumber = (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
};


function xor(a, b) {
    return (a && !b) || (!a && b)
};
