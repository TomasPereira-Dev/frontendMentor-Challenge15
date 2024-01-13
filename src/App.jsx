import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import RulesModal from './Components/RulesModal.jsx'
import RockButton from './Components/RockButton.jsx'
import PaperButton from './Components/PaperButton.jsx'
import ScissorsButton from './Components/ScissorsButton.jsx'
import Results from './Components/Results.jsx'
import './App.css'

const App = () => {
    const [userScore, setUserScore] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [resultsIsOpen, setResultsIsOpen]= useState(false)
    const [buttonsVisibility, setButtonsVisibility] = useState("block")
    const [botPick, setBotPick] = useState(null)
    const [userPick, setUserPick] = useState(null)
    const [matchResult, setMatchResult] = useState(null) 
    const buttons = [
         <RockButton  key={0}/>, 
         <PaperButton key={1}/>, 
         <ScissorsButton  key={2}/>
    ]

    const logic = useCallback(()=> {
        switch (true) {
            case userPick === 0 && botPick === 2:
                setMatchResult("YOU WIN")
                console.log("win: " ,userPick, botPick)
                break;
            case userPick === 0 && botPick === 1:
                setMatchResult("YOU LOSE")
                console.log("lose: ",userPick, botPick)
                break;
            case userPick === 1 && botPick === 0:
                setMatchResult("YOU WIN")
                console.log("win: ",userPick, botPick)
                break;
            case userPick === 1 && botPick === 2:
                setMatchResult("YOU LOSE")
                console.log("lose: ",userPick, botPick)
                break;
            case userPick === 2 && botPick === 1:
                setMatchResult("YOU WIN")
                console.log("win: ",userPick, botPick)
                break;
            case userPick === 2 && botPick === 0:
                setMatchResult("YOU LOSE")
                console.log("lose: ",userPick, botPick)
                break;
            default:
                setMatchResult("DRAW");
                console.log("draw: ",userPick, botPick)
        }
    }, [userPick, botPick])

    const botPickHandler = () => {
        const botPicked = parseInt((Math.random() * 2).toFixed(0))
        setBotPick(botPicked)
    }
    
    const userPickHandler = (buttonValue) => {
        setUserPick(buttonValue)   
    }
    
    const modalStateHandler = (isOpen) => {
        setIsOpen(!isOpen)
    }

    const resultsStateHandler = (resultsIsOpen) => {
        setResultsIsOpen(!resultsIsOpen)
    }

    const buttonsVisibilityHandler = useCallback(()=>{
        resultsIsOpen === true ? setButtonsVisibility("hidden") : setButtonsVisibility("block"); 
    },[resultsIsOpen])


    useEffect(() => {
        buttonsVisibilityHandler()
    }, [buttonsVisibilityHandler])

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
                <div className={`${buttonsVisibility} relative self-center mt-12 w-fit scale-90`}>
                    <img src="./bg-triangle.svg" alt=""/>
                    <PaperButton resultsIsOpen={resultsIsOpen} resultsStateHandler={resultsStateHandler}
                     botPickHandler={botPickHandler} userPickHandler={userPickHandler}/>
                    <ScissorsButton resultsIsOpen={resultsIsOpen} resultsStateHandler={resultsStateHandler}
                     botPickHandler={botPickHandler} userPickHandler={userPickHandler}/>
                    <RockButton resultsIsOpen={resultsIsOpen} resultsStateHandler={resultsStateHandler} 
                    botPickHandler={botPickHandler} userPickHandler={userPickHandler} />
                </div>
                <Results resultsIsOpen={resultsIsOpen} resultsStateHandler={resultsStateHandler} 
                botPick={botPick} userPick={userPick} logic={logic} matchResult={matchResult} buttonsArr={buttons}/>
                <button className='px-8 py-1 w-fit text-white tracking-widest border-2 border-headerOutline rounded-lg self-center' onClick={() => setIsOpen(!isOpen)}>RULES</button>
            </div>
        </>
    )
}

export default App