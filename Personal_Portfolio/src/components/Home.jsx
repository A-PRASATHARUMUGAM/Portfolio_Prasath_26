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

  <div className="relative min-h-screen flex items-center overflow-hidden">

            <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 backdrop-blur-[100px] z-10"></div>

            {/* The "Primary" Glow */}
            <div className="absolute w-[600px] h-[600px] bg-indigo-500/40 rounded-full mix-blend-screen animate-blob top-[-10%] left-[-10%] filter blur-[120px]"></div>

            {/* The "Accent" Glow */}
            <div className="absolute w-[500px] h-[500px] bg-fuchsia-500/30 rounded-full mix-blend-multiply animate-blob animation-delay-2000 bottom-[-10%] right-[-5%] filter blur-[120px]"></div>

            {/* The "Deep" Glow */}
            <div className="absolute w-[450px] h-[450px] bg-blue-600/30 rounded-full mix-blend-screen animate-blob animation-delay-4000 top-[30%] left-[30%] filter blur-[120px]"></div>
            </div>
 
      {/* Main Content */}

         <div className="mt-20 h-140 flex justify-start items-start p-10  w-full">

 
           <div className="profile-container flex bg-white/5 backdrop-blur-xl rounded-full p-6 border border-white/20 shadow-[0_0_40px_rgba(255,255,255,0.1)] ">
          
            <h1 className="text-xl font-extrabold text-white px-2">
              Hi, I'm Prasath 
            </h1>

            <p className="text-xl text-gray-300 px-2">
              Full Stack Web Developer
            </p>
         

            </div>

            
    
       </div>


    </div>
</>

)

}


export default Home;