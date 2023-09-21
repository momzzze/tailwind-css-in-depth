import logo from '../../assets/logo.png'

const HeroSectionLogo = () => {

    return (
        <div className="bg-white/30 py-2 px-4 rounded-xl text-center backdrop-blur-md">
            <div className="relative">
                <img src={`${logo}`} alt="logo" width={175}/>
                <div className='flex items-center justify-center mt-[-70px] mb-5'>
                    <div className='bg-pink-500 h-14 w-14 rounded-full flex items-center justify-center gap-1'>
                        <div className='h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-100'></div>
                        <div className='h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-500'></div>
                        <div className='h-4 w-1 bg-pink-100 rounded-full animate-wavey animation-delay-200'></div>
                        <div className='h-3 w-1 bg-pink-200 rounded-full animate-wavey animation-delay-300'></div>
                        <div className='h-2 w-1 bg-pink-300 rounded-full animate-wavey animation-delay-400'></div>
                    </div>
                </div>
            </div>
            <div className='text-5xl font-bold'>
                tw:<span className='text-sky-900'>mf</span>
            </div>            
        </div>
    )
}

export default HeroSectionLogo;