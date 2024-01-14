/* eslint-disable react/prop-types */
import { useCallback, useEffect, useState } from "react"

const RulesModal = ({isOpen, modalStateHandler}) => {

    const [visibility, setVisibility] = useState("hidden")

    const VisibilityHandler = useCallback(()=>{
        if(isOpen){
            setVisibility("block")
        }
    },[isOpen])

    useEffect(() => {
        VisibilityHandler()
    }, [VisibilityHandler])

    return (
        <>
            
            <div className={`${visibility} flex items-center justify-center h-full bg-modalShade bg-opacity-75`}>
                <div className=' flex flex-col items-center justify-center gap-20 w-full h-full bg-white
                lg:items-start lg:gap-8 lg:p-8 lg:h-auto lg:w-auto lg:rounded-lg'>
                    <div className="flex justify-center w-full lg:justify-between">
                        <p className="text-3xl text-text1 font-bold">RULES</p>
                        <button className="hidden lg:block" onClick={modalStateHandler}>
                            <img src="./icon-close.svg" alt=""/>
                        </button>
                    </div>
                    <img  src="./image-rules.svg" alt="how to play the game"/>
                    <button className="lg:hidden" onClick={modalStateHandler}>
                        <img src="./icon-close.svg" alt=""/>
                    </button>
                </div>
            </div>
        </>
    )
}

export default RulesModal
