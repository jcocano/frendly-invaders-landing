import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"

import Logo from "../../assets/logos/Logo.svg"
import Menu from "../../assets/icos/menu.svg"
import Close from "../../assets/icos/close.svg"


const Navbar = () => {

    const [open, setOpen] = useState(false)
    const [transparentBar, setTransparentBar] = useState(true)

    const path = useLocation()

    const printPath = () => {
        console.log(path.pathname)
        if (path.pathname != "/" && path.pathname != "/error-404" ){
            setTransparentBar(false)
        }
        else{
            setTransparentBar(true)
        }
        console.log(transparentBar)
    }

    useEffect(() =>{
        printPath()
    }, [printPath])


    return(
        <div className={`w-full fixed top-0 left-0 ${transparentBar === true ? "bg-transparent": "bg-fi-gray"} `}>
            <div className="lg:flex items-center justify-between my-4 px-7 lg:px-10">
                <div>
                    <button onClick={() => window.location.replace("/")}>
                        <img className="w-32 md:w-40" src={Logo} alt="Logo Frendly Invaders" />
                    </button>
                </div>
                <div className="absolute right-6 top-10 md:top-11 lg:hidden">
                    <button onClick={()=>setOpen(!open)}>
                        <img className="drop-shadow-dred active:drop-shadow-none w-8 md:w-10" src={open ? Close:Menu}/>
                    </button>
                </div>
                <ul onClick={()=> setOpen(false)} className={`lg:flex lg:items-center absolute lg:static  lg:z-auto z-[-1] backdrop-filter backdrop-blur-lg bg-opacity-30 lg:backdrop-filter-none lg:backdrop-blur-none lg:bg-opacity-0 left-0 w-full lg:w-auto lg:px-0 px-9 transition-all duration-500 ease-in text-center lg:py-0 pt-5 pb-36  ${open ? 'top-0 opacity-100':'top-[-690px] opacity-0'} lg:opacity-100`}>
                    <li className="menuli font-marvin text-xl text-fi-yellow duration-300 lg:ml-8 lg:my-0 my-16 lg:pt-0 pt-20"><NavLink className={({isActive}) => (isActive ? "drop-shadow-dred" : "hover:drop-shadow-dred" )} to="/">Home</NavLink></li>
                    <li className="menuli font-marvin text-xl text-fi-yellow duration-300 lg:ml-8 lg:my-0 my-16"><NavLink className={({isActive}) => (isActive ? "drop-shadow-dred" : "hover:drop-shadow-dred" )} to="/frendly-invaders">Frendly Invaders</NavLink></li>
                    <li className="menuli font-marvin text-xl text-fi-yellow duration-300 lg:ml-8 lg:my-0 my-16"><NavLink className={({isActive}) => (isActive ? "drop-shadow-dred" : "hover:drop-shadow-dred" )} to="/invasion-plan">Invasion Plan</NavLink></li>
                    <li className="menuli font-marvin text-xl text-fi-yellow duration-300 lg:ml-8 lg:my-0 my-16 lg:pb-0 pb-20"><NavLink className={({isActive}) => (isActive ? "drop-shadow-dred" : "hover:drop-shadow-dred" )} to="/armory">Armory</NavLink></li>
                </ul>
            </div>
        </div>
)}

export default Navbar