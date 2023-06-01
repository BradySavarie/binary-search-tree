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

<h3>insert:</h3>
This method inserts a new value into the binary search tree. It takes the value to be inserted and an optional parameter root indicating the current root of the tree. It returns the modified root of the tree after insertion.

<h3>delete:</h3> This method deletes a node with the specified value from the binary search tree. It takes the value to be deleted and updates the root of the tree.

<h3>find:</h3> This method searches for a node with the specified value in the binary search tree. It takes the value to be found and an optional parameter root indicating the current root of the tree. It returns the found node or null if the node is not found.

<h3>levelOrder:</h3> This method performs a level-order traversal of the binary search tree and returns an array of node values in level-order. It takes an optional callback function that can be used to perform additional operations on each visited node.

<h3>preorder:</h3> This method performs a pre-order traversal of the binary search tree and returns an array of node values in pre-order. It takes an optional callback function and additional parameters for recursive traversal.

<h3>inorder:</h3> This method performs an in-order traversal of the binary search tree and returns an array of node values in in-order. It takes an optional callback function and additional parameters for recursive traversal.

<h3>postorder:</h3> This method performs a post-order traversal of the binary search tree and returns an array of node values in post-order. It takes an optional callback function and additional parameters for recursive traversal.

<h3>height:</h3> This method calculates and returns the height of a given node in the binary search tree. It takes the node as input and recursively computes the height.

<h3>depth:</h3> This method calculates and returns the depth of a given node in the binary search tree. It takes the node and an optional parameter root indicating the current root of the tree. It returns the depth of the node.

<h3>isBalanced:</h3> This method checks whether the binary search tree is balanced or not. It takes an optional parameter root indicating the current root of the tree. It returns true if the tree is balanced (the absolute difference between the heights of the left and right subtrees is less than 2) and false otherwise.

<h3>rebalance:</h3> This method rebuilds the binary search tree to make it balanced. It performs an in-order traversal to obtain the node values, constructs a new balanced tree using the buildTree method, and updates the root of the tree.

<hr>

<em>A driver script has been included for demonstration purposes</em>
