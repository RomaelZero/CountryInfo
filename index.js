const input = document.querySelector(".js-input");
const btn = document.querySelector(".js-btn");
let countryName;
const nameOfCountry = document.querySelector(".nameOfCountry");
const capital = document.querySelector(".capital");
const currencies = document.querySelector(".currencies");
const flag = document.createElement("img");
document.body.appendChild(flag);
const region = document.querySelector(".region");
const subregion = document.querySelector(".subregion");
let data;

input.addEventListener("change",()=>{
    countryName = input.value;
});

// input.addEventListener("keydown",(event)=>{
//     if(event.key === "Enter"){
//         console.log("Enter was pressed")
//     }
// });

btn.addEventListener("click",()=>{
    console.log("clicked");
    input.value = "";
    console.log(countryName);
    getData(countryName);
});

function getData(countryName){
    console.log(countryName);
    fetch("https://restcountries.com/v3.1/name/"+countryName)
    .then(response=> {return response.json()})
    .then(json=>{
        nameOfCountry.innerHTML = countryName;
               
        
        capital.innerHTML= json[0].capital[0];
        currencies.innerHTML= JSON.stringify(json[0].currencies);
        
             
        flag.src = json[0].flags.png; 
        
        region.innerHTML=json[0].region;
        subregion.innerHTML=json[0].subregion
    })
    .catch(err=>console.log("Error: "+ err));
}

