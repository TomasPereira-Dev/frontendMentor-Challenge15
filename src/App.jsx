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
            <div className='relative border-red-600 border-2 w-min'>
                <img className='max-w-revert object-cover' src="./bg-triangle.svg" alt=""/>
                <button className='absolute top-0 flex items-center justify-center  max-h-[96px] max-w-[96px] p-6 bg-white rounded-full'>
                    <img src="./icon-paper.svg" alt="paper button"/>
                </button>
                <button className='absolute top-0 right-0 flex items-center justify-center max-h-[96px] max-w-[96px] p-6 bg-white rounded-full' type='button'>
                    <img src="./icon-scissors.svg" alt="sissors button"/>
                </button>
                <button className='absolute bottom-0 z-40 mx-auto flex items-center justify-center p-6 bg-white rounded-full' type='button'>
                    <img src="./icon-rock.svg" alt="rock button"/>
                </button>
            </div>
        </div>
        </>
    )
}

export default App