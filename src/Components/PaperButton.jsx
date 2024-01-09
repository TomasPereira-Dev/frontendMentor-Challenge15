const PaperButton = () => {
    return(
        <>
            <div className='absolute -top-12 -left-6 bg-paperShade rounded-full'>
                <div className='relative bottom-2 bg-paperGradient p-4 rounded-full'>
                    <div className='bg-innerShade rounded-full'>
                        <button className='relative top-1 flex items-center justify-center p-6 max-h-[96px] max-w-[96px] bg-neutral-200 rounded-full'>
                            <img src="./icon-paper.svg" alt="paper button"/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaperButton