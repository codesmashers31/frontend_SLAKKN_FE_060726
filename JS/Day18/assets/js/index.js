// // const arrobj = [
// //   {name:"react",course:"Node"},
// //   {name:"Node",course:"JS"},
// //   {name:"Next",course:"Node"}
// // ]


// const show = document.querySelector("#showingdata")
// //const show = document.getElementById("showingdata")
// console.log(show);

// show.innerHTML = ""
// document.addEventListener("DOMContentLoaded",()=>{


//          const getData = async ()=>{

//               const getfromApi = await fetch("https://dummyjson.com/users")

//               //console.log(getfromApi);
              
//               const dataChange = await getfromApi.json()
              
//               //console.log(dataChange.users);

//               const result = dataChange.users

//               console.log(result);
              

              
//         result.map((e)=>{
//           show.innerHTML += `<tr>
//             <td>${e.id}</td>
//             <td>${e.firstName}</td>
//             <td>${e.lastName}</td>
//             <td><img src=${e.image} /></td>
          
//           </tr>`
//         })

//          }

//          getData()







// })



  const getData = async ()=>{

              const getfromApi = await fetch("https://dummyjson.com/users")

              //console.log(getfromApi);
              
              const dataChange =  await getfromApi.json()

              //console.log(dataChange);
              
              
              //console.log(dataChange.users);

              const result = dataChange.users

              console.log(result);
            
         }

         getData()