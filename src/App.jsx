import { useState } from 'react'
import { createPortal } from 'react-dom'
import RulesModal from './Components/RulesModal'
import './App.css'

const App = () => {
    const [userScore, setUserScore] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const modalStateHandler = (isOpen) => {
        setIsOpen(!isOpen)
    }

    return(
        <>
        {isOpen && createPortal(<RulesModal isOpen={isOpen} modalStateHandler={modalStateHandler}/>, document.getElementById("rules-modal"))}
        <div className='relative z-0 flex flex-col justify-between gap-16 p-6 h-full'> 
            <div className='flex justify-between items-center p-4 outline outline-3 outline-headerOutline rounded'>
                <img  className='w-24' src="./logo.svg" alt="the company's logo"/>
                <div className='px-5 py-2 text-center bg-white rounded'>
                    <p className='text-xs text-text2 font-bold tracking-widest'>SCORE</p>
                    <span className='text-4xl text-text1 font-bold'>{userScore}</span>
                </div>
            </div>
            <div className='relative self-center mt-12 w-fit scale-90'>
                <img src="./bg-triangle.svg" alt=""/>
                <div className='absolute -top-12 -left-6 bg-paperShade rounded-full'>
                    <div className='relative bottom-2 bg-paperGradient p-4 rounded-full'>
                        <div className='bg-innerShade rounded-full'>
                            <button className='relative top-1 flex items-center justify-center p-6 max-h-[96px] max-w-[96px] bg-neutral-200 rounded-full'>
                                <img src="./icon-paper.svg" alt="paper button"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='absolute -top-12 -right-6 bg-scissorsShade rounded-full'>
                    <div className='relative bottom-2 p-4 bg-scissorsGradient rounded-full'>
                        <div className='bg-innerShade rounded-full'>
                            <button className='relative top-1 flex items-center justify-center max-h-[96px] max-w-[96px] p-6 bg-neutral-200 rounded-full' type='button'>
                                <img src="./icon-scissors.svg" alt="sissors button"/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='absolute bottom-0 left-[30%] bg-rockShade rounded-full'> 
                    <div className='relative bottom-2 p-4 bg-rockGradient rounded-full'>
                        <div className='bg-innerShade rounded-full'>
                            <button className='relative top-1 flex items-center justify-center p-6 bg-neutral-200 rounded-full' type='button'>
                                <img src="./icon-rock.svg" alt="rock button"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button className='px-8 py-1 w-fit text-white tracking-widest border-2 border-headerOutline rounded-lg self-center'
            onClick={() => setIsOpen(!isOpen)}>RULES</button>
        </div>
        </>
    )
}

export default App