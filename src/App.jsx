import { useState } from 'react'
import './App.css'

const App = () => {
    const [userScore, setUserScore] = useState(0)
    return(
        <>
        <div>
            <div className='flex justify-between'>
                <img src="./logo.svg" alt="the company's logo"/>
                <div>
                    <p>SCORE</p>
                    <span>{userScore}</span>
                </div>
            </div>
            <div className='bg-triangle bg-no-repeat bg-contain bg-center'>
                <button className='flex items-center justify-center  max-h-[96px] max-w-[96px] p-6 bg-white rounded-full'>
                    <img src="./icon-paper.svg" alt="paper button"/>
                </button>
                <button className=' flex items-center justify-center max-h-[96px] max-w-[96px] p-6 bg-white rounded-full' type='button'>
                    <img src="./icon-scissors.svg" alt="sissors button"/>
                </button>
                <button className='flex items-center justify-center self-center p-6 bg-white rounded-full' type='button'>
                    <img src="./icon-rock.svg" alt="rock button"/>
                </button>
            </div>

            <div>
                <button type='button'>RULES</button>
            </div>
        </div>
        </>

    )
}

export default App