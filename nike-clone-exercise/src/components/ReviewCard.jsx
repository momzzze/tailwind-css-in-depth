import { star } from "../assets/icons"

const ReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">        
        <img src={imgURL} alt="image" className="rounded-full object-cover" width={120} height={120} />
        <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
        <div className="flex mt-3 justify-center items-center gap-2.5">
            <img src={star} alt="star" width={24} height={24} className="object-contain m-0"/>
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
        </div>
        <h3 className="mt-1 text-center text-3xl font-bold font-palanquin">{customerName}</h3>
    </div>
  )
}

export default ReviewCard