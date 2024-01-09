import { useState } from "react"

const RockButton = () => {
    

    return(
        <>
            <div className={`absolute bottom-0 left-[30%] bg-rockShade rounded-full`}> 
                <div className='relative bottom-2 p-4 bg-rockGradient rounded-full'>
                    <div className='bg-innerShade rounded-full'>
                        <button className='relative top-1 flex items-center justify-center p-6 bg-neutral-200 rounded-full' type='button'>
                            <img src="./icon-rock.svg" alt="rock button"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
} 

export default RockButton