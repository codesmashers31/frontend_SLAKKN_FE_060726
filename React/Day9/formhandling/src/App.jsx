// import { useState } from "react";

import { useState } from "react"


// const App = () => {


//   const [username,setUserName] = useState("")
//   const [userage,setUserAge] = useState("")
//   const [showData,setShowData] = useState([])

//   const handleChange = (e)=>{


//     setUserName(e.target.value)

    



//   }

//   const handleage = (e)=>{

//     setUserAge(e.target.value)

//   }

//   const handleclick = ()=>{

//     const obj = {id:Date.now(),username:username,userage:userage}

//     const copy = [...showData]

//     copy.push(obj)

//     setShowData(copy)


//     setUserName("")
//     setUserAge("")



//   }


//   return (
    
//    <>
//    <div>
//     <input type="text" onChange={handleChange} value={username} placeholder="Enter the Name" />
//     <input type="number" onChange={handleage} value={userage} placeholder="Enter the Age" />
//     <button onClick={handleclick}>Click </button>
//    </div>

//    {/* <div>
//     <p>{username}</p>
//     <p>{userage}</p>
//    </div> */}


//    <p>{showData.username}</p>
//     <p>{showData.userage}</p>




//     <table border={"2"} cellPadding={"5"} cellSpacing={"6"}>
//       <thead>
//         <tr>
//           <th>S.no</th>
//           <th>UserName</th>
//           <th>UserAge</th>
//         </tr>
//       </thead>
//       <tbody>
//         {showData.map((e)=>(
//           <tr key={e.id}>
//             <td>{e.id}</td>
//             <td>{e.username}</td>
//             <td>{e.userage}</td>
//           </
//           tr>
//         ))}
//       </tbody>
//     </table>
   
   
//    </>
    

//   )
// }

// export default App











const App = () => {

  const [nameUser,setNameUser] = useState("")
  const [ageUser,setAgeUser] = useState("")
  const [showData,setShowData] = useState([])
 
  const handleChange = (e)=> {

    setNameUser(e.target.value)



  }

  const handleAge = (e)=>{

    setAgeUser(e.target.value)

  }

  const hanldeClick =()=>{

    const obj = {id:Date.now(),name:nameUser,age:ageUser}

    // const arr = [...showData]

    // arr.push(obj)

    setShowData(arr)

    alert("Successfully Save")

    setNameUser("")
    setAgeUser("")

  }
 

  return (
    <>
      <div>
        <input type="text" onChange={handleChange} value={nameUser} placeholder="Enter the Name" />
        <input type="number" onChange={handleAge} value={ageUser} placeholder="Enter the Age" />
        <button onClick={hanldeClick}>Click to Login</button>
      </div>


      <div>
        <table border={"1"} cellPadding={"2"} cellSpacing={"2"}> 
          <thead>
            <tr>
              <th>Id</th>
              <th>User Name</th>
              <th>User Age</th>
            </tr>
          </thead>
          <tbody>
            {showData.map((e)=>(
              <tr key={e.id}>
                   <td>{e.id}</td>
                   <td>{e.name}</td>
                   <td>{e.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App