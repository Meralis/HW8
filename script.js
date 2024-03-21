function getPow(num, degree) {
    if (degree === 0) {
        return 1;
    }
    if (degree < 0) {
        return 1 / getPow(num, -degree);
    }
    return num * getPow(num, degree - 1);
}
console.log(getPow(2, 3));