class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // create the node
    let newNode = new Node(val);
    // check if tree does not have root value already, then set new node to be the root of the tree
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    // if the code gets here, it means the tree already has a root, so need to check where the new node falls in relation to the existing nodes
    let current = this.root
    while (current) {
      // cannot have duplicate values in a binary search tree
      if (val === current.val) return this;
      if (val > current.val) {
        // check if current has a child node at that position already
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
    

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // create the node
    let newNode = new Node(val);
    // check if tree does not have root value already, then set new node to be the root of the tree
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root
    // I don't know why 'this' became undefined inside the addNode function
    let tree = this

    function addNode() {
      if (val === current.val) return tree;

      if (val > current.val) {
        // check if current has a child node at that position already
        if (!current.right) {
          current.right = newNode;
          return tree;
        }
        current = current.right;
        addNode();
      } else if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return tree;
        }
        current = current.left;
        addNode();
      }
    }
    
    addNode();
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    
    while (current) {
      // base case
      if (current.val === val) return current;

      // iterate to check each node for value
      if (current.val < val) {
        current = current.right
      } else {
        current = current.left
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
    if (node.val === val) {
        return node;
    } else if (node.val < val) {
        if (node.right) return this.findRecursively(val, node.right);
    } else {
        if (node.left) return this.findRecursively(val, node.left);
    }
      return undefined;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedArray = []
    
    function traverse(node) {
      visitedArray.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return visitedArray;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedArray = []
    
    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedArray.push(node.val);
      if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return visitedArray;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedArray = []
    
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedArray.push(node.val);
    }
    traverse(this.root)
    return visitedArray;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

    // Breadth First Search for reference
  // findBFS(val) {
  //   let toVisitQueue = [this];

  //   while (toVisitQueue.length) {
  //     let current = toVisitQueue.shift();

  //     if (current.val === val) 
  //       return current;

  //     for (let child of current.children) 
  //       toVisitQueue.push(child)
  //   }
  // }


  bfs() {
    let visitedArray = []
    let toVisitQueue = [this.root]
    
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift()
      visitedArray.push(current.val)
      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }
    
    return visitedArray;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
