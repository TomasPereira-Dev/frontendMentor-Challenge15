import { useState } from 'react'
import { createPortal } from 'react-dom'
import RulesModal from './Components/RulesModal'
import RockButton from './Components/RockButton'
import PaperButton from './Components/PaperButton'
import ScissorsButton from './Components/ScissorsButton'
import Results from './Components/Results'
import './App.css'

const App = () => {
    const [userScore, setUserScore] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [resultsIsOpen, setResultsIsOpen]= useState(false)
    const buttons = [<RockButton key={0}/>, <PaperButton key={1}/>, <ScissorsButton key={2}/>]

    const modalStateHandler = (isOpen) => {
        setIsOpen(!isOpen)
    }

    const resultsStateHandler = (resultsIsOpen) => {
        setResultsIsOpen(!resultsIsOpen)
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
                <PaperButton resultsIsOpen={resultsIsOpen} />
                <ScissorsButton resultsIsOpen={resultsIsOpen} />
                <RockButton resultsIsOpen={resultsIsOpen} />
            </div>
            <Results resultsIsOpen={resultsIsOpen} resultsStateHandler={resultsStateHandler} buttonsArr={buttons}/>
            <button className='px-8 py-1 w-fit text-white tracking-widest border-2 border-headerOutline rounded-lg self-center' onClick={() => setIsOpen(!isOpen)}>RULES</button>
        </div>
       
        </>
    )
}

export default App