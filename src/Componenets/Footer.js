import heart from "../resources/heart.svg"


function Footer() {
    return (  
        <div className="footerContainer">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/mohcodes">
            <div className="github socials">
                
                <img  alt="github" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            
            </div>
            </a>
            <div className="linkedin socials">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="linkedin" />
            </div>
            <div className="Heart socials"><img src={heart} alt="heart"/></div>

        </div>
    );
}

export default Footer;