class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.count = 1;

    }
}


class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;

        } else {
            let parent = this.root;

            while (parent != null) {

                // checking left node
                if (value < parent.value) {
                    if (parent.left == null) {
                        parent.left = newNode;
                        return;
                    }
                    else
                        parent = parent.left;
                }

                // checking right node
                else if (value > parent.value) {
                    if (parent.right == null) {
                        parent.right = newNode;
                        return;
                    }
                    else
                        parent = parent.right;
                }

                // if value already exist
                else {
                    parent.count++;
                    return;
                }

            }
        }

    }
    lookup(value) {

        let parent = this.root;

        while (parent != null) {

            if (value < parent.value)
                parent = parent.left;
            else if (value > parent.value)
                parent = parent.right;
            else
                return true;;
        }
        return false

    }

    incorect_delete(value) {

        if (!this.root)
            return;


        let current = this.root;
        let previous = null;

        while (true) {

            // node is to the left of the tree/sub tree
            if (current && value < current.value) {
                previous = current;
                current = current.left;

            }

            // node is to the right of the tree/sub tree
            else if (current && value > current.value) {
                previous = current;
                current = current.right

            }

            else {

                // checks if right node exist
                if (current.right != null) {
                    let successor = current.right
                    let parent_successor = null;
                    let successor_side = "";

                    // find the last node in right of tree, if it exists
                    while (true) {


                        if (successor.left != null) {
                            parent_successor = successor;
                            successor_side = "left"
                            successor = successor.left;

                        } else {
                            if (successor.right != null) {
                                parent_successor = successor;
                                successor_side = "right";
                                successor = successor.right;
                            }

                            else {

                                if (successor_side == "left") {
                                    parent_successor.left = null;

                                } else if (successor_side == "right") {
                                    parent_successor.right = null;

                                }
                                // successor has no children
                                else {
                                    current.right = null;
                                    if (previous) {
                                        previous.right = successor;
                                        previous.left = current.left;
                                        return;
                                    }
                                }

                                if (previous !== null) {
                                    previous.right = successor;
                                } else {
                                    this.root = successor;
                                }


                                successor.right = current.right;
                                successor.left = current.left;
                                return
                            }

                        }

                    }

                    // if no right node, replacement node will be the left node or null
                } else {
                    if (previous != null)
                        previous.right = current.left;

                    else {
                        this.root = current.left
                    }
                    return;
                }
            }

        }

    } 


}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(20)
tree.insert(6)
tree.insert(15)
tree.insert(120)
tree.insert(19)
tree.insert(14)
tree.insert(100)
// tree.insert(100)
console.log(tree.root);
// console.log('after--------------------------------------------------------------');
// tree._minNode_and_delete(tree.root.right)
// // console.log(tree._minNode_and_delete(tree.root.right));
tree.delete(4)
console.log(tree.root)

