const mainContainer = document.getElementById("main-container");
const subContainer = document.getElementById("sub-container");
const Submit = document.getElementById("submit");
Submit.addEventListener("click",()=>{
  subContainer.classList.remove("hidden")
  mainContainer.style.display = "none"
})
const button = document.querySelectorAll(".btn")
const rateAgain = document.getElementById("rate-again")

rateAgain.addEventListener("click",()=>{
  subContainer.classList.add("hidden")
  mainContainer.style.display = "block"
})




const rates = document.getElementById("rating");

button.forEach((rate)=>{
  rate.addEventListener("click", ()=>{
    rates.innerHTML = rate.innerHTML
  })
})