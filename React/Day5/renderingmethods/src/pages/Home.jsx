

const Home = () => {

  const stringData = "Stalin Is the CM" 

  const numberData = 2020

  const isActive   = false
  const Isnull     = null
  let   datas      = true


  

  return (
    <>
    <div className="bg-blue-400 text-white p-10 h-100">
        <p>
            Lorem ipsum dolor <span className="bg-amber-300 p-2">{stringData}</span> {numberData}  sit amet consectetur, adipisicing elit. Dolores praesentium consequatur esse perferendis sit, explicabo ipsum officia ex sequi. <span className="bg-amber-300 p-2">{stringData}</span>  Reprehenderit officia consequatur <span className="bg-amber-300 p-2">{stringData}</span> {numberData}  adipisci culpa fuga quaerat nemo voluptate unde voluptatem.
        </p>
        <h2>
            {isActive?"running":"Not Running"}
        </h2>
        
        
       
        {
           isActive?<p>This is true</p>:<p>This is False</p> 
        }


        {
            datas??<h1>This is the Js Data Process & Rendering</h1>
        }


        {
            datas && <p>I am True</p>
        }

        {!datas?"true":"false"}

    </div>
    </>
  )
}

export default Home