/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

const ScissorsButton = ({resultsIsOpen}) => {
    const [position, setPosition] = useState("block")


    useEffect(() => {
        if(resultsIsOpen === false){
            setPosition("absolute")
        }
    },[resultsIsOpen])

    return(
        <>
            <div className={`${position} -top-12 -right-6 bg-scissorsShade rounded-full`}>
                <div className='relative bottom-2 p-4 bg-scissorsGradient rounded-full'>
                    <div className='bg-innerShade rounded-full'>
                        <button className='relative top-1 flex items-center justify-center max-h-[96px] max-w-[96px] p-6 bg-neutral-200 rounded-full' type='button'>
                            <img src="./icon-scissors.svg" alt="sissors button"/>
                        </button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default ScissorsButton