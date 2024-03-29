/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"

const RockButton = ({resultsIsOpen, resultsStateHandler, botPickHandler, userPickHandler}) => {
    const [position, setPosition] = useState("block")

    useEffect(() => {
        if(resultsIsOpen === false) setPosition("absolute")
    },[resultsIsOpen])

    return(
        <>
            <div className={`${position} bottom-0 left-[30%] bg-rockShade rounded-full scale-110 lg:scale-125`}> 
                <div className='relative bottom-2 p-4 bg-rockGradient rounded-full'>
                    <div className='bg-innerShade rounded-full'>
                        { resultsIsOpen === false ? (
                            <button className='relative top-1 flex items-center justify-center p-6 bg-neutral-200 rounded-full' onClick={()=>{resultsStateHandler(resultsIsOpen); botPickHandler(); userPickHandler(0)}} type='button'>
                                <img src="./icon-rock.svg" alt="rock button"/>
                            </button>
                            ) : (
                            <button className='relative top-1 flex items-center justify-center p-6 bg-neutral-200 rounded-full' onClick={()=>{resultsStateHandler(resultsIsOpen); botPickHandler(); userPickHandler(0)}} disabled={true} type='button'>
                            <img src="./icon-rock.svg" alt="rock button"/>
                            </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
} 

export default RockButton