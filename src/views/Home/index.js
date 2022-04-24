import Refresh from "../../assets/icos/refresh-tablet.svg"

import MobilBack1 from "../../assets/backgrounds/home-mob-1.png"
import MobilBack2 from "../../assets/backgrounds/home-mob-2.png"
import MobilBack3 from "../../assets/backgrounds/home-mob-3.png"

import Back1 from "../../assets/backgrounds/home-tab1.png"
import Back2 from "../../assets/backgrounds/home-tab2.png"
import Back3 from "../../assets/backgrounds/home-tab3.png"

import { useState } from "react"


const Home = () => {

    const [mimages, setMimages] = useState(0)
    const [timages, setTimages] = useState(0)

    const mobImages = [
        MobilBack1,
        MobilBack2,
        MobilBack3
    ]

    const backs = [
        Back1,
        Back2,
        Back3
    ]

    const nextImage = () => {
        setMimages((mimages + 1) % mobImages.length)
        setTimages((timages + 1) % backs.length)

    }

    return(
        <>
        <section className="">
            <div className="flex md:hidden duration-500">
             <img className="absolute top-0 left-0 w-full h-full object-cover z-[-3]" src={mobImages[mimages]} alt="Backround"/>
            </div>
            <div className="tablet-container duration-500">
             <img className="md:absolute top-0 left-0 w-full h-full object-cover z-[-3]" src={backs[timages]} alt="Backround"/>
            </div>
          
            <button onClick={nextImage} className="absolute w-14 h-14 bg-fi-yellow drop-shadow-dred active:drop-shadow-none duration-500 bottom-10 right-10 z-[-2] rounded-lg items-center lg:w-48 lg:drop-shadow-dred2">
                <img className="absolute top-0 left-0 right-0 bottom-0 m-auto lg:hidden" src={Refresh} alt="Refresh" />
                <span className="main-span font-marvin text-fi-black">Click Here!</span>
            </button>
        </section>
        </>
)}

export default Home