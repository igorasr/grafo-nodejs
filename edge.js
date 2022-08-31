class Edge{
    constructor(peso, origem, destino){
        this.origem = origem;
        this.destino = destino;
        this.peso = peso;
    }

    get getOrigem(){
        return this.origem;
    }

    get getDestino(){
        return this.destino;
    }

    get getPeso(){
        return this.peso;
    }
}

module.exports = Edge;