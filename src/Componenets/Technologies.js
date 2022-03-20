function Technologies() {



    const imgSRCs = [<img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt= "javascript" />,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt = "React"/>,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt = "git" />,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" alt = "npm" />,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" alt ="webpack" />,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt = "firebase"/>,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt = "nodeJS"/>,
                    <img className="techImage" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="mongoDB" />

                    ]

const technologies = [  
                    {techName:"HTML",imgSrc:imgSRCs[0]},{techName:"CSS",imgSrc:imgSRCs[1]},
                    {techName:"JavaScript",imgSrc:imgSRCs[2]},{techName:"React",imgSrc:imgSRCs[3]},
                    {techName:"Git",imgSrc:imgSRCs[4]},{techName:"NPM",imgSrc:imgSRCs[5]},
                    {techName:"Webpack",imgSrc:imgSRCs[6]},{techName:"Firebase",imgSrc:imgSRCs[7]},
                    {techName:"NodeJS",imgSrc:imgSRCs[8]},{techName:"MongoDB",imgSrc:imgSRCs[9]}
                    ]

let i =0;

    return (  

        <div>
            <div className="technologiesTitle">Technologies I Use</div>
            <div className="TechnologiesContainer">

            {technologies.map((tech)=>{
                i++

                return(
            
            <div key= {i} className="technologyContainer">
                {tech.imgSrc}
                <div className="techTitle">{tech.techName}</div>
            </div>
                )
            })}


            </div>
        </div>
    );
}

export default Technologies;