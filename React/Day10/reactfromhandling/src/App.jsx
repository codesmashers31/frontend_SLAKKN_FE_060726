import { useState } from "react"


const App = () => {
   
  const [saveData,setSaveData] = useState({username:"",usermobile:""})
  const [showData,setShowData] = useState([])

  const handleChange = (e)=>{

      setSaveData({...saveData,[e.target.name]:e.target.value})

      //console.log(saveData);
      

  }

  const handleSubmit = (e)=>{

    e.preventDefault()

    if(saveData.username === "" || saveData.usermobile===""){
      alert("Enter the Feilds")
      return
    }
    
    let copy = [...showData]

    copy.push(saveData)

    setShowData(copy)

    alert("Successfuklly done ")

    setSaveData({username:"",usermobile:""})

  }
  return (
    <>
     <div>
        <form onSubmit={handleSubmit}>
         <input type="text" name="username" value={saveData.username} onChange={handleChange} placeholder="Enter the Name" />
         <input type="number" name="usermobile" value={saveData.usermobile} onChange={handleChange} placeholder="Enter the Mobile" />
         <input type="submit" value={"Register"} />
        </form>
     </div>

     <div>
      {showData.map((e,i)=>(
        <div key={i}>
          <p>{e.username}</p>
          <p>{e.usermobile}</p>
        </div>
      ))}
     </div>
    </>
  )
}

export default App