const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    fin: 1,
  },
  b: {
    a: 3,
    fin: 5,
  },
  fin: {},
};

const costs = {
  a: 6,
  b: 2,
  fin: Infinity,
};

const parents = {
  a: "start",
  b: "start",
  fin: null,
};

const processedNodes = [];

function dijkstra(graph, costs, parents) {
  let node = findLowestCostNode(costs);
  while (node !== null) {
    let cost = costs[node];
    let neighbours = graph[node];
    Object.entries(neighbours).forEach(([key, value]) => {
      let newCost = cost + neighbours[key];
      if (costs[key] > newCost) {
        costs[key] = newCost;
        parents[key] = node;
      }
    });
    processedNodes.push(node);
    node = findLowestCostNode(costs);
  }
  console.log("Final costs are", costs);
  console.log("Final parents are", parents);
}

function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode = null;
  Object.entries(costs).forEach(([key, value]) => {
    let cost = costs[key];
    if (cost < lowestCost && processedNodes.includes(key) !== true) {
      lowestCost = cost;
      lowestCostNode = key;
    }
  });

  return lowestCostNode;
}

dijkstra(graph, costs, parents);
