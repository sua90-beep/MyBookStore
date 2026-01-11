function calculateVat(){
    let priceBox = document.getElementById("priceBox");
    const price = +priceBox.value
    const vat = price *0.18; 
    const result = document.getElementById("result");

result.innerText= vat;
 
}