function fizzbuzz(num) {
    if (num === null)  return 
    if(num % 3 ) {
        console.log('fizz');
    } else if (num % 7 ){
        console.log('buzz')
    } else {
        console.log('fizzbuzz')
    }
}

fizzbuzz(8)