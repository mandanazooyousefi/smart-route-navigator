function dijkstra(graph, startNode, endNode) {
    let distances = {};
    let prev = {};
    let unvisited = new Set(graph.nodes);
  
    // Başlangıçta tüm düğümler sonsuz uzaklıkta, sadece başlangıç noktası 0
    for (let node of graph.nodes) {
      distances[node] = Infinity;
      prev[node] = null;
    }
    distances[startNode] = 0;
  
    while (unvisited.size > 0) {
      // En küçük mesafeye sahip düğümü bul
      let currentNode = null;
      for (let node of unvisited) {
        if (currentNode === null || distances[node] < distances[currentNode]) {
          currentNode = node;
        }
      }
  
      if (distances[currentNode] === Infinity) {
        break; // Ulaşılamayan bir düğüm varsa çık
      }
  
      // Komşuları güncelle
      for (let neighbor of graph.edges[currentNode]) {
        let alt = distances[currentNode] + neighbor.weight;
        if (alt < distances[neighbor.node]) {
          distances[neighbor.node] = alt;
          prev[neighbor.node] = currentNode;
        }
      }
  
      unvisited.delete(currentNode);
  
      if (currentNode === endNode) {
        break; // Hedefe ulaştıysak dur
      }
    }
  
    // Yolu oluştur
    let path = [];
    let current = endNode;
    while (current !== null) {
      path.unshift(current);
      current = prev[current];
    }
  
    return {
      path: path,
      distance: distances[endNode]
    };
  }
  