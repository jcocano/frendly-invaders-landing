import Tank from "../../assets/banners/tank.png"
import Asset1 from "../../assets/banners/b1-1024.png"

import Table from "../table"
import Footer from "../footer"

const InvasionPlan = () => {
    return(
        <>
        <section className="mx-10 pt-36" >
            <div className="flex flex-col">
                <h2 className="font-marvin text-fi-red text-xl">blueprint</h2>
                 <p className="pt-2.5 font-poppins text-fi-black">
                The Frendly Invaders are a collection of 10,000 extraterrestial especies, cast out from their 
                home planet… and by chance they have arrived at The Metaverse. Join the horde and immerse yourself 
                in the journey of the Frendly Invaders as they set to find a new place to call home.
                 </p>
                <div className="mt-5 self-center md:flex md:justify-around">
                <img className="md:h-80 md:ml-14 lg:ml-0" src={Tank} alt="Frendly Red Tank"/>
                <img className="hidden md:block md:h-80 " src={Asset1} alt="flag" />
                </div>
                <Table/>
            </div>
        </section>
        <Footer className="mx-0"/>
        </>
)}

export default InvasionPlan