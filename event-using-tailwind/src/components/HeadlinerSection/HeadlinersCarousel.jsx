import './HeadlinerSection.css'
import { useEffect, useState } from "react";
import CarouselItems from "./CarouselItems";


const HeadlinersCarousel = ({ headliners }) => {
    const [addChromeScrollbar, setAddChromeScrollbar] = useState(false);
    useEffect(() => {

        const isChrome = /Chrome/.test(navigator.userAgent);
        if (isChrome) {
            setAddChromeScrollbar(true);
        }
    }, [addChromeScrollbar]);
    return (
        <div id="carousel" className={`${addChromeScrollbar ? 'chrome-scrollbar' : ''} scroll-smooth flex-1 mt-4 flex w-full gap-4 pb-5 snap-x overflow-x-auto`}>
            {headliners.map((headliner, index) => (
                <CarouselItems key={index} headliner={headliner} />
            ))}
        </div>
    )
}

export default HeadlinersCarousel;