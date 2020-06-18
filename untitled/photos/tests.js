var arr=[29,2,60,13,60,54,72,33]

let tree={value:arr[0]}


for (var i=1;i<arr.length;i++) {
    if (tree.value < arr[i]) {
        tree.left = {value: arr[i]}
    } else {
        tree.right={value:arr[i]}
    }

}
