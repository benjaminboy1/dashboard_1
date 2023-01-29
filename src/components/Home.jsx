
import React, { useState } from "react";
import { BiLeftIndent, BiRightIndent, BiAnalyse, BiLogIn } from 'react-icons/bi';
import { AiFillDashboard,AiFillIdcard, AiOutlineSave, AiFillBook, AiOutlineSetting, AiOutlineMessage } from 'react-icons/ai';
import { Link } from "react-router-dom";






const Home = () => {
        const menus = [
            {name: "dashboard", link: "/", icon: AiFillDashboard},
            {name: "Messages", link: "/", icon: AiOutlineMessage},
            {name: "Saved", link: "/", icon: AiOutlineSave},
            {name: "Card", link: "/", icon: AiFillIdcard,  margin: true },
            {name: "Analystic", link: "/", icon: BiAnalyse,},
            {name: "Fille", link: "/", icon: AiFillBook},
            {name: "Setting", link: "/", icon: AiOutlineSetting, margin: true },
            {name: "Login", link: "/", icon: BiLogIn},
        ]

    const [open, setOpen] = useState(true);
    return (
        <div>
        <section className=" flex gap-6">
            <div className={` bg-slate min-h-screen w-72 ${open ? 'w-72' : 'w-16'} duration-500 text-gray-100 px-4 `}>
                <div className="py-3 flex justify-end"> 
                    
                    {/**btn toggle */}
                    <div className="cursor-pointer" onClick={()=>setOpen(!open)}>
                    { open ? <BiLeftIndent size={26} /> : <BiRightIndent size={26} />}
                    </div>
                    
                    
                </div>
                    <div className="mt-4 flex flex-col gap-4 mt-10 relative text-white" >   
                    {
                        menus?.map((menu,i)=>(
                            <Link to={menu?.link} key={i} className={` ${menu?.margin && "mt-5" } group flex items-center text-sm gap-5 font-medium p-2 hover:bg-gray-500 rounded-md`}>
                            <div>
                            {React.createElement(menu?.icon, { size: "20"})}
                            </div>
                        <h2 
                        style={{transitionDelay: `${i + 2}00ms`,}} 
                        className={`${!open && "opacity-0 translate-x-28 overflow-hidden"} whitespace-pre duration-500 `}>{menu?.name}
                        </h2>
                        <h2 className={` ${open && "hidden"} absolute bg-gray-200 left-48 font-semibold whitespace-pre text-gray-900 
                        rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1
                        group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                            {menu?.name}
                        </h2>
                        </Link>
                        ))
                    }
                 
                    </div>
               
            </div>
            <div className="m-3 text-xl text-gray-900 font-semibold">
                BENJAMIN
            
                 
            </div>
        </section>
       
        </div>
    
    )
}

export default Home;