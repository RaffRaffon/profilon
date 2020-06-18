const arr = [29, 2, 60, 13, 54, 72, 33]

var tree={value:arr[0]}

for (var i=1;i<arr.length;i++){
    if (arr[i]<tree.value){
        tree.left={value:arr[i]}
    } else {
        tree.right={value:arr[i]}
    }
    tree={value:arr[i]}
}



function f(arr) {
    const tree = {};
    for (const value of arr) {
        createTree(tree, value)
    }
    return tree
}

function createTree(node, value) {
    while (node.value) {
        if (value < node.value) {
            if (!node.left) {
                node.left = {}
            }
            console.log(node.left, 'node the sec')
            console.log(node, 'node')
            node = node.left

        } else {
            if (!node.right) {
                node.right = {}
            }
            console.log(node.right, 'node the sec')
            console.log(node, 'node')
            node = node.right

        }
    }
    node.value = value;
}


let a = f(arr)
console.log(a)


