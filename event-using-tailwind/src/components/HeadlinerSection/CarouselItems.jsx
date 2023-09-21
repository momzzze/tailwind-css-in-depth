
const CarouselItems = ({ headliner }) => {
    return (
        <div className="min-w-[80%] md:min-w-[40%]">
            <div
                style={{ backgroundImage: `url(${headliner.image})` }}
                className="h-80 w-full snap-center rounded-xl bg-cover bg-center shadow-md shadow-black/20">
            </div>
            <h5 className="mt-2">{headliner.name}</h5>
            <h6 className="mt-2">{headliner.date} - {headliner.stage}</h6>
        </div>
    )
}

export default CarouselItems;