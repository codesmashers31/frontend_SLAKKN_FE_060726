import Navbar from "../components/Navbar"


const Home = () => {

  const stringvalue = "React Home Page"

  const yearbyprocess = 2000
  


  return (
    <>
    
    <section className="bg-amber-300 p-10 flex justify-center items-center h-100">
        <div>
            <h3>{stringvalue} </h3>
            <p>{yearbyprocess}</p>

        </div>

       
    </section>
    </>
  )
}

export default Home