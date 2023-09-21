import HeadlinersCarousel from "./HeadlinersCarousel";
import band1 from '../../assets/band1.jpg';
import band2 from '../../assets/band2.jpg';
import band3 from '../../assets/band3.jpg';
import band4 from '../../assets/band4.jpg';
import band5 from '../../assets/band5.jpg';
import band6 from '../../assets/band6.jpg';
import band7 from '../../assets/band7.jpg';
import 'font-awesome/css/font-awesome.min.css';

const HeadlinerSection = () => {    

    const bands = [
        { image: band1, name: 'Corduroy Gary', date: '1st July 9pm', stage: 'Main Stage' },
        { image: band2, name: 'Corduroy Gary 2', date: '2th July 9pm', stage: 'Main Stage' },
        { image: band3, name: 'Corduroy Gary 3', date: '3th July 9pm', stage: 'Main Stage' },
        { image: band4, name: 'Corduroy Gary 4', date: '4th July 9pm', stage: 'Main Stage' },
        { image: band5, name: 'Corduroy Gary 5', date: '5th July 9pm', stage: 'Main Stage' },
        { image: band6, name: 'Corduroy Gary 6', date: '6th July 9pm', stage: 'Main Stage' },
        { image: band7, name: 'Corduroy Gary 7', date: '7th July 9pm', stage: 'Main Stage' }
    ];
    
    const goToPrevious = () => {
        const carousel = document.getElementById('carousel');
        const previousButton = document.getElementById('previous');
        previousButton.addEventListener('click', () => {
            const itemWidth = carousel.getElementsByTagName('div')[0].clientWidth;
            carousel.scrollLeft = carousel.scrollLeft - itemWidth;
        });
    };
    const goToNext = () => {
        const carousel = document.getElementById('carousel');
        const nextButton = document.getElementById('next');
        nextButton.addEventListener('click', () => {
            const itemWidth = carousel.getElementsByTagName('div')[0].clientWidth;
            carousel.scrollLeft = carousel.scrollLeft + itemWidth;
        });
    };
    return (
        <div className={`carousel`}>
            <h2 className="text-center md:text-start">Headliners</h2>
            <p>Experience the sonic delight from these made-up artists across 7 days that music fans are calling "one of the many gigs that will happen this year"</p>

            <div className="flex">
                <div id="previous" onClick={goToPrevious} className="text-7xl flex justify-center items-center cursor-pointer p-3 relative -top-8">
                    <i className="fa fa-angle-left"></i>
                </div>
                <HeadlinersCarousel headliners={bands} />
                <div id="next" onClick={goToNext} className="text-7xl flex justify-center items-center cursor-pointer p-3 relative -top-8">
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
        </div>
    )
}

export default HeadlinerSection;