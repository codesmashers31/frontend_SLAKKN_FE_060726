// const box = document.querySelector(".box")
// const btn = document.querySelector(".btn")



// btn.addEventListener("click",()=>{
 
 
//     // box.classList.add("active")

//     const value = box.classList.contains("active")

//     console.log(value);

//     if(value) {
//         box.classList.add("active1")
//     }
//     else {
//          box.classList.remove("active")
//     }

//    //console.log(value);
  


// })


// console.log(heading[1].textContent);

// for(let a=0;a<heading.length;a++){


//      console.log(heading[a].textContent);
     

// }
// classList.add()
// classList.remove()
// classList.contains()
// classList.toggle()
// classList.replace()





const submit = document.getElementById("submit")


submit.addEventListener("click",(i)=>{

    i.preventDefault()
 
const userName = document.getElementById("inputName").value
const userMobile = document.getElementById("inputMobile").value
const userAge = document.getElementById("inputAge").value

const userDatas = {userName,userMobile,userAge}

console.log(userDatas);

const result = JSON.parse(localStorage.getItem("registerdata")) || []

result.push(userDatas)

console.log(result);


// console.log(JSON.stringify(result));


localStorage.setItem("registerdata",JSON.stringify(result))

alert("Successfully Register")

const fromData = document.getElementById("reset")

// fromData.reset()

window.location.reload()

})
