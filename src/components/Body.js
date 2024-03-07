import dataList from "../../util/tempData";
import { SWIGGY_API } from "../../util/constants";
import { Cards } from "./Cards";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { Link } from "../../node_modules/react-router-dom";



const Body = () => {

    <Banner/>

    const [List,setList] = useState([]);
    const [filteredList,setFilteredList] = useState([]);
    useEffect( ()=>{
         fetchData();
        
    },[]);

    const fetchData = async() => {
        const fetchedData = await fetch(SWIGGY_API);
        const jsonData = await fetchedData.json();
        const list = jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    //    console.log(list);
        setList(list);
        setFilteredList(list);
        
    }

    const onClick = () =>{
        const ele = document.getElementById('search');
        keyword = ele.value;
        ele.value = '';

        if(keyword.length == 0) return;
        // setFilteredList(List);
       const newList = List.filter((restaurant)=>{
            if(restaurant.info.name.toLowerCase().includes(keyword.toLowerCase()))
            {
                return true;
            }
        })
        // if(newList.length == 0) return<h1>No Restaurants found!...</h1>
        setFilteredList(newList);
    }
    const Filter = () =>{
        // setFilteredList(List);
        let list = List.filter((ele)=>{
            return ele.info.avgRating > 4
        })
        setFilteredList(list);
    }

     count = 0;
     if(List.length === 0)
    {
        // return <h1>Loading</h1>
        return <Shimmer/>
    } 
    else
    return(
        <div id='body-container'>
            <Banner/>
            <div id='input'>
                <input id='search' type='search' placeholder='Search Restaurants....'></input>
                <button className='btn' onClick={onClick}>Search</button>
                <button className='btn' onClick={Filter}>Top Restaurants</button>
            </div>
            <div id='card-container'>
                {/* {setFilteredList(List)} */}
                {
                    
                   filteredList.map((restaurant)=>{ 
                        return (<Link to={'/restaurant/'+restaurant.info.id} key={restaurant.info.id}><Cards resData={restaurant.info}/></Link>)
                    })
                }
            </div>
        </div>
        
        
    )

}

export const Banner = () =>{
    return (
        <div id="banner">
            <h1>Welcome!</h1>
            <p>The Largest Food Daily App!</p>
        </div>
    )
}

export default Body;