let button=document.querySelectorAll("button")

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click",function () {
    document.body.style.background=button[i].getAttribute("id")
})
}   

let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"] 
for (let i = 0; i < texts.length; i++) {
    let text=document.querySelectorAll("p")
     text[i].innerText=texts[i]
}
   
let arr = [                                                                  
     {   
         link : "https://google.com",                                                                     
        title : "Ссылка на гугл"                                                                 
    },                                                                                                      
    {                                                                                                 
        link : "https://instagramm.com",                                                                  
        title : "Ссылка на инстаграм"                                                     
    },                                                                                               
    {        
        link : "htpps://facebook.com",                                                                                     
        title : "Ссылка на фейсбук" 
    }]


for (let i = 0; i < arr.length; i++) {
    let text=document.querySelectorAll("a")
     text[i].innerText=arr[i].title
     text[i].setAttribute("href",`${arr[i].link}`)
     console.log(text)
}





 
let buttonPlus=document.querySelector(".plus")
let textCalc=document.querySelector(".Calc")
buttonPlus.addEventListener("click",function(){
    textCalc.innerText=+textCalc.innerText+1
})


let buttonMinus=document.querySelector(".minus")
let textCalc1=document.querySelector(".Calc")
buttonMinus.addEventListener("click",function(){
 textCalc1.innerText=+textCalc1.innerText-1
})

    
