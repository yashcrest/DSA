//quicksort

function quickSort(arr){
    if(arr.length < 2) { // base case: array of 0 and 1 element are already sorted.
        return arr
    } 
    let pivot = arr[0] // recursive case
    
    //sub-array of all elements less than pivot
    const less = arr.slice(1).filter(i => i <=pivot);

    //sub-array of all elements greater than pivot
    const greater = arr.slice(1).filter(i => i > pivot);

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort([3,7,5,1,4]))