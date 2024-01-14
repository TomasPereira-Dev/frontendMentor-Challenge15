/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const Results = ({resultsIsOpen, resultsStateHandler, buttonsArr, userPick, botPick, matchResult, logic}) => {
    const [position, setPosition] = useState("flex") 

    useEffect(()=> {
        if(resultsIsOpen === false){
            setPosition("hidden")
        }else{
            setPosition("flex") 
            logic()
        }
    },[resultsIsOpen, logic])

    return(
        <>
            <div className={`${position} flex-col gap-16 self-center`}>
                <div className={`flex justify-around items-center gap-8`}>
                    <div className="flex flex-col items-center gap-4 lg:flex-col-reverse lg:gap-12">
                        {buttonsArr[userPick]}
                        <p className="text-neutral-200 font-bold tracking-wider lg:text-xl lg:tracking-widest">YOU PICKED</p>
                    </div>
                    
                    <div className="hidden relative left-4 top-4 flex-col items-center gap-8 lg:flex">
                        <p className="text-white text-5xl font-bold tracking-wider">{matchResult}</p>
                        <button className="px-12 py-2 text-text1 font-bold tracking-widest bg-white rounded-lg" onClick={resultsStateHandler}>PLAY AGAIN</button>
                    </div>

                    <div className="flex flex-col items-center gap-4 lg:flex-col-reverse lg:gap-12">
                        <div className="rounded-full bg-black">
                            {buttonsArr[botPick]}
                        </div>
                        <p className="text-neutral-200 font-bold tracking-wider lg:text-xl lg:tracking-widest">THE HOUSE PICKED</p>
                    </div> 
                    
                </div>
                <div className=" flex flex-col items-center gap-4 lg:hidden">
                    <p className="text-white text-5xl font-bold tracking-wider">{matchResult}</p>
                    <button className="px-12 py-2 text-text1 font-bold tracking-widest bg-white rounded-lg" onClick={resultsStateHandler}>PLAY AGAIN</button>
                </div>
            </div>
        </>
    )
}

export default Results