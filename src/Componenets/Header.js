

import { useState } from "react"
import whiteBurger from "../resources/whiteBurger.svg"
import resume from "../resources/moResume.pdf"




function Header() {

    const [showSideBar, setShowSideBar] = useState(false)

    const handleSideBarChange = ()=>{
        if(showSideBar === false){
            setShowSideBar(true)
            console.log(showSideBar)
        }
        else{
            setShowSideBar(false)
            console.log(showSideBar)
        }
        console.log(showSideBar)
    }



    const scrollToDiv = (e)=>{
        const divElement = e.target.getAttribute("datatype")
        const divElementHTML = document.getElementById(divElement)
        divElementHTML.scrollIntoView()
        setShowSideBar(false)
    }


    return (  <div>
    <div className="HeaderContainer">
        <div className="nameContainer headerContainers"> Mohanad Mazin</div>
        <div onClick={scrollToDiv} datatype ="aboutMe" className="aboutContainer headerContainers"> About Me</div>
        <div onClick={scrollToDiv} datatype ="projects" className="projectContainer headerContainers"> Projects</div>
        <div  className="resumeContainer headerContainers"> <a  className="headerContainers" href={resume} target = "_blank" rel = "noreferrer">Resume</a></div>
        <div onClick={scrollToDiv} datatype ="contactMe" className="contactBarContainer headerContainers">Contact</div>

        <div onClick={handleSideBarChange} className="navBarBurger"><embed src={whiteBurger} alt="menuBurger"/></div>
        </div>


        {showSideBar?
        <div className="sideBarContainer">
            <div className="sideBarOptionsContainer">
        <div onClick={scrollToDiv} datatype ="aboutMe" className="sideBarOption"> About Me</div>
        <div onClick={scrollToDiv} datatype ="projects" className="sideBarOption"> Projects</div>
        <div  className="sideBarOption"> <a className="sideBarOption" href={resume} target = "_blank" rel = "noreferrer">Resume</a></div>
        <div onClick={scrollToDiv} datatype ="contactMe" className="sideBarOption">Contact</div>
            </div>
        </div>
        :<div></div>
        }
    </div>);
}

export default Header;