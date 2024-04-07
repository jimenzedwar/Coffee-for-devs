import { useEffect, useState } from "react"
import axios from "axios"
import Card from "../card/Card";

export interface ICoffee {
    id: number;
    name: string;
    image: string;
    price: string;
    rating: number | null;
    votes: number;
    popular: boolean;
    available: boolean;
}

interface ICardsProps {
    availableNow: boolean;
  }

const Cards = ({ availableNow }: ICardsProps) => {
    
    const [coffeeCollection, setCoffeeCollection] =useState<ICoffee[]>([])

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        .then(response => {
            const data = response.data as ICoffee[]
            setCoffeeCollection(data)
        }
        )
        .catch(error => {
            throw new Error(error)})
        }, []);


    return (
        
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        { availableNow 
        ? coffeeCollection?.filter((ele) => ele.available !== false).map((ele) => <Card {...ele} />) 
        : coffeeCollection?.map(ele => <Card {...ele}/>)
    }
        </div>
    )
}

export default Cards