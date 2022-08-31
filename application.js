const Grafo = require("./grafo");

const grafo = new Grafo('Teste');

grafo.addNode('A')
grafo.addNode('B')
grafo.addNode('C')
grafo.addNode('D')
grafo.addNode('E')

grafo.addEdge(1, 'A', 'E');
grafo.addEdge(1, 'A', 'D');
grafo.addEdge(1, 'A', 'C');
grafo.addEdge(1, 'B', 'C');
grafo.addEdge(1, 'B', 'D');
grafo.addEdge(1, 'E', 'A');
grafo.addEdge(1, 'C', 'D');
grafo.addEdge(1, 'C', 'A');
grafo.addEdge(1, 'C', 'B');
grafo.addEdge(1, 'D', 'A');
grafo.addEdge(1, 'D', 'B');
grafo.addEdge(1, 'D', 'C');

/*
        A---E
       / \ /
      C---D
       \     
        E
*/

console.log(grafo.getIncidences('G'));

