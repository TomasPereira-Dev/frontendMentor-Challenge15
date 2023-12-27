import { useState } from 'react'
import './App.css'

const App = () => {
    const [userScore, setUserScore] = useState(0)
    return(
        <>
            <div className='flex justify-between'>
                <img src="./logo.svg" alt="the company's logo"/>
                <div>
                    <p>SCORE</p>
                    <span>{userScore}</span>
                </div>
            </div>
            <div className='bg-triangle'>
                <button type='button'>
                    <img src="./icon-paper.svg" alt="paper button"/>
                </button>
                <button type='button'>
                    <img src="./icon-scissors.svg" alt="sissors button"/>
                </button>
                <button type='button'>
                    <img src="./icon-rock.svg" alt="rock button"/>
                </button>
            </div>
            <div>
                <button type='button'>RULES</button>
            </div>
        </>

    )
}

export default App