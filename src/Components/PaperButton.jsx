import { useState, useEffect } from "react"

// eslint-disable-next-line react/prop-types
const PaperButton = ({resultsIsOpen, resultsStateHandler, botPickHandler, userPickHandler}) => {
    const [position, setPosition] = useState("block")

    useEffect(() => {
        if(resultsIsOpen === false) setPosition("absolute")
    },[resultsIsOpen])

    return(
        <>
            <div className={`${position} -top-12 -left-6 bg-paperShade rounded-full scale-110 lg:scale-125`}>
                <div className='relative bottom-2 bg-paperGradient p-4 rounded-full'>
                    <div className='bg-innerShade rounded-full'>
                        { resultsIsOpen === false ? (
                            <button className='relative top-1 flex items-center justify-center p-6 max-h-[96px] max-w-[96px] bg-neutral-200 rounded-full' onClick={() => {resultsStateHandler(resultsIsOpen); botPickHandler(); userPickHandler(1);}} type="button">
                                <img src="./icon-paper.svg" alt="paper button"/>
                            </button>
                            ) : (
                            <button className='relative top-1 flex items-center justify-center p-6 max-h-[96px] max-w-[96px] bg-neutral-200 rounded-full' onClick={() => {resultsStateHandler(resultsIsOpen); botPickHandler(); userPickHandler(1);}} disabled={true} type="button">
                                <img src="./icon-paper.svg" alt="paper button"/>
                            </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaperButton