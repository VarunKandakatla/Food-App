import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = () => {
    return(
    <div id='header'>
        <Logo/>
        <NavItems/>
    </div>
    )
};

const Logo = () => {
    return (<img id='logo' alt='logo' src='https://icon-library.com/images/food-app-icon/food-app-icon-0.jpg'></img>)
}

const NavItems = () =>{
  
    return (
    <ul id='nav-items'>
        <li>Home</li>
        <li>About us</li>
        <li>Cart</li>
        <li>Login/Signup</li>
    </ul>
    );
};

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

const dataList = () =>{
   
        const restaurantList = [
            {
                restaurantName: "Jagadamba Sweets",
                cuisines: ["Andhra", "Telangana", "Bharath", "local"],
                avgRating: 4.2,
                timeInMinutes: 32,
                imageLink: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Spice Corner",
                cuisines: ["Indian", "Chinese", "Continental"],
                avgRating: 4.5,
                timeInMinutes: 45,
                imageLink: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Pizza Palace",
                cuisines: ["Italian", "American"],
                avgRating: 4.0,
                timeInMinutes: 25,
                imageLink: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Sushi Express",
                cuisines: ["Japanese", "Seafood"],
                avgRating: 4.7,
                timeInMinutes: 40,
                imageLink: "https://images.pexels.com/photos/209540/pexels-photo-209540.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Taste of Punjab",
                cuisines: ["Punjabi", "North Indian"],
                avgRating: 4.3,
                timeInMinutes: 35,
                imageLink: "https://images.pexels.com/photos/958547/pexels-photo-958547.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Mediterranean Delight",
                cuisines: ["Mediterranean"],
                avgRating: 4.6,
                timeInMinutes: 50,
                imageLink: "https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Thai Spice",
                cuisines: ["Thai"],
                avgRating: 4.4,
                timeInMinutes: 38,
                imageLink: "https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Burger Haven",
                cuisines: ["American", "Fast Food"],
                avgRating: 4.1,
                timeInMinutes: 20,
                imageLink: "https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            // Add more restaurants here
            {
                restaurantName: "Taco Fiesta",
                cuisines: ["Mexican"],
                avgRating: 4.3,
                timeInMinutes: 28,
                imageLink: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Ramen World",
                cuisines: ["Japanese", "Noodles"],
                avgRating: 4.8,
                timeInMinutes: 42,
                imageLink: "https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Pasta Paradise",
                cuisines: ["Italian"],
                avgRating: 4.2,
                timeInMinutes: 33,
                imageLink: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "The BBQ Joint",
                cuisines: ["Barbecue", "American"],
                avgRating: 4.7,
                timeInMinutes: 55,
                imageLink: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Café Latte",
                cuisines: ["Café", "Coffee", "Bakery"],
                avgRating: 4.6,
                timeInMinutes: 15,
                imageLink: "https://images.pexels.com/photos/12318206/pexels-photo-12318206.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Vietnamese Pho House",
                cuisines: ["Vietnamese", "Soups"],
                avgRating: 4.5,
                timeInMinutes: 40,
                imageLink: "https://images.pexels.com/photos/2092916/pexels-photo-2092916.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Kebab Kingdom",
                cuisines: ["Middle Eastern", "Kebabs"],
                avgRating: 4.4,
                timeInMinutes: 30,
                imageLink: "https://images.pexels.com/photos/2232433/pexels-photo-2232433.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Greek Taverna",
                cuisines: ["Greek", "Mediterranean"],
                avgRating: 4.3,
                timeInMinutes: 35,
                imageLink: "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Dosa Hut",
                cuisines: ["South Indian", "Dosa"],
                avgRating: 4.1,
                timeInMinutes: 40,
                imageLink: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Chinese Wok",
                cuisines: ["Chinese", "Stir Fry"],
                avgRating: 4.0,
                timeInMinutes: 30,
                imageLink: "https://images.pexels.com/photos/12842265/pexels-photo-12842265.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Salad Sensation",
                cuisines: ["Healthy", "Salads"],
                avgRating: 4.6,
                timeInMinutes: 20,
                imageLink: "https://images.pexels.com/photos/18601877/pexels-photo-18601877/free-photo-of-biryani-rice-traditional-food-pakistan.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
                restaurantName: "Fisherman's Catch",
                cuisines: ["Seafood", "Grill"],
                avgRating: 4.8,
                timeInMinutes: 50,
                imageLink: "https://images.pexels.com/photos/6210960/pexels-photo-6210960.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
        ];
    
    
    
        return restaurantList;
    };
    

const Body = () => {

    const onClick = () =>{
        const ele = document.getElementById('search');
        ele.value="";
    }
     count = 0;
    return(
        <div id='body-container'>
            <div id='input'>
                <input id='search' type='search' placeholder='Type here...'></input>
                <button onClick={onClick}>Search</button>
            </div>
            <div id='card-container'>
                {
                    dataList().map((hotel)=>{
                        return <Cards key={count++} attr={hotel}/>
                    })
                    // forLoop()
                }
            </div>
        </div>
        
        
    )

}

// const forLoop = () =>{
//     list = dataList();
//     newList=[];

//     for(i=0;i<list.length;i++)
//     {
//         console.log(list[i]);
//          newList.push(<Cards key={i} attr={list[i]}/>)
//     }

//     return newList;
// }

const Banner = () =>{
    return (
        <div id="banner">
            <h1>Welcome!</h1>
            <p>The Largest Food Daily App!</p>
        </div>
    )
}

const Footer = () =>{
    const year = new Date().getFullYear();
    return (
        <div id ='footer'>
            <p>Made with 💙 by Varun Kandakatla©️{year}</p>
        </div>
    )
}


const App = () =>{
    return (
    <div>
        <Header/>
        <Banner/>
        <Body/>
        <Footer/>
    </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render((<App/>));