import { useState } from 'react'
import './App.css'

const App = () => {
    const [userScore, setUserScore] = useState(0)
    return(
        <>
        <div className='flex flex-col justify-between gap-16 p-6 h-full'> 
            <div className='flex justify-between items-center p-4 outline outline-3 outline-headerOutline rounded'>
                <img  className='w-24' src="./logo.svg" alt="the company's logo"/>
                <div className='px-5 py-2 text-center bg-white rounded'>
                    <p className='text-xs font-bold tracking-widest'>SCORE</p>
                    <span className='text-4xl font-bold'>{userScore}</span>
                </div>
            </div>
            <div className='relative self-center border-red-600 border-2 w-fit'>
                <img src="./bg-triangle.svg" alt=""/>
                <div className='absolute -top-12 -left-6 p-4 bg-paperGradient rounded-full'>
                    <button className='flex items-center justify-center  max-h-[96px] max-w-[96px] p-6 bg-white rounded-full'>
                        <img src="./icon-paper.svg" alt="paper button"/>
                    </button>
                </div>
                <div className='absolute -top-12 -right-6 p-4 bg-scissorsGradient rounded-full'>
                    <button className='flex items-center justify-center max-h-[96px] max-w-[96px] p-6 bg-white rounded-full' type='button'>
                        <img src="./icon-scissors.svg" alt="sissors button"/>
                    </button>
                </div>
                <div className='absolute bottom-0 left-[30%] p-4 bg-rockGradient rounded-full'>
                    <button className='flex items-center justify-center p-6 bg-white rounded-full' type='button'>
                        <img src="./icon-rock.svg" alt="rock button"/>
                    </button>
                </div>
 
            </div>
            <button className='px-8 py-1 w-fit text-white tracking-widest border border-white rounded-lg self-center'>RULES</button>
        </div>
        </>
    )
}

export default App