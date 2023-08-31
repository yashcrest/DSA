const fibonacci = (n) => {
    let n1 = 0
    let n2 = 1
    for (i=1; i<=n; i++){
        console.log(n1);
        sum = n1 + n2
        n1 = n2
        n2 = sum
    }
}

fibonacci(6);

//  0 1 1 2 3 5 