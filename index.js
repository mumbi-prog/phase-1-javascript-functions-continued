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
    return function(adj){
        return (`You are ${symbol}${adj}${symbol}!`)
    }
}