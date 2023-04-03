//Task1
function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}
console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));


//Task2
function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}
console.log(mondayWork());
console.log(mondayWork("work from home."));

//Task3
function wrapAdjective(symbol ="*"){
    return function(adj = "a hard worker"){
        return (`You are ${symbol}${adj}${symbol}!`)
    }
}
const asterisk = wrapAdjective("*");
console.log(asterisk());
const pipe = wrapAdjective("||");
console.log(pipe("a dedicated programmer"));