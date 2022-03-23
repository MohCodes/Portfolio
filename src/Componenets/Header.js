
import burger from "../resources/burger.svg"
import burgers from "../resources/burger.png"
import whiteBurger from "../resources/whiteBurger.svg"




function Header() {
    return (  
    <div className="HeaderContainer">
        <div className="nameContainer headerContainers"> Mohanad Mazin</div>
        <div className="aboutContainer headerContainers"> About Me</div>
        <div className="projectContainer headerContainers"> Projects</div>
        <div className="resumeContainer headerContainers"> Resume</div>
        <div className="contactBarContainer headerContainers">Contact</div>

        <div className="navBarBurger"><embed src={whiteBurger} alt="menuBurger"/></div>

    </div>);
}

export default Header;