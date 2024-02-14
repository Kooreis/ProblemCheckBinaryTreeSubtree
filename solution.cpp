```cpp
#include <iostream>
#include <string>

using namespace std;

struct Node {
    char data;
    Node* left;
    Node* right;
};

string inorder(Node* node) {
    if (node == NULL) {
        return "";
    }
    return inorder(node->left) + node->data + inorder(node->right);
}

string preorder(Node* node) {
    if (node == NULL) {
        return "";
    }
    return node->data + preorder(node->left) + preorder(node->right);
}

bool isSubtree(Node* T, Node* S) {
    if (S == NULL) {
        return true;
    }
    if (T == NULL) {
        return false;
    }

    string inT = inorder(T);
    string inS = inorder(S);
    if (inT.find(inS) == string::npos) {
        return false;
    }

    string preT = preorder(T);
    string preS = preorder(S);
    if (preT.find(preS) == string::npos) {
        return false;
    }

    return true;
}

Node* newNode(char data) {
    Node* node = new Node;
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    return node;
}

int main() {
    Node* T = newNode('a');
    T->left = newNode('b');
    T->right = newNode('d');
    T->left->left = newNode('c');
    T->right->right = newNode('e');

    Node* S = newNode('a');
    S->left = newNode('b');
    S->left->left = newNode('c');
    S->right = newNode('d');

    if (isSubtree(T, S)) {
        cout << "Yes: S is a subtree of T";
    }
    else {
        cout << "No: S is NOT a subtree of T";
    }

    return 0;
}
```