function factorial(n){
    //base case
    if(n === 1) return 1;

    //recursive case
    console.log(n);
    return n * factorial(n-1);
}

console.log(factorial(5))