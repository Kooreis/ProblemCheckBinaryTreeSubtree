Here is a JavaScript solution for the problem:

```javascript
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function areIdentical(root1, root2) {
    if (root1 == null && root2 == null) {
        return true;
    }
    if (root1 == null || root2 == null) {
        return false;
    }
    return (root1.data == root2.data &&
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right));
}

function isSubtree(T, S) {
    if (S == null) {
        return true;
    }
    if (T == null) {
        return false;
    }
    if (areIdentical(T, S)) {
        return true;
    }
    return isSubtree(T.left, S) || isSubtree(T.right, S);
}

let T = new Node(26);
T.right = new Node(3);
T.right.right = new Node(3);
T.left = new Node(10);
T.left.left = new Node(4);
T.left.left.right = new Node(30);
T.left.right = new Node(6);

let S = new Node(10);
S.right = new Node(6);
S.left = new Node(4);
S.left.right = new Node(30);

if (isSubtree(T, S)) {
    console.log("Tree 2 is subtree of Tree 1");
} else {
    console.log("Tree 2 is not a subtree of Tree 1");
}
```

This program creates two binary trees and checks if one is a subtree of the other. The `areIdentical` function checks if two trees are identical, and the `isSubtree` function checks if one tree is a subtree of another. The program then prints out whether or not one tree is a subtree of the other.