const Node = require('./node');

class Tree {
    constructor(data) {
        let sortedData = [...new Set(data)].sort((a, b) => a - b);
        this.root = this.buildTree(sortedData);
    }

    buildTree(arr, start = 0, end = arr.length - 1) {
        if (start > end) {
            return null;
        }

        const mid = parseInt((start + end) / 2);
        const node = new Node(arr[mid]);

        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);
        return node;
    }

    insert(value, root = this.root) {
        if (root === null) {
            root = new Node(value);
            return root;
        }

        if (value < root.data) {
            root.left = this.insert(value, root.left);
        } else if (value > root.data) {
            root.right = this.insert(value, root.right);
        }

        return root;
    }

    delete(value) {
        this.root = this.#deleteNode(value, this.root);
    }

    find(value, root = this.root) {
        // Return root if found or non-existent
        if (root === null || root.data === value) {
            return root;
        }

        // Traverse left and right subtrees
        if (value < root.data) {
            root = this.find(value, root.left);
        } else if (value > root.data) {
            root = this.find(value, root.right);
        }
    }

    levelOrder(callback = null) {
        let queue = [this.root];
        let result = [];

        while (queue.length) {
            // Remove first node in queue, insert it's value in result array
            let node = queue.shift();
            result.push(node.data);

            // Invoke callback
            if (callback) {
                callback(node);
            }
            // Queue up left child
            if (node.left) {
                queue.push(node.left);
            }
            // Queue up right child
            if (node.right) {
                queue.push(node.right);
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

    rebalance() {
        let arr = this.inorder();
        return (this.root = this.buildTree(arr));
    }

    prettyPrint(node = this.root, prefix = '', isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(
                node.right,
                `${prefix}${isLeft ? '│   ' : '    '}`,
                false
            );
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(
                node.left,
                `${prefix}${isLeft ? '    ' : '│   '}`,
                true
            );
        }
    }

    #deleteNode(value, root) {
        // base case
        if (root === null) {
            return root;
        }

        // recurse down tree
        if (value < root.data) {
            root.left = this.#deleteNode(value, root.left);
        } else if (value > root.data) {
            root.right = this.#deleteNode(value, root.right);
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
            let min = this.#findMinNode(root.right);
            root.data = min.data;
            root.right = this.#deleteNode(min.data, root.right);
        }
        return root;
    }

    #findMinNode(root) {
        while (root.left != null) {
            root = root.left;
        }
        return root;
    }
}

module.exports = Tree;
