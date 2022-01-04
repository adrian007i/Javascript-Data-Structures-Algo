var isValidBST = function (root, min= -Infinity , max = Infinity ) {

    if(!root)
        return true;

    if(root.val <= min || root.val >= max)
        return false;
    
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val , max)
};

const tree2 = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 6,
        // left: null,
        // right: null
        left: { val: 3, left: null, right: null },
        right: { val: 10, left: null, right: null },
    }
} 

const tree = {
    val: 5,
    left: {
        val: 1,
        left: null,
        right: null
    },
    right: {
        val: 6,
        left: null,
        right: null 
    }
}
 
console.log(isValidBST(tree2)) 
 