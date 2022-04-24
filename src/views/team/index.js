import Pablo from "../../assets/team/Pablo.png"
import Nico from "../../assets/team/Nico.png"
import Yamil from "../../assets/team/Yamil.png"
import Ivan from "../../assets/team/Ivan.png"
import Jesus from "../../assets/team/Jesus.png"


const Team = () =>{
    
    
    return(
        <div className="grid grid-cols-2 gap-y-5 gap-x-14 mx-auto mt-8 md:grid-cols-3 md:gap-x-32 lg:grid-cols-5 lg:gap-x-28">
            <div className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Nico}  alt=""/>
                <p className="font-marvin  text-fi-red">@kingvader_eth</p>
                <p className="font-poppins text-fi-black">Co-Founder</p>
            </div>
            <div className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Pablo} alt="" />
                <p className="font-marvin  text-fi-red">@PabloVazAl</p>
                <p className="font-poppins text-fi-black">Co-Founder</p>
            </div>
            <div className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Yamil} alt="" />
                <p className="font-marvin  text-fi-red">@yamyazz</p>
                <p className="font-poppins text-fi-black">Illustration Artist</p>
            </div>
            <div className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Jesus} alt="" />
                <p className="font-marvin  text-fi-red">@jcocano</p>
                <p className="font-poppins text-fi-black">Full Stack Dev</p>
            </div>
            <div className="flex flex-col col-span-2 md:col-span-1 text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Ivan}  alt=""/>
                <p className="font-marvin  text-fi-red">@ivan_laspada</p>
                <p className="font-poppins text-fi-black">UI/UX Designer</p>
            </div>
        </div>

)}

export default Team