import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { ITEMS_URL } from "../../util/constants";
import Shimmer from "./Shimmer";
export const RestaurantMenu = () =>{
    const {resId} = useParams();
    // console.log(resId)
    const [menuList,setMenuList] = useState(null);
    

    useEffect(()=>{
        fetchMenu();
    },[resId])
    count = 0;
    const fetchMenu = async() =>{
        const fetchedData = await fetch(ITEMS_URL+resId);
        const json = await fetchedData.json();

        // console.log(json);
        setMenuList(json.data);
       
    }

    if(menuList == null) return <Shimmer/>
    const {name, city, cuisines} = menuList?.cards[0]?.card?.card?.info;
    
     itemsList = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    // console.log(itemsList);

    

    return (<div id='resMenu'>
        <h1>{name}</h1>
        <h3>{cuisines.join(', ')}</h3>
        <ul>
            <li>{cuisines.join(', ')}</li>
            {menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map((item) =>{
                const {name, id, price} = item.card.info;
                return <li key = {id}>{name} - Rs.{price/100}</li>
            })}
        </ul>
    </div>)

}