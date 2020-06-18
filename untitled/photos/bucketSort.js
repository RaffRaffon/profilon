const arr=[22, 23,12,8,10,6,72,33,18,50,14]

const bucket= {}

let result = [];

function bucketize() {
    for (var i=0;i<arr.length;i++){
        let inspector=parseInt(arr[i]/10)
        if (bucket[inspector]==null){
            bucket[inspector]=[]
        }
        bucket[inspector].push(arr[i]) ;

    }

    console.log(bucket)

    for (var d in bucket){
        Array.prototype.push.apply(result, sort(bucket[d]))
    }

    console.log(bucket)



    console.log(result)


}

function sort(arr){
    for(var i=0;i<arr.length;i++){
        for (let j=i;j>-1;j--){
            if (arr[j+1]<arr[j]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }
    return arr
}

bucketize();