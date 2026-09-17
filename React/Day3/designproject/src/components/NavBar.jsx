
import LogoImg from '../assets/vite.svg'
const NavBar = ()=>{
    return (<>
     
     <div className="bg-blue-700 text-white p-2 flex justify-between items-center">
        <div className="logo">
             <Logo  />
        </div>
        <div className="flex gap-5 text-white">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Help</a>
        </div>
     </div>

    
    
    </>)
}

export default NavBar



export const Logo = ()=>{
    return (<>
     
        <img  className="w-20 p-1" src={LogoImg}    alt="" />
      
    </>)
}