import React from "react"


const Navbar= ()=>{

    return (
        <>
            <div className="nav-container  border-white flex justify-center  items-center p-4  ">
 
                <div className="navbar  font-line border-2 rounded-4xl  flex py-2 px-8 justify-center cursor-pointer text-white ">
                        <a href="" className="mx-4  hover:font-semibold duration-300 ease">
                             <span>
                                
                            </span> 
                            <p>  Home</p>
                          
                           
                            
                        </a>
                        <a href="#" className="mx-4 hover:font-semibold duration-300 ease">About</a> 
                        <a href="#" className="mx-4 hover:font-semibold duration-300 ease">Service</a> 
                        <a href="#" className="mx-4 hover:font-semibold duration-300 ease">Projects</a> 
                        <a href="#" className="mx-4 hover:font-semibold duration-300 ease">Contact</a>
                </div>
            </div>
        </>
    )

}

export default Navbar;

