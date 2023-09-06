function anagram(s,t) {
    let sfreq = {}
    let tfreq = {}

    for(let i=0; i < s.length; i++){
        sfreq[i] = (sfreq[i] || 0) + 1
        tfreq[i] = (tfreq[i] || 0) + 1
    }
}

console.log(anagram('rat', 'tar'));