function vowelsAndConsonants(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = [];
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            console.log(s[i]);
        } 
        else {
            consonants.push(s[i]);
        }
    }
    consonants.forEach(letter => {
        console.log(letter);
    })
}