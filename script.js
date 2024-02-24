document.addEventListener("DOMContentLoaded", function() {
 var btc=document.getElementById("bitcoin");
 var eth=document.getElementById("ethereum");
 var doge=document.getElementById("dogecoin");
 var xmr=document.getElementById("monero");
 var lte=document.getElementById("litecoin");
 var ada=document.getElementById("cardano");
 var usdt=document.getElementById("tether");
 var dash=document.getElementById("dash");
 var xrp=document.getElementById("ripple");
 var xlm=document.getElementById("stellar");
 var trx=document.getElementById("tron");
 var dai=document.getElementById("dai");
 var avax=document.getElementById("avalanche-2");
 var hbar=document.getElementById("hedera-hashgraph");
 var vet=document.getElementById("vechain");
 var dot=document.getElementById("polkadot");
 var bch=document.getElementById("bitcoin-cash");
 var ton=document.getElementById("the-open-network");
 var shib=document.getElementById("shiba-inu");
 var shib = document.querySelector('[id="shiba-inu"]');

 var link=document.getElementById("chainlink");
 var uni=document.getElementById("uniswap");
 var fil=document.getElementById("filecoin");
 var arb=document.getElementById("arbitrum");
 
 
 
 var settings ={
    "async": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cmonero%2Clitecoin%2Ccardano%2Ctether%2Cdash%2Cripple%2Cstellar%2Ctron%2Cdai%2Cavalanche-2%2Chedera-hashgraph%2Cvechain%2Cpolkadot%2Cbitcoin-cash%2Cthe-open-network%2Cshiba-inu%2Cchainlink%2Cuniswap%2Cfilecoin%2Carbitrum&vs_currencies=usd", "method":"GET",
    "headers": {}

 }
 $.ajax(settings).done(function(response){
  if (shib) {
    shib.innerHTML = response['shiba-inu'].usd;
    console.log("present")
} else {
    console.error("Element with ID 'shiba-inu' not found.");
}
var hbar = document.querySelector('[id="hedera-hashgraph"]');
if (hbar) {
    hbar.innerHTML = response['hedera-hashgraph'].usd;
    console.log("fff")
} else {
    console.error("Element with ID 'hedera-hashgraph' not found.");
}
var bch = document.querySelector('[id="bitcoin-cash"]');
if (bch) {
    bch.innerHTML = response['bitcoin-cash'].usd;
} else {
    console.error("Element with ID 'bitcoin-cash' not found.");
}
var ton = document.querySelector('[id="the-open-network"]');
if (ton) {
    ton.innerHTML = response['the-open-network'].usd;
    console.log("shruti")
} else {
    console.error("Element with ID 'the-open-network' not found.");
}




var link = document.querySelector('[id="chainlink"]');
if (link) {
    link.innerHTML = response.chainlink.usd;
} else {
    console.error("Element with ID 'chainlink' not found.");
}

var uni = document.querySelector('[id="uniswap"]');
if (uni) {
    uni.innerHTML = response.uniswap.usd;
} else {
    console.error("Element with ID 'uniswap' not found.");
}

var fil = document.querySelector('[id="filecoin"]');
if (fil) {
    fil.innerHTML = response.filecoin.usd;
} else {
    console.error("Element with ID 'filecoin' not found.");
}

var arb = document.querySelector('[id="arbitrum"]');
if (arb) {
    arb.innerHTML = response.arbitrum.usd;
} else {
    console.error("Element with ID 'arbitrum' not found.");
}


var vet = document.querySelector('[id="vechain"]');
if (vet) {
    vet.innerHTML = response.vechain.usd;
} else {
    console.error("Element with ID 'vechain' not found.");
}

var dot = document.querySelector('[id="polkadot"]');
if (dot) {
    dot.innerHTML = response.polkadot.usd;
} else {
    console.error("Element with ID 'polkadot' not found.");
}







   console.log(response)
   btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;
    xmr.innerHTML=response.monero.usd;
    lte.innerHTML=response.litecoin.usd;
    ada.innerHTML=response.cardano.usd;
    usdt.innerHTML=response.tether.usd;
    dash.innerHTML=response.dash.usd;
    xrp.innerHTML=response.ripple.usd;
    xlm.innerHTML=response.stellar.usd;
    trx.innerHTML=response.tron.usd;
    dai.innerHTML=response.dai.usd;
    hbar.innerHTML=response.hedera-hashgraph.usd;
    vet.innerHTML=response.vechain.usd;
    dot.innerHTML=response.polkadot.usd;
    bch.innerHTML=response.bitcoin-cash.usd;
    // avax.innerHTML=response.avalanche-2. usd;
    
    ton.innerHTML=response.the-open-network.usd;
    shib.innerHTML=response.shiba-inu.usd;
    link.innerHTML=response.chainlink.usd;
    uni.innerHTML=response.uniswap.usd;
    fil.innerHTML=response.filecoin.usd;
    arb.innerHTML=response.arbitrum.usd;
 });
});