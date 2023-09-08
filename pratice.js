var productExceptSelf = function(nums) {
    let map = new Map()
    for(let i=0; i< nums.length; i++){
        let newArr = [...nums]

        newArr.splice(i,1)
        map.set(nums[i] , newArr)
    }
    return map
};

console.log(productExceptSelf([2,4,1,3,8]))