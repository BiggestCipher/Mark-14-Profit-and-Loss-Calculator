var AveragePrice =document.querySelector("#average-price");
var StockQuantity =document.querySelector("#stock-quantity");
var CurrentPrice =document.querySelector("#current-price");
var SubmitButton =document.querySelector("#submit-button");
var Output=document.querySelector("#output-box");

SubmitButton.addEventListener("click",SubmitHandler);

function SubmitHandler() {
    var a =Number(AveragePrice.value);
    var q =Number(StockQuantity.value);
    var c =Number(CurrentPrice.value);

    CalculatePAndL(a, q, c);
}

function CalculatePAndL(a, q, c) {
    if (a>0 && q>0 && c>0) {
        if (a>c) {
            var Loss =((a-c)*q);
            var LossPercentage =((Loss/a)*100);
            Output.innerText=("Sorry! You have suffered a Loss of "+Loss+ " and Loss Percent is "+LossPercentage+"%.")
        } else if (c>a) {
            var Profit =((c-a)*q);
            var ProfitPercentage =((Profit/a)*100); 
            Output.innerText=("Congrats! You have earned a Profit of "+Profit+" and Profit Percent is "+ProfitPercentage+"%.")
        } else {
            Output.innerText=("Average Price and Current Price are same. So, No Profit and No Loss till now.")
        }
} else {
    Output.innerText=("All the Input Values must be Greater than Zero.")
}
}