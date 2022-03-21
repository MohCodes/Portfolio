


function Contact() {


    const formAction = "https://formsubmit.co/moefarts@my.yorku.ca"

    const formOnClick= (e)=>{
        
    }

    return (  
        <div className="contactContainer">
            <div className="contactTitle"> Get In Touch</div>
            <div className="formContainer">
                <form action={formAction} method="POST"  onClick={formOnClick} className="contactForm">
                    <div className="inputContainer">
                        <label htmlFor="nameInput" className="nameInput input"> Name </label>
                        <input className="input nameInput" name="Name" required type="text" id = "nameInput" placeholder="John Smith"></input>
                    </div>

                    <div className="inputContainer">
                        <label htmlFor="emailInput" className="nameInput input"> Email </label>
                        <input className="input emailInput" name="Email" required type="email" id = "emailInput" placeholder="example@example.com"></input>
                    </div>

                    <div className="inputContainer messageInputContainer">
                        <label htmlFor="messageInput" className="messageInputLabel input"> Message </label>
                        <textarea  name="Message" required className=" input messageInput" type="textarea" id = "messageInput" placeholder="Message"></textarea>
                    </div>

                    <button className="submitButton" type="submit"> Submit</button>

                </form>
            </div>

        </div>
    );
}

export default Contact;