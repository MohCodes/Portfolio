import popUpIcon from "../resources/popUpIcon.svg"
import source from "../resources/source.svg"




function Projects() {

const projects = [
                {projectName: 'Facebook Clone', projectPicture: "",projectDescription:"",projectLinks:{github:"",live:""}},
                {projectName: 'Shopping Cart', projectPicture: "",projectDescription:"",projectLinks:{github:"",live:""}},
                ]




    return (  
        <div className="projectsContainer">
            <div className="projectsTitle"><h1>My Projects</h1></div>
            <div className ="projectsCardContainer">


            {projects.map((proj)=>{

                return(
                    <div className="projectCardContainer">
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