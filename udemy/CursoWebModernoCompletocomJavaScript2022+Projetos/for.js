
const pessoa = {
    nome: 'jeremias',
    sobrenome: 'rincaveski',
    idade: 21,
    peso: 80
}


for (const i in pessoa) {
    console.log(`${i} = ${pessoa[i]}`);
}