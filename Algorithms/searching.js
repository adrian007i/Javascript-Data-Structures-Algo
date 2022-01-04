// BREADTH FIRST SEARCH/TRAVERSAL
// FIRST TO LAST LEVEL
// left to right
// pros: good for finding shortest path between closer nodes
// cons: uses additional memory
// same time complexity

// DEPTH FIRST SEARCH/TRAVERSAL
// explore all children of parent before moving on to the next child
// lower memory usage
// up to down
// pros: if node is the lower level of the tree, DFS is better. less memory, finding if path exist
// cons: slow if graph is really deep
// same time complexity


//If you know a solution is not far from the root of the tree:
// BFS

//If the tree is very deep and solutions are rare: 
// BFS

//If the tree is very wide:
// DFS

//If solutions are frequent but located deep in the tree:
// BFS

//Determining whether a path exists between two nodes:
// DFS

//Finding the shortest path:
// BFS