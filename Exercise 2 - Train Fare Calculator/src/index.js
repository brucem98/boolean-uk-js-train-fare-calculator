const age = prompt("What is your age?");

const traveldistance = prompt("How far are you travelling (in km)?");

const under18 = age < 18;

const over65 = age > 65; 

console.log("under18:", under18);
console.log("over65:", over65);

let ticketprice;
if (under18){
  juniordiscount = (traveldistance * 0.21)*0.8;
  ticketprice = juniordiscount;

} else if (over65) {
  seniordiscount = (traveldistance * 0.21)*0.6;
  ticketprice = seniordiscount;
  
} else {
  normalprice = (traveldistance * 0.21);
  ticketprice = normalprice;
}

console.log("ticketprice:", ticketprice);

