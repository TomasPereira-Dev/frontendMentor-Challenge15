/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const Results = ({resultsIsOpen, resultsStateHandler, buttonsArr}) => {

    const [position, setPosition] = useState("flex") 

    useEffect(()=> {
        if(!resultsIsOpen){
            setPosition("hidden")
        }
    },[resultsIsOpen])

    return(
        <>
        <div className="flex flex-col gap-16">
            <div className={`flex ${position} justify-center gap-8`}>
                <div className="relative flex flex-col items-center gap-4">
                    {buttonsArr[0]}
                    <p className="text-neutral-200 font-bold tracking-wider">YOU PICKED</p>
                </div>
                <div>
                    <div className="flex flex-col items-center gap-4">
                        <div className="rounded-full bg-black">
                            {buttonsArr[2]}
                        </div>
                        <p className="text-neutral-200 font-bold tracking-wider">THE HOUSE PICKED</p>
                    </div> 
                </div>
            </div>
            <div className="flex flex-col items-center gap-4">
                <p className="text-white text-5xl font-bold tracking-wider">YOU WIN</p>
                <button className="px-12 py-2 bg-white rounded-lg">PLAY AGAIN</button>
            </div>
        </div>

        </>
    )
}

export default Results