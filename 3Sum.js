var threeSum = function (nums) {
    // first we need to sort this array
    nums.sort((a,b) => a-b);
    let res = []

    for(let i=0; i< nums.length -2; i++ ) {
        if(i > 0 && nums[i] === nums[i - 1] ) continue;
        
        // we can use the same technique we used in 2sum II i.e. 2pointers technique
        let lp = i + 1;
        let rp = nums.length - 1
        while(lp < rp) {
            let sum = nums[lp] + nums[rp] + nums[i]
            if(sum === 0) {
                res.push([nums[i], nums[lp], nums[rp]]);
                // while on same iteration, check if there is other possible combination
                while(nums[lp] === nums[lp + 1]) lp ++;
                while(nums[rp] === nums[rp -1]) rp --;
                lp ++;
                rp --;
            }
            else if(sum < 0) {
                lp ++;
            } else {
                rp -- ;
            }
        }
    }
    return res
}



let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));