var output = document.querySelector("#output");
var principle = document.querySelector("#Principle");
var rate = document.querySelector("#Rate");
var time = document.querySelector("#Time");
var calculate = document.querySelector(".calculate");

console.log(principle);

/*calculate.addEventListener('click',function calculateSI(){
    var SI = (principle.value*rate.value*time.value)/100;
    output.innerHTML = "Your Simple Interest is :" +SI;
});*/

function calculateSI(){
    var SI = (principle.value*rate.value*time.value)/100;
    output.innerHTML = "Your Simple Interest is :" +SI;
};
