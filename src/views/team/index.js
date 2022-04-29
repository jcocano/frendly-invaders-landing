import Pablo from "../../assets/team/Pablo.png"
import Nico from "../../assets/team/Nico.png"
import Yamil from "../../assets/team/Yamil.png"
import Ivan from "../../assets/team/Ivan.png"
import Jesus from "../../assets/team/Jesus.png"

import PabloFull from "../../assets/team/Pablo-Full.png"
import NicoFull from "../../assets/team/Nico-Full.png"
import YamilFull from "../../assets/team/Yamil-Full.png"
import IvanFull from "../../assets/team/Ivan-Full.png"
import JesusFull from "../../assets/team/Jesus-Full.png"

import CloseTeam from "../../assets/icos/close2.svg"
import { useState } from "react"



const Team = () =>{
    
    const [openNico, setOpenNico] = useState(false)
    const [openPablo, setOpenPablo] = useState(false)
    const [openJesus, setOpenJesus] = useState(false)
    const [openYamil, setOpenYamil] = useState(false)
    const [openIvan, setOpenIvan] = useState(false)

    
    return(
        <div className="grid grid-cols-2 gap-y-5 gap-x-14 mx-auto mt-8 md:grid-cols-3 md:gap-x-32 lg:grid-cols-5 lg:gap-x-28">
            <div onClick={()=> setOpenNico(!openNico)} className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Nico}  alt=""/>
                <p className="font-marvin  text-fi-red">@kingvader_eth</p>
                <p className="font-poppins text-fi-black">Co-Founder</p>
            </div>

            <div onClick={()=> setOpenPablo(!openPablo)} className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Pablo} alt="" />
                <p className="font-marvin  text-fi-red">@MetaOne_</p>
                <p className="font-poppins text-fi-black">Co-Founder</p>
            </div>

            <div onClick={()=> setOpenJesus(!openJesus)} className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Jesus} alt="" />
                <p className="font-marvin  text-fi-red">@jcocano</p>
                <p className="font-poppins text-fi-black">Full Stack Dev</p>
            </div>

            <div onClick={()=> setOpenYamil(!openYamil)}  className="flex flex-col text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Yamil} alt="" />
                <p className="font-marvin  text-fi-red">@yamyazz</p>
                <p className="font-poppins text-fi-black">Illustration Artist</p>
            </div>

            <div onClick={()=> setOpenIvan(!openIvan)} className="flex flex-col col-span-2 md:col-span-1 text-center items-center cursor-pointer">
                <img className="w-24 md:w-32" src={Ivan}  alt=""/>
                <p className="font-marvin  text-fi-red">@ivan_laspada</p>
                <p className="font-poppins text-fi-black">UI/UX Designer</p>
            </div>

            <div className={`fixed flex top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 duration-500 ${openNico ? "" : "hidden" }`}>
                <div className="flex flex-col w-full h-screen justify-center items-center mx-7 -mt-2">
                <div className="hidden lg:flex place-content-end w-9/12 duration-500">
                <button onClick={() => setOpenNico(!openNico)} >
                <img className="mb-5 " src={CloseTeam}/>
                </button>
                </div>
                <div className="flex flex-col lg:flex-row w-10/12 bg-fi-red2 rounded-2xl">
                    <img className="w-60 mx-auto my-auto py-5 px-5 lg:w-72 lg:mx-0" src={NicoFull} alt="@kingvader_eth" />
                    <div className="flex flex-col md:mx-auto md:my-auto ">
                    <h2 className="font-poppins text-xl text-center text-fi-gray lg:text-4xl lg:mt-5">@kingvader_eth</h2>
                    <h3 className="font-poppins text-center text-fi-gray pb-3 lg:pt-1 lg:text-xl">Co-Founder</h3>
                    <p className="font-poppins text-center text-fi-gray text-sm md:text-base pb-5 px-5 md:px-10">
                    CPG entrepreneur, Web3 degen, professional bag hodler, golf addict. 
                    Always building cool shit.
                    </p>
                    <div className="flex mb-5 justify-center items-center lg:mt-10">
                    <a href="https://twitter.com/KingVader_eth" className="mx-2">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9344 1.63297C16.3116 1.90892 15.6427 2.09537 14.9394 2.17965C15.665 1.74543 16.2079 1.06203 16.4668 0.256946C15.785 0.661915 15.0388 0.946968 14.2607 1.09971C13.7374 0.541 13.0443 0.170675 12.289 0.0462347C11.5337 -0.0782057 10.7584 0.0502006 10.0836 0.411518C9.4087 0.772835 8.87201 1.34685 8.55681 2.04444C8.24162 2.74203 8.16555 3.52416 8.34041 4.26942C6.95894 4.20005 5.60748 3.84099 4.37376 3.21551C3.14003 2.59004 2.05161 1.71215 1.17913 0.638802C0.880804 1.15341 0.709267 1.75006 0.709267 2.3855C0.708934 2.95753 0.849802 3.5208 1.11937 4.02534C1.38894 4.52987 1.77888 4.96007 2.25459 5.27776C1.70289 5.2602 1.16337 5.11113 0.680926 4.84295V4.8877C0.680871 5.69 0.958393 6.46761 1.4664 7.08859C1.97441 7.70956 2.68162 8.13566 3.46803 8.29457C2.95624 8.43308 2.41967 8.45348 1.89884 8.35423C2.12071 9.04457 2.55291 9.64824 3.13492 10.0807C3.71693 10.5132 4.41962 10.7529 5.14461 10.7662C3.9139 11.7323 2.39397 12.2564 0.829343 12.2541C0.552185 12.2542 0.275261 12.238 0 12.2056C1.58819 13.2268 3.43695 13.7687 5.3251 13.7666C11.7167 13.7666 15.2108 8.47282 15.2108 3.8816C15.2108 3.73243 15.2071 3.58178 15.2004 3.43262C15.88 2.94111 16.4667 2.33246 16.9329 1.63521L16.9344 1.63297V1.63297Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    </div>
                    </div>
                </div>
                <div className="flex place-content-end lg:hidden w-8/12">
                <button onClick={() => setOpenNico(!openNico)} >
                <img className="mt-5 " src={CloseTeam}/>
                </button>
                </div>
                </div>
            </div>

            <div className={`fixed flex top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 duration-500 ${openPablo ? "" : "hidden" }`}>
                <div className="flex flex-col w-full h-screen justify-center items-center mx-7 -mt-2">
                <div className="hidden lg:flex place-content-end w-9/12 duration-500">
                <button onClick={() => setOpenPablo(!openPablo)}>
                <img className="mb-5 duration-300" src={CloseTeam}/>
                </button>
                </div>
                <div className="flex flex-col lg:flex-row w-10/12 bg-fi-red2 rounded-2xl">
                    <img className="w-60 mx-auto my-auto py-5 px-5 lg:w-72 lg:mx-0" src={PabloFull} alt="@MetaOne_" />
                    <div className="flex flex-col md:mx-auto md:my-auto">
                    <h2 className="font-poppins text-xl text-center text-fi-gray lg:text-4xl lg:mt-5">@MetaOne_</h2>
                    <h3 className="font-poppins text-center text-fi-gray pb-3 lg:pt-1 lg:text-xl">Co-Founder</h3>
                    <p className="font-poppins text-center text-fi-gray text-sm md:text-base pb-5 px-5 md:px-10">
                    Blockchain expert, CEO of MetaOne, crypto fanatic. I have gambled my money in crypto since 2015
                    </p>
                    <div className="flex mb-5 justify-center items-center lg:mt-10">
                    <a href="https://www.instagram.com/_metaone/" className="mx-2"> 
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49772 5.66546C6.93694 5.66546 5.66323 6.9392 5.66323 8.5C5.66323 10.0608 6.93694 11.3345 8.49772 11.3345C10.0585 11.3345 11.3322 10.0608 11.3322 8.5C11.3322 6.9392 10.0585 5.66546 8.49772 5.66546ZM16.9991 8.5C16.9991 7.32621 17.0097 6.16305 16.9438 4.99138C16.8778 3.63046 16.5674 2.42264 15.5722 1.42747C14.575 0.430173 13.3693 0.121839 12.0084 0.0559198C10.8346 -0.00999972 9.67149 0.000632496 8.49984 0.000632496C7.32607 0.000632496 6.16293 -0.00999972 4.99129 0.0559198C3.63039 0.121839 2.4226 0.432299 1.42745 1.42747C0.430165 2.42477 0.121837 3.63046 0.0559188 4.99138C-0.00999953 6.16517 0.000632484 7.32833 0.000632484 8.5C0.000632484 9.67167 -0.00999953 10.837 0.0559188 12.0086C0.121837 13.3695 0.432291 14.5774 1.42745 15.5725C2.42473 16.5698 3.63039 16.8782 4.99129 16.9441C6.16506 17.01 7.3282 16.9994 8.49984 16.9994C9.67361 16.9994 10.8368 17.01 12.0084 16.9441C13.3693 16.8782 14.5771 16.5677 15.5722 15.5725C16.5695 14.5752 16.8778 13.3695 16.9438 12.0086C17.0118 10.837 16.9991 9.67379 16.9991 8.5V8.5ZM8.49772 12.8613C6.08425 12.8613 4.13647 10.9135 4.13647 8.5C4.13647 6.08649 6.08425 4.13868 8.49772 4.13868C10.9112 4.13868 12.859 6.08649 12.859 8.5C12.859 10.9135 10.9112 12.8613 8.49772 12.8613ZM13.0376 4.97862C12.4741 4.97862 12.019 4.52356 12.019 3.96006C12.019 3.39655 12.4741 2.94149 13.0376 2.94149C13.6011 2.94149 14.0561 3.39655 14.0561 3.96006C14.0563 4.09386 14.0301 4.22639 13.9789 4.35004C13.9278 4.4737 13.8528 4.58605 13.7582 4.68066C13.6636 4.77528 13.5512 4.8503 13.4276 4.90143C13.3039 4.95256 13.1714 4.97879 13.0376 4.97862V4.97862Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    <a href="https://twitter.com/MetaOne_" className="mx-2">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9344 1.63297C16.3116 1.90892 15.6427 2.09537 14.9394 2.17965C15.665 1.74543 16.2079 1.06203 16.4668 0.256946C15.785 0.661915 15.0388 0.946968 14.2607 1.09971C13.7374 0.541 13.0443 0.170675 12.289 0.0462347C11.5337 -0.0782057 10.7584 0.0502006 10.0836 0.411518C9.4087 0.772835 8.87201 1.34685 8.55681 2.04444C8.24162 2.74203 8.16555 3.52416 8.34041 4.26942C6.95894 4.20005 5.60748 3.84099 4.37376 3.21551C3.14003 2.59004 2.05161 1.71215 1.17913 0.638802C0.880804 1.15341 0.709267 1.75006 0.709267 2.3855C0.708934 2.95753 0.849802 3.5208 1.11937 4.02534C1.38894 4.52987 1.77888 4.96007 2.25459 5.27776C1.70289 5.2602 1.16337 5.11113 0.680926 4.84295V4.8877C0.680871 5.69 0.958393 6.46761 1.4664 7.08859C1.97441 7.70956 2.68162 8.13566 3.46803 8.29457C2.95624 8.43308 2.41967 8.45348 1.89884 8.35423C2.12071 9.04457 2.55291 9.64824 3.13492 10.0807C3.71693 10.5132 4.41962 10.7529 5.14461 10.7662C3.9139 11.7323 2.39397 12.2564 0.829343 12.2541C0.552185 12.2542 0.275261 12.238 0 12.2056C1.58819 13.2268 3.43695 13.7687 5.3251 13.7666C11.7167 13.7666 15.2108 8.47282 15.2108 3.8816C15.2108 3.73243 15.2071 3.58178 15.2004 3.43262C15.88 2.94111 16.4667 2.33246 16.9329 1.63521L16.9344 1.63297V1.63297Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    </div>
                    </div>
                </div>
                <div className="flex place-content-end lg:hidden w-8/12">
                <button onClick={() => setOpenPablo(!openPablo)} >
                <img className="mt-5 " src={CloseTeam}/>
                </button>
                </div>
                </div>
            </div>

            <div className={`fixed flex top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 duration-500 ${openJesus ? "" : "hidden" }`}>
                <div className="flex flex-col w-full h-screen justify-center items-center mx-7 -mt-2">
                <div className="hidden lg:flex place-content-end w-9/12 duration-500">
                <button onClick={() => setOpenJesus(!openJesus)}>
                <img className="mb-5 " src={CloseTeam}/>
                </button>
                </div>
                <div className="flex flex-col lg:flex-row w-10/12 bg-fi-red2 rounded-2xl">
                    <img className="w-60 mx-auto my-auto py-5 px-5 lg:w-72 lg:mx-0 " src={JesusFull} alt="@jcocano" />
                    <div className="flex flex-col md:mx-auto md:my-auto">
                    <h2 className="font-poppins text-xl text-center text-fi-gray  lg:text-4xl lg:mt-5">@jcocano</h2>
                    <h3 className="font-poppins text-center text-fi-gray pb-3  lg:pt-1 lg:text-xl">Full Stack Dev</h3>
                    <p className="font-poppins text-center text-fi-gray text-sm md:text-base pb-5 px-5 md:px-10 lg:pt-5">
                    CTO MetaOne, code wiz, learning geek. I'm happy to help build the future of web3.
                    </p>
                    <div className="flex mb-5 justify-center items-center lg:mt-10">
                    <a href="https://www.instagram.com/jcocano/" className="mx-2"> 
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49772 5.66546C6.93694 5.66546 5.66323 6.9392 5.66323 8.5C5.66323 10.0608 6.93694 11.3345 8.49772 11.3345C10.0585 11.3345 11.3322 10.0608 11.3322 8.5C11.3322 6.9392 10.0585 5.66546 8.49772 5.66546ZM16.9991 8.5C16.9991 7.32621 17.0097 6.16305 16.9438 4.99138C16.8778 3.63046 16.5674 2.42264 15.5722 1.42747C14.575 0.430173 13.3693 0.121839 12.0084 0.0559198C10.8346 -0.00999972 9.67149 0.000632496 8.49984 0.000632496C7.32607 0.000632496 6.16293 -0.00999972 4.99129 0.0559198C3.63039 0.121839 2.4226 0.432299 1.42745 1.42747C0.430165 2.42477 0.121837 3.63046 0.0559188 4.99138C-0.00999953 6.16517 0.000632484 7.32833 0.000632484 8.5C0.000632484 9.67167 -0.00999953 10.837 0.0559188 12.0086C0.121837 13.3695 0.432291 14.5774 1.42745 15.5725C2.42473 16.5698 3.63039 16.8782 4.99129 16.9441C6.16506 17.01 7.3282 16.9994 8.49984 16.9994C9.67361 16.9994 10.8368 17.01 12.0084 16.9441C13.3693 16.8782 14.5771 16.5677 15.5722 15.5725C16.5695 14.5752 16.8778 13.3695 16.9438 12.0086C17.0118 10.837 16.9991 9.67379 16.9991 8.5V8.5ZM8.49772 12.8613C6.08425 12.8613 4.13647 10.9135 4.13647 8.5C4.13647 6.08649 6.08425 4.13868 8.49772 4.13868C10.9112 4.13868 12.859 6.08649 12.859 8.5C12.859 10.9135 10.9112 12.8613 8.49772 12.8613ZM13.0376 4.97862C12.4741 4.97862 12.019 4.52356 12.019 3.96006C12.019 3.39655 12.4741 2.94149 13.0376 2.94149C13.6011 2.94149 14.0561 3.39655 14.0561 3.96006C14.0563 4.09386 14.0301 4.22639 13.9789 4.35004C13.9278 4.4737 13.8528 4.58605 13.7582 4.68066C13.6636 4.77528 13.5512 4.8503 13.4276 4.90143C13.3039 4.95256 13.1714 4.97879 13.0376 4.97862V4.97862Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    <a href="https://twitter.com/jcocano" className="mx-2">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9344 1.63297C16.3116 1.90892 15.6427 2.09537 14.9394 2.17965C15.665 1.74543 16.2079 1.06203 16.4668 0.256946C15.785 0.661915 15.0388 0.946968 14.2607 1.09971C13.7374 0.541 13.0443 0.170675 12.289 0.0462347C11.5337 -0.0782057 10.7584 0.0502006 10.0836 0.411518C9.4087 0.772835 8.87201 1.34685 8.55681 2.04444C8.24162 2.74203 8.16555 3.52416 8.34041 4.26942C6.95894 4.20005 5.60748 3.84099 4.37376 3.21551C3.14003 2.59004 2.05161 1.71215 1.17913 0.638802C0.880804 1.15341 0.709267 1.75006 0.709267 2.3855C0.708934 2.95753 0.849802 3.5208 1.11937 4.02534C1.38894 4.52987 1.77888 4.96007 2.25459 5.27776C1.70289 5.2602 1.16337 5.11113 0.680926 4.84295V4.8877C0.680871 5.69 0.958393 6.46761 1.4664 7.08859C1.97441 7.70956 2.68162 8.13566 3.46803 8.29457C2.95624 8.43308 2.41967 8.45348 1.89884 8.35423C2.12071 9.04457 2.55291 9.64824 3.13492 10.0807C3.71693 10.5132 4.41962 10.7529 5.14461 10.7662C3.9139 11.7323 2.39397 12.2564 0.829343 12.2541C0.552185 12.2542 0.275261 12.238 0 12.2056C1.58819 13.2268 3.43695 13.7687 5.3251 13.7666C11.7167 13.7666 15.2108 8.47282 15.2108 3.8816C15.2108 3.73243 15.2071 3.58178 15.2004 3.43262C15.88 2.94111 16.4667 2.33246 16.9329 1.63521L16.9344 1.63297V1.63297Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    </div>
                    </div>
                </div>
                <div className="flex place-content-end lg:hidden w-8/12">
                <button onClick={() => setOpenJesus(!openJesus)} >
                <img className="mt-5 " src={CloseTeam}/>
                </button>
                </div>
                </div>
            </div>

            <div className={`fixed flex top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 duration-500 ${openYamil ? "" : "hidden" }`}>
                <div className="flex flex-col w-full h-screen justify-center items-center mx-7 -mt-2">
                <div className="hidden lg:flex place-content-end w-9/12 duration-500">
                <button onClick={() => setOpenYamil(!openYamil)} >
                <img className="mb-5 " src={CloseTeam}/>
                </button>
                </div>
                <div className="flex flex-col lg:flex-row w-10/12 bg-fi-red2 rounded-2xl">
                    <img className="w-60 mx-auto my-auto py-5 px-5 lg:w-72 lg:mx-0" src={YamilFull} alt="@yamyazz" />
                    <div className="flex flex-col md:mx-auto md:my-auto">
                    <h2 className="font-poppins text-xl text-center text-fi-gray lg:text-4xl lg:mt-5">@yamyazz</h2>
                    <h3 className="font-poppins text-center text-fi-gray pb-3 lg:pt-1 lg:text-xl">Illustration Artist</h3>
                    <p className="font-poppins text-center text-fi-gray text-sm md:text-base pb-5 px-5 md:px-10">
                    Professor in fine arts, master ilustrator in both screen and paper, low-key philosopher. 
                    I’m currently living in the Frendly Universe building weapons and changing flat tiers for the invaders.
                    </p>
                    <div className="flex mb-5 justify-center items-center lg:mt-10">
                    <a href="https://www.instagram.com/yazzyulan/" className="mx-2"> 
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.49772 5.66546C6.93694 5.66546 5.66323 6.9392 5.66323 8.5C5.66323 10.0608 6.93694 11.3345 8.49772 11.3345C10.0585 11.3345 11.3322 10.0608 11.3322 8.5C11.3322 6.9392 10.0585 5.66546 8.49772 5.66546ZM16.9991 8.5C16.9991 7.32621 17.0097 6.16305 16.9438 4.99138C16.8778 3.63046 16.5674 2.42264 15.5722 1.42747C14.575 0.430173 13.3693 0.121839 12.0084 0.0559198C10.8346 -0.00999972 9.67149 0.000632496 8.49984 0.000632496C7.32607 0.000632496 6.16293 -0.00999972 4.99129 0.0559198C3.63039 0.121839 2.4226 0.432299 1.42745 1.42747C0.430165 2.42477 0.121837 3.63046 0.0559188 4.99138C-0.00999953 6.16517 0.000632484 7.32833 0.000632484 8.5C0.000632484 9.67167 -0.00999953 10.837 0.0559188 12.0086C0.121837 13.3695 0.432291 14.5774 1.42745 15.5725C2.42473 16.5698 3.63039 16.8782 4.99129 16.9441C6.16506 17.01 7.3282 16.9994 8.49984 16.9994C9.67361 16.9994 10.8368 17.01 12.0084 16.9441C13.3693 16.8782 14.5771 16.5677 15.5722 15.5725C16.5695 14.5752 16.8778 13.3695 16.9438 12.0086C17.0118 10.837 16.9991 9.67379 16.9991 8.5V8.5ZM8.49772 12.8613C6.08425 12.8613 4.13647 10.9135 4.13647 8.5C4.13647 6.08649 6.08425 4.13868 8.49772 4.13868C10.9112 4.13868 12.859 6.08649 12.859 8.5C12.859 10.9135 10.9112 12.8613 8.49772 12.8613ZM13.0376 4.97862C12.4741 4.97862 12.019 4.52356 12.019 3.96006C12.019 3.39655 12.4741 2.94149 13.0376 2.94149C13.6011 2.94149 14.0561 3.39655 14.0561 3.96006C14.0563 4.09386 14.0301 4.22639 13.9789 4.35004C13.9278 4.4737 13.8528 4.58605 13.7582 4.68066C13.6636 4.77528 13.5512 4.8503 13.4276 4.90143C13.3039 4.95256 13.1714 4.97879 13.0376 4.97862V4.97862Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    <a href="https://twitter.com/YamYazz" className="mx-2">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9344 1.63297C16.3116 1.90892 15.6427 2.09537 14.9394 2.17965C15.665 1.74543 16.2079 1.06203 16.4668 0.256946C15.785 0.661915 15.0388 0.946968 14.2607 1.09971C13.7374 0.541 13.0443 0.170675 12.289 0.0462347C11.5337 -0.0782057 10.7584 0.0502006 10.0836 0.411518C9.4087 0.772835 8.87201 1.34685 8.55681 2.04444C8.24162 2.74203 8.16555 3.52416 8.34041 4.26942C6.95894 4.20005 5.60748 3.84099 4.37376 3.21551C3.14003 2.59004 2.05161 1.71215 1.17913 0.638802C0.880804 1.15341 0.709267 1.75006 0.709267 2.3855C0.708934 2.95753 0.849802 3.5208 1.11937 4.02534C1.38894 4.52987 1.77888 4.96007 2.25459 5.27776C1.70289 5.2602 1.16337 5.11113 0.680926 4.84295V4.8877C0.680871 5.69 0.958393 6.46761 1.4664 7.08859C1.97441 7.70956 2.68162 8.13566 3.46803 8.29457C2.95624 8.43308 2.41967 8.45348 1.89884 8.35423C2.12071 9.04457 2.55291 9.64824 3.13492 10.0807C3.71693 10.5132 4.41962 10.7529 5.14461 10.7662C3.9139 11.7323 2.39397 12.2564 0.829343 12.2541C0.552185 12.2542 0.275261 12.238 0 12.2056C1.58819 13.2268 3.43695 13.7687 5.3251 13.7666C11.7167 13.7666 15.2108 8.47282 15.2108 3.8816C15.2108 3.73243 15.2071 3.58178 15.2004 3.43262C15.88 2.94111 16.4667 2.33246 16.9329 1.63521L16.9344 1.63297V1.63297Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    </div>
                    </div>
                </div>
                <div className="flex place-content-end lg:hidden w-8/12">
                <button onClick={() => setOpenYamil(!openYamil)} >
                <img className="mt-5 " src={CloseTeam}/>
                </button>
                </div>
                </div>
            </div>

            <div className={`fixed flex top-0 left-0 w-full h-screen backdrop-filter backdrop-blur-lg bg-opacity-30 z-10 duration-500 ${openIvan ? "" : "hidden" }`}>
                <div className="flex flex-col w-full h-screen justify-center items-center mx-7 -mt-2">
                <div className="hidden lg:flex place-content-end w-9/12 duration-500">
                <button onClick={() => setOpenIvan(!openIvan)} >
                <img className="mb-5 " src={CloseTeam}/>
                </button>
                </div>
                <div className="flex flex-col lg:flex-row w-10/12 bg-fi-red2 rounded-2xl">
                    <img className="w-60 mx-auto my-auto py-5 px-5 lg:w-72 lg:mx-0" src={IvanFull} alt="@ivan_laspada" />
                    <div className="flex flex-col md:mx-auto md:my-auto">
                    <h2 className="font-poppins text-xl text-center text-fi-gray lg:text-4xl lg:mt-5">@ivan_laspada</h2>
                    <h3 className="font-poppins text-center text-fi-gray pb-3 lg:pt-1 lg:text-xl">UI/UX Designer</h3>
                    <p className="font-poppins text-center text-fi-gray text-sm md:text-base pb-5 px-5 md:px-10">
                    UX/UI designer, mastering the craft of digital design, its all about the user. 
                    I’m looking to creatively connect humans and computers.
                    </p>
                    <div className="flex mb-5 justify-center items-center lg:mt-10">
                    <a href="https://www.behance.net/ivanlaspada" className="mx-2"> 
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_420_16)">
                    <path d="M16.5 5.25H11.25V3.75H16.5V5.25ZM17.7945 12.75C17.463 13.7228 16.2728 15 13.9688 15C11.6633 15 9.79575 13.7032 9.79575 10.7437C9.79575 7.81125 11.5395 6.30375 13.8953 6.30375C16.2068 6.30375 17.6183 7.64025 17.9265 9.62325C17.985 10.0028 18.0082 10.5142 17.9977 11.2282H11.9775C12.075 13.6365 14.5898 13.7122 15.4185 12.75H17.7945ZM12.03 9.75H15.7537C15.675 8.58975 14.9017 8.08575 13.896 8.08575C12.7965 8.08575 12.1883 8.66175 12.03 9.75ZM4.8495 14.991H0V3.76575H5.21475C9.32175 3.8265 9.39975 7.84875 7.25475 8.94525C9.8505 9.89025 9.9375 14.991 4.8495 14.991V14.991ZM2.25 8.25H4.938C6.819 8.25 7.1175 6 4.704 6H2.25V8.25ZM4.79325 10.5H2.25V12.762H4.75575C7.047 12.762 6.90675 10.5 4.79325 10.5V10.5Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_420_16">
                    <rect width="18" height="18" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    </a>
                    <a href="https://twitter.com/ivan_laspada" className="mx-2">
                    <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.9344 1.63297C16.3116 1.90892 15.6427 2.09537 14.9394 2.17965C15.665 1.74543 16.2079 1.06203 16.4668 0.256946C15.785 0.661915 15.0388 0.946968 14.2607 1.09971C13.7374 0.541 13.0443 0.170675 12.289 0.0462347C11.5337 -0.0782057 10.7584 0.0502006 10.0836 0.411518C9.4087 0.772835 8.87201 1.34685 8.55681 2.04444C8.24162 2.74203 8.16555 3.52416 8.34041 4.26942C6.95894 4.20005 5.60748 3.84099 4.37376 3.21551C3.14003 2.59004 2.05161 1.71215 1.17913 0.638802C0.880804 1.15341 0.709267 1.75006 0.709267 2.3855C0.708934 2.95753 0.849802 3.5208 1.11937 4.02534C1.38894 4.52987 1.77888 4.96007 2.25459 5.27776C1.70289 5.2602 1.16337 5.11113 0.680926 4.84295V4.8877C0.680871 5.69 0.958393 6.46761 1.4664 7.08859C1.97441 7.70956 2.68162 8.13566 3.46803 8.29457C2.95624 8.43308 2.41967 8.45348 1.89884 8.35423C2.12071 9.04457 2.55291 9.64824 3.13492 10.0807C3.71693 10.5132 4.41962 10.7529 5.14461 10.7662C3.9139 11.7323 2.39397 12.2564 0.829343 12.2541C0.552185 12.2542 0.275261 12.238 0 12.2056C1.58819 13.2268 3.43695 13.7687 5.3251 13.7666C11.7167 13.7666 15.2108 8.47282 15.2108 3.8816C15.2108 3.73243 15.2071 3.58178 15.2004 3.43262C15.88 2.94111 16.4667 2.33246 16.9329 1.63521L16.9344 1.63297V1.63297Z" 
                    className="hover:fill-fi-black duration-300"
                    fill="#F2F2E8"/>
                    </svg>
                    </a>
                    </div>
                    </div>
                </div>
                <div className="flex place-content-end lg:hidden w-8/12">
                <button onClick={() => setOpenIvan(!openIvan)} >
                <img className="mt-5 " src={CloseTeam}/>
                </button>
                </div>
                </div>
            </div>
           


        </div>

)}

export default Team