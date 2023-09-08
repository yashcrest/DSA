let nums = [2,2,2,2,2,3,1,1,1,1,4,4,4,4,4,4]
var topKFrequent = function (nums,k){
    let map = new Map()
    let result = []
    nums.forEach(num => map.set(num, map.get(num) + 1 || 1))

    //creating array with maps key/value
    for (let [key,value] of map){
        result.push([key,value])
    }

    //sorting the array
    let sorted = result.sort((a,b) => b[1] - a[1]); //sorting the result array with highest frequest item
    return sorted.slice(0,k).map(item => item[0]) // slicing the arrays with the given value of 'k' and using map function to get only the first element of the inside array.
}
console.log(topKFrequent(nums, 1))