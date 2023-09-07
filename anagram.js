function anagram(s,t) {
    return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(anagram('rat', 'tar'));
