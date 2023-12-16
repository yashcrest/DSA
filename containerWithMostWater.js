var maxArea = function (height) {
    let lp = 0
    let rp = height.length - 1

    let largestSoFar = 0
    while(lp < rp) {

        //width is the distance betwene the two lines 
        let width = rp - lp;

        let area = height[lp] * height[rp];
        largestSoFar = Math.max(area, largestSoFar);
        while(height[lp] === height[lp -1]) lp ++;
        lp ++;
    }
    return largestSoFar
}

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));