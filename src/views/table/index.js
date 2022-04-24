import { useState } from "react"


const Table = () => {

    const [tableState, getTableState] = useState(1)


    const setTableState = (index) =>{
        getTableState(index)
        console.log(index)
    }

    return(
        <div className="ftable mx-3 mt-3 bg-fi-yellow rounded-3xl">
        <div className="table--container flex flex-row-reverse justify-between md:justify-around px-6 mt-7">
            <div onClick={() => setTableState(1)} className={`flex flex-col pt-2.5 duration-500 items-end cursor-pointer ease-in-out `}>
                <div className={`w-6 h-1.5 bg-fi-black ${tableState === 1 ? "block": "hidden"} duration-500`}></div>
                <p className={`font-marvin ${tableState === 1 ? "text-base text-fi-red" : "text-sm text-fi-lightred pt-1.5"} duration-500`}>Community</p>
            </div>
            <div onClick={() => setTableState(2)} className={`flex flex-col pt-2.5 duration-500 items-end cursor-pointer ease-in-out `}>
                <div className={`w-6 h-1.5 bg-fi-black ${tableState === 2 ? "block": "hidden"} duration-500`}></div>
                <p className={`font-marvin ${tableState === 2 ? "text-base text-fi-red" : "text-sm text-fi-lightred pt-1.5"} duration-500`}>Metaverse</p>
            </div>
            <div onClick={() => setTableState(3)} className={`flex flex-col pt-2.5 duration-500 items-end cursor-pointer ease-in-out `}>
                <div className={`w-6 h-1.5 bg-fi-black ${tableState === 3 ? "block": "hidden"} duration-500`}></div>
                <p className={`font-marvin ${tableState === 3 ? "text-base text-fi-red" : "text-sm text-fi-lightred pt-1.5"} duration-500`}>IRL</p>
            </div>
        </div>
        <div className="px-8 py-2 mb-5">
                <div className={`${tableState === 1 ? "block" : "hidden"} duration-500`}>
                    <p  className="pt-2.5 font-poppins text-fi-black">
                        <span className="font-black">Mods:</span>  For the invasion we will need all hands-on deck, for this we will find
                        among the community, a group of full-time paid mods to help manage The Horde.
                    </p>
                    <p className="pt-2.5 font-poppins text-fi-black">
                        <span className="font-black">Grants:</span> We know that two heads thing better than one… for that we will give grants
                        to members of The Horde who bring want to build cool things to further increase the
                        presence of the Frendly Invaders in real life or in the metaverse.
                    </p>
                </div>
                <div className={`${tableState === 2 ? "block":"hidden"} duration-500`}>
                        <p className="pt-2.5 font-poppins text-fi-black">
                        <span className="font-black">Interactivity:</span> If we want to settle on an avatar for the metaverse, who doesn’t want 
                        to be able to customize it? So yes, you are going to be able to buy traits either from 
                        secondary markets or from the Armory… Choose wise, for not only the looks of the trait 
                        matter, but its stats as well… more on this later.
                        </p>
                        <p className="pt-2.5 font-poppins text-fi-black">
                        <span className="font-black">Token:</span> We have plans to launch a token so you can be able to buy, mint, and customize your 
                        Invader, but we don’t want the token to die off like many before us… so before we launch, 
                        we must have a solid and sustainable tokenomics. 
                        </p>
                        <p className="pt-2.5 font-poppins text-fi-black">
                        <span className="font-black">Expansion:</span> We aren’t launching Frendly Invaders and raise a lot of money to give you a 
                        mutated version of your NFT, a pet, or any other derivative… but we also know you love when 
                        projects do that, so stay tuned because something fiery is coming! 
                        </p>
                </div>
                <div className={`${tableState === 3 ? "block":"hidden"} duration-500`}>
                        <p className="pt-2.5 font-poppins text-fi-black">
                        We don’t just want the Invaders to live in the metaverse, so we do have plans to bring 
                        The Horde to the physical world through Streetweat, collectibles, and who knows, maybe in 
                        the future even cereal boxes. 
                        </p>
                </div>
            </div>
            </div>
    )
}

export default Table