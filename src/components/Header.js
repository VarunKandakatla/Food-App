import { LOGO_URL } from "../../util/constants";
import {useState, useEffect} from '../../node_modules/react';
import { Link } from "react-router-dom";
export const Header = () => {
    // console.log('header renders');
    return(
    <div id='header'>
        <Logo/>
        <NavItems/>
    </div>
    )
};

const Logo = () => {
    return (<img id='logo' alt='logo'  src={LOGO_URL}></img>)
}

const NavItems = () =>{

    const [btnName, setBtnName] = useState('Login');

     useEffect(()=>{
        // console.log('useEffect Called');
    },[]);
    const onClick = () =>{
        
        if(btnName == 'Login')
        {
            setBtnName('Logout')
        }
        else
        {
            setBtnName('Login');
        }

        // console.log(btnName);
    }
    return (
    <ul id='nav-items'>
        <Link to={'/'}><li>Home</li></Link>
        <Link to={'/aboutus'}><li>About us</li></Link>
        <li>Cart</li>
        <li><button onClick = {onClick}>{btnName}</button></li>
        
    </ul>
    );
};


