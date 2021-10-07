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
            var Loss=(a-c);
            var TotalLoss =((a-c)*q);
            var RoundedTLoss = TotalLoss.toFixed(2);
            var LossPercentage =((Loss/a)*100);
            var RoundedLPer = LossPercentage.toFixed(2);
            Output.innerText=("Sorry! You have suffered a Loss of Rs "+RoundedTLoss+ " and Loss Percent is "+RoundedLPer+"%.")
        } else if (c>a) {
            var Profit=(c-a);
            var TotalProfit =((c-a)*q);
            var RoundedTProfit = TotalProfit.toFixed(2);
            var ProfitPercentage =((Profit/a)*100); 
            var RoundedPPer = ProfitPercentage.toFixed(2);
            Output.innerText=("Congrats! You have earned a Profit of Rs "+RoundedTProfit+" and Profit Percent is "+RoundedPPer+"%.")
        } else {
            Output.innerText=("Average Price and Current Price are same. So, No Profit and No Loss till now.")
        }
} else {
    Output.innerText=("All the Input Values must be Greater than Zero.")
}
}