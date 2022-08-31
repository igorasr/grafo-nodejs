const Edge = require("./edge");
const Node = require("./node");

class Grafo {
    constructor(name) {
        this.name = name;
        this.nodes = new Map();
        this.edges = new Array();
    }

    addNode(node) {
        if (!this.nodes.get(node)) {
            const newNode = new Node(node);
            this.nodes.set(newNode.label, newNode);
            return this.nodes.get(newNode.label);
        } else {
            return this.nodes.get(node);
        }
    }

    get getNodes() {
        return this.nodes;
    }

    getIncidences(node){
        return this.nodes.get(node)?.getIncidentes ?? 'node not found'
    }

    /*
    * Funcao responsavel por conectar os Vertices (nodos), define a direcao.
    * @params peso     => Peso da aresta
    *         origem   => Origem da aresta
    *         destino  => Incidencia da Aresta
    * @return void
    */
    addEdge(peso, origem, destino) {
        const i = this.addNode(origem); // Origem
        const j = this.addNode(destino); // Destino

        const edge = new Edge(peso, i, j);

        this.edges.push(edge);

        this.nodes.get(i.label).addIncidences(this.edges.at(-1));
    }

    display() {
        let r = '';

        this.nodes.forEach((nodo) => {
            r += `${nodo.label} -> `
            nodo.incidences.forEach((aresta) => {
                let v = aresta.getDestino;
                r += `${v.label}, `;
            })

            r += '\n'
        })

        return r;
    }
}


module.exports = Grafo;