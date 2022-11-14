function bhaskara(a, b, c) {
    let x = []
    let delta = (Math.pow(b, 2)) - (4 * a * c)
    if (delta > 0) {
        x[0] = (-b + Math.sqrt(delta)) / (2 * a)
        x[1] = (-b - Math.sqrt(delta)) / (2 * a)
        console.log(delta)
        console.log('R1 = ' + x[0].toFixed(1));
        console.log('R2 = ' + x[1].toFixed(1));
    } else {
        console.log("delta negativo");
    }
}

bhaskara(2,-5,-7)