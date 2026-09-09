



// const handleChange = (event)=>{

//     event.preventDefault()
    
//     const username = document.getElementById("username").value
//     const num = document.getElementById("num").value
//     const result = document.getElementById("result")

//     const showing = Number(username) + Number(num)
//     //console.log(username);
    
//     result.textContent = showing

    
// }


// const handlesub = (event)=>{

//     event.preventDefault()
    
//     const username = document.getElementById("username").value
//     const num = document.getElementById("num").value
//     const result = document.getElementById("result")

//     const showing = Number(username) - Number(num)
//     //console.log(username);
    
//     result.textContent = showing

// }



const btn = document.getElementById("btn")

const newArray = []

btn.addEventListener("click",(e)=>{

    e.preventDefault()

    const username = document.getElementById("username").value
    const userage = document.getElementById("userage").value
    const usermobile = document.getElementById("usermobile").value
    let result = document.getElementById("result")
    if(username == "" || userage == "" || usermobile == ""){
        alert("Fill the form")
        // result.textContent = "FIll the form"
        // result.style.color = "red"
        return
    }


    if(userage < 18) {

        alert("You cant access")
         return
    }

     if(usermobile.length > 10 || usermobile.length < 10) {

        alert("Please add 10 Digit")
         return
    }






   

    const obj = {userid:Date.now(),username,userage,usermobile}

    newArray.push(obj)

    //console.log(newArray);
    document.getElementById("myfrom").reset()

    
    // console.log(obj);
   
    result.innerHTML = ""


    newArray.forEach((e)=>{
     
      result.innerHTML += `<div>
      
      <h3>This is the data for UserName ${e.username}</h3>
<p>This is age: ${e.userage}</p><p>This is Mobile : ${e.usermobile}</p>
      
      </div>`


    })
 
     
    

    

})