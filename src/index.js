module.exports = function makeExchange(currency) {
var obj={H: 50, Q: 25, D: 10, N: 5, P: 1};
var vozvrat ={};
var currency=currency;
if(currency > 10000) return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
if(currency <= 0) return {};
while (currency>0)
{
if((currency/50) >=1) {vozvrat.H=Math.floor (currency/50); currency=currency-(vozvrat.H*50); continue;}
if((currency/25) >=1) {vozvrat.Q=Math.floor (currency/25); currency=currency-(vozvrat.Q*25); continue;}
if((currency/10) >=1) {vozvrat.D=Math.floor(currency/10); currency=currency-(vozvrat.D*10); continue;}
if((currency/5)  >=1) {vozvrat.N=Math.floor(currency/5); currency=currency-(vozvrat.N*5);  continue;}
if((currency/1)  >=1) {vozvrat.P=Math.floor(currency/1); currency=currency-(vozvrat.P*1);  continue;}
}
return vozvrat;
}
