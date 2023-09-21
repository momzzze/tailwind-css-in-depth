import hero from '../../assets/hero.jpg';
import HeroSectionLogo from './HeroSectionLogo';

const HeroSection = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${hero})`,
            }}
            className={`bg-cover bg-center bg-fixed flex flex-col min-h-[400px] items-center justify-center h-[calc(100vh-200px)]`}>
            <HeroSectionLogo />
            <div className='font-bold mt-3 text-sm'>
                Keep me updated with news and promotions
            </div>
            <form className='mt-3 flex gap-2'>
                <input type="email" placeholder='Email' className='rounder-sm border border-white/40 bg-white/30 backdrop-blur-md p-2 font-bold text-sky-900 placeholder-zinc-900 caret-pink-500 outline-pink-500 focus:outline' />
                <button
                    type='submit'
                    className='cursor-pointer rounded-sm bg-pink-500 py-2 px-4 font-bold transition-colors hover:bg-sky-900 hover:shadow-lg hover:shadow-black/20'>
                    Subscribe
                </button>
            </form>
        </div>
    )
}

export default HeroSection;