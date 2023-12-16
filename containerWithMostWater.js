var maxArea = function (height) {
    let lp = 0
    let rp = height.length - 1

    let largestSoFar = 0
    while(lp < rp) {
        //width is the distance betwene the two lines 
        let width = rp - lp;
        // this is to determine which of the 2 lines are shorter
        let minumumHeight = Math.min(height[lp] , height[rp])
        let area = width * minumumHeight;
        largestSoFar = Math.max(area, largestSoFar);

        // move the pointer that points to the shorter lines
        if(height[lp] < height[rp]) {
            lp ++;
        } else {
            rp -- ;
        }
    }
    return largestSoFar
}

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));