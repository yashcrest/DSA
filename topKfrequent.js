let nums = [1,1,1,1,2,2,3]
var topKFrequent = function (nums,k){
    let map = new Map()
    nums.forEach(num => map.set(num, map.get(num) + 1 || 1))
    return map
}
console.log(topKFrequent(nums, 2))