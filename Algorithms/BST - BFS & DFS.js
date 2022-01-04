const { listen } = require("express/lib/application");

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

    breadthFirstSearch(){

        if(!this.root)
            return;
        
        let current = this.root;
        let queue = [];
        let result = [];
        queue.push(current);

        while(queue.length > 0){

            current = queue.shift();
            result.push(current.value)
            
            if(current.left){
                queue.push(current.left)
            }
            if(current.right){
                queue.push(current.right)
            }
        }
        return result;
    }

    breadthFirstSearchRecursive(queue, list ){

        if(queue.length === 0)
            return list;   

        let current = queue.shift(); 

        if(current.left)
            queue.push(current.left)
        
        if(current.right)
            queue.push(current.right)

        list.push(current.value)
        return this.breadthFirstSearchRecursive(queue, list);
    }

    DFS_INORDER(current, list){
        // console.log(current.value)

        if(current.left){
            this.DFS_INORDER(current.left , list);
        }

        list.push(current.value);

        if(current.right){
            this.DFS_INORDER(current.right , list);
        } 
        return list
    }

    DFS_PREORDER(current, list){ 
        
        list.push(current.value);

        if(current.left){
            this.DFS_PREORDER(current.left , list);
        } 

        if(current.right){
            this.DFS_PREORDER(current.right , list);
        } 
        return list
    }

    DFS_POSTORDER(current, list){  
        if(current.left){
            this.DFS_POSTORDER(current.left , list);
        } 

        if(current.right){
            this.DFS_POSTORDER(current.right , list);
        } 
        list.push(current.value);
        return list
    }


}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(20)
tree.insert(6)
tree.insert(15)
tree.insert(170)
tree.insert(1) 
// console.log(tree.breadthFirstSearchRecursive([tree.root] , []))
// console.log(tree.DFS_INORDER(tree.root, []))
console.log(tree.DFS_POSTORDER(tree.root, []))
