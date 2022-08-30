const numbers = [2, 3, 5, 6, 4];

// Long way 

const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}


function square(element){
    return element*element;
}
const square = element => element * element;
const square = x => x * x;
const result = numbers.map(function(element){
    return element*element;
})

const result = numbers.map(x=> x * x);
console.log(result);

const result = numbers.filter(x => x > 3);
console.log(result);

const result = numbers.find(x=> x>3);
console.log(result);

// Filter array return kore bt find element ta k return kore

