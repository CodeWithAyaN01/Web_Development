console.log("Js loaded");
const BaseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json"
const dropdown = document.querySelectorAll(".dropdown select"); // 1st loop iterated over these selected object
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
const btn = document.querySelector(".submit");
let message = document.querySelector(".msg");

for(let select of dropdown) { // 1st loop
    for(currCode in countryList) {
        let newOption = document.createElement("option"); // creating an option for HTML
        newOption.innerText = currCode; // change the innertext of the new created option 
        newOption.value = currCode.toLowerCase(); // change calue also
        if(select.name === "from" && currCode == "USD") {
            newOption.selected = "selected";
        }
        else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption); // append the new created option
    }

    select.addEventListener("change" , (evt) => {
        updateFlag(evt.target)
    });
}


const updateFlag = (element) => {
    let currCode = element.value.toUpperCase();
    let countryCode = countryList[currCode]; 
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input"); // input of the form
    let amountVal = amount.value;
    if(amountVal === "" || amountVal < 1) {
        amountVal = 1;
        amount.value = "1";
    }
    
    let rate = await getData(fromCurr.value,toCurr.value,amountVal);
    message.innerText = `${amountVal} ${fromCurr.value.toUpperCase()} = ${rate.toFixed(2)} ${toCurr.value.toUpperCase()}`;

})

const getData = async (from,to,amount) => {
    const response = await fetch(BaseURL);
    const data = await response.json();
    const eur = data.eur;
    let converted = (amount / eur[from]) * eur[to]; // formula
    return converted;
}