const nombre = (posicion) =>{
    let vec = ['MARIA', 'JUAN', 'CARLOS', 'EMPERATRIZ']
    if(posicion>=vec.length || posicion<0)return "El valor es invalido";
    return vec[posicion];
}

module.exports = { nombre };