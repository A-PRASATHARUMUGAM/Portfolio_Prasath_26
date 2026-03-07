import React from "react"


const Navbar= ()=>{

    return (
        <>
            <div className="nav-container  border-white flex justify-center  items-center p-4  ">
 
                     <div className="navbar flex items-center px-6 py-3 
                         bg-white/10 backdrop-blur-xl 
                        border border-white/20 
                        rounded-full shadow-lg  font-line  cursor-pointer text-white ">

                        <a href="#" className="mx-4  hover:border hover:shadow-lg  hover:bg-white/10  hover:backdrop-blur-xl  rounded-full hover:border-white/40   hover:px-4 hover:py-1 flex justify-center items-center hover:font-semibold duration-300 ease">
                              Home 
                        </a>
                        <a href="#" className="mx-4 hover:border hover:shadow-lg  hover:bg-white/10 hover:backdrop-blur-xl  rounded-full hover:border-white/40    hover:px-4 hover:py-1 flex justify-center items-center hover:font-semibold duration-300 ease">
                              About 
                        </a>
                        <a href="#" className="mx-4    hover:border hover:shadow-lg  hover:bg-white/10 hover:backdrop-blur-xl  rounded-full hover:border-white/40   hover:px-4 hover:py-1 flex justify-center items-center hover:font-semibold duration-300 ease">
                              Service 
                        </a>
                        <a href="#" className="mx-4    hover:border hover:shadow-lg  hover:bg-white/10 hover:backdrop-blur-xl  rounded-full hover:border-white/40  hover:px-4 hover:py-1 flex justify-center items-center hover:font-semibold duration-300 ease">
                              Project 
                        </a>
                        <a href="#" className="mx-4 hover:border hover:shadow-lg  hover:bg-white/10 hover:backdrop-blur-xl  rounded-full hover:border-white/40   hover:px-4 hover:py-1 flex justify-center items-center hover:font-semibold duration-300 ease">
                              Contact 
                        </a>
                </div>
            </div>

        </>
    )

}

export default Navbar;

