const loginBtn = document.querySelector("#loginbtn")
const userEmail = document.querySelector("#useremail")
const userPassword = document.querySelector("#userpassword")
const myform = document.getElementById("myform")

loginBtn.addEventListener("click",(e)=>{

    e.preventDefault()

    const email = userEmail.value
    const password = userPassword.value
    
    
    const getLocalData = JSON.parse(localStorage.getItem("mydatas"))
    
    //console.log(getLocalData);

    const users = getLocalData.find((e)=>e.email == email && e.password==password)
    
    console.log(users);

    if(users) {
        
        localStorage.setItem("isActive",JSON.stringify(users))
        myform.reset()
        setInterval(()=>{
            window.location.href = "index.html"
        },1000)

    }else{

        alert("Invaild Password & Email")
        

    }
    
 
    

})