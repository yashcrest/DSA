let array = [1,2,3,4,5,6]

function twoSum(arr, target) {
    let map = new Map()
    let result = []
    arr.forEach((item,index) => {
        if(map.has(target - item)){
            result = [map.get(target - item ), index]
        } else {
            map.set(item , index)
        }
    })

    return result.length ? result : [];
}

console.log(twoSum(array, 5))