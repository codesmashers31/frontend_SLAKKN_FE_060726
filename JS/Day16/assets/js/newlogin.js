const loginBtn = document.querySelector("#loginbtn")
const userEmail = document.querySelector("#useremail")
const userPassword = document.querySelector("#userpassword")
const myform = document.getElementById("myform")



loginBtn.addEventListener("click",(e)=>{

    e.preventDefault()

     const email = userEmail.value
     const password = userPassword.value

     if(email==="" || password==""){
        alert("Enter the input")
        return
     }

     const getData = JSON.parse(localStorage.getItem("mydatas"))


     const checkemail_password = getData.find((e)=>e.email ==email &&e.password==password)

     console.log(checkemail_password);

     if(checkemail_password){

        window.location.href = "dashboard.html"

     }else{

        alert("Error try original password and emeila")

     }
     




})