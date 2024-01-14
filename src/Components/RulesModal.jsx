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
            <div className={`${visibility} fixed top-0 -bottom-full z-50 flex flex-col items-center gap-20 py-14 w-full bg-white 
            lg:bottom-0 lg:justify-center`}>
                <p className="text-3xl text-text1 font-bold">RULES</p>
                <img  src="./image-rules.svg" alt="how to play the game"/>
                <button onClick={modalStateHandler}>
                    <img src="./icon-close.svg" alt=""/>
                </button>
            </div>
        </>
    )
}

export default RulesModal
