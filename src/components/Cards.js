import { CARD_IMG } from "../../util/constants";

export const Cards = (props) =>{
    const {resData} = props;
    const{name, avgRating, cuisines,cloudinaryImageId,locality,areaName} = resData;
     
      return(
         <div id='card'>
             <img alt='img' src={CARD_IMG+cloudinaryImageId}></img>
             <RestaurantName name ={name}/>
             <Cuisine cuisines = {cuisines}/>
             <h5 id='rating'>Rating: {avgRating}⭐</h5>
             <Area address = {resData}/>
         </div>
     )
 }

 const RestaurantName = (props) =>{
    return(<>
    <h2 id='resTitle'>{props.name}</h2>
    </>)
 }

 const Cuisine = (props) =>{
    return(<>
        <div id='cuisines-box'>
            <h5>Cuisines: </h5>
            <h5 id='cuisines'>{props.cuisines.join(', ')}</h5>
        </div>
    </>)
 }

 const Area = (props) =>{
   const {address} = props;
   const {locality,areaName} = props.address;
    return <>
    <div id='area-box'>
        <h5 id='area'>{props.address.locality}, {areaName}</h5>
        {/* <button>+Add</button> */}
    </div>
    </>
 }