import { ICoffee } from "../cards/cards"

const Card = (props: ICoffee) => {
    return (
    <div className="grid grid-cols-2 gap-2.5">
      <img src={props.image} alt={props.name} className="col-span-2 rounded-xl"/>
      <p className={`absolute font-medium text-[0.625rem] bg-LightColors-100 rounded-xl p-0.5 px-3 m-2 ${props.popular ? 'block' : ' hidden'}`}>{props.popular ? "Popular" : ""}</p>
      <strong className="text-LightColors-50 text-[0.875rem]">{props.name}</strong>
      <b className="bg-LightColors-300 text-[0.75rem] font-extrabold rounded-md text-DarkColors-200 justify-self-end p-1 px-1.5 h-fit">{props.price}</b>
      <div className="flex items-center">
      <img src={props.rating ? "./Star_fill.svg" : "Star.svg"} alt={props.rating ? "Yellow star fill" : "Star silhouette"} />
      <p className="text-LightColors-50 text-[0.875rem] mr-1">{props.rating}</p>
      <p className=" text-DarkColors-50 text-[0.875rem] text-nowrap">{ props.votes ? `(${props.votes} votes)` : "No ratings"}</p>
      </div>
      <p className="text-[0.875rem] text-LightColors-200 justify-self-end">{props.available ? "" : "Sold out"}</p>
    </div>)
}

export default Card
