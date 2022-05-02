
import Team from "../team"
import Footer from "../footer"

import B2 from "../../assets/banners/b2-1024.png"



const FrendlyIvanders= () =>{


    return(
       
        <section className="flex flex-col pt-36 mx-10 justify-items-center">
        <h2 className="font-marvin text-fi-red text-xl">Description</h2>
        <p className="pt-2.5 font-poppins text-fi-black">
            The Frendly Invaders are a collection of 10,000 extraterrestial especies, cast out from their home 
            planet… and by chance they have arrived at The Metaverse. Join the horde and immerse yourself in the 
            journey of the Frendly Invaders as they set to find a new place to call home.
        </p>
        <div className="flex justify-center">
           <img className="min-w-[300px] max-w-[1000px] mt-5" src={B2} alt="Image 1" />
        </div>
        <h2 className="font-marvin text-fi-red text-xl pt-10">meet the team</h2>
        <Team />        
        <Footer />
        </section>
        
      
    )
}

export default FrendlyIvanders