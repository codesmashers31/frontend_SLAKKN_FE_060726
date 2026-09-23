

const App = () => {

 let studentsData = [

       {stuName:"Suba",stuAge:20,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:23,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:19,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:23,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:23,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:23,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:23,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:23,StuEmail:"suba@gmail.com",stuCourse:"React"},
       {stuName:"Suba",stuAge:23,StuEmail:"suba@gmail.com",stuCourse:"React"},
       
       

 ]

// let copydata_1 = [...studentsData]




// let copydata = copydata_1.filter((e)=>e.stuAge>20)

// console.log(copydata);


  return (
    <>
    <div className="bg-blue-400 flex justify-between items-center flex-wrap  gap-5 p-10">
      {studentsData.map((e,i)=>(
        <div key={i} className="bg-white p-3 w-100 h-50 rounded-3xl
        ">
          <h2>{e.stuName}</h2>
          <p>{e.stuAge}</p>
          <p>{e.StuEmail}</p>
          <p>{e.stuCourse}</p>
          <button className="bg-black text-white p-1 w-60 text-center rounded-2xl">Click Course</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default App