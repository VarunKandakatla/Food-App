import { CARD_IMG } from "./constants";

const dataList = () => {
   restaurantList = [
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

  restaurantList = editList(restaurantList)

  return restaurantList;
};

function editList(list) 
{
  newList = [];
  for(i=0;i<list.length;i++)
    {
      Image = CARD_URL[i];
      
      obj = {
          restaurantName: list[i].restaurantName,
          cuisines: list[i].cuisines,
          avgRating: list[i].avgRating,
          timeInMinutes: list[i].timeInMinutes,
          imageLink: Image
      }

      newList.push(obj)
    }
      return newList;
}

export default dataList;
