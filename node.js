const Edge = require('./edge')

class Node{
    constructor(label){
        this.incidences = new Array();
        this.label = label;
        this.visitado = false;
    }

    addIncidences(edge){
        if(!edge instanceof Edge)
            throw new Error('Edge not valid');

        this.incidences.push(edge);
    }

    setVisitado(visitado){
        this.visitado = visitado;
    }

    isVisitado(){
        return this.visitado;
    }

    get getIncidentes(){
        return this.incidences
    }
}

module.exports = Node;