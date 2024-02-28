import dataList from "../../util/tempData";

import { useState } from "react";

const Body = () => {

    const [List,setList] = useState(dataList());

    const onClick = () =>{
        const ele = document.getElementById('search');
        ele.value="";
    }
    const Filter = () =>{
        let list = List.filter((ele)=>{
            return ele.avgRating > 4.5
        })
        setList(list);
    }

     count = 0;
    return(
        <div id='body-container'>
            <div id='input'>
                <input id='search' type='search' placeholder='Type here...'></input>
                <button className='btn' onClick={onClick}>Search</button>
                <button className='btn' onClick={Filter}>Top Restaurants</button>
            </div>
            <div id='card-container'>
                {
                    List.map((hotel)=>{
                        return <Cards key={count++} attr={hotel}/>
                    })
                }
            </div>
        </div>
        
        
    )

}

const Cards = (props) =>{
    const{attr} = props;
    // props.attr.restaurantName
    return(
        <div id='card'>
            <img alt='img' src={attr.imageLink}></img>
            <h2>{attr.restaurantName}</h2>
            <h5>Cuisine: {attr.cuisines.join(", ")}</h5>
            <h5>Rating: {attr.avgRating}⭐</h5>
            <h5>Delivery in {attr.timeInMinutes} Minutes</h5>
        </div>
    )
}

export default Body;