function construirObjeto(x = 'joao', y = 600){
    return{
        x ,
        y ,
        desconto: 300
    }
}

console.log(construirObjeto());
console.log(construirObjeto('jeremias', 1300));