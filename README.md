<h1>🌲 Binary Search Tree</h1>

For this project i've decided to dive into the world of data structures and learn how to build a binary search tree. This program has been designed to operate through a command-line interface, and it contains the following 11 methods:

  - Insert
  - Delete
  - Find
  - Level Order
  - Preorder
  - Inorder
  - Postorder
  - Height
  - Depth
  - isBalanced
  - Rebalance
  
 <hr>

<h2>Reference & Usage Guide</h2>

<em>To recursively construct a binary search tree (BST), instantiate a Tree object and pass it in an array of numbers. The array will be sorted and duplicates will be removed before it is processed. The root node of the tree will be returned.</em>

<strong>insert:</strong> This method inserts a new value into the binary search tree. It takes the value to be inserted and an optional parameter root indicating the current root of the tree. It returns the modified root of the tree after insertion.

<strong>delete:</strong> This method deletes a node with the specified value from the binary search tree. It takes the value to be deleted and updates the root of the tree.

<strong>find:</strong> This method searches for a node with the specified value in the binary search tree. It takes the value to be found and an optional parameter root indicating the current root of the tree. It returns the found node or null if the node is not found.

<strong>levelOrder:</strong> This method performs a level-order traversal of the binary search tree and returns an array of node values in level-order. It takes an optional callback function that can be used to perform additional operations on each visited node.

<strong>preorder:</strong> This method performs a pre-order traversal of the binary search tree and returns an array of node values in pre-order. It takes an optional callback function and additional parameters for recursive traversal.

<strong>inorder:</strong> This method performs an in-order traversal of the binary search tree and returns an array of node values in in-order. It takes an optional callback function and additional parameters for recursive traversal.

<strong>postorder:</strong> This method performs a post-order traversal of the binary search tree and returns an array of node values in post-order. It takes an optional callback function and additional parameters for recursive traversal.

<strong>height:</strong> This method calculates and returns the height of a given node in the binary search tree. It takes the node as input and recursively computes the height.

<strong>depth:</strong> This method calculates and returns the depth of a given node in the binary search tree. It takes the node and an optional parameter root indicating the current root of the tree. It returns the depth of the node.

<strong>isBalanced:</strong> This method checks whether the binary search tree is balanced or not. It takes an optional parameter root indicating the current root of the tree. It returns true if the tree is balanced (the absolute difference between the heights of the left and right subtrees is less than 2) and false otherwise.

<strong>rebalance:</strong> This method rebuilds the binary search tree to make it balanced. It performs an in-order traversal to obtain the node values, constructs a new balanced tree using the buildTree method, and updates the root of the tree.

<strong>prettyPrint:</strong> This method prints the binary search tree in a visually appealing format. It takes an optional parameter node indicating the current node to start printing from, prefix for indentation, and a boolean flag isLeft indicating whether the node is a left child.

<hr>

<em>A driver script has been included for demonstration purposes</em>
