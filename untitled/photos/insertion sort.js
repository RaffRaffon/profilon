arr=[1,7,5,8,5,2,4,6,3,111,222,7770]

for(var i=0;i<arr.length;i++){
    for (let j=i;j>-1;j--){
        if (arr[j+1]<arr[j]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }

        console.log(arr)
    }
}