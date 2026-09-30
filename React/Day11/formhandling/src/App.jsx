// import { useState } from "react"

import { useEffect, useState } from "react";


const App = () => {

  const [saveDatas,setSaveDatas] = useState({username:"",usernumber:"",useremail:""})
  const [showDatas, setShowDatas ] = useState([])
  const fetchDatas = ()=>{

      const getDatas = JSON.parse(localStorage.getItem("mydatas"))


       setShowDatas(getDatas)

  }

  useEffect(()=>{
    fetchDatas()
  },[])
  
  
  const handleChange = (e)=>{


  //  console.log(e.target.name);
  //  console.log(e.target.value);
   
   
//  saveDatas.username = "React" 



setSaveDatas({...saveDatas,[e.target.name]:e.target.value})

     

  }


  const handleClick = (e)=>{

    e.preventDefault()

    if(saveDatas.username === "" || saveDatas.usernumber === "" || saveDatas.useremail === "" ){
      alert("Fill the form")
      return
    }


    const datas = JSON.parse(localStorage.getItem("mydatas")) || []

    datas.push(saveDatas)

    localStorage.setItem("mydatas",JSON.stringify(datas))
    
    alert("Succfully Done")
    
    setSaveDatas({username:"",usernumber:"",useremail:""})
    
    fetchDatas()
    

  }





  return (
    <>
    <form>
      <input type="text" name="username" value={saveDatas.username} onChange={handleChange} />
      <input type="number" name="usernumber" value={saveDatas.usernumber} onChange={handleChange} />
      <input type="email" name="useremail" value={saveDatas.useremail} onChange={handleChange} />
      <button onClick={handleClick}>Regsiter</button>
    </form>

    <div>
      {showDatas.map((e,i)=>(
        <div key={i}>
          <p>{e.username}</p>
          <p>{e.usernumber}</p>
          <p>{e.useremail}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default App




// const App = () => {

//   console.log('component rubnning');
  

//   let [datasCount,setDatasCount] = useState(0)
//   const datas = ()=>{

//     console.log('RUnning');
     
//     datasCount++
     
//     setDatasCount(datasCount)

    
    
    

//   }

  
//   useEffect(()=>{
//      datas()
//   },[])


//   return (
//     <div>App</div>
//   )
// }

// export default App