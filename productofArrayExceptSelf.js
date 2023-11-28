// You must write an algorithm that runs in O(n) time and without using the division operation.

// the best way to tackle this problem is to multiple the product of everything before the current item num[i] and store it in the result curr index res[i] and then do the same thing for numbers that comes after the current index and store that in the res[i].

function productofArrayExceptSelf (nums) {
    let res = new Array(nums.length).fill(1);

    prefix = 1;
    postfix = 1;
    for(let i=0; i < nums.length; i++ ){
        res[i] = prefix;
        prefix *= nums[i]
    }

    for(let i=nums.length -1 ; i >= 0; i--) {
        res[i] *= postfix;
        postfix *= nums[i];
    }
    return res;
}

let nums = [1,2,3,4];
console.log(productofArrayExceptSelf(nums));