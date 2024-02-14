Here is a TypeScript solution for the problem:

```typescript
class Node {
    data: number;
    left: Node | null;
    right: Node | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function areIdentical(root1: Node | null, root2: Node | null): boolean {
    if (root1 === null && root2 === null) {
        return true;
    }

    if (root1 === null || root2 === null) {
        return false;
    }

    return (root1.data === root2.data &&
        areIdentical(root1.left, root2.left) &&
        areIdentical(root1.right, root2.right));
}

function isSubtree(T: Node, S: Node): boolean {
    if (S === null) {
        return true;
    }

    if (T === null) {
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

This TypeScript solution defines a binary tree using a Node class. It then uses two helper functions, `areIdentical` and `isSubtree`, to determine if one binary tree is a subtree of another. The `areIdentical` function checks if two trees are identical, while the `isSubtree` function checks if one tree is a subtree of another by recursively checking each node of the main tree against the root of the potential subtree. If a match is found, it then checks if the entire subtree is identical to the main tree starting from that node.