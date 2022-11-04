function soma(x, y, z){
        somaa = (x + y) * z
       console.log(somaa);
    
}

//let somatoria = soma(3, 3)(2)
console.log(soma(3, 3, 2));
console.error(soma(3, 3, 2))

function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1());
