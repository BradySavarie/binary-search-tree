class Tree {
    constructor(data) {
        this.root = data;
    }

    insert(value, root = this.root) {
        // check for duplicate value. Return error if true
        if (value === root.data) {
            return root;
        }

        // Compare value to root node

        if (value < root.data) {
            if (!root.left) {
                let node = new Node(value);
                root.left = node;
                return node;
            } else {
                return this.insert(value, root.left);
            }
        } else if (value > root.data) {
            if (!root.right) {
                let node = new Node(value);
                root.right = node;
                return node;
            } else {
                return this.insert(value, root.right);
            }
        }
    }

    delete(value) {
        this.root = this._deleteNode(value, this.root);
    }

    find(value, root = this.root) {
        if (root === null) {
            return root;
        }

        if (value < root.data) {
            root = this.find(value, root.left);
        } else if (value > root.data) {
            root = this.find(value, root.right);
        }
        return root;
    }

    levelOrder(callback = null) {
        let queue = [this.root];
        let result = [];

        while (queue.length > 0) {
            let node = queue.shift();
            result.push(node.data);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            if (callback !== null) {
                callback(node);
            }
        }

        return result;
    }

    preorder(callback = null, arr = [], root = this.root) {
        if (!root) return;

        // Invoke callback
        if (callback) {
            callback(root);
        }

        // Visit root
        arr.push(root.data);

        // Visit reft Subtree
        if (root.left) this.preorder(callback, arr, root.left);

        // Visit right subtree
        if (root.right) this.preorder(callback, arr, root.right);

        return arr;
    }

    inorder(callback = null, arr = [], root = this.root) {
        if (!root) return;

        // Invoke callback
        if (callback) {
            callback(root);
        }

        // Traverse reft Subtree
        if (root.left) this.inorder(callback, arr, root.left);

        // Visit root
        arr.push(root.data);

        // Traverse right subtree
        if (root.right) this.inorder(callback, arr, root.right);

        return arr;
    }

    postorder(callback = null, arr = [], root = this.root) {
        if (!root) return;

        // Invoke callback
        if (callback) {
            callback(root);
        }

        // Traverse reft Subtree
        if (root.left) this.postorder(callback, arr, root.left);

        // Traverse right subtree
        if (root.right) this.postorder(callback, arr, root.right);

        // Visit root
        arr.push(root.data);

        return arr;
    }

    height(node) {
        if (!node) {
            return -1;
        }

        const leftHeight = this.height(node.left);
        const rightHeight = this.height(node.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    depth(node, root = this.root, depth = 0) {
        if (root === null || node === null) return;
        if (node === root) return depth;
        if (node.data < root.data) {
            return this.depth(node, root.left, (depth += 1));
        } else if (node.data > root.data) {
            return this.depth(node, root.right, (depth += 1));
        }
    }

    isBalanced(root = this.root) {
        const lHeight = this.height(root.left);
        const rHeight = this.height(root.right);
        const diff = Math.abs(lHeight - rHeight);
        return diff < 2 ? 'true' : 'false';
    }

    rebalance(root = this.root) {
        let arr = this.inorder((callback = null), root);
        return (this.root = buildTree(arr));
    }

    _deleteNode(value, root) {
        // base case
        if (root === null) {
            return root;
        }

        // recurse down tree
        if (value < root.data) {
            root.left = this._deleteNode(value, root.left);
        } else if (value > root.data) {
            root.right = this._deleteNode(value, root.right);
        } else {
            // Value found -> option 1: leaf node
            if (!root.left && !root.right) {
                return null;
            }
            // option 2: node has 1 child
            if (!root.left) {
                return root.right;
            } else if (!root.right) {
                return root.left;
            }
            // option 3: node has two children
            let min = this._findMinNode(root.right);
            root.data = min.data;
            root.right = this._deleteNode(min.data, root.right);
        }
        return root;
    }

    _findMinNode(root) {
        while (root.left != null) {
            root = root.left;
        }
        return root;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildTree(arr, start = 0, end = arr.length - 1) {
    // Must pass in sorted array without duplicate values

    if (start > end) {
        return null;
    }

    const mid = parseInt((start + end) / 2);
    const node = new Node(arr[mid]);

    node.left = buildTree(arr, start, mid - 1);
    node.right = buildTree(arr, mid + 1, end);
    return node;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};

// Driver Scripts

const arr = [1, 2, 3, 4, 5, 6, 7];
let rootNode = buildTree(arr);
let tree = new Tree(rootNode);
prettyPrint(rootNode);
console.log(tree.preorder());
