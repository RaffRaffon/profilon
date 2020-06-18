const arr = [29, 2, 60, 13, 54, 72, 33]

const tree = {}
const treeR = {}
for (const number of arr) {
    // addNumberToTree(tree, number)
    addNumberToNode(treeR, number)
}


function addNumberToNode(node, number) {
    if (!node.value) {
        return node.value = number
    }
    if (number > node.value) {
        if (!node.right) {
            node.right = {}
        }
        addNumberToNode(node.right, number)
    } else {
        if (!node.left) {
            node.left = {}
        }
        addNumberToNode(node.left, number)
    }
    console.log(node)
}

function addNumberToTree(node, number) {
    while (node.value) {
        if (number > node.value) {
            if (!node.right) {
                node.right = {}
            }
            node = node.right
        } else {
            if (!node.left) {
                node.left = {}
            }
            node = node.left
        }
    }
    node.value = number
}

//console.log(treeR)


let newArr = []
newArr = sortIt2(treeR, newArr);
console.log(newArr)
///newArr=sortIt(treeR,newArr)
//console.log(newArr)
// function sortIt(node,arr){
//     arr=[]
//     if (node.value){
//         arr.push(node.value)
//     }
//     if (node.left){
//         node=node.left
//         arr.push(node.value)
//     } else {
//         return arr
//     }
//     sortIt(node,arr)
//
// }

function sortIt2(node, newArr = []) {
    if (!node.value) return
    if (node.left) {
        sortIt2(node.left, newArr);
    }
    console.log(node.value);
    newArr.push(node.value)
    if (node.right) {
        sortIt2(node.right, newArr);
    }
return newArr

}


