function anagram(s,t) {
    return [s.split('').sort().join(''), s.split('').sort().join('')];
}

console.log(anagram('rat', 'tar'));