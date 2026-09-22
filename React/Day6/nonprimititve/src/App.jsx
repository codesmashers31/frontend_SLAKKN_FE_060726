

// const App = () => {
//   const isActive = undefined

import Navbar from "./components/Navbar";



//   return (
//     <>
//        <div className={isActive?"bg-amber-600 p-3":"bg-blue-400 p-3"}> 
//             {isActive ?? <p className="bg-green-400">This is True</p>}
//        </div>
//        <button className={isActive?"bg-green-400 p-1 w-50 text-center":"bg-red-400 p-1 w-50 text-center"}>{isActive?"Hide":"Show"}</button>
//     </>
//   )
// }

// export default App






const App = () => {


  //  const arr = [1,2,3,4,5,6,7,8,9,0]

  //  const findnew = arr.filter((e)=>e/2==0) 
   
  //  console.log(findnew);
   
   

   //console.log(arr);

   const obj = {name:"VTV",node:"2016",isActive:"NewArray"}
   

   const arrobj = [

          {name:"React",node:"2016",isActive:"NewArray"},
          {name:"JS",node:"2020",isActive:"tere"},
          {name:"JSS",node:"2021",isActive:"rayya"},
          {name:"ReNodeact",node:"2026",isActive:"ngst"}

   ]

  //  const newindiavalue = arrobj.map((e,i)=>`${i}+1 -- ${e}`)
  //  console.log(newindiavalue);
  
   

  return (
    <>
    <div className="bg-blue-600 text-white flex gap-3 justify-center items-center p-3 h-screen">

         {/* {

          <p>{findnew}</p>
         
         findnew.map((e,i)=>(
          <p className="bg-amber-300 w-50 text-black text-center p-2 rounded-3xl" key={i+1}>{e}</p>
         ))
         
         } */}


         {/* <p>{arrobj.name}</p>
         <p>{obj.node}</p>
         <p>{obj.isActive}</p> */}



         {arrobj.map((e,i)=>(
          <div className="bg-white text-black p-3 w-100 h-100" key={i}>
            <p>{e.name}</p>
            <p>{e.node}</p>
            <p>{e.isActive}</p>
          </div>
         ))}

    </div>

    <div>
      <Navbar datavaanupuren = {obj} newdatasend={8787} />
    </div>
    </>
  )
}

export default App