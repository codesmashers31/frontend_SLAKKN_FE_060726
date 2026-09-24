// import { useState } from "react"

import { useState } from "react"

// const App = ()=>{

//   console.log('Compopnent Running');
  

// // datas 
// // countNumber - setCountNumber
//   let [constNumber,setCountNumber] = useState(10)
//   // datas - state value
//   // setDatas - setstate function
//   // useState - hooks
//   // 10 - datatypes - inital value

//   let data = 10


//   const handleClick = ()=>{
    
    
//     setCountNumber(constNumber+1)

       

//   }


  

//   return (<>
  
  
//    <div>
//     APP
    
//     <p>{constNumber}</p>

//     <button onClick={handleClick}>Click Now</button>
//    </div>


//   </>)


// }

// export default App






// const App = () => {

//   console.log('Component Rerender');
  

//   const [countNumber,setCountNumber] = useState(0)
  
  
//   const handleClick = ()=>{

//     setCountNumber(countNumber+1)

//   }

//   const handleDec = ()=>{

//     setCountNumber(countNumber-1)

//   }

//   const handleReset = ()=>{

//     setCountNumber(0)

//   }


//   return (
//       <>
      
//       <div>
//         <h1>{countNumber}</h1>
//         <button onClick={handleClick}>Count (++)</button>
//         <button onClick={handleDec}>Count (--)</button>
//         <button onClick={handleReset}>Reset</button>
//       </div>
      
//       </>
//   )
// }

// export default App






const App = () => {

  const [title,setTitle] = useState("This is react")
 
  const [isActive,setIsActive] = useState(true)

  const changetext = ()=>{

      setTitle("This is Node")

  }

  const SHowText = ()=>{

    setIsActive(!isActive)

  }

  return (
    <>

    <h3>{title}</h3>
    <button onClick={changetext}>Click To change</button>
    
      
    {isActive&&<p>This is React</p>}  

    <button onClick={SHowText}>{isActive?"Show":"Hide"}</button>
    </>
  )
}

export default App