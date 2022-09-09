const nombre = (posicion) =>{
    let vec = ['MARIA', 'JUAN', 'CARLOS', 'EMPERATRIZ']
    if(posicion>=vec.length)return "El valor es invalido";
    return vec[posicion];
}

module.exports = { nombre };