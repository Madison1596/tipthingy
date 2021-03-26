var containerEle = document.body.querySelector(".container");

var bill = Number(prompt("What is the total bill?"));


var taxes = bill * 0.07;

var taxed = taxes + bill;

var add = taxed * 0.05 ;

var total = add + taxed;

sum = Math.ceil(total);

containerEle.innerHTML = "The total is " + total + ""