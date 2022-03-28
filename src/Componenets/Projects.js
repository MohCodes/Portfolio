import popUpIcon from "../resources/popUpIcon.svg"
import source from "../resources/source.svg"
import shoppingCart from "../resources/shoppingCart.png"
import facebookcloneImage from "../resources/facebookcloneImage.png"




function Projects() {

const projects = [
                {projectName: 'Facebook Clone', projectPicture: facebookcloneImage,projectDescription:"",projectLinks:{github:"https://github.com/MohCodes/facebook-clone",live:"https://mohcodes.github.io/facebook-clone/"}},
                {projectName: 'Shopping Cart', projectPicture: shoppingCart,projectDescription:"",projectLinks:{github:"https://github.com/MohCodes/Shopping-Cart",live:"https://mohcodes.github.io/Shopping-Cart/"}},
                ]

let i = 0;


    return (  
        <div id = "projects" className="projectsContainer">
            <div className="projectsTitle"><h1>My Projects</h1></div>
            <div className ="projectsCardContainer">


            {projects.map((proj)=>{
                i++
                return(
                    <div key ={i} className="projectCardContainer">
                        <img className = "projectPicture"src={proj.projectPicture} alt = {proj.projectName}/>
                        <div className="projectName">{proj.projectName}</div>

                        <div className="projectLinks">
                        <div className ="githubProjectLink projectLinks2">
                            <a  rel="noopener noreferrer" 
                                target="_blank"  
                                href ={proj.projectLinks.github}>
                                <img  src={source} alt="github" />
                            </a>
                        </div>

                        <div className ="liveProjectLink projectLinks2">
                            <a rel="noopener noreferrer" 
                                target="_blank"  
                                href ={proj.projectLinks.live}>
                            <img alt = "liveIcon" src={popUpIcon}/></a>
                        </div>
                        </div>
                    </div>
                    
                )
                
            })}
            

            </div>

        </div>
    );
}

export default Projects;