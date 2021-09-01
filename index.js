var output = document.querySelector("#output");
var principle = document.querySelector("#principle");
var rate = document.querySelector("#rate");
var time = document.querySelector("#time");
var calculate = document.querySelector(".calculate");

var CIoutput = document.querySelector("#CIoutput");
var CIprinciple = document.querySelector("#CIprinciple");
var CIrate = document.querySelector("#CIrate");
var CItime = document.querySelector("#CItime");
var CInum = document.querySelector("#CInum");
var CIcalculate = document.querySelector(".CIcalculate");


function calculateCI(){
    var CI = (CIprinciple.value*(Math.pow((1+(CIrate.value/(CInum.value*100))),(CInum.value*CItime.value))));
    console.log(CIprinciple.value);
    console.log(CIrate.value/100);
    console.log(CItime.value);
    console.log(CI);
    CIoutput.innerHTML = "Your Compound interest is :" + CI.toFixed(2);
};


function calculateSI(){
    var SI = (principle.value*rate.value*time.value)/100;
    console.log(principle.value);
    console.log(rate.value);
    console.log(time.value);
    console.log(SI);
    output.innerHTML = "Your Simple Interest is :" +SI.toFixed(2);
};


