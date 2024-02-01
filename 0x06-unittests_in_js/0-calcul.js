function calculateNumber(a, b) {
    const a_num = Math.round(a);
    const b_num = Math.round(b);
    const c = a_num + b_num;
    return c;
}

module.exports = calculateNumber;
