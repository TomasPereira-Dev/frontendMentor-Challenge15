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
            <div className={`${position} flex-col gap-16`}>
                <div className={`flex justify-center gap-8`}>
                    <div className="relative flex flex-col items-center gap-4">
                        {buttonsArr[userPick]}
                        <p className="text-neutral-200 font-bold tracking-wider">YOU PICKED</p>
                    </div>
                    <div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="rounded-full bg-black">
                                {buttonsArr[botPick]}
                            </div>
                            <p className="text-neutral-200 font-bold tracking-wider">THE HOUSE PICKED</p>
                        </div> 
                    </div>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-white text-5xl font-bold tracking-wider">{matchResult}</p>
                    <button className="px-12 py-2 text-text1 font-bold tracking-widest bg-white rounded-lg" onClick={resultsStateHandler}>PLAY AGAIN</button>
                </div>
            </div>
        </>
    )
}

export default Results