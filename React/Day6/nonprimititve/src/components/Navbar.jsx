

const Navbar = (props) => {

    // console.log(props);

    // const {datavaanupuren,newdatasend} = props
    
  return (
    <div className="bg-orange-500 p-10 h-100">
        <h1>NavBar</h1>
       
       <p>{props.datavaanupuren.name}</p>
       <h2>{props.newdatasend}</h2>

    </div>
  )
}

export default Navbar