console.log("welcome to the BMI calculator website!!!!");


let btn=document.querySelector("button");

btn.addEventListener("click",()=>{
    let weight=document.querySelector("#wt");
    let height=document.querySelector("#ht");
    let result=document.querySelector(".result");

    let a=weight.value;
    let b=height.value;
    let c=(a/(b*b));
    result.innerText=(c.toFixed(2));
    
})