const registerBtn = document.querySelector("#registerbtn")
const userName = document.querySelector("#username")
const userEmail = document.querySelector("#useremail")
const userPassword = document.querySelector("#userpassword")
const myform = document.getElementById("myform")

const mydatasshow = document.querySelector("#showingdata")

mydatasshow.innerHTML = ""
document.addEventListener("DOMContentLoaded",()=>{



    const getLocalData = JSON.parse(localStorage.getItem("mydatas")) || []

     getLocalData.forEach((e)=>{

        mydatasshow.innerHTML += `<tr><td>${e.userid}</td><td>${e.name}</td><td>${e.email}</td></tr>`

     })

     


})


registerBtn.addEventListener("click",(e)=>{

    e.preventDefault()
    const name = userName.value
    const email = userEmail.value
    const password = userPassword.value
    
    const formDatas = {userid:Date.now(),name,email,password}
    const getLocalData = JSON.parse(localStorage.getItem("mydatas")) || []
      
    const  emailcheck = getLocalData.find((e)=>e.email==email)
     
    console.log(emailcheck);
    

    if(emailcheck){
        alert("Email Already use")
        return
    }

    getLocalData.push(formDatas)
     
    

    localStorage.setItem("mydatas",JSON.stringify(getLocalData))

    alert("Successfully Register") 
    window.location.reload()
    myform.reset()

    setInterval(()=>{

        window.location.href = "login.html"

    },2000)
    

})







