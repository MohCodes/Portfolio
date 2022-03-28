import flower from "../resources/flowPic.jpg"



function AboutMe() {
    return (  
    <div id = "aboutMe" className="aboutMeContainer">
        <div className="aboutText">
            <h1 className="aboutMeHeader">About Me </h1>
            <p className="aboutMeText"> Hi! I'm Mohanad but you can call me Mo. I am Front-End Developer based out of Toronto.
                                        I bring the discipline, creativity and analytical rigour of the science of chemistry 
                                        to Front-End Development.
                                        <br></br>
                                        <br></br>
                                        Besides code and chemistry I enjoy: Brazilian Jiu Jitsu,
                                        Fitness, developing new skills and cheesecake
            </p>

        </div>
        <div className="aboutImage"><img className="flowerPic" src={flower} alt ="flower"/></div>
    

    </div>
    );
}

export default AboutMe;