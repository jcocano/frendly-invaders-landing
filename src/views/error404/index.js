import Banner404 from "../../assets/backgrounds/404-desktop.png"
import Banner404m from "../../assets/backgrounds/404-mobil.png"

const Error404 = () => {
    return(
    <section>
          <div className="flex md:hidden duration-500">
             <img className="absolute top-0 left-0 w-full h-full object-cover z-[-3]" src={Banner404m} alt="Backround"/>
            </div>
            <div className="tablet-container duration-500">
             <img className="md:absolute top-0 left-0 w-full h-full object-cover z-[-3]" src={Banner404} alt="Backround"/>
            </div>
    </section>

)}

export default Error404