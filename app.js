// 1) What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4}

// 2) What does the following code return?

const example = [...new Set("referee")].join("") // 'ref'

// 3) What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// {Array(3) => true, Array(3) => false}
// 0: {Array(3) => true}
// 1: {Array(3) => false}


// 4) hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length


// 5) vowelCount


function isVowel(element){
    return "aeiou".includes(element)
}

function vowelCount(string){
    const vowelMap = new Map();
    for(let char of string) {
    let letter = char.toLowerCase()
        if(isVowel(letter)){
            if(vowelMap.has(letter)){
                vowelMap.set(letter, vowelMap.get(letter) + 1)
            }
            else{
                vowelMap.set(letter, 1)
            }
        }
    }
    return vowelMap;
}