var maxArea = function (height) {
    let lp = 0
    let rp = height.length - 1

    //sorting array
    area.sort((a,b) => a- b);
    while(lp < rp) {
        let largestSoFar = 0
        let area = height[lp] * height[rp];
        largestSoFar = Math.max(area, largestSoFar);
    }
    return largestSoFar
}

let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));