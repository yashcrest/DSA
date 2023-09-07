var groupAnagram = function (arrays) {
    let newArray = []
    for(let str of arrays){
        let sorted = str.split('').sort().join('');
        newArray.push(sorted)
    }
    return newArray
}

console.log(groupAnagram(["eat","tea","tan","ate","nat","bat"]));
