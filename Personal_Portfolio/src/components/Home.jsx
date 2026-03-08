import React from "react";

const Home = () =>{


return (
<>
{/* <div className=" flex  ">

       <div className="mt-20 h-140 flex justify-start items-start p-10  w-full">

 
            <div className="profile-container flex bg-white/5 backdrop-blur-xl rounded-full p-5   border border-white/20   ">

                <h1 className="text-2xl font-extrabold text-white p-2 ">
                    Hi, I'm Prasath
                    </h1>
                    <p className="text-2xl font-semibold p-2 ">
                    Full Stack Web Developer
                    </p>
            </div>
    
       </div>
                  
</div> */}

  <div className="relative min-h-screen flex items-center overflow-hidden bg-black ">

      {/* Glow Background */}
      <div className="absolute w-[600px] h-[600px] bg-white/20 blur-[180px] rounded-full top-[-200px] left-[-200px] animate-float"></div>

      <div className="absolute w-[500px] h-[500px] bg-blue-500/50 blur-[160px] rounded-full bottom-[-200px] right-[-100px] animate-float2"></div>

      <div className="absolute w-[400px] h-[400px] bg-purple-500/30 blur-[150px] rounded-full top-[40%] left-[40%] animate-float3"></div>

      {/* Content */}
      {/* <div className="relative z-10 w-full px-10">

        <div className="profile-container flex bg-white/5 backdrop-blur-xl rounded-full p-6 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] w-fit">

          <div>
            <h1 className="text-3xl font-extrabold text-white">
              Hi, I'm Prasath
            </h1>

            <p className="text-xl text-gray-300 mt-1">
              Full Stack Web Developer
            </p>
          </div>

        </div>

      </div> */}


         <div className="mt-20 h-140 flex justify-start items-start p-10  w-full">

 
           <div className="profile-container flex bg-white/5 backdrop-blur-xl rounded-full p-6 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] ">
          
            <h1 className="text-2xl font-extrabold text-white p-2">
              Hi, I'm Prasath 
            </h1>

            <p className="text-2xl text-gray-300 p-2">
              Full Stack Web Developer
            </p>
         

            </div>

            
    
       </div>


    </div>
</>

)

}


export default Home;