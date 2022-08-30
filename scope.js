let bonus = 30; //global scope

function sum(first, second){
    let result = first + second + bonus;
    console.log(result);
    console.log(bonus);
    if(result>5){
        const mood = "happy"; // let/const scope er bahire jete parbe na. block scope bt var pare- hoisting kore(kono ekt variable k uporer level e niye jay)
        console.log(mood);
    }
    //console.log(mood);
    return result;
}

const output = sum(3,4);

console.log(output);
console.log(bonus);