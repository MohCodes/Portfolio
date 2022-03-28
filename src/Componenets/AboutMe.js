import flower from "../resources/flowPic.jpg"



function AboutMe() {
    return (  
    <div id = "aboutMe" className="aboutMeContainer">
        <div className="aboutText">
            <h1 className="aboutMeHeader">About Me </h1>
            <p className="aboutMeText"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenean quis urna tincidunt sem cursus interdum a eu eros. 
                                        Nulla varius sed erat faucibus hendrerit.
                                        Nullam consequat nulla ante, nec commodo nibh feugiat non. 
                                        Aenean non ullamcorper eros. Donec elit nulla, 
                                        vulputate lacinia lectus ac, ornare auctor neque. Curabitur elementum 
                                        risus nunc, vitae tempor mauris maximus a. 
                                        Vivamus ut lobortis nisi, ut viverra arcu. Integer erat nibh, tempor et 
                                        finibus nec, elementum congue lacus. 
                                        Nulla facilisi. Orci varius natoque penatibus et magnis
                                        dis parturient montes, nascetur ridiculus mus. Sed mole
            </p>
        </div>
        <div className="aboutImage"><img className="flowerPic" src={flower} alt ="flower"/></div>
    

    </div>
    );
}

export default AboutMe;