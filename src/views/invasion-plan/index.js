import Tank from "../../assets/banners/tank.png"
import Table from "../table"
import Footer from "../footer"

const InvasionPlan = () => {
    return(
        <>
        <section className="mx-5 pt-36" >
            <div className="flex flex-col">
                <h2 className="font-marvin text-fi-red text-xl">mindmap</h2>
                 <p className="pt-2.5 font-poppins text-fi-black">
                The Frendly Invaders are a collection of 10,000 extraterrestial especies, cast out from their 
                home planet… and by chance they have arrived at The Metaverse. Join the horde and immerse yourself 
                in the journey of the Frendly Invaders as they set to find a new place to call home.
                 </p>
                <div className="mt-5 w-64 self-center">
                <img src={Tank} alt="Frendly Red Tank"/>
                </div>
                <Table/>
            </div>
        </section>
        <Footer className="mx-0"/>
        </>
)}

export default InvasionPlan