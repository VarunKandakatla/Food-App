import { LOGO_URL } from "../../util/constants";
export const Header = () => {
    return(
    <div id='header'>
        <Logo/>
        <NavItems/>
    </div>
    )
};

const Logo = () => {
    return (<img id='logo' alt='logo' src={LOGO_URL}></img>)
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

export const Banner = () =>{
    return (
        <div id="banner">
            <h1>Welcome!</h1>
            <p>The Largest Food Daily App!</p>
        </div>
    )
}

