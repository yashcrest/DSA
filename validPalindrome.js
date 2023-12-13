function validPalindrome (s) {
     let lp = 0
     let rp = s.length - 1

     //helper function to check if the value is uppercase, lowercase or number
     var isLetter = function(code) {
        if (((code >= 48) && (code <= 57))  // numbers
        || ((code >= 65) && (code <= 90))  // uppercase
        || ((code >= 97) && (code <= 122))) {
            return true
        } else {
            return false
        }
     }

    while(lp < rp) {

        //checking to see if the char is alphanumeric or not
        while((lp < rp) && !isLetter(s.charCodeAt(lp))) {
            lp +=1
        }

        while((rp > lp) && !isLetter(s.charCodeAt(rp))) {
            rp -=1
        }

        if(s[lp].toLowerCase() !== s[rp].toLowerCase()) {
            return false
        }
        lp ++ ;
        rp -- ;    
    }
    return true
}