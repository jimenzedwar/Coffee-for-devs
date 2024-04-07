import { useState } from "react"
import Cards from "../cards/cards"

const OurCollection = () => {
    const [availableNow, setAvailableNow] = useState(false)
return (
    <div className="bg-DarkColors-100 rounded-2xl xl:rounded-xl grid justify-items-center relative py-16 w-fit m-10 lg:m-20 p-5 overflow-hidden ">
        <img className="absolute z-0 right-0 md:right-[10%] xl:right-[30%] top-8" src='./vector.svg' alt="brown doodle" />
    <h1 className="text-LightColors-50 text-[2rem] justify-center text-center z-10">Our Collection</h1>
    <h2 className="text-DarkColors-50 text-[1rem] text-center xl:w-[40%] z-10">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</h2>
    <div className="flex text-LightColors-50 m-3 mb-10">
        <button className={`p-1 px-2 rounded-md ${availableNow ? "bg-transparent" : "bg-DarkColors-50"}`} onClick={() => setAvailableNow(false)}>All Products</button>
        <button className={`p-1 px-2 rounded-md ${availableNow ? "bg-DarkColors-50" : " bg-transparent"}`} onClick={() => setAvailableNow(true)}>Available Now</button>
    </div>
    <Cards availableNow={availableNow} />
    </div>
)
}

export default OurCollection